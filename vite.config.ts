import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Set base to "/" for custom domain GitHub Pages deployment (co-fiber.com)
  // Change to "/repo-name/" if deploying to a GitHub Pages subdirectory
  base: "/",
});
