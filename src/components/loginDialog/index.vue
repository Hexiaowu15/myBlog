<template>
  <div class="login-dialog">
    <el-dialog :show-close="false" style="padding: 0;background-color: rgb(235, 239, 243);" v-model="show" align-center
      width="800" :before-close="handleClose">
      <el-form :model="form" :rules="rules" ref="formRef">
        <div class="box">
          <div class="left box-item" :style="{ transform: `translateX(${fade ? '342px' : '0px'})` }">
            <p>{{ fade ? '欢迎注册' : '登入账号' }}</p>
            <!-- 登录方式 -->
            <!-- <div class="login-way"></div> -->
            <el-form-item prop="username" v-if="!emailLogin">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" v-if="!emailLogin">
              <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item v-if="fade || emailLogin" prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item v-if="fade || emailLogin" prop="code" class="code">
              <el-input style="width: 120px;" v-model="form.code" placeholder="请输入验证码"></el-input>
              <el-tag v-if="time == 0" class="code-btn" effect="dark" round @click="handleCode">获取验证码</el-tag>
              <el-link v-else type="primary">{{ time }}s内可重送</el-link>
            </el-form-item>
            <!-- 切换登录方式 -->
            <el-button v-if="!fade" text link type="danger" size="small" @click="emailLogin = !emailLogin">{{ emailLogin
              ? 'Account login' : 'Email login' }}</el-button>
            <!-- 登录按钮 -->
            <el-button v-throttle="handleLogin" class="btn" v-if="!fade" round type="primary"
              color="rgb(72, 96, 239)">SIGN
              IN</el-button>
            <!-- 注册按钮 -->
            <el-button v-throttle="handleEnroll" class="btn" v-else round type="primary" color="rgb(72, 96, 239)">SIGN
              UP</el-button>
          </div>
          <div class="mask" :style="{ transform: `translateX(${fade ? '-457px' : '0px'})` }">
            <p style="font-weight: bold;font-size: 24px;color: #000;">Hello Friend!</p>
            <p>Welcome to my homeland!</p>
            <p v-if="!fade">注册一个账号，加入我们吧！</p>
            <p v-else>已有账号？</p>
            <el-button type="primary" round class="btn" color="rgb(72, 96, 239)" @click="handoff(formRef)">{{ !fade ?
              'SIGN UP' :
              'SIGN IN' }}</el-button>
          </div>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
const show = defineModel({ required: true, default: false })
import { useLoginDialogStore } from "@/stores/modules/loginDialog"
const loginDialogStore = useLoginDialogStore()
// 切换
const fade = ref(false)
const emailLogin = ref(false)
// 表单数据
const form = ref({
  username: '',
  password: '',
  email: '',
  code: ''
})
const time = toRef(loginDialogStore, 'time')
const formRef = ref<FormInstance>()
const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度在 3 到 10 个字符', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]+$/, message: '用户名只能包含字母和数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
    { pattern: /^[0-9A-Za-z]{6,16}$/, message: '密码至少包含字母、数字、长度在 6 到 16 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 4, message: '验证码长度为 4', trigger: 'blur' }
  ]
}

// 登录
const handleLogin = () => {
  // console.log(username.value, password.value)
  submitForm(formRef.value).then(() => {
    loginDialogStore.login(form.value)
  }).catch(() => {
    ElMessage({
      message: "请填写正确的信息",
      type: 'error'
    })
  })
}
// 注册
const handleEnroll = () => {
  submitForm(formRef.value).then(() => {
    loginDialogStore.signup(form.value)
  }).catch(() => {
    ElMessage({
      message: "请填写正确的信息",
      type: 'error'
    })
  })
}
// 获取验证码
const handleCode = () => {
  loginDialogStore.setTimer(60)
}
// 切换
const handoff = (formEl: FormInstance | undefined) => {
  fade.value = !fade.value
  resetForm(formEl)
  loginDialogStore.setTimer(0)
  emailLogin.value = false
}
// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// 表单校验
const submitForm = async (formEl: FormInstance | undefined): Promise<boolean | void> => {
  if (!formEl) return
  return new Promise((resolve, reject) => {
    formEl.validate((valid: boolean, errors) => {
      if (valid) {
        resolve(valid)
      } else {
        reject(errors)
      }
    })
  })
}

// 弹窗关闭
// const emit = defineEmits(['close'])
const handleClose = () => {
  show.value = false
  resetForm(formRef.value)
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

    .code {
      width: 300px;

      :deep(.el-form-item__content) {
        justify-content: space-between;
      }

      .code-btn {
        cursor: pointer;
        background-color: rgb(72, 96, 239);
        border: none;

        &:hover {
          opacity: 0.8;
        }
      }
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
      }
    }

    .left {}

    .right {
      display: none;
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