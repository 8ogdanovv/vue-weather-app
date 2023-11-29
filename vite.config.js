import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
// Access the GHP_APP_BASE variable from .env
export default defineConfig(({ mode }) => {

  const base = mode === 'production' ? import.meta.env.VITE_GHP_BASE : '/';

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
  };
});
