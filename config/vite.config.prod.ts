import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; 

export default defineConfig({
  mode: 'production',
  plugins: [
    vue({
      refTransform: true,
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
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template. you can remove it, if you don't need.
      },
    ],
    extensions: ['.ts', '.js'],
  },
  build: {
    target: 'modules',
    outDir: 'dist', // 指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器,terser构建后文件体积更小
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true, // 生产环境移除debugger
      },
    },
    rollupOptions: {
      treeshake: false,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  define: {
    'process.env': {},
  },
});
