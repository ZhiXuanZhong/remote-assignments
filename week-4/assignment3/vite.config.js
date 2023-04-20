import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/remote-assignments/week-4/assignment3/dist/',
  plugins: [react()],
})
