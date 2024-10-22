import viteReact from "@vitejs/plugin-react";
/**@type {import('vite').UserConfig} */
export default {
  plugins: [viteReact()],
  server: {
    port: 8080,
    open: "/"
  }
};
