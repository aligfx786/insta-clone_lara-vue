<script setup>
import { reactive, toRefs } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";

import MainLayout from "@/Layouts/MainLayout.vue";
import ContentOverlay from "@/Components/ContentOverlay.vue";
import ShowPostOverlay from "@/Components/ShowPostOverlay.vue";

import Cog from "vue-material-design-icons/Cog.vue";
import Grid from "vue-material-design-icons/Grid.vue";
import PlayBoxOutline from "vue-material-design-icons/PlayBoxOutline.vue";
import BookmarkOutline from "vue-material-design-icons/BookmarkOutline.vue";
import AccountBoxOutline from "vue-material-design-icons/AccountBoxOutline.vue";
import { createToaster } from "@meforma/vue-toaster";

// Create a reactive state with computed properties to maintain reactivity
// const state = reactive({
//     post: null,
//     posts: computed(() => props.postsByUser.data)
// });

let data = reactive({ post: null });
const form = reactive({
    file: null,
    preserveState: true, // Add this to preserve state during navigation
    preserveScroll: true, // Add this to preserve scroll position
});

const props = defineProps({ postsByUser: Object, user: Object });
const { postsByUser, user } = toRefs(props);

const addComment = (object) => {
    router.post(
        "/comments",
        {
            post_id: object.post.id,
            user_id: object.user.id,
            comment: object.comment,
        },
        {
            preserveState: true, // Add this
            preserveScroll: true, // Add this
            onFinish: () => updatedPost(object),
            onSuccess: () => {
                const toaster = createToaster({
                    type: "info",
                    position: "bottom-right",
                    duration: 2000,
                    style: {
                        backgroundColor: "#0073d7",
                        color: "#ffffff",
                        border: "1.5px solid #ffffff",
                    },
                });
                toaster.show(`Comment Posted!`);
                setTimeout(toaster.clear, 2000);
            },

            onError: (errors) => {
                console.error("Error while adding comment:", errors); // Log errors
            },
        }
    );
};

const deleteFunc = (object) => {
    let url = "";
    if (object.deleteType === "Post") {
        url = "/posts/" + object.id;
        const toaster = createToaster({
            type: "warning",
            style: {
                backgroundColor:
                    "linear-gradient(90deg, rgba(5,0,89,1) 0%, rgba(92,9,121,1) 40%, rgba(0,212,255,1) 100%)",
                color: "#fff",
                border: "1px solid #3e8e41",
            },
        });
        toaster.show(`Post Deleted!`);
        setTimeout(() => (data.post = null), 100);
    } else {
        url = "/comments/" + object.id;
        const toaster = createToaster({
            type: "warning",
            duration: 2000,
            style: {
                backgroundColor: "#c70000",
                color: "#ffffff",
                border: "1px solid #ffffff",
            },
        });
        toaster.show(`Comment Deleted!`);
    }
    router.delete(url, {
        preserveState: true, // Add this
        preserveScroll: true, // Add this
        onFinish: () => updatedPost(object),
    });
    
};

const updateLike = (object) => {
    let deleteLike = false;
    let id = null;

    for (let i = 0; i < object.post.likes.length; i++) {
        const like = object.post.likes[i];
        if (
            like.user_id === object.user.id &&
            like.post_id === object.post.id
        ) {
            deleteLike = true;
            id = like.id;
        }
    }
    if (deleteLike) {
        router.delete("/likes/" + id, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => updatedPost(object),
        });
    } else {
        router.post(
            "/likes",
            {
                post_id: object.post.id,
            },
            {
                preserveState: true,
                preserveScroll: true,
                onFinish: () => updatedPost(object),
            }
        );
    }
};

const updatedPost = (object) => {
    // TODO: we want know how many posts there are adn then we wanna loop through
    for (let i = 0; i < postsByUser.value.data.length; i++) {
        const post = postsByUser.value.data[i];
        if (post.id === object.post.id) {
            // we wanna reset the currentPost value to that post
            data.post = post;
        }
    }
};

// const updatedPost = (object) => {
//     if (!object.post) return;
//
//     const index = postsByUser.value.data.findIndex(p => p.id === object.post.id);
//     if (index !== -1) {
//         // Update both the list and current post
//         postsByUser.value.data[index] = object.post;
//         data.post = object.post;
//     }
// };

const getUploadedImage = (e) => {
    form.file = e.target.files[0];

    router.post(`/users`, form, {
        preserveState: true,
        preserveScroll: true,
    });
};
</script>

