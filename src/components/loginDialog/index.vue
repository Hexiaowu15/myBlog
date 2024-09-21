<template>
  <div class="login-dialog">
    <el-dialog :show-close="false" style="padding: 0;background-color: rgb(235, 239, 243);" v-model="show" align-center
      width="800" :before-close="handleClose">
      <div class="box">
        <div class="left box-item" :style="{ transform: `translateX(${fade ? '342px' : '0px'})` }">
          <p>{{fade ? '欢迎注册':'登入账号'}}</p>
          <!-- 登录方式 -->
          <!-- <div class="login-way"></div> -->
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
          <!-- 邮箱 -->
          <el-input v-if="fade" v-model="email" placeholder="请输入邮箱"></el-input>
          <!-- 验证码 -->
          <el-input v-if="fade" v-model="code" placeholder="请输入验证码"></el-input>
          <!-- 忘记密码 -->
          <el-button v-if="!fade" text link type="danger" size="small" @click="handleClose">FORGOT PASSWORD?</el-button>
          <!-- 登录按钮 -->
          <el-button class="btn" v-if="!fade" round type="primary" color="rgb(72, 96, 239)" @click="handleLogin">SIGN IN</el-button>
          <!-- 注册按钮 -->
          <el-button class="btn" v-else round type="primary" color="rgb(72, 96, 239)" @click="handleLogin">SIGN UP</el-button>
        </div>
        <div class="mask" :style="{ transform: `translateX(${fade ? '-457px' : '0px'})` }">
          <p style="font-weight: bold;font-size: 24px;color: #000;">Hello Friend!</p>
          <p>Welcome to my homeland!</p>
          <p v-if="!fade">注册一个账号，加入我们吧！</p>
          <p v-else>已有账号？</p>
          <el-button type="primary" round class="btn" color="rgb(72, 96, 239)" @click="handoff">{{ !fade ? 'SIGN UP' : 'SIGN IN' }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
const show = defineModel({ required: true, default: false })

// 切换
const fade = ref(false)


// 登录
const username = ref('')
const password = ref('')

// 注册
const email = ref('')
const code = ref('')

// 登录
const handleLogin = () => {
  console.log(username.value, password.value)
}
// 切换
const handoff = () => {
  fade.value = !fade.value
}
// 弹窗关闭
// const emit = defineEmits(['close'])
const handleClose = () => {
  show.value = false
  // emit('close')
}


</script>

<style lang="scss" scoped>
.login-dialog {
  :deep(.el-dialog__header) {
    padding: 0 !important;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      margin-top: 20px;
      width: 150px;
      font-size: 14px;
      padding: 16px 0;
    }

    .box-item {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 120px 0;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      height: 400px;
      transition: all 1s ease;

      p {
        font-size: 22px;
        margin-bottom: 20px;
        color: #000;
        font-weight: bold;
      }

      :deep(.el-input) {
        width: 300px;
        margin-bottom: 20px;
        // 修改 placeholder 的样式
      }
    }

    .left {
      // display: none;
    }

    .right {
      display: none;
      // 向右移动
      // transform: translateX(342px);
    }

    .mask {
      // transform: translateX(-457px);
      transition: all 1s ease;
      flex: 1.5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 2em;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 120px 0;
      height: 400px;
      position: relative;
      overflow: hidden;
      background: rgb(235, 239, 243);

      p {
        font-size: 14px;
      }

      &:before {
        content: "";
        position: absolute;
        top: -90px;
        left: -50px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(235, 239, 243, 1);
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
        z-index: -1;
      }
    }
  }
}
</style>