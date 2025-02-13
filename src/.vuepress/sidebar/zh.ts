import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "面试题",
      // 可选的, 分组标题对应的图标
      icon: "emojione:clipboard",
      // 可选的, 分组标题对应的链接
      // link: "/foo/",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "/question/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // 必要的，分组的子项目
      children: [
        {
          // 必要的，分组的标题文字
          text: "JavaScript",
          // 可选的, 分组标题对应的图标
          icon: "emojione:clipboard",
          // 可选的, 分组标题对应的链接
          // link: "/foo/",
          // 可选的，会添加到每个 item 链接地址之前
          prefix: "/jsNodes/",
          // 可选的, 设置分组是否可以折叠，默认值是 false,
          collapsible: true,
          // 可选的。设置分组是否默认展开，默认值是 false
          expanded: true,
          // 必要的，分组的子项目
          children: 'structure'
        },
      ],
    },
    {
      text: "关于我",
      icon: "info",
      link: "about/",
    },
  ],
});
