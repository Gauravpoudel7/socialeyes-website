import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/socialeyes-website/',
  plugins: [react()],
});
