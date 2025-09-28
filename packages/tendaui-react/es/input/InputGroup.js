import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DcgYxvIK.js';
import React, { forwardRef } from 'react';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-0Agal8xo.js';

var _excluded = ["separate", "children", "className"];
var InputGroup = /*#__PURE__*/forwardRef(function (props, ref) {
  var separate = props.separate,
    children = props.children,
    className = props.className,
    wrapperProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classNames("t-input-group", className, _defineProperty({}, "t-input-group--separate", separate))
  }, wrapperProps), children);
});
InputGroup.displayName = 'InputGroup';

export { InputGroup as default };
//# sourceMappingURL=InputGroup.js.map
