
import { defineConfig } from '@unocss/vite'
import { generateColorCombinations } from './src/utils'

export default defineConfig({
  theme: {
    colors: {
      // 生成如下颜色数据
      // 'primary': 'rgba(var(--n-primary-color))'
      // 'primary-1': 'rgba(var(--n-primary-color-1))',
      // 'primary-hover': 'rgba(var(--n-primary-color-hover))',
      // ...其他
      ...generateColorCombinations(),
    },
  },
  safelist: [
    ...Array.from({ length: 10 }, (_, i) => `bg-primary-${i + 1}`),
  ],
})
