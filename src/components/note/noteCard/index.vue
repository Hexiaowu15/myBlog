<template>
  <el-card class="card flex-col" style="min-width: 180px;max-width: 280px;">
    <el-image src="/src/assets/images/bg/bg.png" fit="cover"></el-image>
    <template #footer>
      <h4 class="title">测试的第一次笔记</h4>
      <div class="tag">
          <el-text class="mx-1">#测试#第一次</el-text>
          <el-text class="mx-1">2024-05-14</el-text>
      </div>
      <div class="user">
        <div>
          <el-avatar :size="25" src="/src/assets/images/avatar/avatar.jpg" />
          <el-text class="mx-1">阿武</el-text>
        </div>
        <div>
          
        </div>
      </div>
    </template>
  </el-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
  margin: 20px 0;
  border-radius: 15px;
  cursor: pointer;
  ::v-deep .el-card__body {
    padding: 0;
  }

  ::v-deep .el-card__footer {
    border: none;
    width: 100%;
  }
}
</style>