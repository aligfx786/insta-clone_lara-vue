<script setup>
import { useClickOutside } from "@/composables/useClickOutside";
import { ref, toRefs } from "vue";

const emit = defineEmits(["close", "deleteSelected", "editSelected"]);
const props = defineProps({ deleteType: String, id: Number });
const { deleteType, id } = toRefs(props);

// Create ref for the options overlay container
const optionsOverlayRef = ref(null);

// Handle click outside for options overlay
useClickOutside(optionsOverlayRef, () => {
    emit("close");
});
</script>

<template>
    <div
        id="ShowPostOptionsOverlay"
        class="fixed flex items-center z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
    >
        <div
            ref="optionsOverlayRef"
            class="max-w-sm w-full mx-auto mt-10 bg-white rounded-xl text-center"
        >
            <!-- Edit options for both Post and Comment -->
            <button
                v-if="deleteType === 'Post' || deleteType === 'Comment'"
                @click="$emit('editSelected', { deleteType, id })"
                class="w-full p-3 hover:bg-gray-100 text-center border-b border-b-gray-300"
            >
                Edit {{ deleteType }}
            </button>

            <button
                @click="$emit('deleteSelected', { deleteType, id })"
                class="font-extrabold w-full text-red-600 p-3 text-lg border-b border-b-gray-300 cursor-pointer"
            >
                Delete {{ deleteType }}
            </button>

            <div class="p-3 text-lg cursor-pointer" @click="$emit('close')">
                Cancel
            </div>
        </div>
    </div>
</template>
