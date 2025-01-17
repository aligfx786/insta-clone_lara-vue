<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class CommentNotification extends Notification implements ShouldQueue
{
    use Queueable;
    public $comment;
    public $user;
    public $post;
    /**
     * Create a new notification instance.
     */
    public function __construct($comment, $user, $post)
    {
        $this->comment = $comment;
        $this->user = $user;
        $this->post = $post;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toArray($notifiable)
    {
        return [
            'post_id' => $this->post->id,
            'comment_id' => $this->comment->id,
            'user_avatar' => $this->user->file,
            'user_id' => $this->user->id,
            'user_name' => $this->user->name,
            'type' => 'comment',
            'message' => $this->user->name . ' commented on your post: ' . substr($this->comment->text, 0, 50)
        ];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage($this->toArray($notifiable));
    }
}
