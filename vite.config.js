import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/vue-weather-app/' : '/'

  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
  }
})
