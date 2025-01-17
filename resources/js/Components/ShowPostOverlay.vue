<script setup>
import { ref, toRefs } from "vue";
import { router, usePage } from "@inertiajs/vue3";

import LikesSection from "@/Components/LikesSection.vue";
import ShowPostOptionsOverlay from "@/Components/ShowPostOptionsOverlay.vue";

import Close from "vue-material-design-icons/Close.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import EmoticonHappyOutline from "vue-material-design-icons/EmoticonHappyOutline.vue";
import EmojiPicker from "./EmojiPicker.vue";
import { useClickOutside } from "@/composables/useClickOutside";
import SharePostOverlay from "./SharePostOverlay.vue";
import EditPostOverlay from "./EditPostOverlay.vue";
import { createToaster } from "@meforma/vue-toaster";

let comment = ref("");
let deleteType = ref(null);
let id = ref(null);
let textarea = ref(null); // Declare the textarea reference
let showEmojiPicker = ref(false);
const user = usePage().props.auth.user;

// Track share post overlay state
let shareOverlayOpen = ref(false);
// Add these new refs
let editOverlayOpen = ref(false);
// Just keep track of which comment is being edited
const editingCommentId = ref(null);
const editedText = ref("");

const overlayContent = ref(null);
const optionsOverlayRef = ref(null);
const shareOverlayRef = ref(null);
const editOverlayRef = ref(null);

// Use the enhanced click outside handler with exclude refs
useClickOutside(
    overlayContent,
    () => {
        // Only close if no other overlays are open
        if (
            !deleteType.value &&
            !shareOverlayOpen.value &&
            !editOverlayOpen.value
        ) {
            emit("closeOverlay");
        }
    },
    [optionsOverlayRef, shareOverlayRef, editOverlayRef] // Exclude these elements from triggering close
);

const props = defineProps(["post"]);
const { post } = toRefs(props);

const emit = defineEmits([
    "closeOverlay",
    "addComment",
    "updateLike",
    "deleteSelected",
    "openShareOverlay",
    "editSelected", // Add this
]);

const textareaInput = (e) => {
    textarea.value.style.height = "auto";
    textarea.value.style.height = `${e.target.scrollHeight}px`;
};

const addEmoji = (emoji) => {
    comment.value += emoji;
    showEmojiPicker.value = false;
};

// Handle delete selection
const handleDeleteSelected = (event) => {
    emit("deleteSelected", {
        deleteType: event.deleteType,
        id: event.id,
        post: post.value,
    });
    deleteType.value = null;
    id.value = null;
};

// Handle close options overlay
const handleCloseOptions = () => {
    deleteType.value = null;
    id.value = null;
    editingCommentId.value = null;
};

const handleCommentOptions = (comment) => {
    deleteType.value = "Comment";
    id.value = comment.id;
};

const startEditingComment = (comment) => {
    editingCommentId.value = comment.id;
    editedText.value = comment.text;
    // Close the options overlay by resetting deleteType and id
    deleteType.value = null;
    id.value = null;
};

const updateComment = () => {
    if (!editingCommentId.value) return;

    router.put(
        `/comments/${editingCommentId.value}`,
        { comment: editedText.value },
        {
            preserveScroll: true,
            onSuccess: () => {
                // Find and update the comment directly in the post's comments array
                const commentIndex = props.post.comments.findIndex(
                    (c) => c.id === editingCommentId.value
                );

                if (commentIndex !== -1) {
                    // Update just the text field
                    props.post.comments[commentIndex].text = editedText.value;
                }

                // Emit the update with the modified post
                // emit("updateComment", { post: props.post });

                // Show success message
                const toaster = createToaster({
                    type: "success",
                    position: "bottom-right",
                    duration: 2000,
                });
                toaster.show("Comment updated successfully!");

                // Reset editing state
                editingCommentId.value = null;
                editedText.value = "";
            },
            onError: (errors) => {
                const toaster = createToaster({
                    type: "error",
                    position: "bottom-right",
                    duration: 3000,
                });
                toaster.show(errors.message || "Failed to update comment");
            },
        }
    );
};

const cancelEdit = () => {
    editingCommentId.value = null;
    editedText.value = "";
};
</script>

