<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    // NotificationController.php
    public function page()
    {
        return Inertia::render('NotificationsPage', [
            'notifications' => auth()->user()->notifications()->paginate(20)
        ]);
    }

    public function index()
    {
        return auth()->user()
            ->notifications()
            ->orderBy('created_at', 'desc')
            ->paginate(10);
    }
    
    public function unreadCount()
    {
        $count = auth()->user()
            ->unreadNotifications()
            ->count();

        return response()->json(['count' => $count]);
    }

    public function markAsRead($id)
    {
        $notification = auth()->user()
            ->notifications()
            ->findOrFail($id);

        if ($notification) {
            $notification->markAsRead();
        }

        return response()->json(['message' => 'Marked as read']);
    }
}
