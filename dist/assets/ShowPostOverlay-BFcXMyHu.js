import { useSSRContext, mergeProps, toRefs, unref, createVNode, resolveDynamicComponent, onMounted, onUnmounted, ref, reactive, isRef, withCtx, toDisplayString, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { C as ChevronLeft } from "./ChevronLeft-DWc7GCM_.js";
import "@meforma/vue-toaster";
const _sfc_main$w = {
  name: "MagnifyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Magnify.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Magnify = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$v = {
  name: "HeartOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon heart-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/HeartOutline.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const HeartOutline = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$u = {
  name: "HomeOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon home-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/HomeOutline.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const HomeOutline = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$t = {
  name: "CompassIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon compass-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Compass.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Compass = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$s = {
  name: "SendOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon send-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/SendOutline.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const SendOutline = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$r = {
  name: "PlusIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon plus-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Plus.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Plus = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$q = {
  name: "AccountOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon account-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountOutline.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const AccountOutline = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$p = {
  name: "AccountPlusOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon account-plus-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountPlusOutline.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const AccountPlusOutline = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$o = {
  name: "MenuIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon menu-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Menu.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$n = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: { iconString: String },
  setup(__props) {
    const props = __props;
    const { iconString } = toRefs(props);
    const user = usePage().props.auth.user;
    let icon = null;
    if (iconString.value === "Home") icon = HomeOutline;
    if (iconString.value === "Search") icon = Magnify;
    if (iconString.value === "Explore") icon = Compass;
    if (iconString.value === "Messages") icon = SendOutline;
    if (iconString.value === "Notifications") icon = HeartOutline;
    if (iconString.value === "Create") icon = Plus;
    if (iconString.value === "Profile") icon = AccountOutline;
    if (iconString.value === "Log out") icon = Menu;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full xl:inline-block xl:hover:bg-gray-100 p-2 rounded-full transition duration-300 ease-in-out cursor-pointer" }, _attrs))}><div class="flex items-center">`);
      if (unref(iconString) === "Profile") {
        _push(`<img class="${ssrRenderClass([{ "mr-1": unref(iconString) === "Profile" }, "rounded-full ml-[2px] w-[30px] cursor-pointer"])}"${ssrRenderAttr("src", unref(user).file)} alt="">`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), {
          fillColor: "#000000",
          size: 36
        }, null), _parent);
      }
      _push(`<span class="xl:block hidden text-black font-extrabold text-[18px] pl-2 mt-0.5">${ssrInterpolate(unref(iconString))}</span></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MenuItem.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon close-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Close.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Close = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$l = {
  name: "ArrowLeftIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon arrow-left-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ArrowLeft.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$k = {
  name: "MapMarkerOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon map-marker-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MapMarkerOutline.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const MapMarkerOutline = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$j = {
  name: "ChevronDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon chevron-down-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronDown.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$i = {
  name: "EmoticonHappyOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon emoticon-happy-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/EmoticonHappyOutline.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const EmoticonHappyOutline = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$h = {
  __name: "EmojiPicker",
  __ssrInlineRender: true,
  emits: ["select"],
  setup(__props, { emit: __emit }) {
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
      "🌟"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg p-2 w-[200px]" }, _attrs))}><div class="grid grid-cols-6 gap-1"><!--[-->`);
      ssrRenderList(emojis, (emoji) => {
        _push(`<button class="p-1 hover:bg-gray-100 rounded">${ssrInterpolate(emoji)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EmojiPicker.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
function useClickOutside(elementRef, callback, excludeRefs = []) {
  if (!elementRef || typeof callback !== "function") return;
  const handleClick = (event) => {
    if (!(elementRef == null ? void 0 : elementRef.value)) return;
    const isClickInExcluded = excludeRefs.some(
      (ref2) => {
        var _a;
        return (_a = ref2 == null ? void 0 : ref2.value) == null ? void 0 : _a.contains(event.target);
      }
    );
    if (!elementRef.value.contains(event.target) && !isClickInExcluded) {
      callback(event);
    }
  };
  onMounted(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
  });
  onUnmounted(() => {
    document.removeEventListener("mousedown", handleClick);
    document.removeEventListener("touchstart", handleClick);
  });
}
const _sfc_main$g = {
  __name: "CreatePostOverlay",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const user = usePage().props.auth.user;
    const emit = __emit;
    let showEmojiPicker = ref(false);
    let emojiPickerRef = ref(null);
    useClickOutside(emojiPickerRef, () => showEmojiPicker.value = false);
    const form = reactive({
      text: null,
      file: null
    });
    let isValidFile = ref(null);
    let fileDisplay = ref("");
    ref("");
    let error = ref({
      text: null,
      file: null
    });
    const containerRef = ref(null);
    ref(null);
    const closeOverlay = () => {
      form.text = null;
      form.file = null;
      fileDisplay.value = "";
      emit("close");
    };
    const addEmoji = (emoji) => {
      if (!form.text) {
        form.text = emoji;
      } else {
        form.text += emoji;
      }
      showEmojiPicker.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3",
        id: "OverlaySection"
      }, _attrs))}><button class="absolute right-3 cursor-pointer">`);
      _push(ssrRenderComponent(Close, {
        size: 27,
        fillColor: "#FFFFFF"
      }, null, _parent));
      _push(`</button><div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"><div class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300">`);
      _push(ssrRenderComponent(ArrowLeft, {
        class: "cursor-pointer",
        size: 30,
        fillColor: "#000000",
        onClick: ($event) => closeOverlay()
      }, null, _parent));
      _push(`<div class="text-lg font-extrabold">New Reel</div><button class="text-lg text-blue-500 hover:text-gray-900 font-extrabold"> Share </button></div><div class="w-full md:flex rounded-xl h-[calc(100%-55px)] overflow-auto"><div class="flex items-center bg-gray-100 w-full overflow-hidden h-full">`);
      if (!unref(fileDisplay)) {
        _push(`<div class="flex flex-col items-center mx-auto"><label for="file" class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold"> Select From Computer </label><input type="file" class="hidden" id="file">`);
        if (unref(error) && unref(error).file) {
          _push(`<div class="text-red-500 text-center p-2 font-extrabold">${ssrInterpolate(unref(error).file)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(fileDisplay) && unref(isValidFile) === false) {
          _push(`<div class="text-red-500 text-center p-2 font-extrabold"> File Not Accepted </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(fileDisplay) && unref(isValidFile) === true) {
        _push(`<img class="min-w-[400px] p-4 mx-auto"${ssrRenderAttr("src", unref(fileDisplay))} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div id="TextAreaSection" class="max-w-[720px] w-full relative"><div class="flex items-center justify-between p-3"><div class="flex items-center"><img${ssrRenderAttr("src", unref(user).file)} alt="" class="rounded-full w-[38px] h-[38px]"><div class="ml-4 text-[15px] font-extrabold">${ssrInterpolate(unref(user).name)}</div></div></div>`);
      if (unref(error) && unref(error).text) {
        _push(`<div class="text-red-500 p-2 font-extrabold">${ssrInterpolate(unref(error).text)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full max-h-[200px] bg-white border-b"><div class="relative">`);
      _push(ssrRenderComponent(EmoticonHappyOutline, {
        class: "pl-3 pt-[10px] flex text-center cursor-pointer",
        size: 30,
        onClick: ($event) => isRef(showEmojiPicker) ? showEmojiPicker.value = !unref(showEmojiPicker) : showEmojiPicker = !unref(showEmojiPicker)
      }, null, _parent));
      if (unref(showEmojiPicker)) {
        _push(`<div class="absolute left-0 z-50 bg-white shadow-md rounded-lg">`);
        _push(ssrRenderComponent(_sfc_main$h, { onSelect: addEmoji }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><textarea placeholder="Write caption..." rows="10" class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-20 focus:ring-0 text-gray-600 text-[18px]" name="" id="">${ssrInterpolate(form.text)}</textarea></div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Add Location </div>`);
      _push(ssrRenderComponent(MapMarkerOutline, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Accessibility </div>`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Advanced Settings </div>`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="text-gray-500 mt-3 p-3 text-sm"> Your reel will be Shared with your followers in their feeds and can be seen on your profile.It may also apppear in places such as Reels, where anyone can see it. </div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CreatePostOverlay.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Notification",
  __ssrInlineRender: true,
  props: {
    iconString: String,
    class: String
  },
  setup(__props) {
    const isOpen = ref(false);
    const unreadCount = ref(0);
    const notifications = ref([]);
    const user = usePage().props.auth.user;
    ref(null);
    ref(null);
    let closeTimer = null;
    const closePanel = () => {
      isOpen.value = false;
      clearTimeout(closeTimer);
    };
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/api/notifications");
        notifications.value = response.data.data;
        updateUnreadCount();
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    const updateUnreadCount = () => {
      unreadCount.value = notifications.value.filter((n) => !n.read_at).length;
    };
    const listenForNotifications = () => {
      window.Echo.private(`App.Models.User.${user.id}`).notification(
        (notification) => {
          notifications.value.unshift(notification);
          unreadCount.value++;
        }
      );
    };
    onMounted(() => {
      fetchNotifications();
      listenForNotifications();
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closePanel();
      });
    });
    onUnmounted(() => {
      clearTimeout(closeTimer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "notificationWrapper",
        class: "notification-container"
      }, _attrs))} data-v-2a22d9eb><div class="notification-trigger relative" data-v-2a22d9eb><div class="cursor-pointer" data-v-2a22d9eb>`);
      _push(ssrRenderComponent(_sfc_main$n, {
        iconString: __props.iconString,
        class: __props.class
      }, null, _parent));
      _push(`</div>`);
      if (unreadCount.value > 0) {
        _push(`<div class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs px-1" data-v-2a22d9eb>${ssrInterpolate(unreadCount.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="fixed top-1/2 -translate-y-1/2 left-1/3 z-[9999] w-[200px] bg-white border border-gray-200 shadow-lg rounded-md" data-v-2a22d9eb><div class="flex flex-col h-[400px]" data-v-2a22d9eb><div class="flex items-center justify-between p-4 border-b border-gray-200" data-v-2a22d9eb><h3 class="text-base font-semibold" data-v-2a22d9eb>Notifications</h3><button class="text-gray-500 hover:text-black text-lg font-bold" data-v-2a22d9eb> × </button></div><div class="flex-1 overflow-y-auto notification-scroll" data-v-2a22d9eb>`);
      if (notifications.value.length === 0) {
        _push(`<div class="p-4 text-center text-gray-500" data-v-2a22d9eb> No notifications </div>`);
      } else {
        _push(`<div data-v-2a22d9eb><!--[-->`);
        ssrRenderList(notifications.value, (notification) => {
          _push(`<div class="${ssrRenderClass([{ "bg-blue-50": !notification.read_at }, "p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"])}" data-v-2a22d9eb><div class="flex items-start gap-3" data-v-2a22d9eb><div class="flex-1" data-v-2a22d9eb><p class="text-sm" data-v-2a22d9eb>${ssrInterpolate(notification.data.message)}</p><span class="text-xs text-gray-500 mt-1 block" data-v-2a22d9eb>${ssrInterpolate(new Date(
            notification.created_at
          ).toLocaleString())}</span></div>`);
          if (!notification.read_at) {
            _push(`<div class="w-2 h-2 rounded-full bg-blue-500 mt-2" data-v-2a22d9eb></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="fixed inset-0 bg-black bg-opacity-10 z-[9998]" data-v-2a22d9eb></div></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notification.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-2a22d9eb"]]);
const _sfc_main$e = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    let showCreatePost = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="MainLayout" class="w-full h-screen">`);
      if (_ctx.$page.url = "/") {
        _push(`<div id="TopNavHome" class="fixed z-30 md:hidden block w-full bg-white h-[61px] border-b border-b-gray-300"><div class="flex items-center justify-between h-full">`);
        _push(ssrRenderComponent(unref(Link), { href: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-[105px] ml-6 cursor-pointer" src="/insta-logo.png" alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-[105px] ml-6 cursor-pointer",
                  src: "/insta-logo.png",
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center w-[50%]"><div class="flex items-center w-full bg-gray-100 rounded-lg">`);
        _push(ssrRenderComponent(Magnify, {
          class: "pl-4",
          fillColor: "#8E8E8E",
          size: 27
        }, null, _parent));
        _push(`<input type="text" placeholder="Search" class="bg-transparent w-full placeholder-[#8E8E8E] border-0 ring-0 focus:ring-0"></div>`);
        _push(ssrRenderComponent(Notification, {
          iconString: "Notifications",
          size: 20,
          class: "text-center",
          alignTo: "left"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.url !== "/") {
        _push(`<div id="TopNavUser" class="md:hidden fixed flex items-center justify-between z-30 w-full bg-white h-[61px] border-b-gray-300">`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/",
          class: "px-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ChevronLeft, {
                size: 30,
                class: "cursor-pointer"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ChevronLeft, {
                  size: 30,
                  class: "cursor-pointer"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="font-extrabold text-lg">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div>`);
        _push(ssrRenderComponent(AccountPlusOutline, {
          size: 30,
          class: "cursor-pointer px-4"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="SideNav" class="fixed h-full bg-white xl:w-[280px] w-[80px] md:block hidden border-r border-r-gray-300 z-50">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer" src="/insta-logo-small.png" alt=""${_scopeId}><img class="xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer" src="/insta-logo.png" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer",
                src: "/insta-logo-small.png",
                alt: ""
              }),
              createVNode("img", {
                class: "xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer",
                src: "/insta-logo.png",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="px-3">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, {
              iconString: "Home",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n, {
                iconString: "Home",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$n, {
        iconString: "Search",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, {
        iconString: "Explore",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, {
        iconString: "Messages",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(Notification, {
        iconString: "Notifications",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, {
        onClick: ($event) => isRef(showCreatePost) ? showCreatePost.value = true : showCreatePost = true,
        iconString: "Create",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: _ctx.$page.props.auth.user.id })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, {
              iconString: "Profile",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n, {
                iconString: "Profile",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        as: "button",
        method: "post",
        class: "absolute bottom-0 px-3 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$n, {
              iconString: "Log out",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$n, {
                iconString: "Log out",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex lg:justify-between bg-white h-full w-[100%-280px] xl:pl-[280px] lg:pl-[100px] overflow-auto"><div class="${ssrRenderClass([
        _ctx.$page.url === "/" ? "lg:w-8/12 w-full" : "max-w-[1200px]",
        "mx-auto md:pt-6 pt-20"
      ])}"><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      if (_ctx.$page.url === "/") {
        _push(`<div id="SuggestionsSection" class="lg:w-4/12 lg:block hidden text-black mt-10">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("users.show", { id: _ctx.$page.props.auth.user.id }),
          class: "flex items-center justify-between max-w-[300px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center"${_scopeId}><img${ssrRenderAttr("src", _ctx.$page.props.auth.user.file)} alt="" class="rounded-full z-10 w-[58px] h-[58px]"${_scopeId}><div class="pl-4"${_scopeId}><div class="text-black font-extrabold"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-gray-500 text-extrabold text-sm"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div></div></div><button class="text-blue-500 hover:text-gray-900 text-xs font-extrabold"${_scopeId}> Switch </button>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("img", {
                    src: _ctx.$page.props.auth.user.file,
                    alt: "",
                    class: "rounded-full z-10 w-[58px] h-[58px]"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "pl-4" }, [
                    createVNode("div", { class: "text-black font-extrabold" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                    createVNode("div", { class: "text-gray-500 text-extrabold text-sm" }, toDisplayString(_ctx.$page.props.auth.user.name), 1)
                  ])
                ]),
                createVNode("button", { class: "text-blue-500 hover:text-gray-900 text-xs font-extrabold" }, " Switch ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center justify-between max-w-[300px] py-3"><div class="text-gray-500 font-extrabold"> Suggestions for you </div><button class="text-blue-500 hover:text-gray-900 text-xs font-extrabold"> See All </button></div><!--[-->`);
        ssrRenderList(_ctx.$page.props.randomUsers, (randUser) => {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("users.show", { id: randUser.id }),
            class: "flex items-center justify-between max-w-[300px] pb-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center"${_scopeId}><img${ssrRenderAttr("src", randUser.file)} alt="" class="rounded-full z-10 w-[37px] h-[37px]"${_scopeId}><div class="pl-4"${_scopeId}><div class="text-black font-extrabold"${_scopeId}>${ssrInterpolate(randUser.name)}</div><div class="text-gray-500 text-extrabold text-sm"${_scopeId}> Suggested For You </div></div></div><button class="text-blue-500 hover:text-gray-900 text-xs font-extrabold"${_scopeId}> Follow </button>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("img", {
                      src: randUser.file,
                      alt: "",
                      class: "rounded-full z-10 w-[37px] h-[37px]"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "pl-4" }, [
                      createVNode("div", { class: "text-black font-extrabold" }, toDisplayString(randUser.name), 1),
                      createVNode("div", { class: "text-gray-500 text-extrabold text-sm" }, " Suggested For You ")
                    ])
                  ]),
                  createVNode("button", { class: "text-blue-500 hover:text-gray-900 text-xs font-extrabold" }, " Follow ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="max-w-[300px] mt-5"><div class="text-sm text-gray-400"> About Help Press API Jobs Privacy Terms Locations Language Meta Verified </div><div class="text-left text-gray-400 mt-4"> © 2023 INSTAGRAM FROM META </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div id="BottomNav" class="fixed z-30 bottom-0 w-full md:hidden flex items-center justify-around bg-white border-t py-2 border-t-gray-300">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeOutline, {
              fillCollor: "#000000",
              size: 33,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeOutline, {
                fillCollor: "#000000",
                size: 33,
                class: "cursor-pointer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Compass, {
        fillColor: "#000000",
        size: 33,
        class: "cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(SendOutline, {
        fillColor: "#000000",
        size: 33,
        class: "cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(Plus, {
        onClick: ($event) => isRef(showCreatePost) ? showCreatePost.value = true : showCreatePost = true,
        fillColor: "#000000",
        size: 33,
        class: "cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(AccountOutline, {
        fillColor: "#000000",
        size: 33,
        class: "cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: _ctx.$page.props.auth.user.id })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="rounded-full w-[30px] cursor-pointer"${ssrRenderAttr("src", _ctx.$page.props.auth.user.file)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "rounded-full w-[30px] cursor-pointer",
                src: _ctx.$page.props.auth.user.file
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(showCreatePost)) {
        _push(ssrRenderComponent(_sfc_main$g, {
          onClose: ($event) => isRef(showCreatePost) ? showCreatePost.value = false : showCreatePost = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  name: "HeartIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon heart-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Heart.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Heart = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$c = {
  name: "CommentOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon comment-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/CommentOutline.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CommentOutline = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$b = {
  name: "BookmarkOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon bookmark-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/BookmarkOutline.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const BookmarkOutline = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$a = {
  __name: "LikesSection",
  __ssrInlineRender: true,
  props: {
    post: Object,
    isOverlayOpen: Boolean,
    isShareOverlayOpen: Boolean
  },
  emits: ["like", "openCommentOverlay", "openShareOverlay"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { post } = toRefs(props);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex z-20 items-center justify-between" }, _attrs))}><div class="flex items-center"><button class="-mt-[14px]">`);
      if (!isHeartActiveComputed.value) {
        _push(ssrRenderComponent(HeartOutline, {
          class: "pl-3 cursor-pointer text-gray-800 hover:text-gray-600",
          size: 30
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(Heart, {
          class: "pl-3 cursor-pointer",
          fillColor: "#FF0000",
          size: 30
        }, null, _parent));
      }
      _push(`</button><button class="pl-3 pt-[10px] mt-1 text-gray-800 hover:text-gray-600 font-extrabold"${ssrIncludeBooleanAttr(__props.isOverlayOpen) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(CommentOutline, {
        class: "",
        size: 30
      }, null, _parent));
      _push(`</button><button class="pl-3 pt-[10px] text-gray-800 hover:text-gray-600"${ssrIncludeBooleanAttr(__props.isShareOverlayOpen) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(SendOutline, { size: 30 }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(BookmarkOutline, {
        class: "pl-3 pt-[10px] text-gray-800 hover:text-gray-600",
        size: 30
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LikesSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "ShowPostOptionsOverlay",
  __ssrInlineRender: true,
  props: { deleteType: String, id: Number },
  emits: ["close", "deleteSelected", "editSelected"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const { deleteType, id } = toRefs(props);
    const optionsOverlayRef = ref(null);
    useClickOutside(optionsOverlayRef, () => {
      emit("close");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "ShowPostOptionsOverlay",
        class: "fixed flex items-center z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
      }, _attrs))}><div class="max-w-sm w-full mx-auto mt-10 bg-white rounded-xl text-center">`);
      if (unref(deleteType) === "Post" || unref(deleteType) === "Comment") {
        _push(`<button class="w-full p-3 hover:bg-gray-100 text-center border-b border-b-gray-300"> Edit ${ssrInterpolate(unref(deleteType))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="font-extrabold w-full text-red-600 p-3 text-lg border-b border-b-gray-300 cursor-pointer"> Delete ${ssrInterpolate(unref(deleteType))}</button><div class="p-3 text-lg cursor-pointer"> Cancel </div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShowPostOptionsOverlay.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/DotsHorizontal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DotsHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  name: "ContentCopyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon content-copy-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ContentCopy.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ContentCopy = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {
  name: "FacebookIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon facebook-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Facebook.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Facebook = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {
  name: "TwitterIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon twitter-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Twitter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Twitter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  name: "WhatsappIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon whatsapp-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Whatsapp.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Whatsapp = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  name: "FacebookMessengerIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon facebook-messenger-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,2C6.36,2 2,6.13 2,11.7C2,14.61 3.19,17.14 5.14,18.87C5.3,19 5.4,19.22 5.41,19.44L5.46,21.22C5.5,21.79 6.07,22.16 6.59,21.93L8.57,21.06C8.74,21 8.93,20.97 9.1,21C10,21.27 11,21.4 12,21.4C17.64,21.4 22,17.27 22,11.7C22,6.13 17.64,2 12,2M18,9.46L15.07,14.13C14.6,14.86 13.6,15.05 12.9,14.5L10.56,12.77C10.35,12.61 10.05,12.61 9.84,12.77L6.68,15.17C6.26,15.5 5.71,15 6,14.54L8.93,9.87C9.4,9.14 10.4,8.95 11.1,9.47L13.44,11.23C13.66,11.39 13.95,11.39 14.16,11.23L17.32,8.83C17.74,8.5 18.29,9 18,9.46Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/FacebookMessenger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FacebookMessenger = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "SharePostOverlay",
  __ssrInlineRender: true,
  props: {
    post: Object,
    show: Boolean
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const copyLinkMessage = ref("");
    const overlayContent = ref(null);
    useClickOutside(overlayContent, () => {
      emit("close");
    });
    const shareOptions = [
      {
        name: "Copy Link",
        icon: ContentCopy,
        action: async () => {
          try {
            const postUrl = `${window.location.origin}/posts/${props.post.id}`;
            await navigator.clipboard.writeText(postUrl);
            copyLinkMessage.value = "Link copied!";
            setTimeout(() => {
              copyLinkMessage.value = "";
            }, 5e3);
          } catch (err) {
            console.error("Failed to copy link:", err);
          }
        }
      },
      {
        name: "Share to Facebook",
        icon: Facebook,
        action: () => {
          const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.origin + "/posts/" + props.post.id
          )}`;
          window.open(url, "_blank");
        }
      },
      {
        name: "Share to Messenger",
        icon: FacebookMessenger,
        action: () => {
          const url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
            window.location.origin + "/posts/" + props.post.id
          )}&app_id=YOUR_FB_APP_ID`;
          window.open(url, "_blank");
        }
      },
      {
        name: "Share to Twitter",
        icon: Twitter,
        action: () => {
          const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.origin + "/posts/" + props.post.id
          )}`;
          window.open(url, "_blank");
        }
      },
      {
        name: "Share to WhatsApp",
        icon: Whatsapp,
        action: () => {
          const url = `https://wa.me/?text=${encodeURIComponent(
            window.location.origin + "/posts/" + props.post.id
          )}`;
          window.open(url, "_blank");
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "SharePostOverlay",
          class: "fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        }, _attrs))}><div class="bg-white rounded-xl shadow-lg w-full max-w-md mx-4"><div class="border-b border-gray-200 px-4 py-3 flex items-center justify-between"><h3 class="text-xl font-semibold">Share Post</h3><button class="text-gray-500 hover:text-gray-700">`);
        _push(ssrRenderComponent(Close, { size: 24 }, null, _parent));
        _push(`</button></div><div class="p-4">`);
        if (copyLinkMessage.value) {
          _push(`<div class="mb-4 text-center text-green-600">${ssrInterpolate(copyLinkMessage.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(shareOptions, (option) => {
          _push(`<button class="w-full flex items-center px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(option.icon), {
            size: 24,
            class: "text-gray-700"
          }, null), _parent);
          _push(`<span class="ml-4 text-gray-800">${ssrInterpolate(option.name)}</span></button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SharePostOverlay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EditPostOverlay",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const user = usePage().props.auth.user;
    const props = __props;
    const emit = __emit;
    const form = reactive({
      text: props.post.text,
      file: null
    });
    ref(true);
    let fileDisplay = ref(props.post.file);
    ref("");
    let error = ref({
      text: null,
      file: null
    });
    const containerRef = ref(null);
    ref(null);
    const closeOverlay = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: "fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3",
        id: "OverlaySection"
      }, _attrs))}><button class="absolute right-3 cursor-pointer">`);
      _push(ssrRenderComponent(Close, {
        size: 27,
        fillColor: "#FFFFFF"
      }, null, _parent));
      _push(`</button><div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"><div class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300">`);
      _push(ssrRenderComponent(ArrowLeft, {
        class: "cursor-pointer",
        size: 30,
        fillColor: "#000000",
        onClick: ($event) => closeOverlay()
      }, null, _parent));
      _push(`<div class="text-lg font-extrabold">Edit Post</div><button class="text-lg text-blue-500 hover:text-gray-900 font-extrabold"> Update </button></div><div class="w-full md:flex rounded-xl h-[calc(100%-55px)] overflow-auto"><div class="flex items-center bg-gray-100 w-full overflow-hidden h-full"><div class="relative w-full h-full"><img${ssrRenderAttr("src", unref(fileDisplay))} class="min-w-[400px] p-4 mx-auto" alt="Post image"><div class="absolute bottom-4 left-4"><label for="file" class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold cursor-pointer"> Change Image </label><input type="file" class="hidden" id="file"></div></div></div><div id="TextAreaSection" class="max-w-[720px] w-full relative"><div class="flex items-center justify-between p-3"><div class="flex items-center"><img${ssrRenderAttr("src", unref(user).file)} alt="" class="rounded-full w-[38px] h-[38px]"><div class="ml-4 text-[15px] font-extrabold">${ssrInterpolate(unref(user).name)}</div></div></div>`);
      if (unref(error).text) {
        _push(`<div class="text-red-500 p-2 font-extrabold">${ssrInterpolate(unref(error).text)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full max-h-[200px] bg-white border-b"><textarea placeholder="Write caption..." rows="10" class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-50 focus:ring-0 text-gray-600 text-[18px]">${ssrInterpolate(form.text)}</textarea></div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Add Location </div>`);
      _push(ssrRenderComponent(MapMarkerOutline, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Accessibility </div>`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><div class="text-lg font-extrabold text--gray-500"> Advanced Settings </div>`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EditPostOverlay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ShowPostOverlay",
  __ssrInlineRender: true,
  props: ["post"],
  emits: [
    "closeOverlay",
    "addComment",
    "updateLike",
    "deleteSelected",
    "openShareOverlay",
    "editSelected"
    // Add this
  ],
  setup(__props, { emit: __emit }) {
    let comment = ref("");
    let deleteType = ref(null);
    let id = ref(null);
    let textarea = ref(null);
    let showEmojiPicker = ref(false);
    const user = usePage().props.auth.user;
    let shareOverlayOpen = ref(false);
    let editOverlayOpen = ref(false);
    const editingCommentId = ref(null);
    const editedText = ref("");
    const overlayContent = ref(null);
    const optionsOverlayRef = ref(null);
    const shareOverlayRef = ref(null);
    const editOverlayRef = ref(null);
    useClickOutside(
      overlayContent,
      () => {
        if (!deleteType.value && !shareOverlayOpen.value && !editOverlayOpen.value) {
          emit("closeOverlay");
        }
      },
      [optionsOverlayRef, shareOverlayRef, editOverlayRef]
      // Exclude these elements from triggering close
    );
    const props = __props;
    const { post } = toRefs(props);
    const emit = __emit;
    const textareaInput = (e) => {
      textarea.value.style.height = "auto";
      textarea.value.style.height = `${e.target.scrollHeight}px`;
    };
    const addEmoji = (emoji) => {
      comment.value += emoji;
      showEmojiPicker.value = false;
    };
    const handleDeleteSelected = (event) => {
      emit("deleteSelected", {
        deleteType: event.deleteType,
        id: event.id,
        post: post.value
      });
      deleteType.value = null;
      id.value = null;
    };
    const handleCloseOptions = () => {
      deleteType.value = null;
      id.value = null;
      editingCommentId.value = null;
    };
    const handleCommentOptions = (comment2) => {
      deleteType.value = "Comment";
      id.value = comment2.id;
    };
    const startEditingComment = (comment2) => {
      editingCommentId.value = comment2.id;
      editedText.value = comment2.text;
      deleteType.value = null;
      id.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="OverlaySection" class="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"><button class="absolute right-3">`);
      _push(ssrRenderComponent(Close, {
        size: 27,
        fillColor: "#FFFFFF"
      }, null, _parent));
      _push(`</button><div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"><div class="w-full md:flex h-full overflow-auto rounded-xl"><div class="flex items-center bg-black w-full"><img class="rounded-xl min-w-[400px] p-4 mx-auto"${ssrRenderAttr("src", unref(post).file)}></div><div class="md:max-w-[500px] w-full relative"><div class="flex items-center justify-between p-3 border-b"><div class="flex items-center"><img class="rounded-full w-[38px] h-[38px]"${ssrRenderAttr("src", unref(post).user.file)}><div class="ml-4 font-extrabold text-[15px]">${ssrInterpolate(unref(post).user.name)}</div><div class="flex items-center text-[15px] text-gray-500"><span class="-mt-5 ml-2 mr-[5px] text-[35px]">.</span><div>${ssrInterpolate(unref(post).created_at)}</div></div></div>`);
      if (unref(user).id === unref(post).user.id) {
        _push(`<button>`);
        _push(ssrRenderComponent(DotsHorizontal, {
          class: "cursor-pointer",
          size: 27
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="overflow-y-auto h-[calc(100%-170px)]"><div class="flex items-center justify-between p-3"><div class="flex items-center relative"><img class="absolute -top-1 rounded-full w-[38px] h-[38px]"${ssrRenderAttr("src", unref(post).user.file)}><div class="ml-14"><span class="font-extrabold text-[15px] mr-2">${ssrInterpolate(unref(post).user.name)}</span><span class="text-[15px] text-gray-900">${ssrInterpolate(unref(post).text)}</span></div></div></div><!--[-->`);
      ssrRenderList(unref(post).comments, (comment2) => {
        _push(`<div class="p-3"><div class="flex items-center justify-between"><div class="flex items-center"><img class="rounded-full w-[38px] h-[38px]"${ssrRenderAttr("src", comment2.user.file)}><div class="ml-4 font-extrabold text-[15px]">${ssrInterpolate(comment2.user.name)}</div></div>`);
        if (unref(user).id === comment2.user.id) {
          _push(ssrRenderComponent(DotsHorizontal, {
            class: "cursor-pointer",
            size: 27,
            onClick: ($event) => handleCommentOptions(comment2)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (editingCommentId.value === comment2.id) {
          _push(`<div class="pl-[55px] mt-2"><textarea class="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-blue-500" rows="2">${ssrInterpolate(editedText.value)}</textarea><div class="flex justify-end gap-2 mt-2"><button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"> Cancel </button><button class="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"> Save </button></div></div>`);
        } else {
          _push(`<div class="text-[13px] pl-[55px]">${ssrInterpolate(comment2.text)}</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="pb-16 md:hidden"></div></div>`);
      if (unref(post)) {
        _push(ssrRenderComponent(_sfc_main$a, {
          post: unref(post),
          isOverlayOpen: true,
          onLike: ($event) => _ctx.$emit("updateLike", $event),
          onOpenShareOverlay: ($event) => isRef(shareOverlayOpen) ? shareOverlayOpen.value = true : shareOverlayOpen = true,
          class: "px-2 border-t mb-2"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute flex border bottom-0 w-full max-h-[200px] bg-white overflow-visible"><div class="relative">`);
      _push(ssrRenderComponent(EmoticonHappyOutline, {
        class: "pl-3 pt-[10px] flex text-center cursor-pointer",
        size: 30,
        onClick: ($event) => isRef(showEmojiPicker) ? showEmojiPicker.value = !unref(showEmojiPicker) : showEmojiPicker = !unref(showEmojiPicker)
      }, null, _parent));
      if (unref(showEmojiPicker)) {
        _push(`<div class="absolute bottom-12 left-0 z-50">`);
        _push(ssrRenderComponent(_sfc_main$h, { onSelect: addEmoji }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><textarea${ssrRenderAttr("oninput", textareaInput)} placeholder="Add a comment..." rows="1" class="w-full border-0 mt-2 mb-2 text-sm z-40 focus:ring-0 text-gray-600 text-[18px]">${ssrInterpolate(unref(comment))}</textarea>`);
      if (unref(comment)) {
        _push(`<button class="text-blue-600 font-extrabold pr-4"> Post </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
      if (unref(editOverlayOpen)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          ref_key: "editOverlayRef",
          ref: editOverlayRef,
          post: unref(post),
          onClose: ($event) => isRef(editOverlayOpen) ? editOverlayOpen.value = false : editOverlayOpen = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(deleteType)) {
        _push(ssrRenderComponent(_sfc_main$9, {
          deleteType: unref(deleteType),
          id: unref(id),
          onDeleteSelected: handleDeleteSelected,
          onClose: handleCloseOptions,
          onEditSelected: ($event) => unref(deleteType) === "Comment" ? startEditingComment(unref(post).comments.find((c) => c.id === unref(id))) : _ctx.$emit("editSelected"),
          class: "z-60"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(shareOverlayOpen)) {
        _push(ssrRenderComponent(_sfc_main$2, {
          post: unref(post),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShowPostOverlay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  BookmarkOutline as B,
  DotsHorizontal as D,
  Heart as H,
  _sfc_main$e as _,
  _sfc_main$a as a,
  _sfc_main$1 as b,
  _sfc_main as c,
  _sfc_main$9 as d,
  _sfc_main$2 as e
};
