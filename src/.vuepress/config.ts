import { defineUserConfig } from "vuepress";
// import { getDirname, path } from "vuepress/utils";

// const __dirname = getDirname(import.meta.url);
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "小羊茶话屋",
    },
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  // alias: {
  //   // 你可以在这里将别名定向到自己的组件
  //   // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
  //   "@theme-hope/components/NormalPage": path.resolve(
  //     __dirname,
  //     "./components/NormalPage.vue",
  //   ),
  // },
});
