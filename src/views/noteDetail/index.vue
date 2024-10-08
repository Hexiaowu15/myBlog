<template>
  <h1>笔记id: {{ noteId }}</h1>
</template>

<script setup>
const route = useRoute()
const noteId = route.query.id
</script>

<style lang="scss" scoped>

</style>