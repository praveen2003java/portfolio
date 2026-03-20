import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolioreact/', // your repo name
  plugins: [react()],
});
