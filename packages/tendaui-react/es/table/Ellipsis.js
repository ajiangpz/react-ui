import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useRef, useCallback, useState } from 'react';
import classNames from 'classnames';
import { Tooltip } from '../tooltip/index.js';
import '../_chunks/dep-D-UKOauR.js';
import '../tooltip/Tooltip.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../popup/index.js';
import '../popup/Popup.js';
import 'lodash-es';
import '../portal/Portal.js';
import 'react-dom';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-CCaTIa7l.js';
import '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-B2D1svZy.js';
import 'react-is';
import '../_chunks/dep-C1XcmShP.js';
import '../_chunks/dep-Ccktr_jk.js';
import '../_chunks/dep-CgyDw_YI.js';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../_chunks/dep-DbVHGoUC.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../popup/style/css.js';
import './css.js';

function isNodeOverflow(node) {
  if (!node) return false;
  return node.scrollWidth > node.clientWidth;
}

function useDebounce(fn, delay) {
  var timeoutRef = useRef(null);
  return useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(function () {
      fn.apply(void 0, args);
    }, delay);
  }, [fn, delay]);
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Ellipsis(props) {
  var _props$classPrefix = props.classPrefix,
    classPrefix = _props$classPrefix === void 0 ? "td" : _props$classPrefix;
  var root = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOverflow = _useState2[0],
    setIsOverflow = _useState2[1];
  var ellipsisClasses = classNames(["".concat(classPrefix, "-table__ellipsis"), "".concat(classPrefix, "-text-ellipsis")]);
  var innerEllipsisClassName = ["".concat(classPrefix, "-table__ellipsis-content"), props.overlayClassName];
  var onTriggerMouseenter = function onTriggerMouseenter() {
    if (!root.current) return;
    setIsOverflow(isNodeOverflow(root.current));
  };
  var onTriggerMouseleave = function onTriggerMouseleave() {
    setIsOverflow(isNodeOverflow(root.current));
  };
  var onMouseAround = useDebounce(function (e) {
    e.type === "mouseleave" ? onTriggerMouseleave() : onTriggerMouseenter();
  }, 80);
  var cellNode = props.content || props.children;
  var ellipsisContent = /* @__PURE__ */React.createElement("div", {
    ref: root,
    className: ellipsisClasses,
    onMouseEnter: onMouseAround,
    onMouseLeave: onMouseAround
  }, cellNode);
  var content = null;
  var tooltipProps = props.tooltipProps;
  if (isOverflow) {
    var rProps = _objectSpread({
      content: props.popupContent || cellNode,
      destroyOnClose: true,
      zIndex: props.zIndex,
      attach: props.attach,
      placement: props.placement,
      overlayClassName: tooltipProps !== null && tooltipProps !== void 0 && tooltipProps.overlayClassName ? innerEllipsisClassName.concat(tooltipProps.overlayClassName) : innerEllipsisClassName
    }, props.tooltipProps || {});
    content = /* @__PURE__ */React.createElement(Tooltip, _objectSpread({}, rProps), ellipsisContent);
  } else {
    content = ellipsisContent;
  }
  return content;
}
Ellipsis.displayName = "Ellipsis";

export { Ellipsis as default };
//# sourceMappingURL=Ellipsis.js.map
