import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This is required for sockjs-client and stompjs to work in Vite
    global: 'window',
  },
})
