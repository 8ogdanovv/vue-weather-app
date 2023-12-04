import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? /vue-weather-app/ : '/'

  return {
    plugins: [
      vue(),
      // eslint()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
  }
})
