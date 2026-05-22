import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React, { forwardRef } from 'react';
import { f as forwardRefWithStatics } from './dep-Do9UdkhS.js';
import Check from '../common/Check.js';
import { u as useDefaultProps } from './dep-DGvfel3I.js';

var radioDefaultProps = {
  allowUncheck: false,
  defaultChecked: false,
  disabled: void 0,
  readonly: void 0,
  value: void 0
};
var radioGroupDefaultProps = {
  allowUncheck: false,
  disabled: void 0,
  readonly: void 0,
  size: "medium",
  variant: "outline",
  theme: "radio"
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RadioButton = /*#__PURE__*/forwardRef(function (props, ref) {
  return /* @__PURE__ */React.createElement(Check, _objectSpread({
    ref: ref,
    type: "radio-button"
  }, useDefaultProps(props, radioDefaultProps)));
});
RadioButton.displayName = "RadioButton";
var Radio = forwardRefWithStatics(function (props, ref) {
  return /* @__PURE__ */React.createElement(Check, _objectSpread({
    ref: ref,
    type: "radio"
  }, useDefaultProps(props, radioDefaultProps)));
}, {
  Button: RadioButton
});
Radio.displayName = "Radio";

export { Radio as R, radioGroupDefaultProps as r };
//# sourceMappingURL=dep-C0K5Xywv.js.map
