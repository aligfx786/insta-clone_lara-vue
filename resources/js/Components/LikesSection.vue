<script setup>
import { computed, toRef, toRefs } from "vue";
import { usePage } from "@inertiajs/vue3";

import Heart from "vue-material-design-icons/Heart.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import CommentOutline from "vue-material-design-icons/CommentOutline.vue";
import SendOutline from "vue-material-design-icons/SendOutline.vue";
import BookmarkOutline from "vue-material-design-icons/BookmarkOutline.vue";

const props = defineProps({
    post: Object,
    isOverlayOpen: Boolean,
    isShareOverlayOpen: Boolean,
});

const { post } = toRefs(props);

const emit = defineEmits(["like", "openCommentOverlay", "openShareOverlay"]);

const user = usePage().props.auth.user;

const isHeartActiveComputed = computed(() => {
    let isTrue = false;

    for (let i = 0; i < post.value.likes.length; i++) {
        const like = post.value.likes[i];
        if (like.user_id === user.id && like.post_id === post.value.id) {
            isTrue = true;
        }
    }
    return isTrue;
});
</script>

<template>
    <div class="flex z-20 items-center justify-between">
        <div class="flex items-center">
            <button @click="$emit('like', { post, user })" class="-mt-[14px]">
                <HeartOutline
                    v-if="!isHeartActiveComputed"
                    class="pl-3 cursor-pointer text-gray-800 hover:text-gray-600"
                    :size="30"
                />
                <Heart
                    v-else
                    class="pl-3 cursor-pointer"
                    fillColor="#FF0000"
                    :size="30"
                />
            </button>

            <button
                class="pl-3 pt-[10px] mt-1 text-gray-800 hover:text-gray-600 font-extrabold"
                @click="$emit('openCommentOverlay', { post })"
                :disabled="isOverlayOpen"
            >
                <CommentOutline class="" :size="30" />
            </button>

            <button
                class="pl-3 pt-[10px] text-gray-800 hover:text-gray-600"
                @click="$emit('openShareOverlay', { post })"
                :disabled="isShareOverlayOpen"
            >
                <SendOutline :size="30" />
            </button>
        </div>

        <BookmarkOutline
            class="pl-3 pt-[10px] text-gray-800 hover:text-gray-600"
            :size="30"
        />
    </div>
</template>
