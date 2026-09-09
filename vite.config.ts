import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// Set `base` to your repo name for GitHub Pages project sites,
// e.g. base: "/portfolio/". Use "/" for a user/org page or custom domain.
export default defineConfig({
  base: "./",
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
