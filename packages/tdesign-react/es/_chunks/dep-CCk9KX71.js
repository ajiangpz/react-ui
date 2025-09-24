import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React, r as reactExports } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { XCircle, EyeOff, Eye } from 'lucide-react';
import { u as useIsomorphicLayoutEffect } from './dep-6TeJvJOF.js';
import { u as useControlled } from './dep-Dqh5DYAh.js';
import { p as parseTNode } from './dep-DWZDJ_hQ.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';
import { isFunction } from 'lodash-es';
import { u as useConfig } from './dep-CaeblIEM.js';
import './style/css.js';

var inputDefaultProps = {
  align: "left",
  allowInputOverMax: false,
  autoWidth: false,
  autocomplete: void 0,
  autofocus: false,
  borderless: false,
  // 是否允许输入，默认是 true，表示组件内部的 input 元素允许输入；readonly 为 true 时，此值失效
  allowInput: true,
  // 是否可清空，值为 true 时，输入框后会有一个清空按钮，点击后清空输入框；readonly 为 true 时，此值失效
  clearable: false,
  placeholder: void 0,
  // 是否只读，在只读模式下，输入框不能输入，且没有清除按钮，优先级高于 allowInput、clearable
  readonly: false,
  showClearIconOnEmpty: false,
  showLimitNumber: false,
  size: "medium",
  spellCheck: false,
  status: "default",
  type: "text",
  defaultValue: ""
};

