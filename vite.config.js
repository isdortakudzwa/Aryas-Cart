
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/', // Adjust this if your site is not at the root
   })