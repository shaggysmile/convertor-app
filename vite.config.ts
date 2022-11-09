import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
      react(),
      eslint(),
      VitePWA({
        registerType: 'autoUpdate',
      })
  ]
})
