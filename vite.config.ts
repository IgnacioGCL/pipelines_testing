import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      test: path.resolve(__dirname, "./__tests__"),
    },
  },
};

export default config;