<template>
    <Head :title="`${user.name}`" />

    <MainLayout>
        <div class="pt-2 md:pt-6"></div>

        <div class="max-w-[880px] lg:ml-0 md:ml-[80px] md:pl-20 w-[100vw] px-4">
            <div class="flex items-center md:justify-between">
                <label for="fileUser">
                    <img
                        class="rounded-full object-fit md:w-[200px] w-[100px] cursor-pointer"
                        :src="user.file"
                        alt=""
                    />
                </label>

                <input
                    v-if="user.id === $page.props.auth.user.id"
                    id="fileUser"
                    type="file"
                    class="hidden"
                    @input="getUploadedImage($event)"
                />

                <div class="ml-6 w-full">
                    <div class="flex items-center md:mb-8 mb-5">
                        <div class="md:mr-6 mr-3 rounded-lg text-[22px]">
                            {{ user.name }}
                        </div>
                        <button
                            class="md:block hidden md:mr-6 p-1 px-4 rounded-lg text-[16px] font-extrabold bg-gray-100 hover:bg-gray-200"
                        >
                            Edit Profile
                        </button>
                        <Cog :size="28" class="cursor-pointer" />
                    </div>

                    <button
                        class="md:hidden mr-6 p-1 px-4 max-w-[260px] w-full rounded-lg text-[17px] font-extrabold bg-gray-100 hover:bg-gray-200"
                    >
                        Edit Profile
                    </button>

                    <div class="md:block hidden">
                        <div class="flex items-center text-[18px]">
                            <div class="mr-6">
                                <span class="font-extrabold">{{
                                    postsByUser.data.length
                                }}</span>
                                posts
                            </div>

                            <div class="mr-6">
                                <span class="font-extrabold">123</span>
                                followers
                            </div>

                            <div class="mr-6">
                                <span class="font-extrabold">456</span>
                                following
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:hidden">
            <div
                class="w-full flex items-center justify-around border-t border-t-gray-300 mt-8"
            >
                <div class="text-center p-3">
                    <div class="font-extrabold">
                        {{ postsByUser.data.length }}
                    </div>
                    <div class="text-gray-400 font-semibold -mt-1.5">posts</div>
                </div>
                <div class="text-center p-3">
                    <div class="font-extrabold">43</div>
                    <div class="text-gray-400 font-semibold -mt-1.5">
                        followers
                    </div>
                </div>
                <div class="text-center p-3">
                    <div class="font-extrabold">55</div>
                    <div class="text-gray-400 font-semibold -mt-1.5">
                        following
                    </div>
                </div>
            </div>

            <div
                class="w-full flex items-center justify-between border-t border-t-gray-300"
            >
                <div
                    class="p-3 w-1/4 flex justify-center border-t border-t-gray-900"
                >
                    <Grid
                        :size="28"
                        fillColor="#0095F6"
                        class="cursor-pointer"
                    />
                </div>

                <div class="p-3 w-1/4 flex justify-center">
                    <PlayBoxOutline
                        :size="28"
                        fillColor="#8E8E8E"
                        class="cursor-pointer"
                    />
                </div>

                <div class="p-3 w-1/4 flex justify-center">
                    <BookmarkOutline
                        :size="28"
                        fillColor="#8E8E8E"
                        class="cursor-pointer"
                    />
                </div>

                <div class="p-3 w-1/4 flex justify-center">
                    <AccountBoxOutline
                        :size="28"
                        fillColor="#8E8E8E"
                        class="cursor-pointer"
                    />
                </div>
            </div>
        </div>

        <div
            id="ContentSection"
            class="md:pr-1.5 lg:pl-[100px] md:pl-[90px] sm:pl-6 pl-4 lg:pr-[100px]"
        >
            <div class="md:block mt-10 hidden border-t border-t-gray-300">
                <div
                    class="flex items-center justify-between max-w-[600px] mx-auto font-extrabold text-gray-400 text-[15px]"
                >
                    <div
                        class="p-[17px] w-1/4 flex justify-center items-center border-t border-t-gray-900"
                    >
                        <Grid
                            :size="15"
                            fillColor="#000000"
                            class="cursor-pointer"
                        />

                        <div class="ml-2 -mb-[1px] text-gray-900">POSTS</div>
                    </div>

                    <div
                        class="p-[17px] w-1/4 flex justify-center items-center"
                    >
                        <PlayBoxOutline
                            :size="15"
                            fillColor="#8E8E8E"
                            class="cursor-pointer"
                        />
                        <div class="ml-2 -mb-[1px] text-gray-900">REELS</div>
                    </div>

                    <div
                        class="p-[17px] w-1/4 flex justify-center items-center"
                    >
                        <BookmarkOutline
                            :size="15"
                            fillColor="#8E8E8E"
                            class="cursor-pointer"
                        />
                        <span class="ml-2 -mb-[1px]">SAVED</span>
                    </div>

                    <div
                        class="p-[17px] w-1/4 flex justify-center items-center"
                    >
                        <AccountBoxOutline
                            :size="15"
                            fillColor="#8E8E8E"
                            class="cursor-pointer"
                        />
                        <span class="ml-2 -mb-[1px]">TAGGED</span>
                    </div>
                </div>
            </div>

            <div class="grid md:gap-4 gap-1 grid-cols-3 relative">
                <div
                    v-for="postByUser in postsByUser.data"
                    :key="postByUser.id"
                >
                    <ContentOverlay
                        :postByUser="postByUser"
                        @selectedPost="data.post = $event"
                    />
                </div>
            </div>

            <div class="pb-20"></div>
        </div>
    </MainLayout>

    <ShowPostOverlay
        v-if="data.post"
        :post="data.post"
        @addComment="addComment($event)"
        @updateLike="updateLike($event)"
        @deleteSelected="deleteFunc($event)"
        @closeOverlay="data.post = null"
    />
</template>
