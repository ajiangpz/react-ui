import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import '../../utils/color-picker/index.js';
import { u as useMouseEvent } from '../../../_chunks/dep-BbeHB7S3.js';
import { _ as _slicedToArray } from '../../../_chunks/dep-CzLhKWCf.js';
import { m as SLIDER_DEFAULT_WIDTH } from '../../../_chunks/dep-D1aIcw94.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-Cwish4GD.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CgyDw_YI.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';

var useStyles = function useStyles(params, panelRectRef) {
  var color = params.color,
    value = params.value,
    maxValue = params.maxValue,
    type = params.type;
  var _useState = useState({
      left: "",
      color: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    styles = _useState2[0],
    setStyles = _useState2[1];
  useEffect(function () {
    var width = panelRectRef.current.width;
    if (!width) return;
    var left = Math.round(Number(value) / Number(maxValue) * 100);
    var thumbColor = "";
    if (type === "hue") {
      thumbColor = "hsl(".concat(color.hue, ", 100%, 50%)");
    } else if (type === "alpha") {
      thumbColor = color.rgba;
    }
    setStyles({
      left: "".concat(left, "%"),
      color: thumbColor
    });
  }, [color.hue, color.rgba, maxValue, panelRectRef, type, value]);
  return {
    styles: styles
  };
};

var ColorSlider = function ColorSlider(props) {
  var color = props.color,
    _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    _props$value = props.value,
    value = _props$value === void 0 ? 0 : _props$value,
    _props$railStyle = props.railStyle,
    railStyle = _props$railStyle === void 0 ? {} : _props$railStyle,
    _props$maxValue = props.maxValue,
    maxValue = _props$maxValue === void 0 ? 360 : _props$maxValue,
    baseClassName = props.baseClassName,
    disabled = props.disabled,
    onChange = props.onChange,
    type = props.type;
  var panelRef = useRef(null);
  var panelRectRef = useRef({
    width: SLIDER_DEFAULT_WIDTH
  });
  var _useStyles = useStyles({
      color: color,
      value: value,
      maxValue: maxValue,
      type: type
    }, panelRectRef),
    styles = _useStyles.styles;
  var handleDrag = function handleDrag(coordinate) {
    if (disabled) return;
    var width = panelRectRef.current.width;
    var x = coordinate.x;
    var nextValue = Math.round(x / width * Number(maxValue) * 100) / 100;
    console.log(nextValue);
    onChange === null || onChange === void 0 || onChange(nextValue);
  };
  useMouseEvent(panelRef, {
    onDown: function onDown(_, ctx) {
      var _panelRef$current;
      if (disabled) return;
      panelRectRef.current.width = ((_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 ? void 0 : _panelRef$current.offsetWidth) || panelRectRef.current.width;
      handleDrag(ctx.coordinate);
    },
    onMove: function onMove(_, ctx) {
      handleDrag(ctx.coordinate);
    },
    onUp: function onUp(_, ctx) {
      handleDrag(ctx.coordinate);
    }
  });
  useEffect(function () {
    var _panelRef$current2;
    panelRectRef.current.width = ((_panelRef$current2 = panelRef.current) === null || _panelRef$current2 === void 0 ? void 0 : _panelRef$current2.offsetWidth) || SLIDER_DEFAULT_WIDTH;
  }, []);
  var paddingStyle = {
    background: "linear-gradient(90deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.0) 93%, ".concat(props.color.rgb, " 93%, ").concat(props.color.rgb, " 100%)")
  };
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(baseClassName, "__slider-wrapper"), "".concat(baseClassName, "__slider-wrapper--").concat(type, "-type"))
  }, type === "alpha" && /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__slider-padding"),
    style: paddingStyle
  }), /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(baseClassName, "__slider"), className),
    ref: panelRef
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__rail"),
    style: railStyle
  }), /* @__PURE__ */React.createElement("span", {
    className: "".concat(baseClassName, "__thumb"),
    role: "slider",
    tabIndex: 0,
    style: styles
  })));
};
var ColorSlider$1 = /*#__PURE__*/React.memo(ColorSlider);

export { ColorSlider$1 as default };
//# sourceMappingURL=slider.js.map
