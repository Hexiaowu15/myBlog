<template>
  <el-icon :color='color' :size='size'>
    <slot>
      <svg class="iconfont" aria-hidden="true">
        <use :xlink:href="'#icon-'+iconName"></use>
      </svg>
    </slot>
  </el-icon>
</template>

<script setup lang="ts">
import "https://at.alicdn.com/t/c/font_3512139_fp420dohcgm.js"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  iconName: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: [String, Number],
  },
})
</script>

<style lang="scss" scoped>
// @import url("https://at.alicdn.com/t/c/font_3512139_ym6vc2ae2xg.css");

.iconfont {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>