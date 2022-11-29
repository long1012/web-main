import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      // 定义远程模块入口
      remotes: {
        'web-common': 'http://localhost:3001/assets/remoteEntry.js',
      },
      // 共享依赖声明
      shared: ['vue'],
    }),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // antd 自定义主题 https://www.antdv.com/docs/vue/customize-theme-cn
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        additionalData: '@import "@/assets/style/common.less";',
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: false,
    https: false,
    proxy: {}
  },
  build: {
    target: 'esnext',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
