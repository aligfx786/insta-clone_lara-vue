<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class LikeNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $user;
    public $post;

    /**
     * Create a new notification instance.
     */
    public function __construct($post, $user)
    {
        $this->post = $post;
        $this->user = $user;
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
            'user_id' => $this->user->id,
            'user_name' => $this->user->name,
            'user_avatar' => $this->user->file,
            'type' => 'like',
            'message' => $this->user->name . ' liked your post',
        ];
        // ->line('The introduction to the notification.')
        // ->action('Notification Action', url('/'))
        // ->line('Thank you for using our application!');
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
