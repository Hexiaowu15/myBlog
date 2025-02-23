import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import {viteBundler} from "@vuepress/bundler-vite"
const __dirname = getDirname(import.meta.url);
import viteOptions from './configs/vite.config'
const InfoPanel = path.resolve(__dirname, "./components/InfoPanel/index.vue");
const PageFooter = path.resolve(__dirname, './components/PageFooter/index.vue')
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
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope": path.resolve(
      __dirname,
      "../../node_modules/vuepress-theme-hope/lib/client"
    ),
    "@theme-hope/modules/blog/components/InfoPanel": InfoPanel,
    '@theme-hope/components/PageFooter': PageFooter,
  },
  bundler:viteBundler({
    viteOptions
  })
});
