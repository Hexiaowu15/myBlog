<template>
  <h1>测试</h1>
  <p>pinia:{{ store.count }}</p>
  <p>pinia:{{ store.double }}</p>
  <p>text:{{ text }}</p>
  <el-button type="primary" @click="a">++++</el-button>
  <el-input v-model="name"></el-input>
  <el-button  @click="gettext">getText</el-button>
  <el-icon><HomeFilled /></el-icon>
</template>

<script setup>
import { getText,getCity } from '@/api/idnex';
import { useCounterStore } from '@/stores/index.js'
// 可以在组件中的任意位置访问 `store` 变量 ✨
let text = ref('')
let name =ref('')
function gettext(){
  // getText().then(res=>{
  //   text.value = res.data.data.text
  //   // console.log(text.value);
  // })
  getCity({name:name.value}).then(res=>{
    console.log(res);
    text.value = res.data.bookQueryRes.data
    console.log(text.value);
  })
}
const store = useCounterStore()
console.log(store.double);
function a(){
  store.increment()
}
</script>

<style lang="scss" scoped>

</style>