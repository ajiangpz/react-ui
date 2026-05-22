import { _ as _defineProperty } from '../../../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../../../_chunks/dep-DN7d1SzH.js';
import React from 'react';
import classNames from 'classnames';
import ColorSlider from './slider.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../utils/color-picker/index.js';
import '../../../_chunks/dep-D1aIcw94.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CgyDw_YI.js';
import '../../../_chunks/dep-BbeHB7S3.js';

var _excluded = ["color", "baseClassName", "onChange"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Alpha = function Alpha(props) {
  var color = props.color,
    baseClassName = props.baseClassName,
    onChange = props.onChange,
    rest = _objectWithoutProperties(props, _excluded);
  var handleChange = function handleChange(v) {
    onChange === null || onChange === void 0 || onChange(v / 100);
  };
  var railStyle = {
    background: "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(props.color.rgb, ")")
  };
  return /* @__PURE__ */React.createElement(ColorSlider, _objectSpread({
    baseClassName: baseClassName,
    className: classNames(["".concat(baseClassName, "__alpha"), "".concat(baseClassName, "--bg-alpha")]),
    color: color,
    value: color.alpha * 100,
    onChange: handleChange,
    railStyle: railStyle,
    type: "alpha",
    maxValue: 100
  }, rest));
};
var AlphaSlider = /*#__PURE__*/React.memo(Alpha);

export { AlphaSlider as default };
//# sourceMappingURL=alpha.js.map
