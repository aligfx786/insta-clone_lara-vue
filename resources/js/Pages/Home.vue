<script setup>
import { ref, onMounted, toRefs, computed } from "vue";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";

import LikesSection from "@/Components/LikesSection.vue";
import ShowPostOverlay from "@/Components/ShowPostOverlay.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import ShowPostOptionsOverlay from "@/Components/ShowPostOptionsOverlay.vue";
import SharePostOverlay from "@/Components/SharePostOverlay.vue";
import { createToaster } from "@meforma/vue-toaster";
import EditPostOverlay from "@/Components/EditPostOverlay.vue";

const user = usePage().props.auth.user;

let wWidth = ref(window.innerWidth);
let currentSlide = ref(0);

let shareOverlayOpen = ref(false);

let currentPost = ref(null);
let openOverlay = ref(false);
// Add these new refs
let editOverlayOpen = ref(false);

let deleteType = ref(null);
let id = ref(null);

const props = defineProps({ posts: Object, allUsers: Object });
const { posts, allUsers } = toRefs(props);

onMounted(() => {
    window.addEventListener("resize", () => {
        wWidth.value = window.innerWidth;
    });
});

const addComment = (object) => {
    router.post(
        "/comments",
        {
            post_id: object.post.id,
            user_id: object.user.id,
            comment: object.comment,
        },
        {
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
            onFinish: () => updatedPost(object),
        });
    } else {
        router.post(
            "/likes",
            {
                post_id: object.post.id,
            },
            {
                onFinish: () => updatedPost(object),
            }
        );
    }
};

const updatedPost = (object) => {
    // TODO: we want know how many posts there are and then we wanna loop through
    for (let i = 0; i < posts.value.data.length; i++) {
        const post = posts.value.data[i];
        if (post.id === object.post.id) {
            // we wanna reset the currentPost value to that post
            currentPost.value = post;
        }
    }
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
        setTimeout(toaster.clear, 2000);
    }

    router.delete(url, {
        onFinish: () => updatedPost(object),
    });

    if (object.deleteType === "Post") {
        openOverlay.value = false;
    }

    deleteType.value = null;
    id.value = null;
};

// // Add to your existing script setup
// const openEditOverlay = (post) => {
//     currentPost.value = post;
//     deleteType.value = null;
//     id.value = null;
//     editOverlayOpen.value = true;
// };

// Computed property for items to show
const getItemsToShow = computed(() => {
    if (wWidth.value < 320) return 4;
    if (wWidth.value < 415) return 4;
    if (wWidth.value < 768) return 6;
    return 8;
});

// Computed property for items to scroll
const getItemsToScroll = computed(() => {
    return wWidth.value < 415 ? 2 : 4;
});
</script>

