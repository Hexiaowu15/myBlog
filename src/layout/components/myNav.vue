<template>
  <el-card class="card" shadow="never">
    <el-menu :router="true" default-active="/" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="/" >
        <bIcon icon-name="home"></bIcon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="publish" >
        <bIcon icon-name="add"></bIcon>
        <template #title>发布</template>
      </el-menu-item>
      <el-menu-item index="message">
        <bIcon icon-name="message"></bIcon>
        <template #title>通知</template>
      </el-menu-item>
    </el-menu>
    <el-button v-if="!getToken()" v-login="() => { }" class="logBtn" size='large'
      color="rgb(72, 96, 239)">登录</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { getToken } from '@/utils/token';
// 左侧导航栏是否折叠
let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.card {
  // margin-top: 20px;
  border-radius: 15px;
  border: none;

  .logBtn {
    width: 100%;
    border-radius: 999px;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  // min-height: 400px;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  font-size: 16px;
}

:deep(.el-menu-item) {
  margin: 10px 0px;
  height: 48px;
  border-radius: 999px;
}

:deep(.is-active),
:deep(.el-menu-item:hover) {
  background: rgb(247, 247, 247);
}
</style>