var _excluded$1 = ["type", "autoWidth", "borderless", "placeholder", "disabled", "status", "size", "className", "inputClass", "style", "prefixIcon", "suffixIcon", "clearable", "tips", "align", "maxlength", "maxcharacter", "showClearIconOnEmpty", "autofocus", "autocomplete", "readonly", "label", "suffix", "showInput", "keepWrapperWidth", "showLimitNumber", "allowInput", "allowInputOverMax", "name", "format", "onClick", "onClear", "onEnter", "onKeydown", "onKeyup", "onKeypress", "onFocus", "onBlur", "onPaste", "onMouseenter", "onMouseleave", "onWheel", "onCompositionstart", "onCompositionend", "onValidate", "onChange"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var renderIcon = function renderIcon(classPrefix, type, icon) {
  var result = parseTNode(icon);
  var iconClassName = icon ? "".concat(classPrefix, "-input__").concat(type, "-icon") : "";
  return result ? /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-input__").concat(type, " ").concat(iconClassName)
  }, result) : null;
};
var Input$1 = /*#__PURE__*/reactExports.forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, inputDefaultProps);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var type = props.type,
    autoWidth = props.autoWidth,
    borderless = props.borderless,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "\u8BF7\u8F93\u5165\u5185\u5BB9" : _props$placeholder,
    disabled = props.disabled,
    status = props.status,
    size = props.size,
    className = props.className,
    inputClass = props.inputClass,
    style = props.style,
    prefixIcon = props.prefixIcon,
    suffixIcon = props.suffixIcon,
    clearable = props.clearable,
    tips = props.tips,
    align = props.align,
    maxlength = props.maxlength,
    maxcharacter = props.maxcharacter,
    showClearIconOnEmpty = props.showClearIconOnEmpty,
    autofocus = props.autofocus,
    autocomplete = props.autocomplete,
    readonly = props.readonly,
    label = props.label,
    suffix = props.suffix,
    _props$showInput = props.showInput,
    showInput = _props$showInput === void 0 ? true : _props$showInput,
    keepWrapperWidth = props.keepWrapperWidth,
    showLimitNumber = props.showLimitNumber,
    allowInput = props.allowInput,
    allowInputOverMax = props.allowInputOverMax,
    name = props.name,
    format = props.format,
    _onClick = props.onClick,
    onClear = props.onClear,
    onEnter = props.onEnter,
    onKeydown = props.onKeydown,
    onKeyup = props.onKeyup,
    onKeypress = props.onKeypress,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPaste = props.onPaste,
    onMouseenter = props.onMouseenter,
    onMouseleave = props.onMouseleave,
    _onWheel = props.onWheel,
    onCompositionstart = props.onCompositionstart,
    onCompositionend = props.onCompositionend,
    onValidate = props.onValidate,
    onChangeFromProps = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded$1);
  var composingRef = reactExports.useRef(false);
  var _useControlled = useControlled(props, "value", onChangeFromProps),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var inputRef = reactExports.useRef(null);
  var inputPreRef = reactExports.useRef(null);
  var wrapperRef = reactExports.useRef(null);
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHover = _useState2[0],
    toggleIsHover = _useState2[1];
  var _useState3 = reactExports.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    toggleIsFocused = _useState4[1];
  var _useState5 = reactExports.useState(type),
    _useState6 = _slicedToArray(_useState5, 2),
    renderType = _useState6[0],
    setRenderType = _useState6[1];
  var _useState7 = reactExports.useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    composingValue = _useState8[0],
    setComposingValue = _useState8[1];
  var isInnerInputReadonly = readonly || !allowInput;
  var isValueEnabled = value && !disabled;
  var isShowClearIcon = (clearable && isValueEnabled || showClearIconOnEmpty) && isHover;
  var suffixIconNew = suffixIcon;
  if (isShowClearIcon) suffixIconNew = /* @__PURE__ */React.createElement(XCircle, {
    className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
    onMouseDown: handleMouseDown,
    onClick: handleClear,
    absoluteStrokeWidth: true
  });
  if (type === "password" && typeof suffixIcon === "undefined") {
    if (renderType === "password") {
      suffixIconNew = /* @__PURE__ */React.createElement(EyeOff, {
        className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
        onClick: togglePasswordVisible
      });
    } else if (renderType === "text") {
      suffixIconNew = /* @__PURE__ */React.createElement(Eye, {
        className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
        onClick: togglePasswordVisible
      });
    }
  }
  var prefixIconContent = renderIcon("t", "prefix", parseTNode(prefixIcon));
  var suffixIconContent = renderIcon("t", "suffix", parseTNode(suffixIconNew));
  var labelContent = isFunction(label) ? label() : label;
  var suffixContent = isFunction(suffix) ? suffix() : suffix;
  var updateInputWidth = function updateInputWidth() {
    var _inputPreRef$current;
    if (!autoWidth || !inputRef.current) return;
    var offsetWidth = inputPreRef.current.offsetWidth;
    var _inputPreRef$current$ = (_inputPreRef$current = inputPreRef.current) === null || _inputPreRef$current === void 0 ? void 0 : _inputPreRef$current.getBoundingClientRect(),
      width = _inputPreRef$current$.width;
    var calcWidth = width < offsetWidth ? offsetWidth + 1 : width;
    inputRef.current.style.width = "".concat(calcWidth, "px");
  };
  useIsomorphicLayoutEffect(function () {
    requestAnimationFrame(function () {
      updateInputWidth();
    });
  }, [autoWidth, value, placeholder, inputRef, composingValue]);
  reactExports.useEffect(function () {
    var resizeObserver = null;
    if (typeof window.ResizeObserver === "undefined" || !inputRef.current) return;
    resizeObserver = new window.ResizeObserver(function () {
      updateInputWidth();
    });
    resizeObserver.observe(inputRef.current);
    return function () {
      var _resizeObserver$disco, _resizeObserver;
      (_resizeObserver$disco = (_resizeObserver = resizeObserver).disconnect) === null || _resizeObserver$disco === void 0 || _resizeObserver$disco.call(_resizeObserver);
      resizeObserver = null;
    };
  }, [inputRef]);
  reactExports.useEffect(function () {
    setRenderType(type);
  }, [type]);
  var innerValue = composingRef.current ? composingValue : value !== null && value !== void 0 ? value : "";
  var formatDisplayValue = format && !isFocused ? format(innerValue) : innerValue;
  var renderInput = /* @__PURE__ */React.createElement("input", {
    ref: inputRef,
    placeholder: placeholder,
    type: renderType,
    className: classNames("".concat(classPrefix, "-input__inner"), _defineProperty({}, "".concat(classPrefix, "-input--soft-hidden"), !showInput)),
    value: formatDisplayValue,
    readOnly: isInnerInputReadonly,
    disabled: disabled,
    autoComplete: autocomplete,
    autoFocus: autofocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onPaste: handlePaste,
    name: name
  });
  var renderInputNode = /* @__PURE__ */React.createElement("div", {
    className: classNames(inputClass, "".concat(classPrefix, "-input"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-readonly"), readonly), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-focused"), isFocused), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), "".concat(classPrefix, "-align-").concat(align), align), "".concat(classPrefix, "-inpu").concat(classPrefix, "--prefix"), prefixIcon || labelContent), "".concat(classPrefix, "-inpu").concat(classPrefix, "--suffix"), suffixIconContent || suffixContent), "".concat(classPrefix, "-inpu").concat(classPrefix, "--borderless"), borderless), "".concat(classPrefix, "-input--focused"), isFocused)),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onWheel: function onWheel(e) {
      return _onWheel === null || _onWheel === void 0 ? void 0 : _onWheel({
        e: e
      });
    },
    onClick: function onClick(e) {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      _onClick === null || _onClick === void 0 || _onClick({
        e: e
      });
    }
  }, prefixIconContent, labelContent ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-input__prefix")
  }, labelContent) : null, renderInput, autoWidth && /* @__PURE__ */React.createElement("span", {
    ref: inputPreRef,
    className: "".concat(classPrefix, "-input__inpu").concat(classPrefix, "-pre")
  }, innerValue || placeholder), suffixContent ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-input__suffix")
  }, suffixContent) : null, suffixIconContent);
  useIsomorphicLayoutEffect(function () {
    requestAnimationFrame(function () {
      updateInputWidth();
    });
  }, [autoWidth, value, placeholder, inputRef, composingValue]);
  function togglePasswordVisible() {
    var _inputRef$current2;
    if (disabled) return;
    var inputEl = inputRef.current;
    var cursorPosition = ((_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.selectionStart) || 0;
    var toggleType = renderType === "password" ? "text" : "password";
    setRenderType(toggleType);
    requestAnimationFrame(function () {
      inputEl === null || inputEl === void 0 || inputEl.setSelectionRange(cursorPosition, cursorPosition);
    });
  }
  function handleChange(e) {
    var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "input";
    var newStr = e.currentTarget.value;
    if (composingRef.current) {
      setComposingValue(newStr);
    } else {
      setComposingValue(newStr);
      onChange(newStr, {
        e: e,
        trigger: trigger
      });
    }
  }
  function handleMouseDown(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  function handleClear(e) {
    onChange === null || onChange === void 0 || onChange("", {
      e: e,
      trigger: "clear"
    });
    onClear === null || onClear === void 0 || onClear({
      e: e
    });
  }
  function handleKeyDown(e) {
    var key = e.key,
      value2 = e.currentTarget.value;
    key === "Enter" && (onEnter === null || onEnter === void 0 ? void 0 : onEnter(value2, {
      e: e
    }));
    onKeydown === null || onKeydown === void 0 || onKeydown(value2, {
      e: e
    });
  }
  function handleKeyUp(e) {
    var value2 = e.currentTarget.value;
    onKeyup === null || onKeyup === void 0 || onKeyup(value2, {
      e: e
    });
  }
  function handleKeyPress(e) {
    var value2 = e.currentTarget.value;
    onKeypress === null || onKeypress === void 0 || onKeypress(value2, {
      e: e
    });
  }
  function handleCompositionStart(e) {
    composingRef.current = true;
    var value2 = e.currentTarget.value;
    onCompositionstart === null || onCompositionstart === void 0 || onCompositionstart(value2, {
      e: e
    });
  }
  function handleCompositionEnd(e) {
    var value2 = e.currentTarget.value;
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(e);
    }
    onCompositionend === null || onCompositionend === void 0 || onCompositionend(value2, {
      e: e
    });
  }
  function handleFocus(e) {
    if (isInnerInputReadonly) return;
    var value2 = e.currentTarget.value;
    onFocus === null || onFocus === void 0 || onFocus(value2, {
      e: e
    });
    toggleIsFocused(true);
  }
  function handleBlur(e) {
    if (isInnerInputReadonly) return;
    var value2 = e.currentTarget.value;
    onBlur === null || onBlur === void 0 || onBlur(value2, {
      e: e
    });
    toggleIsFocused(false);
  }
  function handlePaste(e) {
    var clipData = e.clipboardData;
    var pasteValue = clipData === null || clipData === void 0 ? void 0 : clipData.getData("text/plain");
    onPaste === null || onPaste === void 0 || onPaste({
      e: e,
      pasteValue: pasteValue
    });
  }
  function handleMouseEnter(e) {
    !readonly && toggleIsHover(true);
    onMouseenter === null || onMouseenter === void 0 || onMouseenter({
      e: e
    });
  }
  function handleMouseLeave(e) {
    !readonly && toggleIsHover(false);
    onMouseleave === null || onMouseleave === void 0 || onMouseleave({
      e: e
    });
  }
  reactExports.useImperativeHandle(ref, function () {
    return {
      currentElement: wrapperRef.current,
      inputElement: inputRef.current,
      focus: function focus() {
        var _inputRef$current3;
        return (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.focus();
      },
      blur: function blur() {
        var _inputRef$current4;
        return (_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.blur();
      },
      select: function select() {
        var _inputRef$current5;
        return (_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.select();
      }
    };
  });
  return /* @__PURE__ */React.createElement("div", _objectSpread$1({
    ref: wrapperRef,
    style: style,
    className: classNames("".concat(classPrefix, "-input__wrap"), className, _defineProperty({}, "".concat(classPrefix, "-input--auto-width"), autoWidth && !keepWrapperWidth))
  }, restProps), renderInputNode, tips && /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-input__tips"))
  }, tips));
});
Input$1.displayName = "Input";

var _excluded = ["separate", "children", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputGroup$1 = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var separate = props.separate,
    children = props.children,
    className = props.className,
    wrapperProps = _objectWithoutProperties(props, _excluded);
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: classNames("t-input-group", className, _defineProperty({}, "t-input-group--separate", separate))
  }, wrapperProps), children);
});
InputGroup$1.displayName = "InputGroup";

var Input = Input$1;
var InputGroup = InputGroup$1;

export { Input as I, InputGroup as a };
//# sourceMappingURL=dep-CCk9KX71.js.map
