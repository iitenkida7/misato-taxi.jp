import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'

const entry = './src/index.tsx'

export default defineConfig(({ mode }) => {
  // `vite build --mode client` : bundle Tailwind CSS into dist/static/style.css
  if (mode === 'client') {
    return {
      publicDir: 'public',
      plugins: [tailwindcss()],
      build: {
        emptyOutDir: false,
        copyPublicDir: true,
        rollupOptions: {
          input: './src/style.css',
          output: {
            assetFileNames: 'static/[name][extname]',
          },
        },
      },
    }
  }

  // default : dev server + static HTML generation (SSG)
  return {
    // host:true + port 3000 to keep the existing Docker workflow (localhost:3000)
    server: { host: true, port: 3000 },
    plugins: [tailwindcss(), devServer({ entry }), ssg({ entry })],
  }
})
