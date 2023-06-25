import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return defineConfig({
    server: {
      proxy: {
        '^/api/admin': {
          target: process.env.VITE_PROXY_TARGET_ADMIN,
          changeOrigin: true,
          logLevel: 'debug',
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '^/api/com': {
          target: process.env.VITE_PROXY_TARGET_CLIENT,
          changeOrigin: true,
          logLevel: 'debug',
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      port: process.env.VITE_PORT
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
