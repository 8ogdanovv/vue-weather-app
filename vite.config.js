import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables from .env
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? process.env.VITE_GHP_BASE : '/'

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
