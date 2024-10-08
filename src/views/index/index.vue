<template>
  <div class="box">
    <noteCard @click="handleClick(item)" v-for="item in 50" :key="item" />
  </div>
</template>

<script setup lang='ts'>
import { getNotes } from '@/api/index'
import noteCard from '@/components/note/noteCard/index.vue'
import { useRouter } from "vue-router"
const router = useRouter()
const handleClick = (item: any) => {
  router.push('/noteDetail?id=' + item)
}
onMounted(() => {
  getNotes()
}) 
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
}
</style>