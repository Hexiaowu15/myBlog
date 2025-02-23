import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

const year = new Date().getFullYear();

export default hopeTheme(
  {
    hostname: "https://xiaoayng.xiaowu15.top",
    license: "MIT",
    author: {
      name: "xiaoWu",
      url: "https://xiaoyang.xiaowu15.top",
      email: "xiaowu@xiaowu15.top",
    },
    darkmode: "toggle",
    logo: "./logo.png",

    repo: "",

    docsDir: "src",

    locales: {
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        // 自定义页脚
        footer: `
    <div>
      <div>
        <span>Powered By</span>
        <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/vuepress.png"><b>VuePress</b>
        </a>
      </div>
      <div>
        <span>Theme By</span>
        <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/theme-hope.png"><b>VuePress Theme Hope</b>
        </a>
      </div>
      <div>
        版权所有 © ${year} <a href="https://xiaoyang.xiaowu15.top"><b>xiaoWu</b></a> | 
        <a href="/about/site.html">关于本站</a>
      </div>
      <div>
        <span>本博客已运行</span>
        <span id="running-time"></span>
      </div>
    </div>
  `,

        displayFooter: true,

        blog: {
          intro: "/intro",
          avatar: "/assets/images/avatar.jpg",
          name: "小武",
          description: "生活不止眼前的苟且，还有诗和远方。",
          medias: {
            // Baidu: "https://example.com",
            // BiliBili: "https://example.com",
            // Bitbucket: "https://example.com",
            // Dingding: "https://example.com",
            // Discord: "https://example.com",
            // Dribbble: "https://example.com",
            Email: "mailto:xiaowu@xiaowu15.top",
            // Evernote: "https://example.com",
            // Facebook: "https://example.com",
            // Flipboard: "https://example.com",
            Gitee: "https://gitee.com/xiaowu15",
            GitHub: "https://github.com/Hexiaowu15",
            // Gitlab: "https://example.com",
            // Gmail: "mailto:info@example.com",
            // Instagram: "https://example.com",
            // Lark: "https://example.com",
            // Lines: "https://example.com",
            // Linkedin: "https://example.com",
            // Pinterest: "https://example.com",
            // Pocket: "https://example.com",
            // QQ: "https://example.com",
            // Qzone: "https://example.com",
            // Reddit: "https://example.com",
            // Rss: "https://example.com",
            // Steam: "https://example.com",
            // Twitter: "https://example.com",
            Wechat: "https://example.com",
            // Weibo: "https://example.com",
            // Whatsapp: "https://example.com",
            // Youtube: "https://example.com",
            // Zhihu: "https://example.com",
            // VuePressThemeHope: {
            //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
            //   link: "https://theme-hope.vuejs.press",
            // },
          },
        },

        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },

      /**
       * Chinese locale config
       */
    },

    encrypt: {
      config: {
        "/demo/encrypt.html": {
          hint: "Password: 1234",
          password: "1234",
        },
      },
    },

    // enable it to preview all changes in time
    // hotReload: true,

    // These features are enabled for demo, only preserve features you need here
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // uncomment these if you need TeX support
      // math: {
      //   // install katex before enabling it
      //   type: "katex",
      //   // or install mathjax-full before enabling it
      //   type: "mathjax",
      // },

      // install chart.js before enabling it
      // chartjs: true,

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,

      // install @vuepress/plugin-revealjs and uncomment these if you need slides
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },
    //     <script src="https://giscus.app/client.js"
    //     data-repo="Hexiaowu15/comments"
    //     data-repo-id="R_kgDON75JgA"
    //     data-category="Q&A"
    //     data-category-id="DIC_kwDON75JgM4CnGFN"
    //     data-mapping="pathname"
    //     data-strict="0"
    //     data-reactions-enabled="1"
    //     data-emit-metadata="0"
    //     data-input-position="top"
    //     data-theme="preferred_color_scheme"
    //     data-lang="zh-CN"
    //     crossorigin="anonymous"
    //     async>
    // </script>
    plugins: {
      comment: {
        provider: "Giscus",
        repo: "Hexiaowu15/comments",
        repoId: "R_kgDON75JgA",
        category: "Q&A",
        categoryId: "DIC_kwDON75JgM4CnGFN",
      },
      blog: {
        filter: (page) => {
          const validPrefixes = ["/notes/", "/space/", "/questions/"];
          return validPrefixes.some((prefix) => page.path.startsWith(prefix));
        },

        type: [
          {
            key: "space",
            filter: (page) => page.frontmatter.type === "space",
            frontmatter: (page) => ({ title: "说说" }),
          },
          {
            key: "notes",
            filter: (page) => page.frontmatter.type === "note",
            frontmatter: (page) => ({ title: "笔记" }),
          },
          // {
          //   key: "/",
          //   filter: (page) => ["space", "note"].includes(page.frontmatter.type +''),
          // }
        ],
      },

      // Install @waline/client before enabling it
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ["Badge", "VPCard"],
      },

      icon: {
        prefix: "fa6-solid:",
      },
      search: true,
      // install @vuepress/plugin-pwa and uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true }
);
