import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { R as React } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { u as useConfig } from './dep-CaeblIEM.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';

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
  placeholder: void 0,
  readonly: false,
  reserveKeyword: false,
  showArrow: true,
  size: "medium",
  status: "default",
  valueType: "value"
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
  return /* @__PURE__ */React.createElement("li", {
    className: classNames("".concat(classPrefix, "-select-option-group"), _defineProperty({}, "".concat(classPrefix, "-select-option-group__divider"), divider))
  }, (label !== null && label !== void 0 ? label : false) && /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-select-option-group__header")
  }, label), children);
  return;
};

export { OptionGroup as O, selectDefaultProps as s };
//# sourceMappingURL=dep-Bj9PpzCF.js.map
