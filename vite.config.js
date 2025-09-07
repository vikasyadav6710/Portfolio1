import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: [
      'localhost', // Often included by default
      '127.0.0.1', // Often included by default
      'devserver-main--rao-portfolio.netlify.app',
      'rao-portfolio.netlify.app', // Add the specific host here
    ]
  }
})
