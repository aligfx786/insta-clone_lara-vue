<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Notifications\LikeNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class LikeController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['post_id' => 'required']);

        DB::beginTransaction();

        try {
            // First check if like already exists to prevent duplicates
            $existingLike = Like::where('user_id', auth()->id())
                ->where('post_id', $request->post_id)
                ->first();

            if ($existingLike) {
                DB::rollBack();
                return back();
            }

            $like = Like::create([
                'user_id' => auth()->id(),
                'post_id' => $request->input('post_id')
            ]);

            $post = Post::with(['user', 'likes', 'comments'])->find($request->input('post_id'));

            if ($post->user->id !== auth()->id()) {
                $post->user->notify(new LikeNotification($post, auth()->user()));
            }

            DB::commit();
            
            // Log successful unlike action
            Log::info('Like removed successfully', [
                'user_id' => auth()->id(),
                'post_id' => $post->id,
                'notification_removed' => true
            ]);

            if (request()->wantsJson()) {
                return response()->json([
                    'message' => 'Like removed successfully',
                    'notification_removed' => true
                ]);
            }

            // For Inertia requests
            return back()->with([
                'success' => 'Like removed successfully'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error creating like',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // $like = Like::find($id);
        // if ($like && $like->user_id === auth()->id()) {
        //     // if (count(collect($like)) > 0) {
        //     $like->forceDelete();
        //     // }
        // }

        // Start a database transaction to ensure data consistency
        DB::beginTransaction();

        try {
            $like = Like::find($id);

            if ($like && $like->user_id === auth()->id()) {
                // Get the post and its owner before deleting the like
                $post = Post::with('user')->find($like->post_id);
                // Delete the like
                $like->delete();

                // Find and delete the corresponding notification
                // We search for notifications created within the last 24 hours
                // This time window prevents deleting old notifications if someone likes/unlikes repeatedly
                $post->user->notifications()
                    ->where('type', 'App\Notifications\LikeNotification')
                    ->where('created_at', '>', now()->subDay())
                    ->where('data->user_id', auth()->id())
                    ->where('data->post_id', $post->id)
                    ->delete();

                DB::commit();
                // Log successful unlike action
                Log::info('Like removed successfully', [
                    'user_id' => auth()->id(),
                    'post_id' => $post->id,
                    'notification_removed' => true
                ]);

                if (request()->wantsJson()) {
                    return response()->json([
                        'message' => 'Like removed successfully',
                        'notification_removed' => true
                    ]);
                }
            }

            // For Inertia requests
            return back()->with([
                'success' => 'Like removed successfully'
            ]);

            // DB::rollBack();
            // return response()->json(['message' => 'Like not found'], 404);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error removing like and notification', [
                'error' => $e->getMessage(),
                'user_id' => auth()->id(),
                'post_id' => $post->id ?? null
            ]);

            if (request()->wantsJson()) {
                return response()->json([
                    'message' => 'Error removing like',
                    'error' => $e->getMessage()
                ], 500);
            }

            // For Inertia requests
            return back()->with([
                'error' => 'Error removing like'
            ]);
        }
    }
}
