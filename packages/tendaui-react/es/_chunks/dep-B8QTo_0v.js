import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React from 'react';
import { c as classNames } from './dep-Cro9u0Fl.js';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { u as useDefaultProps } from './dep-5jl2j2BI.js';

var selectDefaultProps = {
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  creatable: false,
  loading: false,
  max: 0,
  minCollapsedNum: 0,
  multiple: false,
  placeholder: undefined,
  readonly: false,
  reserveKeyword: false,
  showArrow: true,
  size: 'medium',
  status: 'default',
  valueType: 'value'
};
var optionDefaultProps = {
  checkAll: false,
  disabled: false
};
var optionGroupDefaultProps = {
  divider: true
};

var OptionGroup = function OptionGroup(props) {
  var _useDefaultProps = useDefaultProps(props, optionGroupDefaultProps),
    children = _useDefaultProps.children,
    label = _useDefaultProps.label,
    divider = _useDefaultProps.divider;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  return /*#__PURE__*/React.createElement("li", {
    className: classNames("".concat(classPrefix, "-select-option-group"), _defineProperty({}, "".concat(classPrefix, "-select-option-group__divider"), divider))
  }, (label !== null && label !== void 0 ? label : false) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-select-option-group__header")
  }, label), children);
  return;
};

export { OptionGroup as O, selectDefaultProps as s };
//# sourceMappingURL=dep-B8QTo_0v.js.map
