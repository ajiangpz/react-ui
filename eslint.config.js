import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // Base configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // DOM types
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLSpanElement: "readonly",
        HTMLLIElement: "readonly",
        HTMLLabelElement: "readonly",
        HTMLStyleElement: "readonly",
        HTMLFormElement: "readonly",
        HTMLTableRowElement: "readonly",
        SVGSVGElement: "readonly",
        SVGElement: "readonly",
        Element: "readonly",
        Document: "readonly",
        DocumentFragment: "readonly",
        Window: "readonly",
        Node: "readonly",
        EventListenerOrEventListenerObject: "readonly",
        // Event types
        MouseEvent: "readonly",
        TouchEvent: "readonly",
        Touch: "readonly",
        KeyboardEvent: "readonly",
        WheelEvent: "readonly",
        // Browser APIs
        getComputedStyle: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        FormData: "readonly",
        ScrollBehavior: "readonly",
        MutationObserver: "readonly",
        MutationObserverInit: "readonly",
        MutationCallback: "readonly",
        DOMRect: "readonly",
        ResizeObserver: "readonly",
        NodeJS: "readonly",
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        // React
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // JavaScript configuration
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Storybook configuration
  {
    files: ["**/*.stories.{ts,tsx,js,jsx}"],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    },
  },

  // Ignore patterns
  {
    ignores: [
      "node_modules/",
      "**/node_modules/",
      "dist/",
      "lib/",
      "es/",
      "**/dist/",
      "**/lib/",
      "**/es/",
      "*.d.ts",
      "*.map",
      "rollup.config.mjs",
      "vite.config.*",
      "*.config.js",
      "*.config.ts",
      "storybook-static/",
      ".storybook/",
      "coverage/",
      ".nyc_output/",
      ".cache/",
      ".temp/",
      ".tmp/",
      "*.log",
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      ".DS_Store",
      ".DS_Store?",
      "._*",
      ".Spotlight-V100",
      ".Trashes",
      "ehthumbs.db",
      "Thumbs.db",
    ],
  },
];
