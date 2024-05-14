<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="1">
      <bIcon icon-name="home"></bIcon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <bIcon icon-name="add"></bIcon>
      <template #title>发布</template>
    </el-menu-item>
    <el-menu-item index="3">
      <bIcon icon-name="message"></bIcon>
      <template #title>通知</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import bIcon from "@/components/blogIcon/index.vue"

let isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
  padding: 20px 10px;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  font-size: 16px;
}

::v-deep .el-menu-item {
  margin: 10px 0px;
  height: 48px;
  border-radius: 999px;
}

::v-deep .is-active,
::v-deep .el-menu-item:hover {
  background: rgb(247, 247, 247);
}
</style>