import { createContext } from "react";
import { GlobalConfigProvider } from "./type";
import Icon from "@tendaui/icons";
export const defaultClassPrefix = "t";
import defaultLocale from "../locale/zh_CN";

export const defaultGlobalConfig: GlobalConfigProvider = {
  classPrefix: defaultClassPrefix,
  direction: "rtl",
  attach: null,
  form: {},
  icon: {} as Record<string, typeof Icon>,
  isContextEffectPlugin: false,
  ...defaultLocale
};

export const defaultContext = {
  globalConfig: defaultGlobalConfig
};

export type Config = typeof defaultContext;

const ConfigContext = createContext(defaultContext);
export default ConfigContext;
export type Locale = typeof defaultLocale;
