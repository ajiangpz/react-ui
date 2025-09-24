import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import '../config-provider/index.js';
import ConfigProvider from '../config-provider/ConfigProvider.js';
import '@babel/runtime/helpers/typeof';
import '../config-provider/ConfigContext.js';
import 'lodash-es';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PluginContainer = function PluginContainer(props) {
  var _props$globalConfig;
  return /* @__PURE__ */React.createElement(React.Fragment, null, props !== null && props !== void 0 && (_props$globalConfig = props.globalConfig) !== null && _props$globalConfig !== void 0 && _props$globalConfig.isContextEffectPlugin ? /* @__PURE__ */React.createElement(ConfigProvider, _objectSpread({
    notSet: true
  }, props), props === null || props === void 0 ? void 0 : props.children) : props === null || props === void 0 ? void 0 : props.children);
};

export { PluginContainer as default };
//# sourceMappingURL=PluginContainer.js.map
