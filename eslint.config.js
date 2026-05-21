const js = require("@eslint/js");
const typescript = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const storybook = require("eslint-plugin-storybook");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

const browserGlobals = {
  Blob: "readonly",
  Document: "readonly",
  DocumentFragment: "readonly",
  DOMRect: "readonly",
  Element: "readonly",
  EventListenerOrEventListenerObject: "readonly",
  File: "readonly",
  FormData: "readonly",
  HTMLElement: "readonly",
  HTMLAnchorElement: "readonly",
  HTMLButtonElement: "readonly",
  HTMLDocument: "readonly",
  HTMLDivElement: "readonly",
  HTMLFormElement: "readonly",
  HTMLInputElement: "readonly",
  HTMLLabelElement: "readonly",
  HTMLLIElement: "readonly",
  HTMLSpanElement: "readonly",
  HTMLStyleElement: "readonly",
  HTMLTableRowElement: "readonly",
  KeyboardEvent: "readonly",
  MouseEvent: "readonly",
  MutationCallback: "readonly",
  MutationObserver: "readonly",
  MutationObserverInit: "readonly",
  MutationRecord: "readonly",
  IntersectionObserver: "readonly",
  Node: "readonly",
  ResizeObserver: "readonly",
  ResizeObserverCallback: "readonly",
  ResizeObserverEntry: "readonly",
  ScrollBehavior: "readonly",
  SVGElement: "readonly",
  SVGSVGElement: "readonly",
  Touch: "readonly",
  TouchEvent: "readonly",
  URL: "readonly",
  WheelEvent: "readonly",
  Window: "readonly",
  cancelAnimationFrame: "readonly",
  clearInterval: "readonly",
  clearTimeout: "readonly",
  console: "readonly",
  document: "readonly",
  fetch: "readonly",
  getComputedStyle: "readonly",
  localStorage: "readonly",
  navigator: "readonly",
  performance: "readonly",
  requestAnimationFrame: "readonly",
  sessionStorage: "readonly",
  setInterval: "readonly",
  setTimeout: "readonly",
  window: "readonly"
};

const nodeGlobals = {
  Buffer: "readonly",
  NodeJS: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  exports: "readonly",
  global: "readonly",
  module: "readonly",
  process: "readonly",
  require: "readonly"
};

const testGlobals = {
  afterAll: "readonly",
  afterEach: "readonly",
  beforeAll: "readonly",
  beforeEach: "readonly",
  describe: "readonly",
  expect: "readonly",
  it: "readonly",
  test: "readonly",
  vi: "readonly"
};

const reactSettings = {
  react: {
    version: "detect"
  }
};

module.exports = [
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
      "**/_example/**",
      "**/_usage/**",
      "*.d.ts",
      "**/*.d.ts",
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
      "Thumbs.db"
    ]
  },

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
          jsx: true
        }
      },
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        React: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
      prettier
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unsafe-function-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-redeclare": "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "prettier/prettier": "off"
    },
    settings: reactSettings
  },

  // JavaScript configuration
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        React: "readonly"
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "prettier/prettier": "off"
    },
    settings: reactSettings
  },

  // Vitest configuration
  {
    files: ["**/*.{test,spec}.{ts,tsx,js,jsx}", "tests/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: testGlobals
    }
  },

  // Storybook configuration
  {
    files: ["**/*.stories.{ts,tsx,js,jsx}"],
    plugins: {
      storybook
    },
    rules: {
      ...storybook.configs.recommended.rules
    }
  }
];
