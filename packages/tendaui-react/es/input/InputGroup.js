import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import '../_chunks/dep-D-UKOauR.js';

var _excluded = ["separate", "children", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputGroup = /*#__PURE__*/forwardRef(function (props, ref) {
  var separate = props.separate,
    children = props.children,
    className = props.className,
    wrapperProps = _objectWithoutProperties(props, _excluded);
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: classNames("t-input-group", className, _defineProperty({}, "t-input-group--separate", separate))
  }, wrapperProps), children);
});
InputGroup.displayName = "InputGroup";

export { InputGroup as default };
//# sourceMappingURL=InputGroup.js.map
