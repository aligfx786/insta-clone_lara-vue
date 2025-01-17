<script setup>
import { ref } from "vue";

const emits = defineEmits(["select"]);

// Common emojis array
const emojis = [
    "😀",
    "😂",
    "🥰",
    "😍",
    "😎",
    "😊",
    "👍",
    "❤️",
    "🔥",
    "✨",
    "⭐",
    "💯",
    "🎉",
    "🙌",
    "👏",
    "💪",
    "🤝",
    "🌟",
];
</script>

<template>
    <div class="bg-white rounded-lg shadow-lg p-2 w-[200px]">
        <div class="grid grid-cols-6 gap-1">
            <button
                v-for="emoji in emojis"
                :key="emoji"
                @click="$emit('select', emoji)"
                class="p-1 hover:bg-gray-100 rounded"
            >
                {{ emoji }}
            </button>
        </div>
    </div>
</template>
