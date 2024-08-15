<template>
  <div class="box flex">
    <noteCard v-for="i in 9" :key="i"></noteCard>
  </div>
</template>

<script setup lang="ts">
import noteCard from '@/components/note/noteCard/index.vue'

</script>

<style lang="scss" scoped>
.box {
  justify-content: space-between !important;
  flex-wrap: wrap;
}
</style>