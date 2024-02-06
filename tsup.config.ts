import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: true,
  sourcemap: false,
  clean: true,
});