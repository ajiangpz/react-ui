import { createContext } from 'react';

var defaultClassPrefix = 't';
var defaultGlobalConfig = {
  classPrefix: defaultClassPrefix,
  attach: null,
  form: {},
  icon: {},
  isContextEffectPlugin: false
};
var defaultContext = {
  globalConfig: defaultGlobalConfig
};
var ConfigContext = /*#__PURE__*/createContext(defaultContext);

export { ConfigContext as default, defaultClassPrefix, defaultContext, defaultGlobalConfig };
//# sourceMappingURL=ConfigContext.js.map
