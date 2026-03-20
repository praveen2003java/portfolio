import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VERCEL
    ? '/' // Vercel deploy (root)
    : process.env.NETLIFY
    ? '/' // Netlify deploy (root)
    : '/portfolioreact/', // GitHub Pages under repo name
  plugins: [react()],
});
