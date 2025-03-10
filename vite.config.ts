import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { isCI } from "ci-info";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import graphqlCodegenPlugin from "vite-plugin-graphql-codegen";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    graphqlCodegenPlugin({
      configOverride: { silent: true },
      runOnBuild: !isCI,
      runOnStart: !isCI,
    }),
    macrosPlugin(),
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
