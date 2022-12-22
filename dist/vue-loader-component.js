import { defineComponent as a, renderSlot as s, pushScopeId as c, popScopeId as l, createElementVNode as t } from "vue";
const _ = (e) => (c("data-v-ac7d1898"), e = e(), l(), e), p = /* @__PURE__ */ _(() => /* @__PURE__ */ t("div", { id: "loader" }, [
  /* @__PURE__ */ t("b", { style: { "font-size": "1.4em" } }, "... LOADING ..."),
  /* @__PURE__ */ t("br"),
  /* @__PURE__ */ t("div", { id: "spinner" })
], -1)), u = /* @__PURE__ */ a({
  __name: "FullscreenLoader",
  props: {
    show: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (o, r) => e.show ? s(o.$slots, "loaderUI", { key: 0 }, () => [
      p
    ], !0) : s(o.$slots, "default", { key: 1 }, void 0, !0);
  }
});
const i = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [n, d] of o)
    r[n] = d;
  return r;
}, v = /* @__PURE__ */ i(u, [["__scopeId", "data-v-ac7d1898"]]), m = {
  install(e) {
    e.component("FullscreenLoader", v);
  }
};
export {
  m as GlobalLoaderInstaller
};
