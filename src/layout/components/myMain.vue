<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 175px);
  overflow: auto;
  @include scrollBar;
}
</style>