<template>
    <div
        id="OverlaySection"
        class="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
    >
        <button class="absolute right-3" @click="$emit('closeOverlay')">
            <Close :size="27" fillColor="#FFFFFF" />
        </button>

        <div
            ref="overlayContent"
            class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"
        >
            <div class="w-full md:flex h-full overflow-auto rounded-xl">
                <div class="flex items-center bg-black w-full">
                    <img
                        class="rounded-xl min-w-[400px] p-4 mx-auto"
                        :src="post.file"
                    />
                </div>

                <div class="md:max-w-[500px] w-full relative">
                    <div class="flex items-center justify-between p-3 border-b">
                        <div class="flex items-center">
                            <img
                                class="rounded-full w-[38px] h-[38px]"
                                :src="post.user.file"
                            />

                            <div class="ml-4 font-extrabold text-[15px]">
                                {{ post.user.name }}
                            </div>

                            <div
                                class="flex items-center text-[15px] text-gray-500"
                            >
                                <span class="-mt-5 ml-2 mr-[5px] text-[35px]"
                                    >.</span
                                >
                                <div>{{ post.created_at }}</div>
                            </div>
                        </div>

                        <button
                            v-if="user.id === post.user.id"
                            @click="
                                deleteType = 'Post';
                                id = post.id;
                            "
                        >
                            <DotsHorizontal class="cursor-pointer" :size="27" />
                        </button>
                    </div>

                    <div class="overflow-y-auto h-[calc(100%-170px)]">
                        <div class="flex items-center justify-between p-3">
                            <div class="flex items-center relative">
                                <img
                                    class="absolute -top-1 rounded-full w-[38px] h-[38px]"
                                    :src="post.user.file"
                                />
                                <div class="ml-14">
                                    <span
                                        class="font-extrabold text-[15px] mr-2"
                                    >
                                        {{ post.user.name }}
                                    </span>
                                    <span class="text-[15px] text-gray-900">
                                        {{ post.text }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- In your comments loop -->
                        <div
                            v-for="comment in post.comments"
                            :key="comment.id"
                            class="p-3"
                        >
                            <!-- Comment header -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <img
                                        class="rounded-full w-[38px] h-[38px]"
                                        :src="comment.user.file"
                                    />
                                    <div
                                        class="ml-4 font-extrabold text-[15px]"
                                    >
                                        {{ comment.user.name }}
                                    </div>
                                </div>

                                <!-- Edit/Options button -->
                                <DotsHorizontal
                                    v-if="user.id === comment.user.id"
                                    class="cursor-pointer"
                                    :size="27"
                                    @click="handleCommentOptions(comment)"
                                />
                            </div>

                            <!-- Edit form or comment text -->
                            <div
                                v-if="editingCommentId === comment.id"
                                class="pl-[55px] mt-2"
                            >
                                <textarea
                                    v-model="editedText"
                                    class="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-blue-500"
                                    rows="2"
                                ></textarea>
                                <div class="flex justify-end gap-2 mt-2">
                                    <button
                                        @click="cancelEdit"
                                        class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        @click="updateComment"
                                        class="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div v-else class="text-[13px] pl-[55px]">
                                {{ comment.text }}
                            </div>
                        </div>

                        <div class="pb-16 md:hidden"></div>
                    </div>

                    <LikesSection
                        v-if="post"
                        :post="post"
                        :isOverlayOpen="true"
                        @like="$emit('updateLike', $event)"
                        @openShareOverlay="shareOverlayOpen = true"
                        class="px-2 border-t mb-2"
                    />

                    <div
                        class="absolute flex border bottom-0 w-full max-h-[200px] bg-white overflow-visible"
                    >
                        <div class="relative">
                            <EmoticonHappyOutline
                                class="pl-3 pt-[10px] flex text-center cursor-pointer"
                                :size="30"
                                @click="showEmojiPicker = !showEmojiPicker"
                            />
                            <div
                                v-if="showEmojiPicker"
                                class="absolute bottom-12 left-0 z-50"
                            >
                                <EmojiPicker @select="addEmoji" />
                            </div>
                        </div>

                        <textarea
                            ref="textarea"
                            :oninput="textareaInput"
                            v-model="comment"
                            placeholder="Add a comment..."
                            rows="1"
                            class="w-full border-0 mt-2 mb-2 text-sm z-40 focus:ring-0 text-gray-600 text-[18px]"
                        ></textarea>

                        <button
                            v-if="comment"
                            class="text-blue-600 font-extrabold pr-4"
                            @click="
                                $emit('addComment', { post, user, comment });
                                comment = '';
                            "
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add EditPostOverlay to your template -->
    <EditPostOverlay
        v-if="editOverlayOpen"
        ref="editOverlayRef"
        :post="post"
        @close="editOverlayOpen = false"
    />
    <ShowPostOptionsOverlay
        v-if="deleteType"
        :deleteType="deleteType"
        :id="id"
        @deleteSelected="handleDeleteSelected"
        @close="handleCloseOptions"
        @editSelected="
            deleteType === 'Comment'
                ? startEditingComment(post.comments.find((c) => c.id === id))
                : $emit('editSelected')
        "
        class="z-60"
    />

    <!-- Add SharePostOverlay -->
    <SharePostOverlay
        v-if="shareOverlayOpen"
        :post="post"
        :show="shareOverlayOpen"
        @close="shareOverlayOpen = false"
    />
</template>
