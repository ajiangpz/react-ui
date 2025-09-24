import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import { mergeWith, cloneDeep } from 'lodash-es';
import ConfigContext, { defaultGlobalConfig } from './ConfigContext.js';
import '@babel/runtime/helpers/typeof';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var merge = function merge(src, config) {
  return mergeWith(src, config, function (objValue, srcValue) {
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  });
};
var globalConfig = defaultGlobalConfig;
var getGlobalConfig = function getGlobalConfig(configInfo) {
  return merge(_objectSpread({}, globalConfig), configInfo);
};
var setGlobalConfig = function setGlobalConfig(configInfo) {
  globalConfig = configInfo;
};
function ConfigProvider(_ref) {
  var children = _ref.children,
    globalConfig2 = _ref.globalConfig,
    notSet = _ref.notSet;
  var defaultData = cloneDeep(defaultGlobalConfig);
  var mergedGlobalConfig = merge(defaultData, globalConfig2);
  reactExports.useEffect(function () {
    if (!notSet) {
      setGlobalConfig(mergedGlobalConfig);
    }
  }, [mergedGlobalConfig, notSet]);
  return /* @__PURE__ */React.createElement(ConfigContext.Provider, {
    value: {
      globalConfig: mergedGlobalConfig
    }
  }, children);
}
ConfigProvider.getGlobalConfig = getGlobalConfig;
ConfigProvider.setGlobalConfig = setGlobalConfig;
ConfigProvider.displayName = "ConfigProvider";

export { ConfigProvider as default, getGlobalConfig, merge, setGlobalConfig };
//# sourceMappingURL=ConfigProvider.js.map
