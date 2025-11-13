import { createContext } from "react";
import { GlobalConfigProvider } from "./type";
import Icon from "@tendaui/icons";
export const defaultClassPrefix = "t";

export const defaultGlobalConfig: GlobalConfigProvider = {
  classPrefix: defaultClassPrefix,
  attach: null,
  form: {},
  icon: {} as Record<string, typeof Icon>,
  isContextEffectPlugin: false
};

export const defaultContext = {
  globalConfig: defaultGlobalConfig
};

export type Config = typeof defaultContext;

const ConfigContext = createContext(defaultContext);
export default ConfigContext;
