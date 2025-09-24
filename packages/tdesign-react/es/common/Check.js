import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React, r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { isBoolean } from 'lodash-es';
import { o as omit } from '../_chunks/dep-C4qiDhnV.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useControlled } from '../_chunks/dep-Dqh5DYAh.js';
import '@babel/runtime/helpers/typeof';
import '../config-provider/ConfigContext.js';

var _excluded = ["allowUncheck", "type", "disabled", "name", "value", "onChange", "indeterminate", "children", "label", "className", "style", "readonly", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CheckContext = /*#__PURE__*/React.createContext(null);
var Check = /*#__PURE__*/reactExports.forwardRef(function (_props, ref) {
  var context = reactExports.useContext(CheckContext);
  var props = context ? context.inject(_props) : _props;
  var _props$allowUncheck = props.allowUncheck,
    allowUncheck = _props$allowUncheck === void 0 ? false : _props$allowUncheck,
    type = props.type,
    disabled = props.disabled,
    name = props.name,
    value = props.value,
    onChange = props.onChange,
    indeterminate = props.indeterminate,
    children = props.children,
    label = props.label,
    className = props.className,
    style = props.style,
    readonly = props.readonly,
    onClick = props.onClick,
    htmlProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var TOnChange = onChange;
  var _useControlled = useControlled(props, "checked", TOnChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalChecked = _useControlled2[0],
    setInternalChecked = _useControlled2[1];
  var labelClassName = classNames("".concat(classPrefix, "-").concat(type), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-checked"), internalChecked), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-indeterminate"), indeterminate));
  var isDisabled = disabled || readonly;
  var input = /* @__PURE__ */React.createElement("input", {
    readOnly: readonly,
    type: type === "radio-button" ? "radio" : type,
    className: "".concat(classPrefix, "-").concat(type, "__former"),
    checked: internalChecked,
    disabled: disabled,
    name: name,
    tabIndex: -1,
    value: isBoolean(value) ? Number(value) : value,
    "data-value": typeof value === "string" ? "'".concat(value, "'") : value,
    "data-allow-uncheck": allowUncheck || void 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      if ((type === "radio-button" || type === "radio") && allowUncheck && internalChecked) {
        setInternalChecked(!e.currentTarget.checked, {
          e: e
        });
      }
    },
    onChange: function onChange(e) {
      if (isDisabled) return;
      setInternalChecked(e.currentTarget.checked, {
        e: e
      });
    }
  });
  var showLabel = !!(children || label);
  var handleLabelClick = function handleLabelClick(event) {
    if (props.stopLabelTrigger) {
      event.preventDefault();
    }
  };
  var onInnerClick = function onInnerClick(e) {
    if (isDisabled) return;
    onClick === null || onClick === void 0 || onClick({
      e: e
    });
  };
  return /* @__PURE__ */React.createElement("label", _objectSpread(_objectSpread({
    ref: ref,
    tabIndex: disabled ? void 0 : 0,
    className: labelClassName,
    title: props.title,
    style: style
  }, omit(htmlProps, ["checkAll", "stopLabelTrigger"])), {}, {
    onClick: onInnerClick
  }), input, /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-").concat(type, "__input")
  }), showLabel && /* @__PURE__ */React.createElement("span", {
    key: "label",
    className: "".concat(classPrefix, "-").concat(type, "__label"),
    onClick: handleLabelClick
  }, children || label));
});
Check.displayName = "Check";

export { CheckContext, Check as default };
//# sourceMappingURL=Check.js.map
