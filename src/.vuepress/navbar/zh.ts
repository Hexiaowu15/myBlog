import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "noto-v1:house",
    link: "/",
    // prefix: "/posts/",
  },
  {
    text: "笔记",
    icon: "twemoji:closed-book",
    link: "/notes/",
  },
  {
    text: "面试题",
    icon: "emojione:clipboard",
    prefix: "/questions/",
    children: [
      {
        icon: "skill-icons:html",
        text: "Html面试题",
        link:"htmlNotes/"
      },
      {
        icon: "skill-icons:css",
        text: "CSS面试题",
        link:"cssNotes/"
      },
      {
        icon: "skill-icons:javascript",
        text: "JS面试题",
        link:"jsNotes/"
      },
      {
        icon: "skill-icons:vuejs-light",
        text: "Vue面试题",
        link:"vueNotes/"
      }
    ],
  },
  {
    text: "说说",
    icon: "noto-v1:star",
    link: "/space/",
  },
  {
    text: "留言板",
    icon: "fluent-color:mail-24",
    link: "/message/",
  },
  
  {
    text: "友链",
    icon: "unjs:ufo",
    link: "/friends/",
  },
  {
    text: "关于",
    icon: "emojione-v1:boy",
    link: "/intro",
  },
]);
