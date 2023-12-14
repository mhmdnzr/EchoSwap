import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
  },
  projectId: "f9bdyg",
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
