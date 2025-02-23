---
toc: false
pageInfo: false
---

# 友情链接

```
站点名称：小羊茶话屋
站点地址：https://xiaoyang.xiaowu.top
站点描述：一个基于VuePress的个人博客。
站点Logo：https://liubing.me/logo.png
```

请先将本站加入友链后，在下方评论按如下格式提供信息：

```
icon: 网站图标
name: 网站名字
desc: 网站描述
link: 网站链接
```

## 固定链接

<FriendLink :projects="fixedLinks" />

## 友情交换

<FriendLink :projects="friendLinks" />

<script setup lang="ts">
import {fixedLinks,friendLinks} from '@source/.vuepress/utils'
import FriendLink from '@source/.vuepress/components/FriendLink/index.vue'

</script>
