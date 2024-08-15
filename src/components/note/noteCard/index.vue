<template>
  <el-card class="card flex-col" style="min-width: 180px;max-width: 280px;">
    <el-image :src="bgUrl" fit="cover"></el-image>
    <template #footer>
      <h4 class="title">测试的第一次笔记</h4>
      <div class="tag flex">
        <el-text class="mx-1" truncated>#测试#第一次#第二次#第三次</el-text>
        <el-text class="mx-1">2024-05-14</el-text>
      </div>
      <div class="user flex">
        <div class="flex">
          <el-avatar :size="25" :src="avatar" />
          <el-text class="mx-1 name">阿武</el-text>
        </div>
        <div>
          <el-button text class="xin" circle>
            <bIcon icon-name="xin" size="18"></bIcon>
          </el-button>
          <el-text class="mx-1">10+</el-text>
        </div>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import bgUrl from "@/assets/images/bg/bg.png"
import avatar from "@/assets/images/avatar/avatar.jpg"
</script>

<style lang="scss" scoped>
.card {
  margin: 0 0 20px;
  border-radius: 15px;
  cursor: pointer;

  :deep(.el-card__body) {
    padding: 0;
  }

  :deep(.el-card__footer) {
    border: none;
    width: 100%;
  }

  .tag {
    justify-content: space-between;
    margin: 10px 0;

    .mx-1 {
      flex: 2;

      &:last-child {
        text-align: right;
        flex: 1
      }
    }
  }

  .user {
    justify-content: space-between;

    .name {
      margin-left: 10px;
    }
  }

  .xin:hover {
    background: white !important;
    color: red;
  }
}
</style>