import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useRef } from 'react';
import classNames from 'classnames';
import { u as useMouseEvent } from '../_chunks/dep-BbeHB7S3.js';
import '../_chunks/dep-D-UKOauR.js';

var SliderHandleButton = function SliderHandleButton(_ref) {
  var onChange = _ref.onChange,
    style = _ref.style,
    classPrefix = _ref.classPrefix;
  var sliderNodeRef = useRef(null);
  var _useMouseEvent = useMouseEvent(sliderNodeRef, {
      onEnter: function onEnter() {},
      onDown: function onDown() {},
      onMove: function onMove(e) {
        onChange(e);
      },
      onLeave: function onLeave() {},
      onUp: function onUp(e) {
        onChange(e);
      }
    }),
    isMoving = _useMouseEvent.isMoving;
  var handleNode = /* @__PURE__ */React.createElement("div", {
    ref: sliderNodeRef,
    style: style,
    className: "".concat(classPrefix, "-slider__button-wrapper")
  }, /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-slider__button"), _defineProperty({}, "".concat(classPrefix, "-slider__button--dragging"), isMoving))
  }));
  return handleNode;
};

export { SliderHandleButton as default };
//# sourceMappingURL=SliderHandleButton.js.map
