import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useMemo, useEffect, forwardRef, useRef, useState, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { IconClose, IconEyeClosed, IconEyeOpened } from '@tendaui/icons';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-BRbJGDI9.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { p as parseTNode } from '../_chunks/dep-D6YxJv-F.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { isNumber, isFunction } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useLocaleReceiver } from '../_chunks/dep-BGP3l2nd.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';

var inputDefaultProps = {
  align: "left",
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
  size: "medium",
  spellCheck: false,
  status: "default",
  type: "text",
  defaultValue: ""
};

function getCharacterLength(str, maxCharacter) {
  var hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}
function getUnicodeLength(str) {
  return Array.from(str).length;
}
function limitUnicodeMaxLength(str, maxLength) {
  return Array.from(str).slice(0, maxLength).join("");
}
function useLengthLimit(params) {
  var allowInputOverMax = params.allowInputOverMax,
    maxlength = params.maxlength,
    maxcharacter = params.maxcharacter,
    onValidate = params.onValidate,
    status = params.status,
    value = params.value;
  var getValueByLimitNumber = function getValueByLimitNumber(inputValue) {
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue) return inputValue;
    if (maxlength) {
      return limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      var r = getCharacterLength(inputValue, maxcharacter);
      if (_typeof(r) === "object") {
        return r.characters;
      }
    }
    return inputValue;
  };
  var limitNumber = useMemo(function () {
    if (typeof value === "number") return String(value);
    if (maxlength && maxcharacter) {
      console.warn("Input", "Pick one of maxlength and maxcharacter please.");
    }
    if (maxlength) {
      var length = value !== null && value !== void 0 && value.length ? getUnicodeLength(value) : 0;
      return "".concat(length, "/").concat(maxlength);
    }
    if (maxcharacter) {
      return "".concat(getCharacterLength(value || ""), "/").concat(maxcharacter);
    }
    return "";
  }, [maxcharacter, maxlength, value]);
  var innerStatus = useMemo(function () {
    if (limitNumber) {
      var _limitNumber$split = limitNumber.split("/"),
        _limitNumber$split2 = _slicedToArray(_limitNumber$split, 2),
        current = _limitNumber$split2[0],
        total = _limitNumber$split2[1];
      return Number(current) > Number(total) ? "error" : "";
    }
    return "";
  }, [limitNumber]);
  var tStatus = useMemo(function () {
    return status || innerStatus;
  }, [status, innerStatus]);
  useEffect(function () {
    onValidate === null || onValidate === void 0 || onValidate({
      error: innerStatus ? "exceed-maximum" : void 0
    });
  }, [innerStatus, onValidate]);
  return {
    tStatus: tStatus,
    limitNumber: limitNumber,
    getValueByLimitNumber: getValueByLimitNumber
  };
}

