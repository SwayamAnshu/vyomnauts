import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Manually define chunks for better code splitting
        manualChunks(id) {
          // Split vendor libraries into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
