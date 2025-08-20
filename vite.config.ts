import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      // proxy: {
      //   '/admin': env.VITE_APP_API_ENDPOINT,
      // },
    },
  };
});
