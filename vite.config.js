import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const base = import.meta.env.PROD ? '/vue-weather-app/' : '/'

// export default defineConfig({
//     base: '/vue-weather-app/',
//     plugins: [
//       vue(),
//     ],
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
// })

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production' || command === 'build'
  const base = isProduction ? '/vue-weather-app/' : '/'

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
