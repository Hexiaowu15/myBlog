export interface Link {
  name: string;
  icon: string;
  link: string;
  desc: string;
}

export const fixedLinks: Link[] = [
  {
    name: "Vue",
    icon: "/assets/icons/vue.png",
    link: "https://cn.vuejs.org/", 
    desc: "渐进式 JavaScript 框架"
  },
  {
    name: "VuePress",
    icon: "/assets/icons/vuepress.png",
    link: "https://vuepress.vuejs.org/zh/",
    desc: "Vue 驱动的静态网站生成器。"
  },
  {
    name: "VuePress Theme Hope",
    icon: "/assets/icons/theme-hope.png",
    link: "https://theme-hope.vuejs.press/zh/",
    desc: "一个具有强大功能的 vuepress 主题✨"
  },
  {
    name: "iconfont",
    icon: "/assets/icons/iconfont.png",
    link: "https://www.iconfont.cn/",
    desc: "阿里巴巴矢量图标库。"
  }
]

export const friendLinks: Link[] = [
  {
    name:"烟雨墨客",
    icon: "https://yanyumoke.love/image/tx.png",
    link: "https://yanyumoke.love/",
    desc: "须知少时凌云志，曾许人间第一流。"
  }
]

export function calculateRuntime(startDate: string) {
  const units = [
    { name: '年', duration: 1000 * 60 * 60 * 24 * 365 },
    { name: '个月', duration: 1000 * 60 * 60 * 24 * 30 },
    { name: '天', duration: 1000 * 60 * 60 * 24 },
    { name: '小时', duration: 1000 * 60 * 60 },
    { name: '分钟', duration: 1000 * 60 },
    { name: '秒', duration: 1000 },
  ]
  let output = ''
  let diff = Math.abs(new Date().getTime() - new Date(startDate).getTime())
  for (const unit of units) {
    const val = Math.floor(diff / unit.duration)
    if (val > 0) {
      output += `${val}${unit.name} `
      diff %= unit.duration
    }
  }
  return output
}

export const startDate = '2025/01/10'