var _excluded = ["type", "autoWidth", "borderless", "placeholder", "disabled", "size", "className", "inputClass", "style", "prefixIcon", "suffixIcon", "clearable", "tips", "align", "showClearIconOnEmpty", "autofocus", "autocomplete", "readonly", "label", "suffix", "showInput", "keepWrapperWidth", "allowInput", "name", "format", "onClick", "onClear", "onEnter", "onKeydown", "onKeyup", "onKeypress", "onFocus", "onBlur", "onPaste", "onMouseenter", "onMouseleave", "onWheel", "onCompositionstart", "onCompositionend", "onChange", "maxlength", "maxcharacter", "allowInputOverMax", "status", "onValidate", "showLimitNumber"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var renderIcon = function renderIcon(classPrefix, type, icon) {
  var result = parseTNode(icon);
  var iconClassName = icon ? "".concat(classPrefix, "-input__").concat(type, "-icon") : "";
  return result ? /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-input__").concat(type, " ").concat(iconClassName)
  }, result) : null;
};
var Input = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var _classNames2;
  var props = useDefaultProps(originalProps, inputDefaultProps);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useLocaleReceiver = useLocaleReceiver("input"),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2),
    local = _useLocaleReceiver2[0],
    t = _useLocaleReceiver2[1];
  var placeholderText = t(local.placeholder);
  var type = props.type,
    autoWidth = props.autoWidth,
    borderless = props.borderless,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? placeholderText : _props$placeholder,
    disabled = props.disabled,
    size = props.size,
    className = props.className,
    inputClass = props.inputClass,
    style = props.style,
    prefixIcon = props.prefixIcon,
    suffixIcon = props.suffixIcon,
    clearable = props.clearable,
    tips = props.tips,
    align = props.align,
    showClearIconOnEmpty = props.showClearIconOnEmpty,
    autofocus = props.autofocus,
    autocomplete = props.autocomplete,
    readonly = props.readonly,
    label = props.label,
    suffix = props.suffix,
    _props$showInput = props.showInput,
    showInput = _props$showInput === void 0 ? true : _props$showInput,
    keepWrapperWidth = props.keepWrapperWidth,
    allowInput = props.allowInput,
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
    onChangeFromProps = props.onChange,
    maxlength = props.maxlength,
    maxcharacter = props.maxcharacter,
    _props$allowInputOver = props.allowInputOverMax,
    allowInputOverMax = _props$allowInputOver === void 0 ? false : _props$allowInputOver,
    status = props.status,
    onValidate = props.onValidate,
    _props$showLimitNumbe = props.showLimitNumber,
    showLimitNumber = _props$showLimitNumbe === void 0 ? true : _props$showLimitNumbe,
    restProps = _objectWithoutProperties(props, _excluded);
  var composingRef = useRef(false);
  var _useControlled = useControlled(props, "value", onChangeFromProps),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var inputRef = useRef(null);
  var inputPreRef = useRef(null);
  var wrapperRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHover = _useState2[0],
    toggleIsHover = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    toggleIsFocused = _useState4[1];
  var _useState5 = useState(type),
    _useState6 = _slicedToArray(_useState5, 2),
    renderType = _useState6[0],
    setRenderType = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    composingValue = _useState8[0],
    setComposingValue = _useState8[1];
  var isInnerInputReadonly = readonly || !allowInput;
  var isValueEnabled = value && !disabled;
  var isShowClearIcon = (clearable && isValueEnabled || showClearIconOnEmpty) && isHover;
  var _useLengthLimit = useLengthLimit({
      value: value === void 0 ? void 0 : String(value),
      status: status,
      maxlength: maxlength,
      maxcharacter: maxcharacter,
      allowInputOverMax: allowInputOverMax,
      onValidate: onValidate
    }),
    limitNumber = _useLengthLimit.limitNumber,
    getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber,
    tStatus = _useLengthLimit.tStatus;
  var suffixIconNew = suffixIcon;
  if (isShowClearIcon) suffixIconNew = /* @__PURE__ */React.createElement(IconClose, {
    className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
    onMouseDown: handleMouseDown,
    onClick: handleClear
  });
  if (type === "password" && typeof suffixIcon === "undefined") {
    if (renderType === "password") {
      suffixIconNew = /* @__PURE__ */React.createElement(IconEyeClosed, {
        className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
        onClick: togglePasswordVisible
      });
    } else if (renderType === "text") {
      suffixIconNew = /* @__PURE__ */React.createElement(IconEyeOpened, {
        className: "".concat(classPrefix, "-input__suffix-clear ").concat(classPrefix, "-icon"),
        onClick: togglePasswordVisible
      });
    }
  }
  var prefixIconContent = renderIcon("t", "prefix", parseTNode(prefixIcon));
  var suffixIconContent = renderIcon("t", "suffix", parseTNode(suffixIconNew));
  var labelContent = isFunction(label) ? label() : label;
  var suffixContent = isFunction(suffix) ? suffix() : suffix;
  var limitNumberNode = limitNumber && showLimitNumber ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-input__limit-number")
  }, limitNumber) : null;
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
  useEffect(function () {
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
  useEffect(function () {
    setRenderType(type);
  }, [type]);
  useEffect(function () {
    if (value) {
      var limitedValue = getValueByLimitNumber(value);
      if (limitedValue.length !== value.length && !allowInputOverMax) {
        onChange === null || onChange === void 0 || onChange(limitedValue, {
          trigger: "initial"
        });
      }
    }
  }, []);
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
    className: classNames(inputClass, "".concat(classPrefix, "-input"), (_classNames2 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames2, "".concat(classPrefix, "-is-readonly"), readonly), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-focused"), isFocused), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), "".concat(classPrefix, "-align-").concat(align), align), "".concat(classPrefix, "-is-").concat(tStatus), tStatus && tStatus !== "default"), "".concat(classPrefix, "-input--prefix"), prefixIcon || labelContent), "".concat(classPrefix, "-input--suffix"), suffixIconContent || suffixContent || limitNumberNode), "".concat(classPrefix, "-input--borderless"), borderless), _defineProperty(_classNames2, "".concat(classPrefix, "-input--focused"), isFocused))),
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
  }, innerValue || placeholder), suffixContent || limitNumberNode ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-input__suffix")
  }, suffixContent, limitNumberNode) : null, suffixIconContent);
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
    var limitedValue = getValueByLimitNumber(newStr);
    if (composingRef.current) {
      setComposingValue(limitedValue);
    } else {
      setComposingValue(limitedValue);
      onChange(limitedValue, {
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
    if (key === "Enter") {
      onEnter === null || onEnter === void 0 || onEnter(value2, {
        e: e
      });
    }
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
    if (!readonly) {
      toggleIsHover(true);
    }
    onMouseenter === null || onMouseenter === void 0 || onMouseenter({
      e: e
    });
  }
  function handleMouseLeave(e) {
    if (!readonly) {
      toggleIsHover(false);
    }
    onMouseleave === null || onMouseleave === void 0 || onMouseleave({
      e: e
    });
  }
  useImperativeHandle(ref, function () {
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
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: wrapperRef,
    style: style,
    className: classNames("".concat(classPrefix, "-input__wrap"), className, _defineProperty({}, "".concat(classPrefix, "-input--auto-width"), autoWidth && !keepWrapperWidth))
  }, restProps), renderInputNode, tips && /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-input__tips"), "".concat(classPrefix, "-input__tips--").concat(tStatus || "default"))
  }, tips));
});
Input.displayName = "Input";

export { Input as default };
//# sourceMappingURL=Input.js.map
