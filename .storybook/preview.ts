import React from "react";
import type { Preview } from "@storybook/react-vite";
import { ConfigProvider } from "../packages/components/config-provider";
import type { GlobalConfigProvider } from "../packages/components/config-provider/type";
import zhCN from "../packages/components/global-config/locale/zh_CN";
import enUS from "../packages/components/global-config/locale/en_US";
import zhTW from "../packages/components/global-config/locale/zh_TW";
import jaJP from "../packages/components/global-config/locale/ja_JP";
import koKR from "../packages/components/global-config/locale/ko_KR";
import ruRU from "../packages/components/global-config/locale/ru_RU";
import itIT from "../packages/components/global-config/locale/it_IT";
import arKW from "../packages/components/global-config/locale/ar_KW";
import "../packages/components/style/index"; // 引入组件库的样式
import "./style.css";

const locales: Record<string, GlobalConfigProvider> = {
  zh_CN: zhCN as unknown as GlobalConfigProvider,
  en_US: enUS as unknown as GlobalConfigProvider,
  zh_TW: zhTW as unknown as GlobalConfigProvider,
  ja_JP: jaJP as unknown as GlobalConfigProvider,
  ko_KR: koKR as unknown as GlobalConfigProvider,
  ru_RU: ruRU as unknown as GlobalConfigProvider,
  it_IT: itIT as unknown as GlobalConfigProvider,
  ar_KW: arKW as unknown as GlobalConfigProvider
};

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "UI locale",
      defaultValue: "zh_CN",
      toolbar: {
        icon: "globe",
        items: [
          { value: "zh_CN", title: "中文" },
          { value: "en_US", title: "English" },
          { value: "zh_TW", title: "繁體中文" },
          { value: "ja_JP", title: "日本語" },
          { value: "ko_KR", title: "한국어" },
          { value: "ru_RU", title: "Русский" },
          { value: "it_IT", title: "Italiano" },
          { value: "ar_KW", title: "العربية" }
        ],
        showName: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const locale = locales[context.globals.locale as keyof typeof locales] ?? zhCN;
      return React.createElement(ConfigProvider, {
        globalConfig: locale,
        children: React.createElement(Story)
      });
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
