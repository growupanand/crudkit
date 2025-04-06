import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: process.env.NODE_ENV === "production",
  external: ["react", "@trpc/client", "@trpc/react-query", "@trpc/server", "drizzle-orm", "zod"],
  treeshake: true,
  esbuildOptions(options) {
    options.footer = {
      // This prevents "use client" from being stripped
      js: "if (typeof window !== 'undefined') {\n  window.__crudkit_version__ = '0.1.0';\n}",
    };
  },
});
