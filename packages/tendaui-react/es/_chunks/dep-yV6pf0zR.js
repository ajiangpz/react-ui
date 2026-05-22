import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import '../color-picker/utils/color-picker/index.js';
import { u as useCommonClassName } from './dep-C4qhHlmM.js';
import { u as useControlled } from './dep-CCaTIa7l.js';
import { u as useDefaultProps } from './dep-DGvfel3I.js';
import { u as useLocaleReceiver } from './dep-BGP3l2nd.js';
import { u as useClassNames } from './dep-9noBLlv1.js';
import AlphaSlider from '../color-picker/components/panel/alpha.js';
import HueSlider from '../color-picker/components/panel/hue.js';
import SaturationPanel from '../color-picker/components/panel/saturation.js';
import SwatchesPanel from '../color-picker/components/panel/swatches.js';
import FormatPanel from '../color-picker/components/panel/format/index.js';
import { D as DEFAULT_COLOR, C as Color, g as getColorObject, a as DEFAULT_SYSTEM_SWATCH_COLORS } from './dep-D1aIcw94.js';
import { i as initColorFormat } from './dep-CMQtlHHc.js';

var colorPickerDefaultProps = {
  borderless: false,
  clearable: false,
  disabled: false,
  enableAlpha: false,
  format: "RGB",
  showPrimaryColorPreview: true
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Panel = /*#__PURE__*/forwardRef(function (props, ref) {
  var baseClassName = useClassNames();
  var _useCommonClassName = useCommonClassName(),
    STATUS = _useCommonClassName.STATUS;
  var _useLocaleReceiver = useLocaleReceiver("colorPicker"),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2),
    local = _useLocaleReceiver2[0],
    t = _useLocaleReceiver2[1];
  var _useDefaultProps = useDefaultProps(props, colorPickerDefaultProps),
    className = _useDefaultProps.className,
    disabled = _useDefaultProps.disabled,
    enableAlpha = _useDefaultProps.enableAlpha,
    format = _useDefaultProps.format,
    style = _useDefaultProps.style,
    swatchColors = _useDefaultProps.swatchColors,
    showPrimaryColorPreview = _useDefaultProps.showPrimaryColorPreview,
    inputProps = _useDefaultProps.inputProps,
    selectInputProps = _useDefaultProps.selectInputProps,
    onChange = _useDefaultProps.onChange,
    onPaletteBarChange = _useDefaultProps.onPaletteBarChange;
  var _useControlled = useControlled(props, "value", onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    innerValue = _useControlled2[0],
    setInnerValue = _useControlled2[1];
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    setUpdateId = _useState2[1];
  var defaultEmptyColor = DEFAULT_COLOR;
  var colorInstanceRef = useRef(new Color(innerValue || defaultEmptyColor));
  var formatRef = useRef(initColorFormat(format, enableAlpha));
  var baseProps = {
    color: colorInstanceRef.current,
    disabled: disabled,
    baseClassName: baseClassName
  };
  var updateColor = function updateColor(value) {
    colorInstanceRef.current.update(value);
    setUpdateId(window.performance.now());
  };
  var emitColorChange = useCallback(function (trigger) {
    var value = colorInstanceRef.current.getFormattedColor(formatRef.current, enableAlpha);
    setInnerValue(value, {
      color: getColorObject(colorInstanceRef.current),
      trigger: trigger || "palette-saturation-brightness"
    });
    setUpdateId(window.performance.now());
  }, [enableAlpha, setInnerValue]);
  useEffect(function () {
    var currentColor = colorInstanceRef.current.getFormattedColor(formatRef.current, enableAlpha);
    if (innerValue === currentColor) return;
    updateColor(innerValue);
  }, [innerValue]);
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    previewBackground = _useState4[0],
    setPreviewBackground = _useState4[1];
  useEffect(function () {
    var inst = colorInstanceRef.current;
    var next = inst.rgba;
    setPreviewBackground(next);
  }, [innerValue]);
  var handleSatAndValueChange = function handleSatAndValueChange(_ref) {
    var saturation = _ref.saturation,
      value = _ref.value;
    var _colorInstanceRef$cur = colorInstanceRef.current,
      sat = _colorInstanceRef$cur.saturation,
      val = _colorInstanceRef$cur.value;
    var changeTrigger = "palette-saturation-brightness";
    if (value !== val && saturation !== sat) {
      changeTrigger = "palette-saturation-brightness";
      colorInstanceRef.current.saturation = saturation;
      colorInstanceRef.current.value = value;
    } else if (saturation !== sat) {
      changeTrigger = "palette-saturation";
      colorInstanceRef.current.saturation = saturation;
    } else if (value !== val) {
      changeTrigger = "palette-brightness";
      colorInstanceRef.current.value = value;
    } else {
      return;
    }
    emitColorChange(changeTrigger);
  };
  var handleHueChange = function handleHueChange(hue) {
    colorInstanceRef.current.hue = hue;
    emitColorChange("palette-hue-bar");
    onPaletteBarChange === null || onPaletteBarChange === void 0 || onPaletteBarChange({
      color: getColorObject(colorInstanceRef.current)
    });
  };
  var handleAlphaChange = function handleAlphaChange(alpha) {
    colorInstanceRef.current.alpha = alpha;
    emitColorChange("palette-alpha-bar");
    onPaletteBarChange === null || onPaletteBarChange === void 0 || onPaletteBarChange({
      color: getColorObject(colorInstanceRef.current)
    });
  };
  var systemColorsDerived = swatchColors;
  if (systemColorsDerived === void 0) {
    systemColorsDerived = _toConsumableArray(DEFAULT_SYSTEM_SWATCH_COLORS);
  }
  var showSystemColors = Array.isArray(systemColorsDerived);
  var handleSwatchSetColor = function handleSwatchSetColor(value, trigger) {
    updateColor(value);
    emitColorChange(trigger);
  };
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(baseClassName, "__panel"), disabled ? STATUS.disabled : false, className),
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: _objectSpread({}, style),
    ref: ref
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__body")
  }, /* @__PURE__ */React.createElement(SaturationPanel, _objectSpread(_objectSpread({}, baseProps), {}, {
    onChange: handleSatAndValueChange
  })), /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__sliders-wrapper")
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__sliders")
  }, /* @__PURE__ */React.createElement(HueSlider, _objectSpread(_objectSpread({}, baseProps), {}, {
    onChange: handleHueChange
  })), enableAlpha && /* @__PURE__ */React.createElement(AlphaSlider, _objectSpread(_objectSpread({}, baseProps), {}, {
    onChange: handleAlphaChange
  }))), showPrimaryColorPreview ? /* @__PURE__ */React.createElement("div", {
    className: classNames(["".concat(baseClassName, "__sliders-preview"), "".concat(baseClassName, "--bg-alpha")])
  }, /* @__PURE__ */React.createElement("span", {
    className: "".concat(baseClassName, "__sliders-preview-inner"),
    style: {
      background: previewBackground
    }
  })) : null), /* @__PURE__ */React.createElement(FormatPanel, _objectSpread(_objectSpread({}, baseProps), {}, {
    format: format,
    enableAlpha: enableAlpha,
    inputProps: inputProps,
    selectInputProps: selectInputProps,
    onInputChange: function onInputChange() {
      return emitColorChange("input");
    }
  })), showSystemColors && /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__swatches-wrap")
  }, showSystemColors && /* @__PURE__ */React.createElement(SwatchesPanel, _objectSpread(_objectSpread({}, baseProps), {}, {
    title: t(local.swatchColorTitle),
    colors: systemColorsDerived,
    onSetColor: function onSetColor(color) {
      return handleSwatchSetColor(color, "preset");
    }
  })))));
});
Panel.displayName = "Panel";
var ColorPanel = /*#__PURE__*/React.memo(Panel);

export { ColorPanel as C, colorPickerDefaultProps as c };
//# sourceMappingURL=dep-yV6pf0zR.js.map
