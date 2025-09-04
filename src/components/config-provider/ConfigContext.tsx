import { createContext } from 'react';

export const defaultClassPrefix = 't';
export const defaultGlobalConfig = {
  classPrefix: defaultClassPrefix,
};

export const defaultContext = {
  globalConfig: defaultGlobalConfig,
};

export type Config = typeof defaultContext;

const ConfigContext = createContext(defaultContext);
export default ConfigContext;
