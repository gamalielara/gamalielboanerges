import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  assetsInclude: [ "**/*.gltf", "**/*.glb" ],
  resolve: {
    alias: {
      "<assets>": path.resolve(__dirname, "./src/assets"),
      "<utils>": path.resolve(__dirname, "./src/utils")
    }
  },
  server: {
    port: 1919
  }
});
