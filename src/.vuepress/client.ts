import { defineClientConfig } from "vuepress/client";
import CustomBlogHome from "./layouts/CustomBlogHome.vue";
import InfoPanel from "./components/InfoPanel/index.vue";
import Heatmap from "./components/Heatmap/index.vue";
import { useMutationObserver } from "@vueuse/core";
import { getThemeColor, addCssVarsToHtml, getGenerateColors } from "./utils";
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import HeatmapLayout from "./layouts/HeatmapLayout/index.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("InfoPanel", InfoPanel);
    app.component("Heatmap", Heatmap);
  },
  setup() {
    const el = ref<HTMLHtmlElement | null>(null);
    const themeColor = ref("");
    const { stop } = useMutationObserver(
      el,
      (mutations) => {
        const mutation = mutations[0];
        if (mutation) {
          themeColor.value = getThemeColor();
        }
      },
      {
        attributes: true,
        attributeFilter: ["class"],
      }
    );
    onMounted(() => {
      el.value = document.querySelector("html");
      nextTick(() => {
        themeColor.value = getThemeColor();
      });
      watch([themeColor], () => {
        let colorsArray = getGenerateColors(themeColor.value).map(
          (color, index) => {
            return [`--bg-${index}`, color];
          }
        );
        // 将数组转换为对象
        let colorsObject = Object.fromEntries(colorsArray);
        addCssVarsToHtml(colorsObject);
      });
    });
    onBeforeUnmount(() => {
      stop && stop();
    });
  },
  layouts: {
    CustomBlogHome,
    HeatmapLayout,
  },
  rootComponents: [],
});
