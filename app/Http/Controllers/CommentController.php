<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Notifications\CommentNotification;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'post_id' => 'required',
            'user_id' => 'required',
            'comment' => 'required',
        ]);

        $comment = new Comment;
        $comment->post_id = $request->input('post_id');
        $comment->user_id = $request->input('user_id');
        $comment->text = $request->input('comment');
        $comment->save();

        // Send notification to post owner
        $post = Post::with('user')->find($request->input('post_id'));

        // Only send notification if the post owner is different from the commenter
        if ($post->user->id !== auth()->id()) {
            $post->user->notify(new CommentNotification($comment, auth()->user(), $post));
        }

        // $comment->load(['user']);
        // $post = Post::with(['user', 'comments.user'])->find($request->post_id);
        return back()->with('success', 'Comment updated successfully');

        // return response()->json([
        //     'comment' => $comment->fresh(['user']),
        //     'message' => 'Comment created successfully',
        //     'post' => $post,
        // ]);
    }

    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        if ($comment && $comment->user_id === auth()->id()) {
            $request->validate([
                'comment' => 'required'
            ]);

            $comment->text = $request->input('comment');
            $comment->save();

            // $post = Post::with(['user', 'comments.user'])->find($comment->post_id);

            // return response()->json([
            //     'post' => $post,
            //     'comment' => $comment->fresh(['user']),
            //     'message' => 'Comment updated successfully'
            // ]);
            // Load the user relationship and return
            return back()->with('success', 'Comment updated successfully');
        }
        // return back()->with('error', 'Failed to update comment');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $comment = Comment::find($id);
        if ($comment && $comment->user_id === auth()->id()) {
            $comment->forceDelete();
            // return response()->json(['message' => 'Comment deleted successfully']);
        }
        // return response()->json(['message' => 'Comment not found'], 404);
    }
}
