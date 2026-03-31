import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const buildHash =
  process.env.GITHUB_SHA?.slice(0, 7) ??
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ??
  'local'

// https://vite.dev/config/
export default defineConfig({
  base: '/ledgr/',
  define: {
    __BUILD_HASH__: JSON.stringify(buildHash),
  },
  plugins: [react(), tailwindcss()],
})
