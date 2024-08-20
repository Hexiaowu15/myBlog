<template>
  <el-card class="card" shadow="never">
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
    <el-button class="logBtn" size='large' color="rgb(72, 96, 239)" @click="loginDialog = true">登录</el-button>
  </el-card>
  <el-dialog v-model="loginDialog" width="50%" align-center>
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="loginDialog = false">Cancel</el-button>
        <el-button type="primary" @click="onLogin">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

const {proxy} = getCurrentInstance()
// 左侧导航栏是否折叠
let isCollapse = ref(false)

const handleOpen = (key:string, keyPath:string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key:string, keyPath:string[]) => {
  console.log(key, keyPath)
}

const onLogin = () => {
  // console.log(proxy.$request);
  proxy.$request.post('/coffees', { name: 'xiaoyang', type: 'latte' }).then(res => {
    console.log(res)
  })
}

// 登录弹窗
let loginDialog = ref(false)
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