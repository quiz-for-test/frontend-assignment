import { FlatCompat } from "@eslint/eslintrc";

// Import @typescript-eslint/eslint-plugin using ESM import
import eslintPlugin from "@typescript-eslint/eslint-plugin";

const compat = new FlatCompat({
  baseDirectory: import.meta.url, // Use `import.meta.url` for ESM
});

export default [
  // Extend the Next.js recommended configuration
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Specify the plugin and rules in flat config format
  {
    plugins: {
      "@typescript-eslint": eslintPlugin, // Use the imported plugin here
    },
    rules: {
      "no-console": "warn", // Custom rule
      "@typescript-eslint/no-explicit-any": "warn", // Prevent explicit 'any' type
    },
  },
];
