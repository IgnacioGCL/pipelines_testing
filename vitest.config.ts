import { defineConfig } from "vitest/config";
import configuration from "./vite.config";

export default defineConfig({
  ...configuration,
  test: {
    globals: true,
    environmentMatchGlobs: [
      ["**/*.test.tsx", "jsdom"],
      ["**/*.component.test.ts", "jsdom"],
    ],
    setupFiles: './src/__tests__/setup.ts'
  },
});
