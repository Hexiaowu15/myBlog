import type { InlineConfig, PluginOption } from 'vite'


const vitePlugins: PluginOption[] = [
]

const viteOptions = {
  plugins: vitePlugins,
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    assetsInlineLimit: 0, // 设置为0禁止图片转base64
  }
} as InlineConfig

export default viteOptions
