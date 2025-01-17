<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\FileService;
use File;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'text' => 'required',
            'file' => 'nullable|mimes:jpg,jpeg,png'
        ]);

        $post->text = $request->input('text');

        if ($request->hasFile('file')) {
            if (!empty($post->file)) {
                $currentFile = public_path() . $post->file;
                if (file_exists($currentFile)) {
                    unlink($currentFile);
                }
            }
            $post = (new FileService)->updateFile($post, $request, 'post');
        }

        $post->save();
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = new Post;
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png',
            'text' => 'required'
        ]);

        $post = (new FileService)->updateFile($post, $request, 'post');
        $post->user_id = auth()->user()->id;
        $post->text = $request->input('text');
        $post->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post, $id)
    {
        $post = Post::find($id);

        if (!empty($post->file)) {
            $currentFile = public_path() . $post->file;

            if (file_exists($currentFile)) {
                unlink($currentFile);
            }
        }
        $post->forceDelete();
    }
}
