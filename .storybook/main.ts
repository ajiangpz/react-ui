import type { StorybookConfig } from "@storybook/react-vite";
// @ts-expect-error - The Storybook config runtime resolves remark-gfm after installation
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: [
    // 文档优先显示
    "../packages/tendaui-docs/introduction.mdx",
    "../packages/tendaui-docs/getting-started.mdx",
    "../packages/tendaui-docs/design-tokens.mdx",
    "../packages/tendaui-docs/contributing.mdx",
    // 组件文档
    "../packages/tendaui-docs/components/**/*.mdx",
    // 组件故事
    "../packages/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // 工具函数故事
    "../packages/utils/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // 其他 mdx 文档
    "../packages/**/*.mdx"
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    defaultName: "Documentation"
  },
  staticDirs: ["../public"]
};
export default config;
