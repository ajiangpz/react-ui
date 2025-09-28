import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DcgYxvIK.js';
import React, { forwardRef, useContext } from 'react';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import { l as isBoolean } from '../_chunks/dep-uPo9oRq0.js';
import { o as omit } from '../_chunks/dep-CCwJVofP.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { u as useControlled } from '../_chunks/dep-IfD-elqQ.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-0Agal8xo.js';
import '../config-provider/ConfigContext.js';

var _excluded = ["allowUncheck", "type", "disabled", "name", "value", "onChange", "indeterminate", "children", "label", "className", "style", "readonly", "onClick"];
/**
 * Check 组件支持使用 CheckContext 进行状态托管
 */
var CheckContext = /*#__PURE__*/React.createContext(null);

/**
 * 托管 Check 组件的状态，请提供 inject() 方法注入托管好的 props
 */

var Check = /*#__PURE__*/forwardRef(function (_props, ref) {
  // 支持从 Context 注入
  var context = useContext(CheckContext);
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
  var _useControlled = useControlled(props, 'checked', TOnChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalChecked = _useControlled2[0],
    setInternalChecked = _useControlled2[1];
  var labelClassName = classNames("".concat(classPrefix, "-").concat(type), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-checked"), internalChecked), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-indeterminate"), indeterminate));
  var isDisabled = disabled || readonly;
  var input = /*#__PURE__*/React.createElement("input", {
    readOnly: readonly,
    type: type === 'radio-button' ? 'radio' : type,
    className: "".concat(classPrefix, "-").concat(type, "__former"),
    checked: internalChecked,
    disabled: disabled,
    name: name,
    tabIndex: -1,
    value: isBoolean(value) ? Number(value) : value,
    "data-value": typeof value === 'string' ? "'".concat(value, "'") : value,
    "data-allow-uncheck": allowUncheck || undefined,
    onClick: function onClick(e) {
      e.stopPropagation();
      if ((type === 'radio-button' || type === 'radio') && allowUncheck && internalChecked) {
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
  // Checkbox/ Radio 内容为空则不再渲染 span，不存在 0:Number 的情况
  var showLabel = !!(children || label);
  var handleLabelClick = function handleLabelClick(event) {
    // 在tree等组件中使用  阻止label触发checked 与expand冲突
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
  return /*#__PURE__*/React.createElement("label", _extends({
    ref: ref,
    tabIndex: disabled ? undefined : 0,
    className: labelClassName,
    title: props.title,
    style: style
  }, omit(htmlProps, ['checkAll', 'stopLabelTrigger']), {
    onClick: onInnerClick
  }), input, /*#__PURE__*/React.createElement("span", {
    className: "".concat(classPrefix, "-").concat(type, "__input")
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    key: "label",
    className: "".concat(classPrefix, "-").concat(type, "__label"),
    onClick: handleLabelClick
  }, children || label));
});
Check.displayName = 'Check';

export { CheckContext, Check as default };
//# sourceMappingURL=Check.js.map
