<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import Close from "vue-material-design-icons/Close.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import { createToaster } from "@meforma/vue-toaster";
import EmoticonHappyOutline from "vue-material-design-icons/EmoticonHappyOutline.vue";
import EmojiPicker from "./EmojiPicker.vue";
import { useClickOutside } from "@/composables/useClickOutside";

const user = usePage().props.auth.user;
const emit = defineEmits(["close"]);

let showEmojiPicker = ref(false);
let emojiPickerRef = ref(null);

// Close emoji picker when clicking outside
useClickOutside(emojiPickerRef, () => (showEmojiPicker.value = false));

const form = reactive({
    text: null,
    file: null,
});

let isValidFile = ref(null);
let fileDisplay = ref("");
let textarea = ref("");
let error = ref({
    text: null,
    file: null,
});

// Create refs for both the outer container and the main content
const containerRef = ref(null);
const mainContentRef = ref(null);

// Handler for backdrop clicks (the dark semi-transparent area)
const handleBackdropClick = (event) => {
    // Only close if clicking directly on the backdrop
    if (event.target === containerRef.value) {
        closeOverlay();
    }
};

const closeOverlay = () => {
    form.text = null;
    form.file = null;
    fileDisplay.value = "";
    emit("close");
};

const getUploadedImage = (e) => {
    form.file = e.target.files[0];
    let extension = form.file.name.substring(
        form.file.name.lastIndexOf(".") + 1
    );

    if (extension == "png" || extension == "jpg" || extension == "jpeg") {
        isValidFile.value = true;
    } else {
        isValidFile.value = false;
        return;
    }

    fileDisplay.value = URL.createObjectURL(e.target.files[0]);

    setTimeout(() => {
        document
            .getElementById("TextAreaSection")
            .scrollIntoView({ behavior: "smooth" });
    }, 300);
};

const addEmoji = (emoji) => {
    if (!form.text) {
        form.text = emoji; // Initialize text if empty
    } else {
        form.text += emoji; // Append the emoji to the existing text
    }
    showEmojiPicker.value = false;
};

const createPostFunc = () => {
    error.value.text = null;
    error.value.file = null;

    router.post("/posts", form, {
        forceFormData: true,
        preserveScroll: true,
        onError: (errors) => {
            errors && errors.text ? (error.value.text = errors.text) : "";
            errors && errors.file ? (error.value.file = errors.file) : "";
        },
        onSuccess: () => {
            const toaster = createToaster({
                type: "info",
                style: {
                    backgroundColor: "#2b0071",
                    color: "#fff",
                    border: "1px solid #ffffff",
                },
            });
            toaster.show(`Successfully Posted`);
            closeOverlay();
        },
    });
};
</script>

<template>
    <div
        ref="containerRef"
        class="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
        id="OverlaySection"
        @click="handleBackdropClick"
    >
        <button class="absolute right-3 cursor-pointer" @click="closeOverlay()">
            <Close :size="27" fillColor="#FFFFFF" />
        </button>

        <div
            ref="mainContentRef"
            class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"
            @click.stop
        >
            <div
                class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300"
            >
                <ArrowLeft
                    class="cursor-pointer"
                    :size="30"
                    fillColor="#000000"
                    @click="closeOverlay()"
                />

                <div class="text-lg font-extrabold">New Reel</div>

                <button
                    @click="createPostFunc()"
                    class="text-lg text-blue-500 hover:text-gray-900 font-extrabold"
                >
                    Share
                </button>
            </div>

            <div
                class="w-full md:flex rounded-xl h-[calc(100%-55px)] overflow-auto"
            >
                <div
                    class="flex items-center bg-gray-100 w-full overflow-hidden h-full"
                >
                    <div
                        v-if="!fileDisplay"
                        class="flex flex-col items-center mx-auto"
                    >
                        <label
                            for="file"
                            class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold"
                        >
                            Select From Computer
                        </label>

                        <input
                            type="file"
                            class="hidden"
                            id="file"
                            @input="getUploadedImage($event)"
                        />
                        <div
                            v-if="error && error.file"
                            class="text-red-500 text-center p-2 font-extrabold"
                        >
                            {{ error.file }}
                        </div>

                        <div
                            v-if="!fileDisplay && isValidFile === false"
                            class="text-red-500 text-center p-2 font-extrabold"
                        >
                            File Not Accepted
                        </div>
                    </div>

                    <img
                        v-if="fileDisplay && isValidFile === true"
                        class="min-w-[400px] p-4 mx-auto"
                        :src="fileDisplay"
                        alt=""
                    />
                </div>

                <div id="TextAreaSection" class="max-w-[720px] w-full relative">
                    <div class="flex items-center justify-between p-3">
                        <div class="flex items-center">
                            <img
                                :src="user.file"
                                alt=""
                                class="rounded-full w-[38px] h-[38px]"
                            />

                            <div class="ml-4 text-[15px] font-extrabold">
                                {{ user.name }}
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="error && error.text"
                        class="text-red-500 p-2 font-extrabold"
                    >
                        {{ error.text }}
                    </div>

                    <div class="flex w-full max-h-[200px] bg-white border-b">
                        <div class="relative">
                            <EmoticonHappyOutline
                                class="pl-3 pt-[10px] flex text-center cursor-pointer"
                                :size="30"
                                @click="showEmojiPicker = !showEmojiPicker"
                            />
                            <div
                                v-if="showEmojiPicker"
                                ref="emojiPickerRef"
                                class="absolute left-0 z-50 bg-white shadow-md rounded-lg"
                            >
                                <EmojiPicker @select="addEmoji" />
                            </div>
                        </div>

                        <textarea
                            ref="textarea"
                            v-model="form.text"
                            placeholder="Write caption..."
                            rows="10"
                            class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-20 focus:ring-0 text-gray-600 text-[18px]"
                            name=""
                            id=""
                        ></textarea>
                    </div>

                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text--gray-500">
                            Add Location
                        </div>
                        <MapMarkerOutline :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text--gray-500">
                            Accessibility
                        </div>
                        <ChevronDown :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <div class="text-lg font-extrabold text--gray-500">
                            Advanced Settings
                        </div>
                        <ChevronDown :size="27" />
                    </div>

                    <div class="text-gray-500 mt-3 p-3 text-sm">
                        Your reel will be Shared with your followers in their
                        feeds and can be seen on your profile.It may also
                        apppear in places such as Reels, where anyone can see
                        it.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
