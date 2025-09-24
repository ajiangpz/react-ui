import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectDestructuringEmpty from '@babel/runtime/helpers/objectDestructuringEmpty';
import _extends from '@babel/runtime/helpers/extends';
import { Checkbox } from './index.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import '@/style';
import '../_chunks/dep-B-P7n1_H.js';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import '../common/Check.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import 'lodash-es';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-Dqh5DYAh.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-e4v9VeEm.js';
import './style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"]
};
var CheckboxExample = function CheckboxExample(_ref) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useState = reactExports.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /* @__PURE__ */React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */React.createElement(Checkbox, _objectSpread({}, args), "\u672A\u9009\u4E2D\u9879"), /* @__PURE__ */React.createElement(Checkbox, _objectSpread({
    indeterminate: true
  }, args), "\u534A\u9009\u72B6\u6001"), /* @__PURE__ */React.createElement(Checkbox, _objectSpread(_objectSpread({}, args), {}, {
    checked: value,
    onChange: setValue
  }), "\u9009\u4E2D\u9879"), /* @__PURE__ */React.createElement(Checkbox, _objectSpread(_objectSpread({}, args), {}, {
    disabled: true
  }), "\u672A\u9009\u7981\u7528\u9879"), /* @__PURE__ */React.createElement(Checkbox, _objectSpread(_objectSpread({}, args), {}, {
    disabled: true,
    defaultChecked: true
  }), "\u9009\u4E2D\u7981\u7528\u9879"));
};
var Default = {
  render: function render(_ref2) {
    var args = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
    return /* @__PURE__ */React.createElement(CheckboxExample, _objectSpread({}, args));
  }
};

export { Default, meta as default };
//# sourceMappingURL=Checkbox.stories.js.map
