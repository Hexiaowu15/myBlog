<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header  class="header" height="72px">
        <!-- header -->
        <myHeader></myHeader>
      </el-header>
      <el-container>
        <el-aside class="nav" width="250px">
          <!-- nav -->
          <myNav></myNav>
        </el-aside>
        <el-container>
          <el-main>
            <home></home>
          </el-main>
          <el-footer>
            <!-- footer -->
            <myFooter></myFooter>
          </el-footer>
        </el-container>
        <el-aside class="aside" width="250px">
          <!-- myMessage -->
          <myAside></myAside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import myHeader from '@/layout/components/myHeader.vue'
import myNav from './components/myNav.vue'
import myAside from './components/myAside.vue'
import myFooter from './components/myFooter.vue'
import home from "./components/home.vue"
</script>

<style lang="scss" scoped>
.common-layout {
  background-color: rgb(247,249,254);
  // background-color: rgb(0,0,0);
  .header {
    background-color: white;
    padding: 0 38px;
  }
  .nav {
    margin: 20px 10px 20px 38px;
  }
  .aside {
    margin: 20px 38px 20px 10px;
  }

}
</style>