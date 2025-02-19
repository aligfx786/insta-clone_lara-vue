import { computed, ref, onMounted, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import axios from "axios";
import { usePage, Link } from "@inertiajs/vue3";
import { C as ChevronLeft } from "./ChevronLeft-DWc7GCM_.js";
import moment from "moment";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "NotificationsPage",
  __ssrInlineRender: true,
  setup(__props) {
    const user = computed(() => usePage().props.auth.user);
    const notifications = ref([]);
    const loading = ref(true);
    const currentPage = ref(1);
    const hasMorePages = ref(false);
    ref(null);
    const loadingMore = ref(false);
    const fetchNotifications = async (page = 1) => {
      try {
        if (page === 1) {
          loading.value = true;
        }
        const response = await axios.get(`/api/notifications?page=${page}`);
        if (page === 1) {
          notifications.value = response.data.data;
        } else {
          notifications.value = [
            ...notifications.value,
            ...response.data.data
          ];
        }
        hasMorePages.value = response.data.next_page_url !== null;
        currentPage.value = page;
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        if (page === 1) {
          loading.value = false;
        }
      }
    };
    const getNotificationText = (notification) => {
      switch (notification.data.type) {
        case "like":
          return "liked your post";
        case "comment":
          return notification.data.message;
        default:
          return "interacted with your post";
      }
    };
    const formatTime = (timestamp) => {
      return moment(timestamp).fromNow();
    };
    onMounted(() => {
      fetchNotifications();
      window.Echo.private(`App.Models.User.${user.value.id}`).notification(
        (notification) => {
          notifications.value.unshift(notification);
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-4" }, _attrs))}><div class="flex items-center mb-6">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ChevronLeft, { size: 20 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ChevronLeft, { size: 20 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-2xl font-bold">Notifications</h1></div>`);
      if (loading.value) {
        _push(`<div class="flex justify-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div></div>`);
      } else if (notifications.value.length === 0) {
        _push(`<div class="text-center py-8 text-gray-500"> No notifications yet </div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(notifications.value, (notification) => {
          _push(`<div class="${ssrRenderClass([{
            "bg-blue-50": !notification.read_at,
            "bg-white": notification.read_at
          }, "p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"])}"><div class="flex items-center gap-3"><img${ssrRenderAttr(
            "src",
            notification.data.user_avatar || "/default-avatar.png"
          )} class="w-10 h-10 rounded-full object-cover"${ssrRenderAttr("alt", notification.data.user_name)}><div class="flex-1"><p class="text-sm"><span class="font-semibold">${ssrInterpolate(notification.data.user_name)}</span> ${ssrInterpolate(getNotificationText(notification))}</p><p class="text-xs text-gray-500 mt-1">${ssrInterpolate(formatTime(notification.created_at))}</p></div></div></div>`);
        });
        _push(`<!--]-->`);
        if (loadingMore.value) {
          _push(`<div class="py-4 flex justify-center"><div class="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (hasMorePages.value) {
        _push(`<div class="mt-6 text-center"><button${ssrIncludeBooleanAttr(loadingMore.value) ? " disabled" : ""} class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(loadingMore.value ? "Loading..." : "Load More")}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/NotificationsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
