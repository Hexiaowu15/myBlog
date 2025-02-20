import { defineClientConfig } from "vuepress/client";
import Message from "./layouts/message.vue";
import CustomBlogHome from "./layouts/CustomBlogHome.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {
    Message,
    CustomBlogHome
  },
  rootComponents: [],
});
