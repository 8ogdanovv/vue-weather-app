import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const BASE_URL = process.env.VITE_BASE_URL

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production' || command === 'build'
  const base = isProduction ? BASE_URL : '/'

  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
  }
})
