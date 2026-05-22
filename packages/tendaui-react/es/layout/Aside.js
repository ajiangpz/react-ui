import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

var _excluded = ["width", "className", "style", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Aside = function Aside(props) {
  var _useDefaultProps = useDefaultProps(props, {
      width: "232px"
    }),
    width = _useDefaultProps.width,
    className = _useDefaultProps.className,
    style = _useDefaultProps.style,
    children = _useDefaultProps.children,
    otherAsideProps = _objectWithoutProperties(_useDefaultProps, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var asideClassNames = classNames("".concat(classPrefix, "-layout__sider"), className);
  var asideWidth = typeof width === "number" ? "".concat(width, "px") : width;
  var asideStyle = _objectSpread({
    width: asideWidth,
    maxWidth: asideWidth,
    minWidth: asideWidth,
    flex: "0 0 ".concat(asideWidth)
  }, style);
  return /* @__PURE__ */React.createElement("aside", _objectSpread({
    className: asideClassNames,
    style: asideStyle
  }, otherAsideProps), children);
};
Aside.displayName = "Aside";

export { Aside as default };
//# sourceMappingURL=Aside.js.map
