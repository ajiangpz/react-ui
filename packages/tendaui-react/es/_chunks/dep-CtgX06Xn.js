import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React from 'react';
import Check from '../common/Check.js';
import { u as useDefaultProps } from './dep-DGvfel3I.js';

var checkboxDefaultProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: void 0,
  indeterminate: false,
  readonly: false
};
var checkboxGroupDefaultProps = {
  max: void 0,
  defaultValue: []
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /* @__PURE__ */React.createElement(Check, _objectSpread({
    ref: ref,
    type: "checkbox"
  }, useDefaultProps(props, checkboxDefaultProps)));
});
Checkbox.displayName = "Checkbox";

export { Checkbox as C, checkboxGroupDefaultProps as c };
//# sourceMappingURL=dep-CtgX06Xn.js.map
