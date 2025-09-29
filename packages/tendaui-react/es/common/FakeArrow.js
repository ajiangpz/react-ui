import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import '../_chunks/dep-D-UKOauR.js';
import '../config-provider/ConfigContext.js';

// 翻转箭头统一组件
function FakeArrow(props) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  return /*#__PURE__*/React.createElement("svg", {
    style: props.style,
    className: classNames("".concat(classPrefix, "-fake-arrow"), _defineProperty({}, "".concat(classPrefix, "-fake-arrow--active"), (props === null || props === void 0 ? void 0 : props.isActive) && !(props !== null && props !== void 0 && props.disabled)), props === null || props === void 0 ? void 0 : props.className),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
    stroke: "black",
    strokeOpacity: "0.9",
    strokeWidth: "1.3"
  }));
}

export { FakeArrow as default };
//# sourceMappingURL=FakeArrow.js.map
