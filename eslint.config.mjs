import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply CommonJS configuration for all `.js` files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest", // Ensure it recognizes modern JavaScript syntax
      globals: {
        ...globals.node, // Include Node.js globals like __dirname and __filename
      },
    },

  rules: {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^next$" }],
  },
},
  // Set up for recommended rules
  pluginJs.configs.recommended,
];
