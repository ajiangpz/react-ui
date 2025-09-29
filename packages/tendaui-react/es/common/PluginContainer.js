import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import React from 'react';
import '../config-provider/index.js';
import ConfigProvider from '../config-provider/ConfigProvider.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'lodash-es';

/**
 *
 * @param notSet 默认不传设置为true，函数是调用唤起组件不需要同步设置全局上下文信息
 * @returns
 */
var PluginContainer = function PluginContainer(props) {
  var _props$globalConfig;
  return /*#__PURE__*/React.createElement(React.Fragment, null, props !== null && props !== void 0 && (_props$globalConfig = props.globalConfig) !== null && _props$globalConfig !== void 0 && _props$globalConfig.isContextEffectPlugin ? /*#__PURE__*/React.createElement(ConfigProvider, _extends({
    notSet: true
  }, props), props === null || props === void 0 ? void 0 : props.children) : props === null || props === void 0 ? void 0 : props.children);
};

export { PluginContainer as default };
//# sourceMappingURL=PluginContainer.js.map
