<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

import Close from "vue-material-design-icons/Close.vue";
import ContentCopy from "vue-material-design-icons/ContentCopy.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Twitter from "vue-material-design-icons/Twitter.vue";
import Whatsapp from "vue-material-design-icons/Whatsapp.vue";
import FacebookMessenger from "vue-material-design-icons/FacebookMessenger.vue";
import { useClickOutside } from "@/composables/useClickOutside";

const props = defineProps({
    post: Object,
    show: Boolean,
});

const emit = defineEmits(["close"]);
const copyLinkMessage = ref("");

const overlayContent = ref(null); // Reference to the overlay content
useClickOutside(overlayContent, () => {
    emit("close");
});

const shareOptions = [
    {
        name: "Copy Link",
        icon: ContentCopy,
        action: async () => {
            try {
                const postUrl = `${window.location.origin}/posts/${props.post.id}`;
                await navigator.clipboard.writeText(postUrl);
                copyLinkMessage.value = "Link copied!";
                setTimeout(() => {
                    copyLinkMessage.value = "";
                }, 5000);
            } catch (err) {
                console.error("Failed to copy link:", err);
            }
        },
    },
    {
        name: "Share to Facebook",
        icon: Facebook,
        action: () => {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.origin + "/posts/" + props.post.id
            )}`;
            window.open(url, "_blank");
        },
    },
    {
        name: "Share to Messenger",
        icon: FacebookMessenger,
        action: () => {
            const url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
                window.location.origin + "/posts/" + props.post.id
            )}&app_id=YOUR_FB_APP_ID`;
            window.open(url, "_blank");
        },
    },
    {
        name: "Share to Twitter",
        icon: Twitter,
        action: () => {
            const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.origin + "/posts/" + props.post.id
            )}`;
            window.open(url, "_blank");
        },
    },
    {
        name: "Share to WhatsApp",
        icon: Whatsapp,
        action: () => {
            const url = `https://wa.me/?text=${encodeURIComponent(
                window.location.origin + "/posts/" + props.post.id
            )}`;
            window.open(url, "_blank");
        },
    },
];
</script>

<template>
    <div
        v-if="show"
         id="SharePostOverlay"
        class="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
    >
        <div
            ref="overlayContent"
            class="bg-white rounded-xl shadow-lg w-full max-w-md mx-4"
        >
            <!-- Header -->
            <div
                class="border-b border-gray-200 px-4 py-3 flex items-center justify-between"
            >
                <h3 class="text-xl font-semibold">Share Post</h3>
                <button
                    @click="$emit('close')"
                    class="text-gray-500 hover:text-gray-700"
                >
                    <Close :size="24" />
                </button>
            </div>

            <!-- Share Options -->
            <div class="p-4">
                <div
                    v-if="copyLinkMessage"
                    class="mb-4 text-center text-green-600"
                >
                    {{ copyLinkMessage }}
                </div>

                <div class="space-y-4">
                    <button
                        v-for="option in shareOptions"
                        :key="option.name"
                        @click="option.action"
                        class="w-full flex items-center px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <component
                            :is="option.icon"
                            :size="24"
                            class="text-gray-700"
                        />
                        <span class="ml-4 text-gray-800">{{
                            option.name
                        }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
