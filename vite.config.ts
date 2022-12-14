/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginLibInjectStyle from 'vite-plugin-lib-inject-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginLibInjectStyle()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VirtualScroller',
      // the proper extensions will be added
      fileName: 'vue-next-virtual-scroller',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
