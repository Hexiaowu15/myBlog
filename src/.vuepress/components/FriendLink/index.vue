<template>
  <div class="vp-project-panel">
    <div v-for="(project, index) in projects" :class="`vp-project-card color${index % 9}`">
      <a :href="project.link" class="no-external-link-icon" target="_blank">
        <img :src="project.icon" :alt="project.name" class="vp-project-image" />
        <div :class="`vp-project-name ${project.desc ? '' : 'no-desc'}`">
          {{ project.name }}
        </div>
        <div v-if="project.desc" class="vp-project-desc">{{ project.desc }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { type Link } from '../../utils';
const { projects } = defineProps<{ projects: Link[] }>();
</script>

<style lang="scss" scoped></style>