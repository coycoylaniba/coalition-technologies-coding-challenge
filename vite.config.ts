import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    tabWidth: 2,
    semi: true,
    printWidth: 100,
    singleQuote: false,
    endOfLine: "lf",
    trailingComma: "all",
    sortImports: {
      customGroups: [
        {
          groupName: "value-react",
          elementNamePattern: ["react", "react-**"],
          modifiers: ["value"],
        },
        {
          groupName: "type-react",
          elementNamePattern: ["react", "react-**"],
          modifiers: ["type"],
        },
        {
          groupName: "value-alias",
          elementNamePattern: ["#/**"],
          modifiers: ["value"],
        },
        {
          groupName: "type-alias",
          elementNamePattern: ["#/**"],
          modifiers: ["type"],
        },
      ],
      newlinesBetween: false,
      sortSideEffects: false,
      groups: [
        ["value-react"],
        ["type-react"],
        { newlinesBetween: true },
        // ["side-effect-builtin", "side-effect-external"],
        ["value-builtin", "value-external"],
        ["type-builtin", "type-external"],
        { newlinesBetween: true },
        ["value-alias"],
        ["type-alias"],
        { newlinesBetween: true },
        ["value-internal"],
        ["type-internal"],
        { newlinesBetween: true },
        ["value-parent", "value-sibling", "value-index"],
        ["type-parent", "type-sibling", "type-index"],
        { newlinesBetween: true },
        ["style"],
        ["unknown"],
      ],
    },
    sortTailwindcss: {
      stylesheet: "./src/index.css",
      attributes: ["class", "className", "^\\b\\w*ClassName"],
      functions: ["cn"],
    },
    sortPackageJson: true,
  },
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "vite-plus/prefer-vite-plus-imports": "error",

      "typescript/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()]),
  resolve: {
    alias: {
      "#": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
