import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "ChevronLeftIcon",
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
    class: "material-design-icon chevron-left-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronLeft.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ChevronLeft as C
};
