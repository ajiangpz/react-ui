import React, { useRef, useCallback, useEffect } from 'react';
import '../../utils/color-picker/index.js';
import { u as useMouseEvent } from '../../../_chunks/dep-BbeHB7S3.js';
import { l as SATURATION_PANEL_DEFAULT_HEIGHT, S as SATURATION_PANEL_DEFAULT_WIDTH } from '../../../_chunks/dep-D1aIcw94.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-Cwish4GD.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CgyDw_YI.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';

var Saturation = function Saturation(props) {
  var color = props.color,
    disabled = props.disabled,
    onChange = props.onChange,
    baseClassName = props.baseClassName;
  var panelRef = useRef(null);
  var panelRectRef = useRef({
    width: SATURATION_PANEL_DEFAULT_WIDTH,
    height: SATURATION_PANEL_DEFAULT_HEIGHT
  });
  var styles = function styles() {
    var saturation = color.saturation,
      value = color.value,
      rgb = color.rgb;
    var _panelRectRef$current = panelRectRef.current,
      width = _panelRectRef$current.width,
      height = _panelRectRef$current.height;
    var top = Math.round((1 - value) * height);
    var left = Math.round(saturation * width);
    return {
      color: rgb,
      left: "".concat(left, "px"),
      top: "".concat(top, "px")
    };
  };
  var getSaturationAndValue = function getSaturationAndValue(coordinate) {
    var _panelRectRef$current2 = panelRectRef.current,
      width = _panelRectRef$current2.width,
      height = _panelRectRef$current2.height;
    var x = coordinate.x,
      y = coordinate.y;
    var saturation = Math.round(x / width * 100);
    var value = Math.round((1 - y / height) * 100);
    return {
      saturation: saturation,
      value: value
    };
  };
  var handleDrag = useCallback(function (_ref) {
    var x = _ref.x,
      y = _ref.y;
    if (disabled) return;
    var _getSaturationAndValu = getSaturationAndValue({
        x: x,
        y: y
      }),
      saturation = _getSaturationAndValu.saturation,
      value = _getSaturationAndValu.value;
    onChange === null || onChange === void 0 || onChange({
      saturation: saturation / 100,
      value: value / 100
    });
  }, [disabled, onChange]);
  useMouseEvent(panelRef, {
    onDown: function onDown() {
      var _panelRef$current, _panelRef$current2;
      if (disabled) return;
      panelRectRef.current.width = ((_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 ? void 0 : _panelRef$current.offsetWidth) || panelRectRef.current.width;
      panelRectRef.current.height = ((_panelRef$current2 = panelRef.current) === null || _panelRef$current2 === void 0 ? void 0 : _panelRef$current2.offsetHeight) || panelRectRef.current.height;
    },
    onMove: function onMove(_, ctx) {
      handleDrag(ctx.coordinate);
    },
    onUp: function onUp(_, ctx) {
      handleDrag(ctx.coordinate);
    }
  });
  useEffect(function () {
    var _panelRef$current3, _panelRef$current4;
    panelRectRef.current.width = ((_panelRef$current3 = panelRef.current) === null || _panelRef$current3 === void 0 ? void 0 : _panelRef$current3.offsetWidth) || SATURATION_PANEL_DEFAULT_WIDTH;
    panelRectRef.current.height = ((_panelRef$current4 = panelRef.current) === null || _panelRef$current4 === void 0 ? void 0 : _panelRef$current4.offsetHeight) || SATURATION_PANEL_DEFAULT_HEIGHT;
  }, [handleDrag]);
  return /* @__PURE__ */React.createElement("div", {
    ref: panelRef,
    className: "".concat(baseClassName, "__saturation"),
    style: {
      background: "hsl(".concat(color.hue, ", 100%, 50%)")
    }
  }, /* @__PURE__ */React.createElement("span", {
    className: "".concat(baseClassName, "__thumb"),
    role: "slider",
    tabIndex: 0,
    style: styles()
  }));
};
var SaturationPanel = /*#__PURE__*/React.memo(Saturation);

export { SaturationPanel as default };
//# sourceMappingURL=saturation.js.map
