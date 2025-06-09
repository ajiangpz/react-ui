import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  server: {
    open: true,
    port: 8088
  },
  resolve: {
    alias: {
      "react-ui": path.resolve(__dirname, "../src")
    }
  }
};