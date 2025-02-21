import { defineClientConfig } from "vuepress/client";
import Message from "./layouts/message.vue";
import CustomBlogHome from "./layouts/CustomBlogHome.vue";
import InfoPanel from "./components/InfoPanel/index.vue"
import BingLogo from "./components/BingLogo/index.vue"
import Heatmap from "./components/Heatmap/index.vue"
import 'virtual:uno.css'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("InfoPanel", InfoPanel);
    app.component("BingLogo", BingLogo);
    app.component("Heatmap", Heatmap);
  },
  setup() {},
  layouts: {
    Message,
    CustomBlogHome
  },
  rootComponents: [],
});
