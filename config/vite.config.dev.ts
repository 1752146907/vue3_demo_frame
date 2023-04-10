import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';  

export default defineConfig({
  mode: 'development',
  server: {
    open: true,
    fs: {
      strict: true,
    },
    // port: 3001,
    host: '0.0.0.0',
    // open: true,
    proxy: {
      // 选项写法
      // '/apiServe': 'https://desk-dev1.roadshowchina.cn/'//代理网址
      '/api': {
        // target: 'http://192.168.1.250:8121/',
        target: 'https://console-dev.roadshowchina.cn/',
        changeOrigin: true,
      },
    },
    // cors:true
  },

  plugins: [
    vue({
      // refTransform: true,
    }),  
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      }, 
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
});
