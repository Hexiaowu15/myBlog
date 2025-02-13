import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar([
  "/" /* / */,
  {
    text: "面试题",
    prefix:"/questions/",
    collapsible: true,
    // 可选的。设置分组是否默认展开，默认值是 false
    expanded: true,
    children:[
      {
        text: "html",
        collapsible: true,
        prefix:"htmlNotes/",
        children:"structure"
      },
      {
        text: "css",
        collapsible: true,
        prefix:"cssNotes/",
        children:"structure"
      },
      {
        text: "js",
        collapsible: true,
        prefix:"jsNotes/",
        children:"structure"
      },
      {
        text: "vue",
        collapsible: true,
        prefix:"vueNotes/",
        children:"structure"
      },
    ]
  }
]);
