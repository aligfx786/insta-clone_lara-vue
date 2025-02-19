import { ref, toRefs, onMounted, computed, unref, withCtx, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { usePage, Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1, D as DotsHorizontal, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$6 } from "./ShowPostOverlay-BFcXMyHu.js";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { createToaster } from "@meforma/vue-toaster";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ChevronLeft-DWc7GCM_.js";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: { posts: Object, allUsers: Object },
  setup(__props) {
    const user = usePage().props.auth.user;
    let wWidth = ref(window.innerWidth);
    let currentSlide = ref(0);
    let shareOverlayOpen = ref(false);
    let currentPost = ref(null);
    let openOverlay = ref(false);
    let editOverlayOpen = ref(false);
    let deleteType = ref(null);
    let id = ref(null);
    const props = __props;
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
          comment: object.comment
        },
        {
          onFinish: () => updatedPost(object),
          onSuccess: () => {
            const toaster = createToaster({
              type: "info",
              position: "bottom-right",
              duration: 2e3,
              style: {
                backgroundColor: "#0073d7",
                color: "#ffffff",
                border: "1.5px solid #ffffff"
              }
            });
            toaster.show(`Comment Posted!`);
            setTimeout(toaster.clear, 2e3);
          },
          onError: (errors) => {
            console.error("Error while adding comment:", errors);
          }
        }
      );
    };
    const updateLike = (object) => {
      let deleteLike = false;
      let id2 = null;
      for (let i = 0; i < object.post.likes.length; i++) {
        const like = object.post.likes[i];
        if (like.user_id === object.user.id && like.post_id === object.post.id) {
          deleteLike = true;
          id2 = like.id;
        }
      }
      if (deleteLike) {
        router.delete("/likes/" + id2, {
          onFinish: () => updatedPost(object)
        });
      } else {
        router.post(
          "/likes",
          {
            post_id: object.post.id
          },
          {
            onFinish: () => updatedPost(object)
          }
        );
      }
    };
    const updatedPost = (object) => {
      for (let i = 0; i < posts.value.data.length; i++) {
        const post = posts.value.data[i];
        if (post.id === object.post.id) {
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
            backgroundColor: "linear-gradient(90deg, rgba(5,0,89,1) 0%, rgba(92,9,121,1) 40%, rgba(0,212,255,1) 100%)",
            color: "#fff",
            border: "1px solid #3e8e41"
          }
        });
        toaster.show(`Post Deleted!`);
      } else {
        url = "/comments/" + object.id;
        const toaster = createToaster({
          type: "warning",
          duration: 2e3,
          style: {
            backgroundColor: "#c70000",
            color: "#ffffff",
            border: "1px solid #ffffff"
          }
        });
        toaster.show(`Comment Deleted!`);
        setTimeout(toaster.clear, 2e3);
      }
      router.delete(url, {
        onFinish: () => updatedPost(object)
      });
      if (object.deleteType === "Post") {
        openOverlay.value = false;
      }
      deleteType.value = null;
      id.value = null;
    };
    const getItemsToShow = computed(() => {
      if (wWidth.value < 320) return 4;
      if (wWidth.value < 415) return 4;
      if (wWidth.value < 768) return 6;
      return 8;
    });
    const getItemsToScroll = computed(() => {
      return wWidth.value < 415 ? 2 : 4;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Instagram" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto lg:pl-0 md:pl-[80px] pl-0" data-v-fd285cd9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Carousel), {
              modelValue: unref(currentSlide),
              "onUpdate:modelValue": ($event) => isRef(currentSlide) ? currentSlide.value = $event : currentSlide = $event,
              class: "carousel-container max-w-[700px] mx-auto px-2 sm:px-4",
              "items-to-show": getItemsToShow.value,
              "items-to-scroll": getItemsToScroll.value,
              "wrap-around": true,
              transition: 500,
              snapAlign: "start",
              speed: 500,
              touchDrag: true,
              easing: "ease",
              pauseAutoplayOnHover: true,
              navigationEnabled: true,
              navigationClickTargetSize: 20
            }, {
              addons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Navigation), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Navigation))
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(allUsers), (slide) => {
                    _push3(ssrRenderComponent(unref(Slide), { key: slide }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("users.show", { id: slide.id }),
                            class: "relative mx-auto text-center mt-4 px-1 sm:px-2 cursor-pointer user-slide-container"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex flex-col items-center" data-v-fd285cd9${_scopeId4}><div class="absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay" data-v-fd285cd9${_scopeId4}><div class="rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white" data-v-fd285cd9${_scopeId4}></div></div><img class="rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]"${ssrRenderAttr("src", slide.file)}${ssrRenderAttr("alt", slide.name)} data-v-fd285cd9${_scopeId4}><div class="text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden" data-v-fd285cd9${_scopeId4}>${ssrInterpolate(slide.name)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex flex-col items-center" }, [
                                    createVNode("div", { class: "absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay" }, [
                                      createVNode("div", { class: "rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white" })
                                    ]),
                                    createVNode("img", {
                                      class: "rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]",
                                      src: slide.file,
                                      alt: slide.name
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", { class: "text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden" }, toDisplayString(slide.name), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Link), {
                              href: _ctx.route("users.show", { id: slide.id }),
                              class: "relative mx-auto text-center mt-4 px-1 sm:px-2 cursor-pointer user-slide-container"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  createVNode("div", { class: "absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay" }, [
                                    createVNode("div", { class: "rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white" })
                                  ]),
                                  createVNode("img", {
                                    class: "rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]",
                                    src: slide.file,
                                    alt: slide.name
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", { class: "text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden" }, toDisplayString(slide.name), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allUsers), (slide) => {
                      return openBlock(), createBlock(unref(Slide), { key: slide }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: _ctx.route("users.show", { id: slide.id }),
                            class: "relative mx-auto text-center mt-4 px-1 sm:px-2 cursor-pointer user-slide-container"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                createVNode("div", { class: "absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay" }, [
                                  createVNode("div", { class: "rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white" })
                                ]),
                                createVNode("img", {
                                  class: "rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]",
                                  src: slide.file,
                                  alt: slide.name
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", { class: "text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden" }, toDisplayString(slide.name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(posts).data, (post) => {
              _push2(`<div id="Posts" class="px-4 max-w-[600px] mx-auto mt-10" data-v-fd285cd9${_scopeId}><div class="flex items-center justify-between py-2" data-v-fd285cd9${_scopeId}><div class="flex items-center" data-v-fd285cd9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("users.show", { id: post.user.id }),
                class: "flex items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="rounded-full w-[38px] h-[38px]"${ssrRenderAttr("src", post.user.file)} data-v-fd285cd9${_scopeId2}><div class="ml-4 font-extrabold text-[15px]" data-v-fd285cd9${_scopeId2}>${ssrInterpolate(post.user.name)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "rounded-full w-[38px] h-[38px]",
                        src: post.user.file
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "ml-4 font-extrabold text-[15px]" }, toDisplayString(post.user.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex items-center text-[15px] text-gray-500" data-v-fd285cd9${_scopeId}><span class="-mt-5 ml-2 mr-[5px] text-[35px]" data-v-fd285cd9${_scopeId}> . </span><div data-v-fd285cd9${_scopeId}>${ssrInterpolate(post.created_at)}</div></div></div>`);
              if (unref(user).id === post.user.id) {
                _push2(ssrRenderComponent(DotsHorizontal, {
                  class: "cursor-pointer",
                  size: 27,
                  onClick: ($event) => {
                    isRef(deleteType) ? deleteType.value = "Post" : deleteType = "Post";
                    isRef(id) ? id.value = post.id : id = post.id;
                    isRef(currentPost) ? currentPost.value = post : currentPost = post;
                  }
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="bg-black rounded-lg w-full min-h-[400px] flex items-center" data-v-fd285cd9${_scopeId}><img${ssrRenderAttr("src", post.file)} class="mx-auto w-full" alt="" data-v-fd285cd9${_scopeId}></div>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                post,
                isOverlayOpen: unref(openOverlay),
                isShareOverlayOpen: unref(shareOverlayOpen),
                onLike: ($event) => updateLike($event),
                onOpenCommentOverlay: ($event) => {
                  isRef(currentPost) ? currentPost.value = $event.post : currentPost = $event.post;
                  isRef(openOverlay) ? openOverlay.value = true : openOverlay = true;
                },
                onOpenShareOverlay: ($event) => {
                  isRef(currentPost) ? currentPost.value = $event.post : currentPost = $event.post;
                  isRef(shareOverlayOpen) ? shareOverlayOpen.value = true : shareOverlayOpen = true;
                }
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-black font-extrabold py-1" data-v-fd285cd9${_scopeId}>${ssrInterpolate(post.likes.length)} likes </div><div data-v-fd285cd9${_scopeId}><span class="text-black font-extrabold" data-v-fd285cd9${_scopeId}>${ssrInterpolate(post.user.name)}</span> ${ssrInterpolate(post.text)}</div><button class="text-gray-500 font-extrabold py-1" data-v-fd285cd9${_scopeId}> View All ${ssrInterpolate(post.comments.length)} comments </button></div>`);
            });
            _push2(`<!--]--><div class="pb-20" data-v-fd285cd9${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto lg:pl-0 md:pl-[80px] pl-0" }, [
                createVNode(unref(Carousel), {
                  modelValue: unref(currentSlide),
                  "onUpdate:modelValue": ($event) => isRef(currentSlide) ? currentSlide.value = $event : currentSlide = $event,
                  class: "carousel-container max-w-[700px] mx-auto px-2 sm:px-4",
                  "items-to-show": getItemsToShow.value,
                  "items-to-scroll": getItemsToScroll.value,
                  "wrap-around": true,
                  transition: 500,
                  snapAlign: "start",
                  speed: 500,
                  touchDrag: true,
                  easing: "ease",
                  pauseAutoplayOnHover: true,
                  navigationEnabled: true,
                  navigationClickTargetSize: 20
                }, {
                  addons: withCtx(() => [
                    createVNode(unref(Navigation))
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allUsers), (slide) => {
                      return openBlock(), createBlock(unref(Slide), { key: slide }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: _ctx.route("users.show", { id: slide.id }),
                            class: "relative mx-auto text-center mt-4 px-1 sm:px-2 cursor-pointer user-slide-container"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                createVNode("div", { class: "absolute z-[-1] -top-[4px] left-1/2 -translate-x-1/2 rounded-full rotate-45 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] contrast-[1.3] bg-gradient-to-t from-yellow-300 to-purple-500 via-red-500 user-slide-overlay" }, [
                                  createVNode("div", { class: "rounded-full ml-[2px] mt-[2px] sm:ml-[3px] sm:mt-[3px] w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] bg-white" })
                                ]),
                                createVNode("img", {
                                  class: "rounded-full w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] -mt-[1px]",
                                  src: slide.file,
                                  alt: slide.name
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", { class: "text-[10px] sm:text-xs mt-1 sm:mt-2 w-[42px] sm:w-[60px] truncate text-ellipsis overflow-hidden" }, toDisplayString(slide.name), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "items-to-show", "items-to-scroll"]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).data, (post) => {
                  return openBlock(), createBlock("div", {
                    id: "Posts",
                    class: "px-4 max-w-[600px] mx-auto mt-10",
                    key: post
                  }, [
                    createVNode("div", { class: "flex items-center justify-between py-2" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("users.show", { id: post.user.id }),
                          class: "flex items-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "rounded-full w-[38px] h-[38px]",
                              src: post.user.file
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-4 font-extrabold text-[15px]" }, toDisplayString(post.user.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("div", { class: "flex items-center text-[15px] text-gray-500" }, [
                          createVNode("span", { class: "-mt-5 ml-2 mr-[5px] text-[35px]" }, " . "),
                          createVNode("div", null, toDisplayString(post.created_at), 1)
                        ])
                      ]),
                      unref(user).id === post.user.id ? (openBlock(), createBlock(DotsHorizontal, {
                        key: 0,
                        class: "cursor-pointer",
                        size: 27,
                        onClick: ($event) => {
                          isRef(deleteType) ? deleteType.value = "Post" : deleteType = "Post";
                          isRef(id) ? id.value = post.id : id = post.id;
                          isRef(currentPost) ? currentPost.value = post : currentPost = post;
                        }
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "bg-black rounded-lg w-full min-h-[400px] flex items-center" }, [
                      createVNode("img", {
                        src: post.file,
                        class: "mx-auto w-full",
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    createVNode(_sfc_main$2, {
                      post,
                      isOverlayOpen: unref(openOverlay),
                      isShareOverlayOpen: unref(shareOverlayOpen),
                      onLike: ($event) => updateLike($event),
                      onOpenCommentOverlay: ($event) => {
                        isRef(currentPost) ? currentPost.value = $event.post : currentPost = $event.post;
                        isRef(openOverlay) ? openOverlay.value = true : openOverlay = true;
                      },
                      onOpenShareOverlay: ($event) => {
                        isRef(currentPost) ? currentPost.value = $event.post : currentPost = $event.post;
                        isRef(shareOverlayOpen) ? shareOverlayOpen.value = true : shareOverlayOpen = true;
                      }
                    }, null, 8, ["post", "isOverlayOpen", "isShareOverlayOpen", "onLike", "onOpenCommentOverlay", "onOpenShareOverlay"]),
                    createVNode("div", { class: "text-black font-extrabold py-1" }, toDisplayString(post.likes.length) + " likes ", 1),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-black font-extrabold" }, toDisplayString(post.user.name), 1),
                      createTextVNode(" " + toDisplayString(post.text), 1)
                    ]),
                    createVNode("button", {
                      onClick: ($event) => {
                        isRef(currentPost) ? currentPost.value = post : currentPost = post;
                        isRef(openOverlay) ? openOverlay.value = true : openOverlay = true;
                      },
                      class: "text-gray-500 font-extrabold py-1"
                    }, " View All " + toDisplayString(post.comments.length) + " comments ", 9, ["onClick"])
                  ]);
                }), 128)),
                createVNode("div", { class: "pb-20" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(editOverlayOpen)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          post: unref(currentPost),
          onClose: ($event) => isRef(editOverlayOpen) ? editOverlayOpen.value = false : editOverlayOpen = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(openOverlay)) {
        _push(ssrRenderComponent(_sfc_main$4, {
          post: unref(currentPost),
          onAddComment: ($event) => addComment($event),
          onUpdateLike: ($event) => updateLike($event),
          onDeleteSelected: ($event) => {
            deleteFunc($event);
          },
          onEditSelected: () => {
            isRef(editOverlayOpen) ? editOverlayOpen.value = true : editOverlayOpen = true;
            isRef(openOverlay) ? openOverlay.value = false : openOverlay = false;
          },
          onCloseOverlay: ($event) => isRef(openOverlay) ? openOverlay.value = false : openOverlay = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(deleteType)) {
        _push(ssrRenderComponent(_sfc_main$5, {
          deleteType: unref(deleteType),
          id: unref(id),
          onDeleteSelected: ($event) => deleteFunc({
            deleteType: $event.deleteType,
            id: $event.id,
            post: unref(currentPost)
          }),
          onEditSelected: ($event) => {
            isRef(editOverlayOpen) ? editOverlayOpen.value = true : editOverlayOpen = true;
            isRef(deleteType) ? deleteType.value = null : deleteType = null;
            isRef(id) ? id.value = null : id = null;
          },
          onClose: ($event) => {
            isRef(deleteType) ? deleteType.value = null : deleteType = null;
            isRef(id) ? id.value = null : id = null;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(shareOverlayOpen)) {
        _push(ssrRenderComponent(_sfc_main$6, {
          post: unref(currentPost),
          show: unref(shareOverlayOpen),
          onClose: ($event) => isRef(shareOverlayOpen) ? shareOverlayOpen.value = false : shareOverlayOpen = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd285cd9"]]);
export {
  Home as default
};
