import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { Popup } from '../popup/index.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-D-UKOauR.js';
import '../popup/Popup.js';
import 'lodash-es';
import '../portal/Portal.js';
import 'react-dom';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-CCaTIa7l.js';
import '../_chunks/dep-B2D1svZy.js';
import 'react-is';
import '../_chunks/dep-C1XcmShP.js';
import '../_chunks/dep-Ccktr_jk.js';
import '../_chunks/dep-CgyDw_YI.js';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../_chunks/dep-DbVHGoUC.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../popup/style/css.js';

var tooltipDefaultProps = {
  theme: "dark",
  trigger: "hover",
  placement: "top",
  duration: 0,
  showArrow: true,
  destroyOnClose: true,
  arrowPointAtCenter: true,
  autoAdjustOverflow: true,
  mouseEnterPopup: false,
  disabled: false
};

var _excluded = ["theme", "showArrow", "destroyOnClose", "overlayClassName", "children", "duration", "placement", "onVisibleChange"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tooltip = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, tooltipDefaultProps);
  var theme = props.theme,
    showArrow = props.showArrow,
    destroyOnClose = props.destroyOnClose,
    overlayClassName = props.overlayClassName,
    children = props.children,
    duration = props.duration,
    placement = props.placement,
    onVisibleChange = props.onVisibleChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    timeUp = _useState2[0],
    setTimeUp = _useState2[1];
  var popupRef = useRef(null);
  var timerRef = useRef(null);
  var toolTipClass = classNames("".concat(classPrefix, "-tooltip"), _defineProperty({}, "".concat(classPrefix, "-tooltip--").concat(theme), theme), overlayClassName);
  function handleVisibleChange(visible, context) {
    setTimeUp(false);
    onVisibleChange === null || onVisibleChange === void 0 || onVisibleChange(visible, context);
  }
  useEffect(function () {
    if (duration !== 0 && !timeUp) {
      var _popupRef$current, _popupRef$current$set;
      (_popupRef$current = popupRef.current) === null || _popupRef$current === void 0 || (_popupRef$current$set = _popupRef$current.setVisible) === null || _popupRef$current$set === void 0 || _popupRef$current$set.call(_popupRef$current, true);
      timerRef.current = window.setTimeout(function () {
        var _popupRef$current2, _popupRef$current2$se;
        (_popupRef$current2 = popupRef.current) === null || _popupRef$current2 === void 0 || (_popupRef$current2$se = _popupRef$current2.setVisible) === null || _popupRef$current2$se === void 0 || _popupRef$current2$se.call(_popupRef$current2, false);
        setTimeUp(true);
      }, duration);
    }
    return function () {
      window.clearTimeout(timerRef.current);
    };
  }, [duration, timeUp]);
  useImperativeHandle(ref, function () {
    return _objectSpread({}, popupRef.current || {});
  });
  return /* @__PURE__ */React.createElement(Popup, _objectSpread({
    ref: popupRef,
    destroyOnClose: destroyOnClose,
    showArrow: showArrow,
    overlayClassName: toolTipClass,
    onVisibleChange: handleVisibleChange,
    placement: placement
  }, restProps), children);
});
Tooltip.displayName = "Tooltip";

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map
