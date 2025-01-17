<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import axios from "axios";
import { Link, usePage } from "@inertiajs/vue3";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import moment from "moment";
import { nextTick } from "vue";

const user = computed(() => usePage().props.auth.user);

const notifications = ref([]);
const loading = ref(true);
const currentPage = ref(1);
const hasMorePages = ref(false);

const notificationContainer = ref(null);
const loadingMore = ref(false);

const fetchNotifications = async (page = 1) => {
    try {
        if (page === 1) {
            loading.value = true;
        }

        const response = await axios.get(`/api/notifications?page=${page}`);

        if (page === 1) {
            notifications.value = response.data.data;
        } else {
            notifications.value = [
                ...notifications.value,
                ...response.data.data,
            ];
        }

        hasMorePages.value = response.data.next_page_url !== null;
        currentPage.value = page;
    } catch (error) {
        console.error("Error fetching notifications:", error);
    } finally {
        if (page === 1) {
            loading.value = false;
        }
    }
};

const markAsRead = async (notification) => {
    if (!notification.read_at) {
        try {
            await axios.post(
                `/api/notifications/${notification.id}/mark-as-read`
            );
            notification.read_at = new Date();
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    }
};

const loadMore = async () => {
    loadingMore.value = true;
    // Store the current scroll position before loading
    const currentScrollPosition = window.scrollY;

    await fetchNotifications(currentPage.value + 1);

    // Use nextTick to ensure DOM is updated
    nextTick(() => {
        // Restore scroll position
        window.scrollTo({
            top: currentScrollPosition,
            behavior: "instant", // Use instant to prevent any scroll animation
        });
        loadingMore.value = false;
    });
};

const getNotificationText = (notification) => {
    switch (notification.data.type) {
        case "like":
            return "liked your post";
        case "comment":
            return notification.data.message;
        default:
            return "interacted with your post";
    }
};

const formatTime = (timestamp) => {
    return moment(timestamp).fromNow();
};

onMounted(() => {
    fetchNotifications();

    window.Echo.private(`App.Models.User.${user.value.id}`).notification(
        (notification) => {
            notifications.value.unshift(notification);
        }
    );
});
</script>

<template>
    <div class="max-w-4xl mx-auto p-4">
        <div class="flex items-center mb-6">
            <Link
                href="/"
                class="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
                <ChevronLeft :size="20" />
            </Link>

            <h1 class="text-2xl font-bold">Notifications</h1>
        </div>

        <div v-if="loading" class="flex justify-center py-8">
            <div
                class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            ></div>
        </div>

        <div
            v-else-if="notifications.length === 0"
            class="text-center py-8 text-gray-500"
        >
            No notifications yet
        </div>

        <div v-else ref="notificationContainer" class="space-y-4">
            <div
                v-for="notification in notifications"
                :key="notification.id"
                @click="markAsRead(notification)"
                class="p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                :class="{
                    'bg-blue-50': !notification.read_at,
                    'bg-white': notification.read_at,
                }"
            >
                <div class="flex items-center gap-3">
                    <img
                        :src="
                            notification.data.user_avatar ||
                            '/default-avatar.png'
                        "
                        class="w-10 h-10 rounded-full object-cover"
                        :alt="notification.data.user_name"
                    />

                    <div class="flex-1">
                        <p class="text-sm">
                            <span class="font-semibold">{{
                                notification.data.user_name
                            }}</span>
                            {{ getNotificationText(notification) }}
                        </p>
                        <p class="text-xs text-gray-500 mt-1">
                            {{ formatTime(notification.created_at) }}
                        </p>
                    </div>
                </div>
            </div>

            <div v-if="loadingMore" class="py-4 flex justify-center">
                <div
                    class="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"
                ></div>
            </div>
        </div>

        <!-- Modify load more button -->
        <div v-if="hasMorePages" class="mt-6 text-center">
            <button
                @click="loadMore"
                :disabled="loadingMore"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {{ loadingMore ? "Loading..." : "Load More" }}
            </button>
        </div>
    </div>
</template>
