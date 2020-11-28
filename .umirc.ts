import { defineConfig } from 'umi';
import routes from './src/routes/routes';

export default defineConfig({
  title: '管理端',
  routes: routes,
  proxy: {
    '/api': {
      target: 'http://192.168.1.185:8089',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  // 通过 webpack-chain 的 API 修改 webpack 配置。
  // 设置哪些模块可以不被打包，
  //   externals: {
  //     react: 'window.React',
  //   },
  scripts: [],
});
