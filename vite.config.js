import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
        javascriptEnabled: true
      }
    }
  },
  server:{
    host:'0.0.0.0',
    proxy:{
          '/api':{
            // target:'https://xiaowu15.gitee.io',
            target:'https://env-00jxgns8zhk9-static.normal.cloudstatic.cn/',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          }
    },
    port:8090
  }
})