<template>
    <Head title="Instagram" />

    <MainLayout>
        <!-- {{ users-->
        <div class="mx-auto lg:pl-0 md:pl-[80px] pl-0">
            <Carousel
                v-model="currentSlide"
                class="carousel-container max-w-[700px] mx-auto px-2 sm:px-4"
                :items-to-show="getItemsToShow"
                :items-to-scroll="getItemsToScroll"
                :wrap-around="true"
                :transition="500"
                snapAlign="start"
                :speed="500"
                :touchDrag="true"
                easing="ease"
                :pauseAutoplayOnHover="true"
                :navigationEnabled="true"
                :navigationClickTargetSize="20"
            >
                <Slide v-for="slide in allUsers" :key="slide">
                    <Link
                        :href="route('users.show', { id: slide.id })"
                        class="relative mx-auto text-center mt-4 px-1 sm:px-2 cursor-pointer user-slide-container"
                    >
                        <!-- Profile picture container with gradient border -->
                        <div class="flex flex-col items-center">
                            <div
                                class="absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay"
                            >
                                <div
                                    class="rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white"
                                />
                            </div>

                            <!-- Profile picture -->
                            <img
                                class="rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]"
                                :src="slide.file"
                                :alt="slide.name"
                            />

                            <!-- Username -->
                            <div
                                class="text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden"
                            >
                                {{ slide.name }}
                            </div>
                        </div>
                    </Link>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <div
                id="Posts"
                class="px-4 max-w-[600px] mx-auto mt-10"
                v-for="post in posts.data"
                :key="post"
            >
                <div class="flex items-center justify-between py-2">
                    <div class="flex items-center">
                        <Link
                            :href="route('users.show', { id: post.user.id })"
                            class="flex items-center"
                        >
                            <img
                                class="rounded-full w-[38px] h-[38px]"
                                :src="post.user.file"
                            />

                            <div class="ml-4 font-extrabold text-[15px]">
                                <!-- Name Here -->
                                {{ post.user.name }}
                            </div>
                        </Link>

                        <div
                            class="flex items-center text-[15px] text-gray-500"
                        >
                            <span class="-mt-5 ml-2 mr-[5px] text-[35px]">
                                .
                            </span>
                            <div>{{ post.created_at }}</div>
                        </div>
                    </div>

                    <DotsHorizontal
                        v-if="user.id === post.user.id"
                        class="cursor-pointer"
                        :size="27"
                        @click="
                            deleteType = 'Post';
                            id = post.id;
                            currentPost = post;
                        "
                    />
                </div>

                <div
                    class="bg-black rounded-lg w-full min-h-[400px] flex items-center"
                >
                    <img :src="post.file" class="mx-auto w-full" alt="" />
                </div>

                <LikesSection
                    :post="post"
                    :isOverlayOpen="openOverlay"
                    :isShareOverlayOpen="shareOverlayOpen"
                    @like="($event) => updateLike($event)"
                    @openCommentOverlay="
                        ($event) => {
                            currentPost = $event.post;
                            openOverlay = true;
                        }
                    "
                    @openShareOverlay="
                        ($event) => {
                            currentPost = $event.post;
                            shareOverlayOpen = true;
                        }
                    "
                />

                <div class="text-black font-extrabold py-1">
                    {{ post.likes.length }} likes
                </div>

                <div>
                    <span class="text-black font-extrabold">{{
                        post.user.name
                    }}</span>

                    {{ post.text }}
                </div>

                <button
                    @click="
                        ($event) => {
                            currentPost = post;
                            openOverlay = true;
                        }
                    "
                    class="text-gray-500 font-extrabold py-1"
                >
                    View All {{ post.comments.length }} comments
                </button>
            </div>

            <div class="pb-20"></div>
        </div>
    </MainLayout>

    <!-- Add EditPostOverlay to your template -->
    <EditPostOverlay
        v-if="editOverlayOpen"
        :post="currentPost"
        @close="editOverlayOpen = false"
    />

    <ShowPostOverlay
        v-if="openOverlay"
        :post="currentPost"
        @addComment="($event) => addComment($event)"
        @updateLike="($event) => updateLike($event)"
        @deleteSelected="
            ($event) => {
                deleteFunc($event);
            }
        "
        @editSelected="
            () => {
                editOverlayOpen = true;
                openOverlay = false; // Close the post overlay when opening edit
            }
        "
        @closeOverlay="openOverlay = false"
    />

    <ShowPostOptionsOverlay
        v-if="deleteType"
        :deleteType="deleteType"
        :id="id"
        @deleteSelected="
            deleteFunc({
                deleteType: $event.deleteType,
                id: $event.id,
                post: currentPost,
            })
        "
        @editSelected="
            editOverlayOpen = true;
            deleteType = null;
            id = null;
        "
        @close="
            deleteType = null;
            id = null;
        "
    />

    <!--
   @openShareOverlay="
            ($event) => {
                currentPost = $event.post;
                openOverlay = false;  // Close the post overlay first
                shareOverlayOpen = true;  // Then open the share overlay
            }
        "    
-->
    <!-- Add SharePostOverlay -->
    <SharePostOverlay
        v-if="shareOverlayOpen"
        :post="currentPost"
        :show="shareOverlayOpen"
        @close="shareOverlayOpen = false"
    />
</template>

<style scoped>
.carousel-container,
.user-slide-container {
    position: relative;
    z-index: 10;
}

.user-slide-overlay {
    position: absolute;
    z-index: -1;
}

.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
    color: rgb(255, 0, 0);
    background-color: rgb(255, 255, 255);
    border-radius: 100%;
    margin: 0 20px;
}

/* Add responsive margins for very small screens */
@media (max-width: 415px) {
    .carousel__prev,
    .carousel__next {
        margin: 0 10px;
    }
}
</style>
