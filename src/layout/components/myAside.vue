<template>
  <div class="box">
    <el-card shadow="never" class="card user_info flex">
      <div class="avatar">
        <el-image class="avatar_img" src="/src/assets/images/avatar/avatar.jpg"></el-image>
      </div>
      <el-text class="name text" size="large">阿武</el-text>
      <el-text class="slogan text" truncated line-clamp="3" size="small">须知少时凌云志，曾许人间第一流。</el-text>
      <div class="info flex">
        <div class="link flex">
          <el-link class="link_item" :underline="false">
            <el-text class="text">9</el-text>
            <el-text class="text" size="small">关注</el-text>
          </el-link>
          <el-link class="link_item" :underline="false">
            <el-text class="text">19</el-text>
            <el-text class="text" size="small">粉丝</el-text>
          </el-link>
          <el-link class="link_item" :underline="false">
            <el-text class="text">999</el-text>
            <el-text class="text" size="small">获赞</el-text>
          </el-link>
        </div>
        <div class="button">
          <el-button class="button_hover" color="rgba(255,255,255,.1)" circle>
            <bIcon icon-name="qq" size="18"></bIcon>
          </el-button>
          <el-button class="button_hover" color="rgba(255,255,255,.1)" circle>
            <bIcon icon-name="wx" size="18" ></bIcon>
          </el-button>
        </div>
      </div>
      <div class="btn">
        <el-button style="width:100%;" type="primary" color="rgb(238,182,74)">
          <el-text class="text" size="large">去往主页</el-text>
        </el-button>
      </div>
    </el-card>
    <el-card shadow="never" class="card note">
      最新发布笔记
    </el-card>
    <el-card shadow="never" class="card favorites">
      收藏夹
    </el-card>
    <el-card shadow="never" class="card label">
      标签与归档
    </el-card>
    <el-card shadow="never" class="card website">
      网站资讯
    </el-card>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
  margin: 0 0 20px;
  border-radius: 15px;
  border: none;

  ::v-deep .el-card__body {
    @extend .flex-col;
    padding: 20px 0 10px;
  }

  .text {
    color: white;
  }
}

.user_info {
  background-color: rgb(72, 96, 239);

  .avatar {
    width: 80px;
    height: 80px;
    margin: 0px 0px 10px;

    .avatar_img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .name {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .info {
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;

    ::v-deep .el-link__inner {
      @extend .flex-col;
    }

    .link {
      flex: 1;
      justify-content: flex-start;

      .link_item {
        margin-right: 10px;
      }
    }

    .button {
      .button_hover {
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>