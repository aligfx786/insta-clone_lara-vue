<script setup>
import { ref, reactive, onMounted } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import Close from "vue-material-design-icons/Close.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import MapMarkerOutline from "vue-material-design-icons/MapMarkerOutline.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import { createToaster } from "@meforma/vue-toaster";

// Get current user and define props/emits
const user = usePage().props.auth.user;
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits(["close"]);

// Initialize form with existing post data
const form = reactive({
    text: props.post.text,
    file: null,
});

// Initialize display states
let isValidFile = ref(true); // Set to true initially since we have existing image
let fileDisplay = ref(props.post.file); // Set initial image
let textarea = ref("");
let error = ref({
    text: null,
    file: null,
});

// Create refs for click handling
const containerRef = ref(null);
const mainContentRef = ref(null);

// Handle backdrop clicks for closing
const handleBackdropClick = (event) => {
    if (event.target === containerRef.value) {
        closeOverlay();
    }
};

const closeOverlay = () => {
    emit("close");
};

// Handle image upload for editing
const getUploadedImage = (e) => {
    form.file = e.target.files[0];
    let extension = form.file.name
        .substring(form.file.name.lastIndexOf(".") + 1)
        .toLowerCase();

    if (["png", "jpg", "jpeg"].includes(extension)) {
        isValidFile.value = true;
        fileDisplay.value = URL.createObjectURL(e.target.files[0]);

        setTimeout(() => {
            document
                .getElementById("TextAreaSection")
                .scrollIntoView({ behavior: "smooth" });
        }, 300);
    } else {
        isValidFile.value = false;
    }
};

// Handle post update
const updatePostFunc = () => {
    error.value.text = null;
    error.value.file = null;

    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append("text", form.text);
    if (form.file) {
        formData.append("file", form.file);
    }
    formData.append("_method", "PUT"); // Laravel requires this for PUT requests

    router.post(`/posts/${props.post.id}`, formData, {
        forceFormData: true,
        preserveScroll: true,
        onError: (errors) => {
            if (errors.text) error.value.text = errors.text;
            if (errors.file) error.value.file = errors.file;
        },
        onSuccess: () => {
            const toaster = createToaster({
                type: "success",
                position: "bottom-right",
                duration: 2000,
                style: {
                    backgroundColor: "#0073d7",
                    color: "#ffffff",
                    border: "1.5px solid #ffffff",
                },
            });
            toaster.show(`Post Updated Successfully!`);
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

                <div class="text-lg font-extrabold">Edit Post</div>

                <button
                    @click="updatePostFunc()"
                    class="text-lg text-blue-500 hover:text-gray-900 font-extrabold"
                >
                    Update
                </button>
            </div>

            <div
                class="w-full md:flex rounded-xl h-[calc(100%-55px)] overflow-auto"
            >
                <div
                    class="flex items-center bg-gray-100 w-full overflow-hidden h-full"
                >
                    <div class="relative w-full h-full">
                        <img
                            :src="fileDisplay"
                            class="min-w-[400px] p-4 mx-auto"
                            alt="Post image"
                        />

                        <!-- Overlay for changing image -->
                        <div class="absolute bottom-4 left-4">
                            <label
                                for="file"
                                class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold cursor-pointer"
                            >
                                Change Image
                            </label>
                            <input
                                type="file"
                                class="hidden"
                                id="file"
                                @input="getUploadedImage($event)"
                            />
                        </div>
                    </div>
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
                        v-if="error.text"
                        class="text-red-500 p-2 font-extrabold"
                    >
                        {{ error.text }}
                    </div>

                    <div class="flex w-full max-h-[200px] bg-white border-b">
                        <textarea
                            ref="textarea"
                            v-model="form.text"
                            placeholder="Write caption..."
                            rows="10"
                            class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-50 focus:ring-0 text-gray-600 text-[18px]"
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
                </div>
            </div>
        </div>
    </div>
</template>
