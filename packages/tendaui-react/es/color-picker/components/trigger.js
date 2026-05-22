import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../../_chunks/dep-CzLhKWCf.js';
import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { C as Color, g as getColorObject } from '../../_chunks/dep-D1aIcw94.js';
import { i as initColorFormat } from '../../_chunks/dep-CMQtlHHc.js';
import { Input } from '../../input/index.js';
import { u as useClassNames } from '../../_chunks/dep-9noBLlv1.js';
import { n as noop } from '../../_chunks/dep-U1T8CQY9.js';
import '../../_chunks/dep-D-UKOauR.js';
import '../../_chunks/dep-Chz4ZJCb.js';
import '../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../_chunks/dep-CgyDw_YI.js';
import '../../input/Input.js';
import '../../_chunks/dep-DN7d1SzH.js';
import '@tendaui/icons';
import '../../_chunks/dep-BRbJGDI9.js';
import '../../_chunks/dep-DRwijJcv.js';
import '../../_chunks/dep-CCaTIa7l.js';
import '../../_chunks/dep-D6YxJv-F.js';
import '../../_chunks/dep-DGvfel3I.js';
import '../../_chunks/dep-u7AyxuYF.js';
import '../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../_chunks/dep-BGP3l2nd.js';
import '../../config-provider/index.js';
import '../../config-provider/ConfigProvider.js';
import '../../input/InputGroup.js';
import '../../input/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorPickerTrigger = function ColorPickerTrigger(props) {
  var baseClassName = useClassNames();
  var _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$borderless = props.borderless,
    borderless = _props$borderless === void 0 ? false : _props$borderless,
    _props$inputProps = props.inputProps,
    inputProps = _props$inputProps === void 0 ? {
      autoWidth: true
    } : _props$inputProps,
    clearable = props.clearable,
    onClear = props.onClear,
    _props$format = props.format,
    format = _props$format === void 0 ? "RGB" : _props$format,
    _props$enableAlpha = props.enableAlpha,
    enableAlpha = _props$enableAlpha === void 0 ? false : _props$enableAlpha,
    value = props.value,
    onChange = props.onChange;
  var _useState = useState(value || ""),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  useEffect(function () {
    setInputValue(value || "");
  }, [value]);
  var handleInputChange = useCallback(function (input) {
    setInputValue(input);
  }, []);
  var handleBlur = useCallback(function () {
    if (!inputValue) {
      return;
    }
    if (Color.isValid(inputValue)) {
      var colorInstance = new Color(inputValue);
      var finalFormat = initColorFormat(format, enableAlpha);
      var formattedValue = colorInstance.getFormattedColor(finalFormat, enableAlpha);
      if (formattedValue !== value) {
        onChange === null || onChange === void 0 || onChange(formattedValue, {
          color: getColorObject(colorInstance),
          trigger: "input"
        });
      }
      setInputValue(formattedValue);
    } else {
      setInputValue(value || "");
    }
  }, [inputValue, value, onChange, format, enableAlpha]);
  var handleEnter = useCallback(function () {
    handleBlur();
  }, [handleBlur]);
  return /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__trigger--default")
  }, /* @__PURE__ */React.createElement(Input, _objectSpread(_objectSpread({
    borderless: borderless,
    clearable: clearable
  }, inputProps), {}, {
    value: inputValue,
    disabled: disabled,
    label: /* @__PURE__ */React.createElement("div", {
      className: classNames("".concat(baseClassName, "__trigger--default__color"), "".concat(baseClassName, "--bg-alpha"))
    }, /* @__PURE__ */React.createElement("span", {
      className: "color-inner",
      style: {
        background: value
      }
    })),
    onChange: handleInputChange,
    onBlur: handleBlur,
    onEnter: handleEnter,
    onClear: onClear || noop
  })));
};
var ColorTrigger = /*#__PURE__*/React.memo(ColorPickerTrigger);

export { ColorTrigger as default };
//# sourceMappingURL=trigger.js.map
