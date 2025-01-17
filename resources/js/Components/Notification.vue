<template>
    <div ref="notificationWrapper" class="notification-container">
        <!-- Notification trigger -->
        <div class="notification-trigger relative" ref="triggerRef">
            <div @click="handleNotificationClick" class="cursor-pointer">
                <MenuItem :iconString="iconString" :class="class" />
            </div>
            <div
                v-if="unreadCount > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs px-1"
            >
                {{ unreadCount }}
            </div>
        </div>

        <!-- Notification panel -->
        <div
            v-show="isOpen"
            class="fixed top-1/2 -translate-y-1/2 left-1/3 z-[9999] w-[200px] bg-white border border-gray-200 shadow-lg rounded-md"
            ref="panelRef"
            @mouseleave="startCloseTimer"
        >
            <transition name="slide">
                <div class="flex flex-col h-[400px]">
                    <!-- Panel header -->
                    <div
                        class="flex items-center justify-between p-4 border-b border-gray-200"
                    >
                        <h3 class="text-base font-semibold">Notifications</h3>
                        <button
                            @click="closePanel"
                            class="text-gray-500 hover:text-black text-lg font-bold"
                        >
                            &times;
                        </button>
                    </div>

                    <!-- Scrollable notification content -->
                    <div class="flex-1 overflow-y-auto notification-scroll">
                        <div
                            v-if="notifications.length === 0"
                            class="p-4 text-center text-gray-500"
                        >
                            No notifications
                        </div>

                        <div v-else>
                            <div
                                v-for="notification in notifications"
                                :key="notification.id"
                                class="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                :class="{ 'bg-blue-50': !notification.read_at }"
                                @click="clickNotification"
                            >
                                <div class="flex items-start gap-3">
                                    <div class="flex-1">
                                        <p class="text-sm">
                                            {{ notification.data.message }}
                                        </p>
                                        <span
                                            class="text-xs text-gray-500 mt-1 block"
                                        >
                                            {{
                                                new Date(
                                                    notification.created_at
                                                ).toLocaleString()
                                            }}
                                        </span>
                                    </div>

                                    <div
                                        v-if="!notification.read_at"
                                        class="w-2 h-2 rounded-full bg-blue-500 mt-2"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- Overlay -->
        <div
            v-show="isOpen"
            class="fixed inset-0 bg-black bg-opacity-10 z-[9998]"
            @click="closePanel"
        ></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import MenuItem from "./MenuItem.vue";

const props = defineProps({
    iconString: String,
    class: String,
});

const isOpen = ref(false);
const unreadCount = ref(0);
const notifications = ref([]);
const user = usePage().props.auth.user;

const triggerRef = ref(null);
const panelRef = ref(null);

let closeTimer = null;

// const openPanel = () => {
//     clearTimeout(closeTimer);
//     isOpen.value = true;
// };

const startCloseTimer = () => {
    closeTimer = setTimeout(() => {
        closePanel();
    }, 300);
};

const closePanel = () => {
    isOpen.value = false;
    clearTimeout(closeTimer);
};

const handleNotificationClick = () => {
    isOpen.value = !isOpen.value;
};

const clickNotification = () => {
    router.visit(route("notifications.index"));
};

const fetchNotifications = async () => {
    try {
        const response = await axios.get("/api/notifications");
        notifications.value = response.data.data;
        updateUnreadCount();
    } catch (error) {
        console.error("Error fetching notifications:", error);
    }
};

const updateUnreadCount = () => {
    unreadCount.value = notifications.value.filter((n) => !n.read_at).length;
};

const listenForNotifications = () => {
    window.Echo.private(`App.Models.User.${user.id}`).notification(
        (notification) => {
            notifications.value.unshift(notification);
            unreadCount.value++;
        }
    );
};

onMounted(() => {
    fetchNotifications();
    listenForNotifications();
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closePanel();
    });
});

onUnmounted(() => {
    clearTimeout(closeTimer);
});
</script>

<style scoped>
.notification-container {
    position: relative;
    z-index: 9999;
}

/* Slide-in animation */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.notification-scroll {
    scrollbar-width: thin;
    scrollbar-color: #e5e7eb #f9fafb;
}

.notification-scroll::-webkit-scrollbar {
    width: 8px;
}

.notification-scroll::-webkit-scrollbar-track {
    background: #f9fafb;
}

.notification-scroll::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 4px;
}
</style>
