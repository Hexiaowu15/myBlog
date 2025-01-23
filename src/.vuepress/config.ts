import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "小羊茶话屋",
    },
    "/en/": {
      lang: "en-US",
      title: "",
      description: "A blog for sharing knowledge",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
