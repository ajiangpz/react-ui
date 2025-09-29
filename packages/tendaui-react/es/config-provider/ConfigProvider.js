import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useEffect } from 'react';
import { mergeWith, cloneDeep } from 'lodash-es';
import ConfigContext, { defaultGlobalConfig } from './ConfigContext.js';
import '../_chunks/dep-D-UKOauR.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var merge = function merge(src, config) {
  return mergeWith(src, config, function (objValue, srcValue) {
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  });
};

// 存放全局的上下文配置
var globalConfig = defaultGlobalConfig;
var getGlobalConfig = function getGlobalConfig(configInfo) {
  return merge(_objectSpread({}, globalConfig), configInfo);
};
var setGlobalConfig = function setGlobalConfig(configInfo) {
  globalConfig = configInfo;
};
function ConfigProvider(_ref) {
  var children = _ref.children,
    globalConfig = _ref.globalConfig,
    notSet = _ref.notSet;
  var defaultData = cloneDeep(defaultGlobalConfig);
  var mergedGlobalConfig = merge(defaultData, globalConfig);
  useEffect(function () {
    if (!notSet) {
      // 需要设置的情况下，当配置信息变化时更新变量中的配置信息，方便plugin调用时获取
      setGlobalConfig(mergedGlobalConfig);
    }
  }, [mergedGlobalConfig, notSet]);
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: {
      globalConfig: mergedGlobalConfig
    }
  }, children);
}
ConfigProvider.getGlobalConfig = getGlobalConfig;
ConfigProvider.setGlobalConfig = setGlobalConfig;
ConfigProvider.displayName = 'ConfigProvider';

export { ConfigProvider as default, getGlobalConfig, merge, setGlobalConfig };
//# sourceMappingURL=ConfigProvider.js.map
