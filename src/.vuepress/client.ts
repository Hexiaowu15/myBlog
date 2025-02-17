import { defineClientConfig } from "vuepress/client";
import Message from "./layouts/message.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {
    Message,
  },
  rootComponents: [],
});
