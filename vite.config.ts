import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react({
    // @ts-ignore
    swcOptions: {
      jsc: {
        transform: {
          react: {
            runtime: "automatic",
          },
        },
        // Remove console.*
        externalHelpers: false,
        minify: {
          compress: {
            drop_console: true,
          },
        },
      },
      minify: true,
    }
  }) ],
  assetsInclude: [ "**/*.gltf", "**/*.glb" ],
  build:{
    sourcemap: false,
    minify: "esbuild",
  },
  resolve: {
    alias: {
      "<assets>": path.resolve(__dirname, "./src/assets"),
      "<utils>": path.resolve(__dirname, "./src/utils"),
      "<components>": path.resolve(__dirname, "./src/components"),
      "<pages>": path.resolve(__dirname, "./src/pages"),
    }
  },
  server: {
    port: 1919
  },
  esbuild: {
    drop: ["console"]
  }
});
