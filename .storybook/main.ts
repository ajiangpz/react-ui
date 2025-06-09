import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      ...viteConfig,
      resolve: {
        alias: {
          ...viteConfig.resolve?.alias,
        },
      },
    });
  },
};

export default config; 