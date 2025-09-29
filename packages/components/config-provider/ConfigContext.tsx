import { createContext } from 'react';
import { GlobalConfigProvider } from './type';
export const defaultClassPrefix = 't';


export const defaultGlobalConfig: GlobalConfigProvider = {
  classPrefix: defaultClassPrefix,
  attach: null,
  form: {

  },
  icon: {

  },
  isContextEffectPlugin: false,
};

export const defaultContext = {
  globalConfig: defaultGlobalConfig,
};

export type Config = typeof defaultContext;

const ConfigContext = createContext(defaultContext);
export default ConfigContext;
