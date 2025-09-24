import { R as React, r as reactExports } from './_chunks/dep-C52Ear6B.js';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import clsx from 'clsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { tv } from 'tailwind-variants';
import { Loading } from './loading/index.js';
export { P as Popup } from './_chunks/dep-DJbNj1-A.js';
import { B as Button } from './_chunks/dep-CWE5nGYy.js';
export { I as Input, a as InputGroup } from './_chunks/dep-CCk9KX71.js';
import classNames from 'classnames';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import { p as parseTNode } from './_chunks/dep-DWZDJ_hQ.js';
import { n as noop } from './_chunks/dep-U1T8CQY9.js';
import { u as useConfig } from './_chunks/dep-CaeblIEM.js';
import { u as useGlobalIcon } from './_chunks/dep-Dp0dxPtr.js';
import { c as composeRefs } from './_chunks/dep-C1XcmShP.js';
import { u as useDefaultProps } from './_chunks/dep-e4v9VeEm.js';
import './style/css.js';
export { C as Checkbox, N as NotificationProvider, n as notification, u as useNotification } from './_chunks/dep-CsTff4aB.js';
import './config-provider/index.js';
import { Tag } from './tag/index.js';
export { TagInput } from './tag-input/index.js';
import { isNumber, isString, get, isPlainObject, isEqual, isFunction, debounce, isObject, isUndefined } from 'lodash-es';
import { g as getOffsetTopToContainer } from './_chunks/dep-C4qiDhnV.js';
import { u as useControlled } from './_chunks/dep-Dqh5DYAh.js';
import { f as forwardRefWithStatics } from './_chunks/dep-Bdljkd5o.js';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { u as useDomRefCallback } from './_chunks/dep-py6q5XhT.js';
import FakeArrow from './common/FakeArrow.js';
import { SelectInput } from './select-input/index.js';
import { u as useVirtualScroll } from './_chunks/dep-Dz5FZMJg.js';
import _typeof from '@babel/runtime/helpers/typeof';
import { p as parseContentTNode } from './_chunks/dep-B232LrJC.js';
import Portal from './common/Portal.js';
import { u as useMouseEvent, g as getScrollbarWidth, a as useSetState, b as useAttach } from './_chunks/dep-DJQi-lRj.js';
import { CheckCircleFilledIcon, InfoCircleFilledIcon, CloseIcon } from 'tdesign-icons-react';
import { u as useIsomorphicLayoutEffect, g as getAttach } from './_chunks/dep-6TeJvJOF.js';
import { r as render } from './_chunks/dep-B6ztXA2I.js';
import PluginContainer from './common/PluginContainer.js';
import ConfigProvider from './config-provider/ConfigProvider.js';
export { merge } from './config-provider/ConfigProvider.js';
export { S as Switch } from './_chunks/dep-Dz65bPKB.js';
export { Form } from './form/index.js';
export { default as ConfigContext } from './config-provider/ConfigContext.js';
import './loading/Loading.js';
import './loading/Gradient.js';
import './_chunks/dep-2sN3YgeE.js';
import './select-input/hook/useSingle.js';
import './select-input/hook/useMultiple.js';
import './_chunks/dep-BuRcs8ei.js';
import 'react-is';
import './_chunks/dep-DU45RdGB.js';
import '@popperjs/core';
import 'react-fast-compare';
import './portal/Portal.js';
import './_chunks/dep-m5bu896E.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import './_chunks/dep-BpYapwIO.js';
import './form/FormContext.js';
import 'validator/lib/isDate';
import 'validator/lib/isEmail';
import 'validator/lib/isURL';
import './_chunks/dep-CcL4GSfv.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './common/Check.js';
import './tag-input/TagInput.js';
import './tag-input/hooks/useTagList.js';
import './hooks/useDragSorter.js';
import './form/utils/index.js';
import './tag/Tag.js';
import 'tinycolor2';
import './_chunks/dep-CtWL9Bq2.js';
import 'hoist-non-react-statics';
import './_chunks/dep-SBwAlUYy.js';
import './form/Form.js';
import './form/hooks/useInstance.js';
import './form/FormList.js';

var maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full"
};
var Container = function Container(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? "xl" : _ref$maxWidth;
  return /* @__PURE__ */React.createElement("div", {
    className: "mx-auto px-4 ".concat(maxWidthClasses[maxWidth], " ").concat(className)
  }, children);
};

var _excluded$6 = ["cols", "gap", "className", "children"];
function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var gridClassMap = {
  cols: {
    12: "grid-cols-12",
    11: "grid-cols-11",
    10: "grid-cols-10",
    9: "grid-cols-9",
    8: "grid-cols-8",
    7: "grid-cols-7",
    6: "grid-cols-6",
    5: "grid-cols-5",
    4: "grid-cols-4",
    3: "grid-cols-3",
    2: "grid-cols-2",
    1: "grid-cols-1"
  },
  gap: {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16"
  }
};
var Grid = function Grid(_ref) {
  var _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? 12 : _ref$cols,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 4 : _ref$gap,
    className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded$6);
  return /* @__PURE__ */React.createElement("div", _objectSpread$a({
    className: clsx("grid ".concat(gridClassMap.cols[cols], " ").concat(gridClassMap.gap[gap]), className)
  }, rest), children);
};

var directionClasses = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
};
var justifyClasses = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
};
var alignClasses = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch"
};
var wrapClasses = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse"
};
var gapClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16"
};
var Flex = function Flex(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "row" : _ref$direction,
    _ref$justify = _ref.justify,
    justify = _ref$justify === void 0 ? "start" : _ref$justify,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "stretch" : _ref$align,
    _ref$wrap = _ref.wrap,
    wrap = _ref$wrap === void 0 ? "nowrap" : _ref$wrap,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 0 : _ref$gap;
  return /* @__PURE__ */React.createElement("div", {
    className: "flex ".concat(directionClasses[direction], " ").concat(justifyClasses[justify], " ").concat(alignClasses[align], " ").concat(wrapClasses[wrap], " ").concat(gapClasses[gap], " ").concat(className)
  }, children);
};

function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around"
};
var alignMap = {
  top: "items-start",
  middle: "items-center",
  bottom: "items-end"
};
var Row = function Row(_ref) {
  var _ref$gutter = _ref.gutter,
    gutter = _ref$gutter === void 0 ? 0 : _ref$gutter,
    _ref$justify = _ref.justify,
    justify = _ref$justify === void 0 ? "start" : _ref$justify,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "top" : _ref$align,
    className = _ref.className,
    children = _ref.children;
  var _ref2 = Array.isArray(gutter) ? gutter : [gutter, 0],
    _ref3 = _slicedToArray(_ref2, 2),
    horizontal = _ref3[0],
    vertical = _ref3[1];
  var rowStyle = {
    marginLeft: "-".concat(horizontal / 2, "px"),
    marginRight: "-".concat(horizontal / 2, "px"),
    rowGap: vertical
  };
  return /* @__PURE__ */React.createElement("div", {
    className: clsx("flex flex-wrap", justifyMap[justify], alignMap[align], className),
    style: rowStyle
  }, React.Children.map(children, function (child) {
    var _child$props;
    return /*#__PURE__*/React.cloneElement(child, {
      style: _objectSpread$9({
        paddingLeft: "".concat(horizontal / 2, "px"),
        paddingRight: "".concat(horizontal / 2, "px"),
        paddingTop: "-".concat(vertical / 2, "px"),
        paddingBottom: "-".concat(vertical / 2, "px")
      }, ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.style) || {})
    });
  }));
};

var SPAN = 24;
function toPercent(n) {
  return (n / SPAN * 100).toFixed(2).replace(/\.?0+$/, "") + "%";
}
var spanVariants = {};
var offsetVariants = {};
for (var i = 1; i <= SPAN; i++) {
  var percent = toPercent(i);
  spanVariants[i] = "basis-[".concat(percent, "] max-w-[").concat(percent, "]");
  offsetVariants[i] = "ml-[".concat(percent, "]");
}
var col = tv({
  base: "box-border min-h-[1px] grow-0",
  variants: {
    span: {
      1: "basis-[4.17%] max-w-[4.17%]",
      2: "basis-[8.33%] max-w-[8.33%]",
      3: "basis-[12.5%] max-w-[12.5%]",
      4: "basis-[16.67%] max-w-[16.67%]",
      5: "basis-[20.83%] max-w-[20.83%]",
      6: "basis-[25%] max-w-[25%]",
      7: "basis-[29.17%] max-w-[29.17%]",
      8: "basis-[33.33%] max-w-[33.33%]",
      9: "basis-[37.5%] max-w-[37.5%]",
      10: "basis-[41.67%] max-w-[41.67%]",
      11: "basis-[45.83%] max-w-[45.83%]",
      12: "basis-[50%] max-w-[50%]",
      13: "basis-[54.17%] max-w-[54.17%]",
      14: "basis-[58.33%] max-w-[58.33%]",
      15: "basis-[62.5%] max-w-[62.5%]",
      16: "basis-[66.67%] max-w-[66.67%]",
      17: "basis-[70.83%] max-w-[70.83%]",
      18: "basis-[75%] max-w-[75%]",
      19: "basis-[79.17%] max-w-[79.17%]",
      20: "basis-[83.33%] max-w-[83.33%]",
      21: "basis-[87.5%] max-w-[87.5%]",
      22: "basis-[91.67%] max-w-[91.67%]",
      23: "basis-[95.83%] max-w-[95.83%]",
      24: "basis-[100%] max-w-[100%]"
    },
    offset: {
      1: "ml-[4.17%]",
      2: "ml-[8.33%]",
      3: "ml-[12.5%]",
      4: "ml-[16.67%]",
      5: "ml-[20.83%]",
      6: "ml-[25%]",
      7: "ml-[29.17%]",
      8: "ml-[33.33%]",
      9: "ml-[37.5%]",
      10: "ml-[41.67%]",
      11: "ml-[45.83%]",
      12: "ml-[50%]",
      13: "ml-[54.17%]",
      14: "ml-[58.33%]",
      15: "ml-[62.5%]",
      16: "ml-[66.67%]",
      17: "ml-[70.83%]",
      18: "ml-[75%]",
      19: "ml-[79.17%]",
      20: "ml-[83.33%]",
      21: "ml-[87.5%]",
      22: "ml-[91.67%]",
      23: "ml-[95.83%]",
      24: "ml-[100%]"
    },
    order: {
      1: "order-1",
      2: "order-2",
      3: "order-3",
      4: "order-4",
      5: "order-5",
      6: "order-6",
      7: "order-7",
      8: "order-8",
      9: "order-9",
      10: "order-10",
      11: "order-11",
      12: "order-12",
      13: "order-13",
      14: "order-14",
      15: "order-15",
      16: "order-16",
      17: "order-17",
      18: "order-18",
      19: "order-19",
      20: "order-20",
      21: "order-21",
      22: "order-22",
      23: "order-23",
      24: "order-24"
    },
    sm: {
      1: "sm:basis-[4.17%] sm:max-w-[4.17%]",
      2: "sm:basis-[8.33%] sm:max-w-[8.33%]",
      3: "sm:basis-[12.5%] sm:max-w-[12.5%]",
      4: "sm:basis-[16.67%] sm:max-w-[16.67%]",
      5: "sm:basis-[20.83%] sm:max-w-[20.83%]",
      6: "sm:basis-[25%] sm:max-w-[25%]",
      7: "sm:basis-[29.17%] sm:max-w-[29.17%]",
      8: "sm:basis-[33.33%] sm:max-w-[33.33%]",
      9: "sm:basis-[37.5%] sm:max-w-[37.5%]",
      10: "sm:basis-[41.67%] sm:max-w-[41.67%]",
      11: "sm:basis-[45.83%] sm:max-w-[45.83%]",
      12: "sm:basis-[50%] sm:max-w-[50%]",
      13: "sm:basis-[54.17%] sm:max-w-[54.17%]",
      14: "sm:basis-[58.33%] sm:max-w-[58.33%]",
      15: "sm:basis-[62.5%] sm:max-w-[62.5%]",
      16: "sm:basis-[66.67%] sm:max-w-[66.67%]",
      17: "sm:basis-[70.83%] sm:max-w-[70.83%]",
      18: "sm:basis-[75%] sm:max-w-[75%]",
      19: "sm:basis-[79.17%] sm:max-w-[79.17%]",
      20: "sm:basis-[83.33%] sm:max-w-[83.33%]",
      21: "sm:basis-[87.5%] sm:max-w-[87.5%]",
      22: "sm:basis-[91.67%] sm:max-w-[91.67%]",
      23: "sm:basis-[95.83%] sm:max-w-[95.83%]",
      24: "sm:basis-[100%] sm:max-w-[100%]"
    },
    md: {
      1: "md:basis-[4.17%] md:max-w-[4.17%]",
      2: "md:basis-[8.33%] md:max-w-[8.33%]",
      3: "md:basis-[12.5%] md:max-w-[12.5%]",
      4: "md:basis-[16.67%] md:max-w-[16.67%]",
      5: "md:basis-[20.83%] md:max-w-[20.83%]",
      6: "md:basis-[25%] md:max-w-[25%]",
      7: "md:basis-[29.17%] md:max-w-[29.17%]",
      8: "md:basis-[33.33%] md:max-w-[33.33%]",
      9: "md:basis-[37.5%] md:max-w-[37.5%]",
      10: "md:basis-[41.67%] md:max-w-[41.67%]",
      11: "md:basis-[45.83%] md:max-w-[45.83%]",
      12: "md:basis-[50%] md:max-w-[50%]",
      13: "md:basis-[54.17%] md:max-w-[54.17%]",
      14: "md:basis-[58.33%] md:max-w-[58.33%]",
      15: "md:basis-[62.5%] md:max-w-[62.5%]",
      16: "md:basis-[66.67%] md:max-w-[66.67%]",
      17: "md:basis-[70.83%] md:max-w-[70.83%]",
      18: "md:basis-[75%] md:max-w-[75%]",
      19: "md:basis-[79.17%] md:max-w-[79.17%]",
      20: "basis-[83.33%] max-w-[83.33%]",
      21: "md:basis-[87.5%] md:max-w-[87.5%]",
      22: "md:basis-[91.67%] md:max-w-[91.67%]",
      23: "md:basis-[95.83%] md:max-w-[95.83%]",
      24: "md:basis-[100%] md:max-w-[100%]"
    },
    lg: {
      1: "lg:basis-[4.17%] lg:max-w-[4.17%]",
      2: "lg:basis-[8.33%] lg:max-w-[8.33%]",
      3: "lg:basis-[12.5%] lg:max-w-[12.5%]",
      4: "lg:basis-[16.67%] lg:max-w-[16.67%]",
      5: "lg:basis-[20.83%] lg:max-w-[20.83%]",
      6: "lg:basis-[25%] lg:max-w-[25%]",
      7: "lg:basis-[29.17%] lg:max-w-[29.17%]",
      8: "lg:basis-[33.33%] lg:max-w-[33.33%]",
      9: "lg:basis-[37.5%] lg:max-w-[37.5%]",
      10: "lg:basis-[41.67%] lg:max-w-[41.67%]",
      11: "basis-[45.83%] max-w-[45.83%]",
      12: "lg:basis-[50%] lg:max-w-[50%]",
      13: "lg:basis-[54.17%] lg:max-w-[54.17%]",
      14: "lg:basis-[58.33%] lg:max-w-[58.33%]",
      15: "lg:basis-[62.5%] lg:max-w-[62.5%]",
      16: "lg:basis-[66.67%] lg:max-w-[66.67%]",
      17: "lg:basis-[70.83%] lg:max-w-[70.83%]",
      18: "lg:basis-[75%] lg:max-w-[75%]",
      19: "lg:basis-[79.17%] lg:max-w-[79.17%]",
      20: "lg:basis-[83.33%] lg:max-w-[83.33%]",
      21: "lg:basis-[87.5%] lg:max-w-[87.5%]",
      22: "lg:basis-[91.67%] lg:max-w-[91.67%]",
      23: "lg:basis-[95.83%] lg:max-w-[95.83%]",
      24: "lg:basis-[100%] lg:max-w-[100%]"
    },
    xl: {
      1: "xl:basis-[4.17%] xl:max-w-[4.17%]",
      2: "xl:basis-[8.33%] xl:max-w-[8.33%]",
      3: "xl:basis-[12.5%] xl:max-w-[12.5%]",
      4: "xl:basis-[16.67%] xl:max-w-[16.67%]",
      5: "basis-[20.83%] max-w-[20.83%]",
      6: "xl:basis-[25%] xl:max-w-[25%]",
      7: "xl:basis-[29.17%] xl:max-w-[29.17%]",
      8: "xl:basis-[33.33%] xl:max-w-[33.33%]",
      9: "xl:basis-[37.5%] xl:max-w-[37.5%]",
      10: "xl:basis-[41.67%] xl:max-w-[41.67%]",
      11: "xl:basis-[45.83%] xl:max-w-[45.83%]",
      12: "xl:basis-[50%] xl:max-w-[50%]",
      13: "xl:basis-[54.17%] xl:max-w-[54.17%]",
      14: "xl:basis-[58.33%] xl:max-w-[58.33%]",
      15: "xl:basis-[62.5%] xl:max-w-[62.5%]",
      16: "xl:basis-[66.67%] xl:max-w-[66.67%]",
      17: "xl:basis-[70.83%] xl:max-w-[70.83%]",
      18: "xl:basis-[75%] xl:max-w-[75%]",
      19: "xl:basis-[79.17%] xl:max-w-[79.17%]",
      20: "xl:basis-[83.33%] xl:max-w-[83.33%]",
      21: "xl:basis-[87.5%] xl:max-w-[87.5%]",
      22: "xl:basis-[91.67%] xl:max-w-[91.67%]",
      23: "xl:basis-[95.83%] xl:max-w-[95.83%]",
      24: "xl:basis-[100%] xl:max-w-[100%]"
    }
  }
});
var responsiveClass = function responsiveClass(breakpoint, span) {
  if (!span) return "";
  var percent = Number((span / 24 * 100).toFixed(2));
  return "".concat(breakpoint, ":basis-[").concat(percent, "%] ").concat(breakpoint, ":max-w-[").concat(percent, "%]");
};
var Col = function Col(_ref) {
  var span = _ref.span,
    offset = _ref.offset,
    order = _ref.order,
    sm = _ref.sm,
    md = _ref.md,
    lg = _ref.lg,
    xl = _ref.xl,
    className = _ref.className,
    children = _ref.children,
    style = _ref.style;
  return /* @__PURE__ */React.createElement("div", {
    className: clsx(col({
      span: span,
      offset: offset,
      order: order
    }), responsiveClass("sm", sm), responsiveClass("md", md), responsiveClass("lg", lg), responsiveClass("xl", xl), className),
    style: style
  }, children);
};

var alertDefaultProps = {
  closeBtn: false,
  maxLine: 0,
  theme: "info"
};

var _excluded$5 = ["message", "title", "operation", "theme", "icon", "closeBtn", "maxLine", "onClose", "className", "onClosed"];
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var transitionTime = 200;
;
var Alert$1 = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: X,
      InfoCircleFilledIcon: Info,
      CheckCircleFilledIcon: CheckCircle,
      ErrorCircleFilledIcon: AlertTriangle
    }),
    CloseIcon = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
    ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
  var _useDefaultProps = useDefaultProps(props, alertDefaultProps),
    message = _useDefaultProps.message,
    title = _useDefaultProps.title,
    operation = _useDefaultProps.operation,
    theme = _useDefaultProps.theme,
    icon = _useDefaultProps.icon,
    closeBtn = _useDefaultProps.closeBtn,
    maxLine = _useDefaultProps.maxLine,
    onClose = _useDefaultProps.onClose,
    className = _useDefaultProps.className,
    _useDefaultProps$onCl = _useDefaultProps.onClosed,
    onClosed = _useDefaultProps$onCl === void 0 ? noop : _useDefaultProps$onCl,
    alertProps = _objectWithoutProperties(_useDefaultProps, _excluded$5);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    closed = _React$useState2[0],
    setClosed = _React$useState2[1];
  var _React$useState3 = React.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    collapsed = _React$useState4[0],
    setCollapsed = _React$useState4[1];
  var nodeRef = reactExports.useRef(null);
  var iconMap = {
    success: CheckCircleFilledIcon,
    info: InfoCircleFilledIcon,
    error: ErrorCircleFilledIcon,
    warning: ErrorCircleFilledIcon
  };
  var handleClose = function handleClose(e) {
    setClosed(true);
    onClose === null || onClose === void 0 || onClose({
      e: e
    });
  };
  var handleCollapse = function handleCollapse() {
    setCollapsed(function (collapsed2) {
      return !collapsed2;
    });
  };
  var renderIconNode = function renderIconNode() {
    if (/*#__PURE__*/React.isValidElement(icon)) return icon;
    return /*#__PURE__*/React.createElement(iconMap[theme]);
  };
  var renderMessage = function renderMessage() {
    if (+maxLine > 0 && Array.isArray(message)) {
      return /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-alert__description")
      }, message.map(function (item, index) {
        if (collapsed) {
          if (index < +maxLine) {
            return /* @__PURE__ */React.createElement("div", {
              key: index
            }, item);
          }
        } else {
          return /* @__PURE__ */React.createElement("div", {
            key: index
          }, item);
        }
        return true;
      }), +maxLine < message.length && /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-alert__collapse"),
        onClick: handleCollapse
      }, collapsed ? "\u5C55\u5F00" : "\u6536\u8D77"));
    }
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-alert__description")
    }, message);
  };
  var isUsingClose = Reflect.has(props, "close");
  var closeNode = isUsingClose ? close : closeBtn;
  if (isUsingClose) {
    console.warn("TAlert", "prop `close` is going to be deprecated, please use `closeBtn` instead.");
  }
  var renderClose = function renderClose() {
    if (closeNode === false) return null;
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-alert__close"),
      onClick: handleClose
    }, parseTNode(closeNode, void 0, /* @__PURE__ */React.createElement(CloseIcon, {
      className: "t-icon"
    })));
  };
  return /* @__PURE__ */React.createElement(CSSTransition, {
    "in": !closed,
    unmountOnExit: true,
    classNames: {
      exitActive: "".concat(classPrefix, "-alert--closing")
    },
    nodeRef: nodeRef,
    timeout: transitionTime,
    onExited: onClosed
  }, /* @__PURE__ */React.createElement("div", _objectSpread$8({
    ref: composeRefs(ref, nodeRef),
    className: classNames("".concat(classPrefix, "-alert"), "".concat(classPrefix, "-alert--").concat(theme), className)
  }, alertProps), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__icon")
  }, renderIconNode()), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__content")
  }, title ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__title")
  }, title) : null, /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__message")
  }, renderMessage(), operation ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__operation")
  }, parseTNode(operation)) : null)), renderClose()));
});
Alert$1.displayName = "Alert";

var Alert = Alert$1;

var badgeDefaultProps = {
  count: 0,
  dot: false,
  maxCount: 99,
  shape: "circle",
  showZero: false,
  size: "medium"
};

var _excluded$4 = ["color", "dot", "maxCount", "count", "size", "shape", "showZero", "offset", "className", "content", "children", "style"];
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Badge$1 = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var _useDefaultProps = useDefaultProps(props, badgeDefaultProps),
    color = _useDefaultProps.color,
    dot = _useDefaultProps.dot,
    maxCount = _useDefaultProps.maxCount,
    count = _useDefaultProps.count,
    size = _useDefaultProps.size,
    shape = _useDefaultProps.shape,
    showZero = _useDefaultProps.showZero,
    offset = _useDefaultProps.offset,
    className = _useDefaultProps.className,
    content = _useDefaultProps.content,
    children = _useDefaultProps.children,
    style = _useDefaultProps.style,
    restProps = _objectWithoutProperties(_useDefaultProps, _excluded$4);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var childNode = content || children;
  var badgeClassName = classNames(!childNode && "".concat(classPrefix, "-badge--static"), dot ? "".concat(classPrefix, "-badge--dot") : "".concat(classPrefix, "-badge--").concat(shape), size === "small" && "".concat(classPrefix, "-size-s"), !childNode && className);
  var getDisplayCount = function getDisplayCount() {
    if (typeof count === "number" && count > maxCount) {
      return "".concat(maxCount, "+");
    }
    return count;
  };
  var isHidden = !count;
  if (typeof count === "number") {
    isHidden = count < 1 && !showZero;
  }
  var getStyle = function getStyle() {
    var mergedStyle = _objectSpread$7({}, style);
    if (color) {
      mergedStyle.backgroundColor = color;
    }
    if (offset) {
      if (offset[0]) {
        mergedStyle.right = +offset[0];
      }
      if (offset[1]) {
        mergedStyle.marginTop = +offset[1];
      }
    }
    return mergedStyle;
  };
  var badge = !isHidden ? /* @__PURE__ */React.createElement("span", _objectSpread$7(_objectSpread$7({}, childNode ? {} : restProps), {}, {
    className: badgeClassName,
    style: getStyle()
  }), !dot ? getDisplayCount() : null) : null;
  if (!childNode) {
    return badge;
  }
  return /* @__PURE__ */React.createElement("span", _objectSpread$7(_objectSpread$7({}, restProps), {}, {
    className: classNames("".concat(classPrefix, "-badge"), className),
    ref: ref
  }), childNode, badge);
});
Badge$1.displayName = "Badge";

var Badge = Badge$1;

var selectDefaultProps = {
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  creatable: false,
  loading: false,
  max: 0,
  minCollapsedNum: 0,
  multiple: false,
  placeholder: void 0,
  readonly: false,
  reserveKeyword: false,
  showArrow: true,
  size: "medium",
  status: "default",
  valueType: "value"
};
var optionDefaultProps = {
  checkAll: false,
  disabled: false
};
var optionGroupDefaultProps = {
  divider: true
};

var OptionGroup = function OptionGroup(props) {
  var _useDefaultProps = useDefaultProps(props, optionGroupDefaultProps),
    children = _useDefaultProps.children,
    label = _useDefaultProps.label,
    divider = _useDefaultProps.divider;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  return /* @__PURE__ */React.createElement("li", {
    className: classNames("".concat(classPrefix, "-select-option-group"), _defineProperty({}, "".concat(classPrefix, "-select-option-group__divider"), divider))
  }, (label !== null && label !== void 0 ? label : false) && /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-select-option-group__header")
  }, label), children);
  return;
};

var componentType = "select";
var Option = function Option(props) {
  var propDisabled = props.disabled,
    propLabel = props.label,
    propTitle = props.title,
    selectedValue = props.selectedValue,
    checkAll = props.checkAll,
    multiple = props.multiple,
    size = props.size,
    max = props.max,
    keys = props.keys,
    value = props.value,
    onSelect = props.onSelect,
    children = props.children,
    content = props.content,
    restData = props.restData,
    style = props.style,
    className = props.className,
    isVirtual = props.isVirtual;
  var selected;
  var indeterminate;
  var label = propLabel || value;
  var disabled = propDisabled || multiple && Array.isArray(selectedValue) && max && selectedValue.length >= max;
  var titleContent = reactExports.useMemo(function () {
    var controlledTitle = Reflect.has(props, "title");
    if (controlledTitle) return propTitle;
    if (typeof label === "string") return label;
    return null;
  }, [propTitle, label]);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(),
    _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2),
    optionRef = _useDomRefCallback2[0],
    setRefCurrent = _useDomRefCallback2[1];
  reactExports.useEffect(function () {
    if (isVirtual && optionRef) {
      var _props$onRowMounted;
      (_props$onRowMounted = props.onRowMounted) === null || _props$onRowMounted === void 0 || _props$onRowMounted.call(props, {
        ref: optionRef,
        data: props
      });
    }
  }, [isVirtual, optionRef]);
  if (!multiple) {
    selected = isNumber(selectedValue) || isString(selectedValue) ? value === selectedValue : value === get(selectedValue, (keys === null || keys === void 0 ? void 0 : keys.value) || "value");
  }
  if (multiple && Array.isArray(selectedValue)) {
    selected = selectedValue.some(function (item) {
      if (isNumber(item) || isString(item)) {
        return item === value;
      }
      return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") === value;
    });
    if (props.checkAll) {
      selected = selectedValue.length === props.optionLength;
      indeterminate = selectedValue.length > 0 && !selected;
    }
  }
  var handleSelect = function handleSelect(event) {
    if (!disabled && !checkAll) {
      if (value) onSelect === null || onSelect === void 0 || onSelect(value, {
        label: String(label),
        selected: selected,
        event: event,
        restData: restData
      });
    }
    if (checkAll) {
      var _props$onCheckAllChan;
      (_props$onCheckAllChan = props.onCheckAllChange) === null || _props$onCheckAllChan === void 0 || _props$onCheckAllChan.call(props, selected, event);
    }
  };
  var renderItem = function renderItem(children2) {
    if (multiple) {
      return /* @__PURE__ */React.createElement("label", {
        className: classNames("".concat(classPrefix, "-checkbox"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-indeterminate"), indeterminate), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-checked"), selected)),
        title: titleContent
      }, /* @__PURE__ */React.createElement("input", {
        type: "checkbox",
        className: classNames("".concat(classPrefix, "-checkbox__former")),
        value: "",
        disabled: disabled && !selected,
        onClick: function onClick(e) {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }
      }), /* @__PURE__ */React.createElement("span", {
        className: classNames("".concat(classPrefix, "-checkbox__input"))
      }), /* @__PURE__ */React.createElement("span", {
        className: classNames("".concat(classPrefix, "-checkbox__label"))
      }, children2 || content || label));
    }
    return /* @__PURE__ */React.createElement("span", {
      title: titleContent
    }, children2 || content || label);
  };
  return /* @__PURE__ */React.createElement("li", {
    className: classNames(className, "".concat(classPrefix, "-").concat(componentType, "-option"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-selected"), selected), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large")),
    key: value,
    onClick: handleSelect,
    ref: setRefCurrent,
    style: style
  }, renderItem(children));
};

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup$1(option) {
  return !!option && "group" in option && "children" in option;
}
function setValueToOptionFormOptionDom(dom, valueToOption, keys) {
  var _dom$props = dom.props,
    value = _dom$props.value,
    label = _dom$props.label,
    children = _dom$props.children;
  valueToOption[value] = _objectSpread$6(_objectSpread$6({}, dom.props), {}, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.value) || "value", value), (keys === null || keys === void 0 ? void 0 : keys.label) || "label", label || children || value));
}
var getValueToOption = function getValueToOption(children, options, keys) {
  var valueToOption = {};
  if (Array.isArray(options)) {
    options.forEach(function (option) {
      if (isSelectOptionGroup$1(option)) {
        var _option$children;
        (_option$children = option.children) === null || _option$children === void 0 || _option$children.forEach(function (child) {
          valueToOption[get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || "value")] = _objectSpread$6(_objectSpread$6({}, child), {}, {
            value: get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
            label: get(child, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
          });
        });
      } else {
        valueToOption[get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value")] = _objectSpread$6(_objectSpread$6({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
        });
      }
    });
    return valueToOption;
  }
  if (isPlainObject(children)) {
    if (children.type === Option) {
      setValueToOptionFormOptionDom(children, valueToOption, keys);
      return valueToOption;
    }
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.forEach(function (item) {
          setValueToOptionFormOptionDom(item, valueToOption, keys);
        });
        return valueToOption;
      }
    }
  }
  if (Array.isArray(children)) {
    var _handlerElement = function handlerElement(item) {
      if (item.type === Option) {
        setValueToOptionFormOptionDom(item, valueToOption, keys);
      }
      if (item.type === OptionGroup) {
        var _groupChildren = item.props.children;
        if (Array.isArray(_groupChildren)) {
          _groupChildren.forEach(function (groupItem) {
            setValueToOptionFormOptionDom(groupItem, valueToOption, keys);
          });
        }
      }
      if (Array.isArray(item)) {
        item.forEach(function (child) {
          _handlerElement(child);
        });
      }
    };
    children.forEach(function (item) {
      return _handlerElement(item);
    });
  }
  return valueToOption;
};
var getLabel = function getLabel(children, value, options, keys) {
  var selectedLabel = "";
  if (Array.isArray(options)) {
    options.some(function (option) {
      if ([get(value, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"), value].includes(option.value)) {
        selectedLabel = option.label;
        return true;
      }
      return false;
    });
    return selectedLabel;
  }
  if (isPlainObject(children)) {
    selectedLabel = children.props.label;
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.some(function (item) {
          var selectedValue = isPlainObject(value) ? get(value, "value") : value;
          if (isPlainObject(item.props) && item.props.value === selectedValue) {
            selectedLabel = item.props.label || item.props.children;
            return true;
          }
          return false;
        });
      }
    }
  }
  if (Array.isArray(children)) {
    children.some(function (item) {
      if (item.type === OptionGroup) {
        var _groupChildren2 = item.props.children;
        if (Array.isArray(_groupChildren2)) {
          var isSelected = _groupChildren2.some(function (item2) {
            var selectedValue2 = isPlainObject(value) ? get(value, "value") : value;
            if (isPlainObject(item2.props) && item2.props.value === selectedValue2) {
              selectedLabel = item2.props.label || item2.props.children;
              return true;
            }
            return false;
          });
          return isSelected;
        }
      }
      var selectedValue = isPlainObject(value) ? get(value, "value") : value;
      if (isPlainObject(item.props) && item.props.value === selectedValue) {
        selectedLabel = item.props.label || item.props.children;
        return true;
      }
      return false;
    });
  }
  return selectedLabel;
};
var getMultipleTags = function getMultipleTags(values, keys) {
  var tags = values.map(function (item) {
    return {
      label: get(item, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || item.toString(),
      value: get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") || item
    };
  });
  return tags;
};
var getSelectValueArr = function getSelectValueArr(values, activeValue, selected, valueType, keys, objVal) {
  values = Array.isArray(values) ? values : [];
  if (Array.isArray(values)) {
    var currentValues = _toConsumableArray(values);
    var isValueObj = valueType === "object";
    if (selected) {
      currentValues = currentValues.filter(function (item) {
        if (isValueObj) {
          if (isPlainObject(activeValue)) {
            return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") !== get(activeValue, (keys === null || keys === void 0 ? void 0 : keys.value) || "value");
          }
          return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") !== activeValue;
        }
        return item !== activeValue;
      });
    } else {
      var item = isValueObj ? objVal : activeValue;
      currentValues.push(item);
    }
    return currentValues;
  }
};
var getSelectedOptions = function getSelectedOptions(value, multiple, valueType, keys, valueToOption, selectedValue) {
  var isObjectType = valueType === "object";
  var currentSelectedOptions = [];
  var currentOption;
  var allSelectedValue;
  var tmpPropOptions = Object.values(valueToOption);
  if (multiple) {
    var _tmpPropOptions$filte, _currentSelectedOptio, _currentSelectedOptio2;
    currentSelectedOptions = isObjectType ? value : tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte = tmpPropOptions.filter) === null || _tmpPropOptions$filte === void 0 ? void 0 : _tmpPropOptions$filte.call(tmpPropOptions, function (v) {
      var _value$includes;
      return (_value$includes = value.includes) === null || _value$includes === void 0 ? void 0 : _value$includes.call(value, v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"]);
    });
    allSelectedValue = isObjectType ? currentSelectedOptions : (_currentSelectedOptio = currentSelectedOptions) === null || _currentSelectedOptio === void 0 ? void 0 : _currentSelectedOptio.map(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
    });
    currentOption = isObjectType ? value.find(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    }) : (_currentSelectedOptio2 = currentSelectedOptions) === null || _currentSelectedOptio2 === void 0 ? void 0 : _currentSelectedOptio2.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    });
  } else {
    var _tmpPropOptions$filte2, _currentSelectedOptio3;
    currentSelectedOptions = isObjectType ? [value] : (tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte2 = tmpPropOptions.filter) === null || _tmpPropOptions$filte2 === void 0 ? void 0 : _tmpPropOptions$filte2.call(tmpPropOptions, function (v) {
      return value === v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
    })) || [];
    allSelectedValue = currentSelectedOptions;
    currentOption = isObjectType ? value : (_currentSelectedOptio3 = currentSelectedOptions) === null || _currentSelectedOptio3 === void 0 ? void 0 : _currentSelectedOptio3.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    });
  }
  return {
    currentSelectedOptions: currentSelectedOptions,
    currentOption: currentOption,
    allSelectedValue: allSelectedValue
  };
};

var usePanelVirtualScroll = function usePanelVirtualScroll(_ref) {
  var popupContentRef = _ref.popupContentRef,
    scroll = _ref.scroll,
    options = _ref.options,
    size = _ref.size;
  var scrollThreshold = (scroll === null || scroll === void 0 ? void 0 : scroll.threshold) || 100;
  var scrollType = scroll === null || scroll === void 0 ? void 0 : scroll.type;
  var isVirtual = reactExports.useMemo(function () {
    return scrollType === "virtual" && (options === null || options === void 0 ? void 0 : options.length) > scrollThreshold;
  }, [scrollType, scrollThreshold, options]);
  var scrollParams = reactExports.useMemo(function () {
    var heightMap = {
      small: 20,
      medium: 28,
      large: 36
    };
    var rowHeight = heightMap[size] || 28;
    return {
      type: "virtual",
      isFixedRowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.isFixedRowHeight) || false,
      rowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || rowHeight,
      bufferSize: (scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 20,
      threshold: scrollThreshold
    };
  }, [scroll, scrollThreshold, size]);
  var _useVirtualScroll = useVirtualScroll(popupContentRef, {
      data: options || [],
      scroll: scrollParams
    }),
    _useVirtualScroll$vis = _useVirtualScroll.visibleData,
    visibleData = _useVirtualScroll$vis === void 0 ? null : _useVirtualScroll$vis,
    _useVirtualScroll$han = _useVirtualScroll.handleScroll,
    handleVirtualScroll = _useVirtualScroll$han === void 0 ? null : _useVirtualScroll$han,
    _useVirtualScroll$scr = _useVirtualScroll.scrollHeight,
    scrollHeight = _useVirtualScroll$scr === void 0 ? null : _useVirtualScroll$scr,
    _useVirtualScroll$tra = _useVirtualScroll.translateY,
    translateY = _useVirtualScroll$tra === void 0 ? null : _useVirtualScroll$tra,
    _useVirtualScroll$han2 = _useVirtualScroll.handleRowMounted,
    handleRowMounted = _useVirtualScroll$han2 === void 0 ? null : _useVirtualScroll$han2;
  var lastScrollY = -1;
  var onInnerVirtualScroll = reactExports.useCallback(function (e) {
    if (!isVirtual) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  }, []);
  reactExports.useEffect(function () {
    var popupContentDom = popupContentRef === null || popupContentRef === void 0 ? void 0 : popupContentRef.current;
    if (isVirtual) {
      var _popupContentDom$addE;
      popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$addE = popupContentDom.addEventListener) === null || _popupContentDom$addE === void 0 || _popupContentDom$addE.call(popupContentDom, "scroll", onInnerVirtualScroll);
    }
    return function () {
      if (isVirtual) {
        var _popupContentDom$remo;
        popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$remo = popupContentDom.removeEventListener) === null || _popupContentDom$remo === void 0 || _popupContentDom$remo.call(popupContentDom, "scroll", onInnerVirtualScroll);
      }
    };
  }, [isVirtual, onInnerVirtualScroll, popupContentRef.current]);
  var cursorStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    transition: "transform 0.2s",
    transform: "translate(0, ".concat(scrollHeight, "px)"),
    MsTransform: "translate(0, ".concat(scrollHeight, "px)"),
    MozTransform: "translate(0, ".concat(scrollHeight, "px)"),
    WebkitTransform: "translate(0, ".concat(scrollHeight, "px)")
  };
  var panelStyle = {
    transform: "translate(0, ".concat(translateY, "px)"),
    MsTransform: "translate(0, ".concat(translateY, "px)"),
    MozTransform: "translate(0, ".concat(translateY, "px)"),
    WebkitTransform: "translate(0, ".concat(translateY, "px)")
  };
  return {
    scrollHeight: scrollHeight,
    translateY: translateY,
    visibleData: visibleData,
    handleRowMounted: handleRowMounted,
    isVirtual: isVirtual,
    cursorStyle: cursorStyle,
    panelStyle: panelStyle
  };
};

var _excluded$3 = ["group", "divider"],
  _excluded2$1 = ["value", "label", "disabled", "content", "children"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PopupContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    size = props.size,
    max = props.max,
    multiple = props.multiple,
    showPopup = props.showPopup,
    setShowPopup = props.setShowPopup,
    empty = props.empty,
    loadingText = props.loadingText,
    loading = props.loading,
    valueType = props.valueType,
    children = props.children,
    keys = props.keys,
    panelTopContent = props.panelTopContent,
    panelBottomContent = props.panelBottomContent,
    onChange = props.onChange,
    onCheckAllChange = props.onCheckAllChange,
    getPopupInstance = props.getPopupInstance,
    propsOptions = props.options,
    propsScroll = props.scroll;
  var popupContentRef = reactExports.useRef(null);
  popupContentRef.current = getPopupInstance();
  var _usePanelVirtualScrol = usePanelVirtualScroll({
      popupContentRef: popupContentRef,
      scroll: propsScroll,
      options: propsOptions,
      size: size
    }),
    visibleData = _usePanelVirtualScrol.visibleData,
    handleRowMounted = _usePanelVirtualScrol.handleRowMounted,
    isVirtual = _usePanelVirtualScrol.isVirtual,
    panelStyle = _usePanelVirtualScrol.panelStyle,
    cursorStyle = _usePanelVirtualScrol.cursorStyle;
  var selectableOptions = reactExports.useMemo(function () {
    var uniqueOptions = {};
    propsOptions === null || propsOptions === void 0 || propsOptions.forEach(function (option) {
      if (option.group) {
        option.children.forEach(function (item) {
          if (!item.disabled && !item.checkAll) {
            uniqueOptions[item.value] = item;
          }
        });
      } else if (!option.disabled && !option.checkAll) {
        uniqueOptions[option.value] = option;
      }
    });
    return Object.values(uniqueOptions);
  }, [propsOptions]);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  if (!children && !propsOptions) {
    return null;
  }
  var onSelect = function onSelect(selectedValue, _ref) {
    var label = _ref.label,
      selected = _ref.selected,
      event = _ref.event,
      restData = _ref.restData;
    var isValObj = valueType === "object";
    var objVal = {};
    if (isValObj) {
      objVal = _objectSpread$5({}, restData);
      if (!(keys !== null && keys !== void 0 && keys.label)) {
        Object.assign(objVal, {
          label: label
        });
      }
      if (!(keys !== null && keys !== void 0 && keys.value)) {
        Object.assign(objVal, {
          value: selectedValue
        });
      }
    }
    if (!Object.keys(objVal).length) {
      Object.assign(objVal, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label", label), (keys === null || keys === void 0 ? void 0 : keys.value) || "value", selectedValue));
    }
    if (multiple) {
      var values = getSelectValueArr(value, selectedValue, selected, valueType, keys, objVal);
      onChange(values, {
        label: label,
        value: selectedValue,
        e: event,
        trigger: selected ? "uncheck" : "check"
      });
    } else {
      var selectVal = valueType === "object" ? objVal : selectedValue;
      if (!isEqual(value, selectVal)) {
        onChange(selectVal, {
          label: label,
          value: selectVal,
          e: event,
          trigger: "check"
        });
      }
      setShowPopup(!showPopup);
    }
  };
  var childrenWithProps = reactExports.Children.map(children, function (child) {
    if (/*#__PURE__*/reactExports.isValidElement(child)) {
      var addedProps = {
        size: size,
        max: max,
        multiple: multiple,
        selectedValue: value,
        onSelect: onSelect
      };
      return /*#__PURE__*/reactExports.cloneElement(child, _objectSpread$5({}, addedProps));
    }
    return child;
  });
  var _renderOptions = function renderOptions(options) {
    if (options) {
      return /* @__PURE__ */React.createElement("ul", {
        className: "".concat(classPrefix, "-select__list")
      }, options.map(function (item, index) {
        var group = item.group,
          divider = item.divider,
          rest = _objectWithoutProperties(item, _excluded$3);
        if (group) {
          return /* @__PURE__ */React.createElement(OptionGroup, {
            label: group,
            divider: divider,
            key: index
          }, _renderOptions(rest.children));
        }
        var optionValue = item.value,
          label = item.label,
          disabled = item.disabled,
          content = item.content,
          children2 = item.children,
          restData = _objectWithoutProperties(item, _excluded2$1);
        return /* @__PURE__ */React.createElement(Option, _objectSpread$5(_objectSpread$5({
          key: index,
          max: max,
          label: label,
          value: optionValue,
          onSelect: onSelect,
          selectedValue: value,
          optionLength: selectableOptions.length,
          multiple: multiple,
          size: size,
          disabled: disabled,
          restData: restData,
          keys: keys,
          content: content,
          onCheckAllChange: onCheckAllChange,
          onRowMounted: handleRowMounted
        }, isVirtual ? {
          isVirtual: isVirtual,
          bufferSize: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.bufferSize,
          scrollType: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.type
        } : {}), restData), children2);
      }));
    }
    return /* @__PURE__ */React.createElement("ul", {
      className: "".concat(classPrefix, "-select__list")
    }, childrenWithProps);
  };
  var isEmpty = Array.isArray(childrenWithProps) && !childrenWithProps.length || propsOptions && propsOptions.length === 0;
  var renderPanel = function renderPanel(renderedOptions, extraStyle) {
    return /* @__PURE__ */React.createElement("div", {
      ref: ref,
      className: classNames("".concat(classPrefix, "-select__dropdown-inner"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-select__dropdown-inner--size-s"), size === "small"), "".concat(classPrefix, "-select__dropdown-inner--size-l"), size === "large"), "".concat(classPrefix, "-select__dropdown-inner--size-m"), size === "medium")),
      style: extraStyle
    }, loading && /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-select__loading-tips")
    }, loadingText), !loading && isEmpty && /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-select__empty")
    }, empty), !loading && !isEmpty && _renderOptions(renderedOptions));
  };
  if (isVirtual) {
    return /* @__PURE__ */React.createElement(React.Fragment, null, panelTopContent, /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement("div", {
      style: cursorStyle
    }), renderPanel(visibleData, panelStyle)), panelBottomContent);
  }
  return /* @__PURE__ */React.createElement(React.Fragment, null, panelTopContent, renderPanel(propsOptions), panelBottomContent);
});

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup(option) {
  return !!option && "group" in option && "children" in option;
}
function UseOptions(keys, options, children, valueType, value, reserveKeyword) {
  var _useState = reactExports.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    valueToOption = _useState2[0],
    setValueToOption = _useState2[1];
  var _useState3 = reactExports.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentOptions = _useState4[0],
    setCurrentOptions = _useState4[1];
  var _useState5 = reactExports.useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tmpPropOptions = _useState6[0],
    setTmpPropOptions = _useState6[1];
  var _useState7 = reactExports.useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOptions = _useState8[0],
    setSelectedOptions = _useState8[1];
  reactExports.useEffect(function () {
    var transformedOptions = options;
    var arrayChildren = React.Children.toArray(children);
    var optionChildren = arrayChildren.filter(function (v) {
      return v.type === Option || v.type === OptionGroup;
    });
    var isChildrenFilterable = arrayChildren.length > 0 && optionChildren.length === arrayChildren.length;
    if (reserveKeyword && currentOptions.length && isChildrenFilterable) return;
    if (isChildrenFilterable) {
      var _handlerOptionElement = function handlerOptionElement(v) {
        if (/*#__PURE__*/React.isValidElement(v)) {
          if (v.type === OptionGroup) {
            var _v$props$children;
            return _objectSpread$4(_objectSpread$4({}, v.props), {}, {
              group: v.props.label,
              children: (_v$props$children = v.props.children) === null || _v$props$children === void 0 ? void 0 : _v$props$children.map(function (v2) {
                return _handlerOptionElement(v2);
              })
            });
          }
          return _objectSpread$4(_objectSpread$4({}, v.props), {}, {
            label: v.props.label || v.props.children
          });
        }
        return {
          label: v
        };
      };
      transformedOptions = arrayChildren === null || arrayChildren === void 0 ? void 0 : arrayChildren.map(function (v) {
        return _handlerOptionElement(v);
      });
    }
    if (keys) {
      var _transformedOptions;
      transformedOptions = (_transformedOptions = transformedOptions) === null || _transformedOptions === void 0 ? void 0 : _transformedOptions.map(function (option) {
        return _objectSpread$4(_objectSpread$4({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
        });
      });
    }
    setCurrentOptions(transformedOptions);
    setTmpPropOptions(transformedOptions);
    setValueToOption(getValueToOption(children, options, keys) || {});
  }, [options, keys, children, reserveKeyword]);
  reactExports.useEffect(function () {
    var valueKey = (keys === null || keys === void 0 ? void 0 : keys.value) || "value";
    var labelKey = (keys === null || keys === void 0 ? void 0 : keys.label) || "label";
    setSelectedOptions(function (oldSelectedOptions) {
      var createOptionFromValue = function createOptionFromValue(item) {
        if (valueType === "value") {
          return valueToOption[item] || oldSelectedOptions.find(function (option) {
            return get(option, valueKey) === item;
          }) || _defineProperty(_defineProperty({}, valueKey, item), labelKey, item);
        }
        if (_typeof(item) === "object" && item !== null) {
          return item;
        }
        return [];
      };
      if (Array.isArray(value)) {
        return value.map(createOptionFromValue);
      }
      if (value !== void 0 && value !== null) {
        var option = createOptionFromValue(value);
        return option ? [option] : [];
      }
      return [];
    });
  }, [value, keys, valueType, valueToOption, setSelectedOptions]);
  return {
    currentOptions: currentOptions,
    setCurrentOptions: setCurrentOptions,
    tmpPropOptions: tmpPropOptions,
    setTmpPropOptions: setTmpPropOptions,
    valueToOption: valueToOption,
    setValueToOption: setValueToOption,
    selectedOptions: selectedOptions,
    setSelectedOptions: setSelectedOptions
  };
}

var _excluded$2 = ["overlayClassName", "onScroll", "onScrollToBottom"];
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Select$1 = forwardRefWithStatics(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, selectDefaultProps);
  var readonly = props.readonly,
    borderless = props.borderless,
    autoWidth = props.autoWidth,
    creatable = props.creatable,
    _props$loadingText = props.loadingText,
    loadingText = _props$loadingText === void 0 ? "\u52A0\u8F7D\u4E2D..." : _props$loadingText,
    max = props.max,
    popupProps = props.popupProps,
    reserveKeyword = props.reserveKeyword,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    size = props.size,
    multiple = props.multiple,
    placeholder = props.placeholder,
    clearable = props.clearable,
    prefixIcon = props.prefixIcon,
    options = props.options,
    filterable = props.filterable,
    loading = props.loading,
    empty = props.empty,
    valueType = props.valueType,
    keys = props.keys,
    children = props.children,
    collapsedItems = props.collapsedItems,
    minCollapsedNum = props.minCollapsedNum,
    valueDisplay = props.valueDisplay,
    showArrow = props.showArrow,
    inputProps = props.inputProps,
    panelBottomContent = props.panelBottomContent,
    panelTopContent = props.panelTopContent,
    selectInputProps = props.selectInputProps,
    tagInputProps = props.tagInputProps,
    tagProps = props.tagProps,
    scroll = props.scroll,
    suffixIcon = props.suffixIcon,
    label = props.label,
    filter = props.filter,
    onFocus = props.onFocus,
    _onBlur = props.onBlur,
    _props$onClear = props.onClear,
    onClear = _props$onClear === void 0 ? noop : _props$onClear,
    onCreate = props.onCreate,
    onRemove = props.onRemove,
    onSearch = props.onSearch,
    onEnter = props.onEnter,
    onPopupVisibleChange = props.onPopupVisibleChange;
  var _useControlled = useControlled(props, "value", props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var selectInputRef = reactExports.useRef(null);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _ref = popupProps || {},
    overlayClassName = _ref.overlayClassName,
    onScroll = _ref.onScroll,
    onScrollToBottom = _ref.onScrollToBottom,
    restPopupProps = _objectWithoutProperties(_ref, _excluded$2);
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolling = _useState2[0],
    toggleIsScrolling = _useState2[1];
  var name = "".concat(classPrefix, "-select");
  var _useControlled3 = useControlled(props, "popupVisible", onPopupVisibleChange),
    _useControlled4 = _slicedToArray(_useControlled3, 2),
    showPopup = _useControlled4[0],
    setShowPopup = _useControlled4[1];
  var _useControlled5 = useControlled(props, "inputValue", props.onInputChange),
    _useControlled6 = _slicedToArray(_useControlled5, 2),
    inputValue = _useControlled6[0],
    onInputChange = _useControlled6[1];
  var _useOptions = UseOptions(keys, options, children, valueType, value, reserveKeyword),
    currentOptions = _useOptions.currentOptions,
    setCurrentOptions = _useOptions.setCurrentOptions,
    tmpPropOptions = _useOptions.tmpPropOptions,
    valueToOption = _useOptions.valueToOption,
    selectedOptions = _useOptions.selectedOptions;
  var selectedLabel = reactExports.useMemo(function () {
    if (multiple) {
      return selectedOptions.map(function (selectedOption) {
        return get(selectedOption || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || "";
      });
    }
    return get(selectedOptions[0] || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || void 0;
  }, [selectedOptions, keys, multiple]);
  var handleShowPopup = function handleShowPopup(visible, ctx) {
    if (disabled) return;
    visible && toggleIsScrolling(false);
    !visible && onInputChange("", {
      trigger: "blur"
    });
    setShowPopup(visible, ctx);
  };
  var onTagChange = function onTagChange(_currentTags, context) {
    var trigger = context.trigger,
      index = context.index,
      item = context.item,
      e = context.e;
    if (trigger === "backspace") {
      e.stopPropagation();
      var closest = -1;
      var len = index;
      while (len >= 0) {
        var option = selectedOptions[len];
        if (!isSelectOptionGroup(option) && !option.disabled) {
          closest = len;
          break;
        }
        len -= 1;
      }
      if (closest < 0) {
        return;
      }
      var values = getSelectValueArr(value, value[closest], true, valueType, keys);
      var _getSelectedOptions = getSelectedOptions(values, multiple, valueType, keys, valueToOption),
        currentSelectedOptions = _getSelectedOptions.currentSelectedOptions;
      onChange(values, {
        e: e,
        trigger: trigger,
        selectedOptions: currentSelectedOptions
      });
      return;
    }
    if (trigger === "tag-remove") {
      var _e$stopPropagation;
      e === null || e === void 0 || (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
      var _values = getSelectValueArr(value, value[index], true, valueType, keys);
      var _getSelectedOptions2 = getSelectedOptions(_values, multiple, valueType, keys, valueToOption),
        _currentSelectedOptions = _getSelectedOptions2.currentSelectedOptions;
      onChange(_values, {
        e: e,
        trigger: trigger,
        selectedOptions: _currentSelectedOptions
      });
      if (isFunction(onRemove)) {
        onRemove({
          value: value[index],
          data: {
            label: item,
            value: value[index]
          },
          e: e
        });
      }
    }
  };
  var onCheckAllChange = function onCheckAllChange(checkAll, e) {
    var _props$value;
    var isDisabledCheckAll = function isDisabledCheckAll(opt) {
      return opt.checkAll && opt.disabled;
    };
    if (!multiple || currentOptions.some(function (opt) {
      return !isSelectOptionGroup(opt) && isDisabledCheckAll(opt);
    })) {
      return;
    }
    var isSelectableOption = function isSelectableOption(opt) {
      return !opt.checkAll && !opt.disabled;
    };
    var getOptionValue = function getOptionValue(option) {
      return valueType === "object" ? option : option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
    };
    var values = [];
    currentOptions.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        option.children.forEach(function (item) {
          if (isSelectableOption(item)) {
            values.push(getOptionValue(item));
          }
        });
      } else if (isSelectableOption(option)) {
        values.push(getOptionValue(option));
      }
    });
    var _getSelectedOptions3 = getSelectedOptions(values, multiple, valueType, keys, valueToOption),
      currentSelectedOptions = _getSelectedOptions3.currentSelectedOptions,
      allSelectedValue = _getSelectedOptions3.allSelectedValue;
    var checkAllValue = !checkAll && allSelectedValue.length !== ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) ? allSelectedValue : [];
    onChange === null || onChange === void 0 || onChange(checkAllValue, {
      e: e,
      trigger: !checkAll ? "check" : "uncheck",
      selectedOptions: currentSelectedOptions
    });
  };
  var handleChange = function handleChange(value2, context) {
    var selectedValue = multiple ? context.value : value2;
    if (multiple) {
      !reserveKeyword && inputValue && onInputChange("", {
        e: context.e,
        trigger: "change"
      });
    }
    if (creatable && isFunction(onCreate)) {
      if (options.filter(function (option) {
        return option.value === selectedValue;
      }).length === 0) {
        onCreate(selectedValue);
      }
    }
    var _getSelectedOptions4 = getSelectedOptions(value2, multiple, valueType, keys, valueToOption, selectedValue),
      currentSelectedOptions = _getSelectedOptions4.currentSelectedOptions,
      currentOption = _getSelectedOptions4.currentOption;
    onChange === null || onChange === void 0 || onChange(value2, {
      e: context.e,
      trigger: context.trigger,
      selectedOptions: currentSelectedOptions,
      option: currentOption
    });
    if (multiple && (context === null || context === void 0 ? void 0 : context.trigger) === "uncheck" && isFunction(onRemove)) {
      var value3 = context === null || context === void 0 ? void 0 : context.value;
      var option = options.find(function (option2) {
        return option2.value === value3;
      });
      onRemove({
        value: value3,
        data: option,
        e: context.e
      });
    }
  };
  var handleFilter = function handleFilter(value2) {
    var filteredOptions = [];
    if (filterable && isFunction(onSearch)) {
      return;
    }
    if (!value2) {
      setCurrentOptions(tmpPropOptions);
      return;
    }
    var filterLabels = [];
    var filterMethods = function filterMethods(option) {
      if (filter && isFunction(filter)) {
        return filter(value2, option);
      }
      var upperValue = value2.toUpperCase();
      return ((option === null || option === void 0 ? void 0 : option.label) || "").toUpperCase().includes(upperValue);
    };
    tmpPropOptions === null || tmpPropOptions === void 0 || tmpPropOptions.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        filteredOptions.push(_objectSpread$3(_objectSpread$3({}, option), {}, {
          children: (_option$children = option.children) === null || _option$children === void 0 ? void 0 : _option$children.filter(function (child) {
            if (filterMethods(child)) {
              filterLabels.push(child.label);
              return true;
            }
            return false;
          })
        }));
      } else if (filterMethods(option)) {
        filterLabels.push(option.label);
        filteredOptions.push(option);
      }
    });
    var isSameLabelOptionExist = filterLabels.includes(value2);
    if (creatable && !isSameLabelOptionExist) {
      filteredOptions = filteredOptions.concat([{
        label: value2,
        value: value2
      }]);
    }
    setCurrentOptions(filteredOptions);
  };
  var handleInputChange = function handleInputChange(value2, context) {
    if (context.trigger !== "clear") {
      onInputChange(value2, {
        e: context.e,
        trigger: "input"
      });
    }
    if (value2 === void 0) {
      return;
    }
    if (isFunction(onSearch)) {
      onSearch(value2, {
        e: context.e
      });
      return;
    }
  };
  var handleClear = function handleClear(context) {
    context.e.stopPropagation();
    if (Array.isArray(value)) {
      onChange([], _objectSpread$3(_objectSpread$3({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    } else {
      onChange(null, _objectSpread$3(_objectSpread$3({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    }
    onClear(context);
  };
  reactExports.useEffect(function () {
    if (typeof inputValue !== "undefined") {
      handleFilter(String(inputValue));
    }
  }, [inputValue, tmpPropOptions]);
  var renderSuffixIcon = function renderSuffixIcon() {
    if (suffixIcon) {
      return suffixIcon;
    }
    if (loading) {
      return /* @__PURE__ */React.createElement(Loading, {
        className: classNames("".concat(name, "__right-icon"), "".concat(name, "__active-icon")),
        loading: true,
        size: "small"
      });
    }
    return showArrow && /* @__PURE__ */React.createElement(FakeArrow, {
      className: "".concat(name, "__right-icon"),
      isActive: showPopup,
      disabled: disabled
    });
  };
  var getPopupInstance = reactExports.useCallback(function () {
    var _selectInputRef$curre;
    return (_selectInputRef$curre = selectInputRef.current) === null || _selectInputRef$curre === void 0 ? void 0 : _selectInputRef$curre.getPopupContentElement();
  }, []);
  var childrenWithProps = reactExports.Children.map(children, function (child) {
    if (/*#__PURE__*/reactExports.isValidElement(child)) {
      var addedProps = {
        multiple: multiple
      };
      return /*#__PURE__*/reactExports.cloneElement(child, _objectSpread$3({}, addedProps));
    }
    return child;
  });
  var renderContent = function renderContent() {
    var popupContentProps = {
      onChange: handleChange,
      value: value,
      className: className,
      size: size,
      multiple: multiple,
      showPopup: showPopup,
      // popup弹出层内容只会在点击事件之后触发 并且无任何透传参数
      setShowPopup: function setShowPopup(show) {
        return handleShowPopup(show, {});
      },
      options: currentOptions,
      empty: empty,
      max: max,
      loadingText: loadingText,
      loading: loading,
      valueType: valueType,
      keys: keys,
      panelBottomContent: panelBottomContent,
      panelTopContent: panelTopContent,
      onCheckAllChange: onCheckAllChange,
      getPopupInstance: getPopupInstance,
      scroll: scroll
    };
    return /* @__PURE__ */React.createElement(PopupContent, _objectSpread$3({}, popupContentProps), childrenWithProps);
  };
  var renderValueDisplay = function renderValueDisplay() {
    if (!valueDisplay) {
      if (!multiple) {
        if (typeof selectedLabel !== "string") {
          return selectedLabel;
        }
        return "";
      }
      return function (_ref2) {
        var val = _ref2.value;
        return val.slice(0, minCollapsedNum ? minCollapsedNum : val.length).map(function (v, key) {
          var filterOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
            return option.label === v;
          });
          return /* @__PURE__ */React.createElement(Tag, _objectSpread$3(_objectSpread$3({
            key: key,
            closable: !(filterOption !== null && filterOption !== void 0 && filterOption.disabled) && !disabled && !readonly,
            size: size
          }, tagProps), {}, {
            onClose: function onClose(_ref3) {
              var _e$nativeEvent, _e$nativeEvent$stopIm, _tagProps$onClose;
              var e = _ref3.e;
              e.stopPropagation();
              e === null || e === void 0 || (_e$nativeEvent = e.nativeEvent) === null || _e$nativeEvent === void 0 || (_e$nativeEvent$stopIm = _e$nativeEvent.stopImmediatePropagation) === null || _e$nativeEvent$stopIm === void 0 || _e$nativeEvent$stopIm.call(_e$nativeEvent);
              var values = getSelectValueArr(value, value[key], true, valueType, keys);
              var _getSelectedOptions5 = getSelectedOptions(values, multiple, valueType, keys, valueToOption, value),
                currentSelectedOptions = _getSelectedOptions5.currentSelectedOptions;
              onChange(values, {
                e: e,
                selectedOptions: currentSelectedOptions,
                trigger: "tag-remove"
              });
              tagProps === null || tagProps === void 0 || (_tagProps$onClose = tagProps.onClose) === null || _tagProps$onClose === void 0 || _tagProps$onClose.call(tagProps, {
                e: e
              });
              onRemove === null || onRemove === void 0 || onRemove({
                value: value[key],
                data: {
                  label: v,
                  value: value[key]
                },
                e: e
              });
            }
          }), v);
        });
      };
    }
    if (typeof valueDisplay === "string") {
      return valueDisplay;
    }
    if (multiple) {
      return function (_ref4) {
        var onClose = _ref4.onClose;
        return parseContentTNode(valueDisplay, {
          value: selectedOptions,
          onClose: onClose
        });
      };
    }
    return parseContentTNode(valueDisplay, {
      value: selectedLabel,
      onClose: noop
    });
  };
  var updateScrollTop = function updateScrollTop(content) {
    if (!content || isScrolling) {
      return;
    }
    var firstSelectedNode = content.querySelector(".".concat(classPrefix, "-is-selected"));
    if (!multiple && firstSelectedNode) {
      var _getComputedStyle = getComputedStyle(firstSelectedNode),
        paddingBottom = _getComputedStyle.paddingBottom;
      var _getComputedStyle2 = getComputedStyle(content),
        marginBottom = _getComputedStyle2.marginBottom;
      var elementBottomHeight = parseInt(paddingBottom, 10) + parseInt(marginBottom, 10);
      var updateValue = getOffsetTopToContainer(firstSelectedNode, content) - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;
      setTimeout(function () {
        content.scrollTop = updateValue;
      });
    }
  };
  var onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave;
  var handleEnter = function handleEnter(_, context) {
    onEnter === null || onEnter === void 0 || onEnter(_objectSpread$3(_objectSpread$3({}, context), {}, {
      value: value
    }));
  };
  var handleScroll = function handleScroll(_ref5) {
    var e = _ref5.e;
    toggleIsScrolling(true);
    onScroll === null || onScroll === void 0 || onScroll({
      e: e
    });
    if (onScrollToBottom) {
      var debounceOnScrollBottom = debounce(function (e2) {
        return onScrollToBottom({
          e: e2
        });
      }, 100);
      var _e$target = e.target,
        scrollTop = _e$target.scrollTop,
        clientHeight = _e$target.clientHeight,
        scrollHeight = _e$target.scrollHeight;
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e);
      }
    }
  };
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(name, "__wrap"), className),
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /* @__PURE__ */React.createElement(SelectInput, _objectSpread$3({
    autoWidth: !(style !== null && style !== void 0 && style.width) && autoWidth,
    ref: composeRefs(ref, selectInputRef),
    className: name,
    readonly: readonly,
    autofocus: props.autofocus,
    allowInput: filterable || isFunction(filter),
    multiple: multiple,
    value: selectedLabel,
    options: selectedOptions,
    valueDisplay: renderValueDisplay(),
    clearable: clearable,
    disabled: disabled,
    status: props.status,
    tips: props.tips,
    borderless: borderless,
    label: label,
    suffix: props.suffix,
    prefixIcon: prefixIcon,
    suffixIcon: renderSuffixIcon(),
    panel: renderContent(),
    placeholder: !multiple && showPopup && selectedLabel ? selectedLabel : placeholder || "\u8BF7\u9009\u62E9",
    inputValue: inputValue,
    tagInputProps: _objectSpread$3({
      size: size
    }, tagInputProps),
    tagProps: _objectSpread$3({
      size: size
    }, tagProps),
    inputProps: _objectSpread$3({
      size: size
    }, inputProps),
    minCollapsedNum: minCollapsedNum,
    collapsedItems: collapsedItems,
    updateScrollTop: updateScrollTop,
    popupProps: _objectSpread$3({
      overlayClassName: ["".concat(name, "__dropdown"), overlayClassName],
      onScroll: handleScroll
    }, restPopupProps),
    popupVisible: showPopup,
    onPopupVisibleChange: handleShowPopup,
    onTagChange: onTagChange,
    onInputChange: handleInputChange,
    onFocus: onFocus,
    onEnter: handleEnter,
    onBlur: function onBlur(_, context) {
      _onBlur === null || _onBlur === void 0 || _onBlur({
        value: value,
        e: context.e
      });
    },
    onClear: handleClear
  }, selectInputProps)));
}, {
  Option: Option,
  OptionGroup: OptionGroup
});
Select$1.displayName = "Select";

var Select = Select$1;

var dialogCardDefaultProps = {
  closeBtn: true,
  footer: true,
  header: true,
  theme: "default"
};
var dialogDefaultProps = {
  closeOnEscKeydown: void 0,
  closeOnOverlayClick: void 0,
  destroyOnClose: false,
  draggable: false,
  mode: "modal",
  placement: "top",
  preventScrollThrough: true,
  showInAttachedElement: false,
  showOverlay: true,
  lazy: true
};

var _excluded$1 = ["theme", "header", "closeBtn", "footer", "body", "children", "className", "onCancel", "onConfirm", "onCloseBtnClick", "cancelBtn", "confirmBtn", "confirmLoading"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var renderDialogButton = function renderDialogButton(btn, defaultProps) {
  var result = null;
  if (isString(btn)) {
    result = /* @__PURE__ */React.createElement(Button, _objectSpread$2({}, defaultProps), btn);
  } else if (/*#__PURE__*/reactExports.isValidElement(btn)) {
    result = btn;
  } else if (isObject(btn)) {
    result = /* @__PURE__ */React.createElement(Button, _objectSpread$2(_objectSpread$2({}, defaultProps), btn));
  } else if (isFunction(btn)) {
    result = btn();
  }
  return result;
};
var DialogCard$1 = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: CloseIcon,
      InfoCircleFilledIcon: InfoCircleFilledIcon,
      CheckCircleFilledIcon: CheckCircleFilledIcon
    }),
    CloseIcon$1 = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon;
  var confirmText = "\u786E\u8BA4";
  var cancelText = "\u53D6\u6D88";
  var _useDefaultProps = useDefaultProps(props, dialogCardDefaultProps),
    theme = _useDefaultProps.theme,
    header = _useDefaultProps.header,
    closeBtn = _useDefaultProps.closeBtn,
    footer = _useDefaultProps.footer,
    body = _useDefaultProps.body,
    children = _useDefaultProps.children,
    className = _useDefaultProps.className,
    onCancel = _useDefaultProps.onCancel,
    onConfirm = _useDefaultProps.onConfirm,
    onCloseBtnClick = _useDefaultProps.onCloseBtnClick,
    _useDefaultProps$canc = _useDefaultProps.cancelBtn,
    cancelBtn = _useDefaultProps$canc === void 0 ? cancelText : _useDefaultProps$canc,
    _useDefaultProps$conf = _useDefaultProps.confirmBtn,
    confirmBtn = _useDefaultProps$conf === void 0 ? confirmText : _useDefaultProps$conf,
    confirmLoading = _useDefaultProps.confirmLoading,
    otherProps = _objectWithoutProperties(_useDefaultProps, _excluded$1);
  var renderHeaderContent = function renderHeaderContent() {
    var iconMap = {
      info: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-info")
      }),
      warning: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-warning")
      }),
      // error is going to deprecated
      error: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-error")
      }),
      danger: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-error")
      }),
      success: /* @__PURE__ */React.createElement(CheckCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-success")
      })
    };
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(componentCls, "__header-content")
    }, iconMap[theme], header);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (!closeBtn) {
      return null;
    }
    var closeIcon = function closeIcon() {
      return closeBtn === true ? /* @__PURE__ */React.createElement(CloseIcon$1, null) : closeBtn;
    };
    return /* @__PURE__ */React.createElement("span", {
      className: "".concat(componentCls, "__close"),
      style: {
        marginLeft: "auto"
      },
      onClick: function onClick(e) {
        return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
          e: e
        });
      }
    }, closeIcon());
  };
  var renderHeader = function renderHeader() {
    return /* @__PURE__ */React.createElement("div", {
      className: classNames("".concat(componentCls, "__header"))
    }, renderHeaderContent(), renderCloseBtn());
  };
  var renderFooter = function renderFooter() {
    var defaultFooter = function defaultFooter() {
      var _cancelBtn$props;
      var renderCancelBtn = renderDialogButton(cancelBtn, {
        variant: "outline",
        onClick: function onClick(e) {
          return onCancel === null || onCancel === void 0 ? void 0 : onCancel({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__cancel"), cancelBtn === null || cancelBtn === void 0 || (_cancelBtn$props = cancelBtn.props) === null || _cancelBtn$props === void 0 ? void 0 : _cancelBtn$props.className)
      });
      var renderConfirmBtn = renderDialogButton(confirmBtn, {
        theme: "primary",
        loading: confirmLoading,
        onClick: function onClick(e) {
          return onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__confirm"), confirmBtn === null || confirmBtn === void 0 ? void 0 : confirmBtn.className)
      });
      return /* @__PURE__ */React.createElement(React.Fragment, null, renderCancelBtn, renderConfirmBtn);
    };
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(componentCls, "__footer")
    }, parseTNode(footer, null, defaultFooter()));
  };
  return /* @__PURE__ */React.createElement("div", _objectSpread$2(_objectSpread$2({
    ref: ref
  }, otherProps), {}, {
    className: classNames(componentCls, "".concat(componentCls, "--default"), className)
  }), !!header && renderHeader(), /* @__PURE__ */React.createElement("div", {
    className: "".concat(componentCls, "__body")
  }, body || children), !!footer && renderFooter());
});
DialogCard$1.displayName = "DialogCard";

var useDialogDrag = function useDialogDrag(props) {
  var dialogCardRef = props.dialogCardRef,
    canDraggable = props.canDraggable;
  var validWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
  var screenHeight = validWindow ? window.innerHeight || document.documentElement.clientHeight : void 0;
  var screenWidth = validWindow ? window.innerWidth || document.documentElement.clientWidth : void 0;
  var dragOffset = reactExports.useRef({
    x: 0,
    y: 0
  });
  useMouseEvent(dialogCardRef, {
    enabled: canDraggable,
    onDown: function onDown(e) {
      if (!validWindow || screenWidth === void 0 || screenHeight === void 0 || !dialogCardRef.current) return;
      var _dialogCardRef$curren = dialogCardRef.current,
        offsetLeft = _dialogCardRef$curren.offsetLeft,
        offsetTop = _dialogCardRef$curren.offsetTop,
        offsetWidth = _dialogCardRef$curren.offsetWidth,
        offsetHeight = _dialogCardRef$curren.offsetHeight,
        style = _dialogCardRef$curren.style;
      if (offsetWidth > screenWidth || offsetHeight > screenHeight) return;
      style.cursor = "move";
      dragOffset.current = {
        x: e.clientX - offsetLeft,
        y: e.clientY - offsetTop
      };
    },
    onMove: function onMove(e) {
      if (!validWindow || screenWidth === void 0 || screenHeight === void 0 || !dialogCardRef.current) return;
      var _dialogCardRef$curren2 = dialogCardRef.current,
        offsetWidth = _dialogCardRef$curren2.offsetWidth,
        offsetHeight = _dialogCardRef$curren2.offsetHeight,
        style = _dialogCardRef$curren2.style;
      var diffX = e.clientX - dragOffset.current.x;
      var diffY = e.clientY - dragOffset.current.y;
      if (diffX < 0) diffX = 0;
      if (diffY < 0) diffY = 0;
      if (screenWidth - offsetWidth - diffX < 0) diffX = screenWidth - offsetWidth;
      if (screenHeight - offsetHeight - diffY < 0) diffY = screenHeight - offsetHeight;
      style.position = "absolute";
      style.left = "".concat(diffX, "px");
      style.top = "".concat(diffY, "px");
    },
    onUp: function onUp() {
      if (dialogCardRef.current) dialogCardRef.current.style.cursor = "default";
    }
  });
};

var dialogSet = /* @__PURE__ */new Set();
var useDialogEsc = function useDialogEsc(visible, dialog) {
  reactExports.useEffect(function () {
    if (visible) {
      if (dialog !== null && dialog !== void 0 && dialog.current) {
        var _dialog$current;
        dialogSet.add(dialog);
        dialog === null || dialog === void 0 || (_dialog$current = dialog.current) === null || _dialog$current === void 0 || _dialog$current.focus();
      }
    } else if (dialogSet.has(dialog)) {
      var _dialogList;
      dialogSet["delete"](dialog);
      var dialogList = _toConsumableArray(dialogSet);
      (_dialogList = dialogList[dialogList.length - 1]) === null || _dialogList === void 0 || (_dialogList = _dialogList.current) === null || _dialogList === void 0 || _dialogList.focus();
    }
    return function () {
      dialogSet.forEach(function (item) {
        if ((item === null || item === void 0 ? void 0 : item.current) === null) {
          dialogSet["delete"](item);
        }
      });
    };
  }, [visible, dialog]);
};

function useDialogPosition(visible, dialogCardRef) {
  var mousePosRef = reactExports.useRef(null);
  var getClickPosition = function getClickPosition(e) {
    if (mousePosRef) {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      setTimeout(function () {
        mousePosRef.current = null;
      }, 100);
    }
  };
  useIsomorphicLayoutEffect(function () {
    document.addEventListener("click", getClickPosition, true);
    return function () {
      document.removeEventListener("click", getClickPosition, true);
    };
  }, []);
  reactExports.useEffect(function () {
    if (!visible) return;
    if (mousePosRef.current && dialogCardRef.current) {
      dialogCardRef.current.style.transformOrigin = "".concat(mousePosRef.current.x - dialogCardRef.current.offsetLeft, "px ").concat(mousePosRef.current.y - dialogCardRef.current.offsetTop, "px");
    }
  }, [visible, dialogCardRef]);
}

var key = 1;
function useDialogLockStyle(_ref) {
  var preventScrollThrough = _ref.preventScrollThrough,
    visible = _ref.visible,
    mode = _ref.mode,
    showInAttachedElement = _ref.showInAttachedElement;
  var lockStyleRef = reactExports.useRef(null);
  var timerRef = reactExports.useRef(null);
  var clearStyleFunc = reactExports.useCallback(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(function () {
      var _lockStyleRef$current, _lockStyleRef$current2;
      (_lockStyleRef$current = lockStyleRef.current) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current = _lockStyleRef$current.parentNode) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current2 = _lockStyleRef$current.removeChild) === null || _lockStyleRef$current2 === void 0 || _lockStyleRef$current2.call(_lockStyleRef$current, lockStyleRef.current);
    }, 150);
  }, []);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === "undefined" || !visible) return;
    if (!lockStyleRef.current) {
      lockStyleRef.current = document.createElement("style");
    }
    var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    var scrollbarWidth = hasScrollBar ? getScrollbarWidth() : 0;
    lockStyleRef.current.dataset.id = "td_dialog_".concat(+ /* @__PURE__ */new Date(), "_").concat(key += 1);
    lockStyleRef.current.innerHTML = "\n      html body {\n        overflow-y: hidden;\n        width: calc(100% - ".concat(scrollbarWidth, "px);\n      }\n    ");
    return clearStyleFunc;
  }, [visible, clearStyleFunc]);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === "undefined") return;
    if (mode !== "modal" || !preventScrollThrough || showInAttachedElement) return;
    if (visible) {
      if (lockStyleRef.current) document.head.appendChild(lockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [preventScrollThrough, visible, mode, showInAttachedElement, clearStyleFunc]);
}

function parseValueToPx(value) {
  if (typeof value === "number") return "".concat(value, "px");
  return value;
}

var _excluded = ["children"],
  _excluded2 = ["className", "dialogClassName", "style", "width", "mode", "zIndex", "visible", "attach", "onBeforeOpen", "onBeforeClose", "onOpened", "onCancel", "onConfirm", "onClose", "onClosed", "isPlugin", "draggable", "onOverlayClick", "onEscKeydown", "closeOnEscKeydown", "confirmOnEnter", "showOverlay", "showInAttachedElement", "closeOnOverlayClick", "destroyOnClose", "preventScrollThrough", "onCloseBtnClick", "forceRender", "lazy"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Dialog$1 = /*#__PURE__*/reactExports.forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, dialogDefaultProps);
  var children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var wrapRef = reactExports.useRef(null);
  var maskRef = reactExports.useRef(null);
  var contentClickRef = reactExports.useRef(false);
  var dialogCardRef = reactExports.useRef(null);
  var dialogPosition = reactExports.useRef(null);
  var portalRef = reactExports.useRef(null);
  var _useSetState = useSetState(_objectSpread$1({
      isPlugin: false
    }, restProps)),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var className = state.className,
    dialogClassName = state.dialogClassName,
    style = state.style,
    width = state.width,
    mode = state.mode,
    zIndex = state.zIndex,
    visible = state.visible,
    attach = state.attach,
    onBeforeOpen = state.onBeforeOpen,
    onBeforeClose = state.onBeforeClose,
    onOpened = state.onOpened,
    onCancel = state.onCancel,
    onConfirm = state.onConfirm,
    onClose = state.onClose,
    onClosed = state.onClosed,
    isPlugin = state.isPlugin,
    draggable = state.draggable,
    onOverlayClick = state.onOverlayClick,
    onEscKeydown = state.onEscKeydown,
    closeOnEscKeydown = state.closeOnEscKeydown,
    confirmOnEnter = state.confirmOnEnter,
    showOverlay = state.showOverlay,
    showInAttachedElement = state.showInAttachedElement,
    closeOnOverlayClick = state.closeOnOverlayClick,
    destroyOnClose = state.destroyOnClose,
    preventScrollThrough = state.preventScrollThrough,
    onCloseBtnClick = state.onCloseBtnClick,
    forceRender = state.forceRender,
    lazy = state.lazy,
    restState = _objectWithoutProperties(state, _excluded2);
  var dialogAttach = useAttach("dialog", attach);
  useDialogLockStyle({
    preventScrollThrough: preventScrollThrough,
    visible: visible,
    mode: mode,
    showInAttachedElement: showInAttachedElement
  });
  useDialogEsc(visible, wrapRef);
  useDialogPosition(visible, dialogCardRef);
  useDialogDrag({
    dialogCardRef: dialogCardRef,
    canDraggable: draggable && mode === "modeless"
  });
  reactExports.useEffect(function () {
    if (isPlugin) {
      return;
    }
    setState(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), props);
    });
  }, [props, setState, isPlugin]);
  reactExports.useImperativeHandle(ref, function () {
    return {
      show: function show() {
        setState({
          visible: true
        });
      },
      hide: function hide() {
        setState({
          visible: false
        });
      },
      setConfirmLoading: function setConfirmLoading(loading) {
        setState({
          confirmLoading: loading
        });
      },
      destroy: function destroy() {
        setState({
          visible: false,
          destroyOnClose: true
        });
      },
      update: function update(newOptions) {
        setState(function (prevState) {
          return _objectSpread$1(_objectSpread$1({}, prevState), newOptions);
        });
      }
    };
  });
  if (props.mode === "normal") {
    console.error("Dialog", 'mode="normal" is not supported, please use DialogCard.');
    return /* @__PURE__ */React.createElement(DialogCard$1, _objectSpread$1({}, props));
  }
  var onMaskClick = function onMaskClick(e) {
    if (showOverlay && closeOnOverlayClick) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (e.target === dialogPosition.current) {
        onOverlayClick === null || onOverlayClick === void 0 || onOverlayClick({
          e: e
        });
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: "overlay"
        });
      }
    }
  };
  var handleCancel = function handleCancel(_ref) {
    var e = _ref.e;
    onCancel === null || onCancel === void 0 || onCancel({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: "cancel"
    });
  };
  var handleClose = function handleClose(_ref2) {
    var e = _ref2.e;
    onCloseBtnClick === null || onCloseBtnClick === void 0 || onCloseBtnClick({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: "close-btn"
    });
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onEscKeydown === null || onEscKeydown === void 0 || onEscKeydown({
        e: e
      });
      if (closeOnEscKeydown) {
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: "esc"
        });
      }
    } else if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.stopPropagation();
      confirmOnEnter && (onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
        e: e
      }));
    }
  };
  var onAnimateLeave = function onAnimateLeave() {
    onClosed === null || onClosed === void 0 || onClosed();
    if (!wrapRef.current) return;
    wrapRef.current.style.display = "none";
  };
  var onAnimateStart = function onAnimateStart() {
    if (!wrapRef.current) return;
    onBeforeOpen === null || onBeforeOpen === void 0 || onBeforeOpen();
    wrapRef.current.style.display = "block";
  };
  var onInnerAnimateStart = function onInnerAnimateStart() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = "block";
  };
  var onInnerAnimateLeave = function onInnerAnimateLeave() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = "none";
  };
  var renderMask = function renderMask() {
    if (mode !== "modal") return null;
    return showOverlay ? /* @__PURE__ */React.createElement(CSSTransition, {
      "in": visible,
      appear: true,
      timeout: 300,
      classNames: "".concat(componentCls, "-fade"),
      mountOnEnter: true,
      unmountOnExit: true,
      nodeRef: maskRef
    }, /* @__PURE__ */React.createElement("div", {
      ref: maskRef,
      className: "".concat(componentCls, "__mask")
    })) : null;
  };
  return /* @__PURE__ */React.createElement(CSSTransition, {
    "in": visible,
    appear: true,
    timeout: 300,
    mountOnEnter: isUndefined(forceRender) ? lazy : !forceRender,
    unmountOnExit: destroyOnClose,
    nodeRef: portalRef,
    onEnter: onAnimateStart,
    onEntered: onOpened,
    onExit: function onExit() {
      return onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose();
    },
    onExited: onAnimateLeave
  }, /* @__PURE__ */React.createElement(Portal, {
    attach: dialogAttach,
    ref: portalRef
  }, /* @__PURE__ */React.createElement("div", {
    ref: wrapRef,
    className: classNames(className, "".concat(componentCls, "__ctx"), "".concat(componentCls, "__").concat(mode), _defineProperty(_defineProperty({}, "".concat(componentCls, "__ctx--fixed"), !showInAttachedElement), "".concat(componentCls, "__ctx--absolute"), showInAttachedElement)),
    style: {
      zIndex: zIndex,
      display: "none"
    },
    onKeyDown: handleKeyDown,
    tabIndex: 0
  }, renderMask(), /* @__PURE__ */React.createElement("div", {
    className: "".concat(componentCls, "__wrap")
  }, /* @__PURE__ */React.createElement("div", {
    ref: dialogPosition,
    className: classNames("".concat(componentCls, "__position"), _defineProperty(_defineProperty({}, "".concat(componentCls, "--top"), !!props.top || props.placement === "top"), "".concat(componentCls, "--center"), props.placement === "center" && !props.top)),
    style: {
      paddingTop: parseValueToPx(props.top)
    },
    onClick: onMaskClick
  }, /* @__PURE__ */React.createElement(CSSTransition, {
    "in": visible,
    appear: true,
    timeout: 300,
    classNames: "".concat(componentCls, "-zoom"),
    nodeRef: dialogCardRef,
    onEnter: onInnerAnimateStart,
    onExited: onInnerAnimateLeave
  }, /* @__PURE__ */React.createElement(DialogCard$1, _objectSpread$1(_objectSpread$1({
    ref: dialogCardRef
  }, restState), {}, {
    className: dialogClassName,
    style: _objectSpread$1(_objectSpread$1({}, style), {}, {
      width: parseValueToPx(width || (style === null || style === void 0 ? void 0 : style.width))
    }),
    onConfirm: onConfirm,
    onCancel: handleCancel,
    onCloseBtnClick: handleClose
  }), children)))))));
});
Dialog$1.displayName = "Dialog";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDialog = function createDialog(props) {
  var dialogRef = /*#__PURE__*/React.createRef();
  var options = _objectSpread({}, props);
  var _options$visible = options.visible,
    visible = _options$visible === void 0 ? true : _options$visible;
  var fragment = document.createDocumentFragment();
  var dGlobalConfig = ConfigProvider.getGlobalConfig();
  render(/* @__PURE__ */React.createElement(PluginContainer, {
    globalConfig: dGlobalConfig
  }, /* @__PURE__ */React.createElement(Dialog$1, _objectSpread(_objectSpread({}, options), {}, {
    visible: visible,
    ref: dialogRef,
    isPlugin: true
  }))), fragment);
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(fragment);
  } else {
    console.error("Dialog", "attach is not exist");
  }
  var dialogNode = {
    show: function show() {
      requestAnimationFrame(function () {
        var _dialogRef$current;
        container === null || container === void 0 || container.appendChild(fragment);
        (_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 || _dialogRef$current.show();
      });
    },
    hide: function hide() {
      requestAnimationFrame(function () {
        var _dialogRef$current2;
        (_dialogRef$current2 = dialogRef.current) === null || _dialogRef$current2 === void 0 || _dialogRef$current2.destroy();
      });
    },
    setConfirmLoading: function setConfirmLoading(loading) {
      requestAnimationFrame(function () {
        var _dialogRef$current3;
        (_dialogRef$current3 = dialogRef.current) === null || _dialogRef$current3 === void 0 || _dialogRef$current3.setConfirmLoading(loading);
      });
    },
    update: function update(updateOptions) {
      requestAnimationFrame(function () {
        var _dialogRef$current4;
        (_dialogRef$current4 = dialogRef.current) === null || _dialogRef$current4 === void 0 || _dialogRef$current4.update(updateOptions);
      });
    },
    destroy: function destroy() {
      requestAnimationFrame(function () {
        var _dialogRef$current5;
        (_dialogRef$current5 = dialogRef.current) === null || _dialogRef$current5 === void 0 || _dialogRef$current5.destroy();
      });
    }
  };
  return dialogNode;
};
var confirm = function confirm(props) {
  return createDialog(props);
};
var alert = function alert(props) {
  var options = _objectSpread({}, props);
  options.cancelBtn = null;
  return createDialog(options);
};
createDialog.alert = alert;
createDialog.confirm = confirm;
var DialogPlugin$1 = createDialog;

var Dialog = Dialog$1;
var DialogCard = DialogCard$1;
var dialog = DialogPlugin$1;
var DialogPlugin = DialogPlugin$1;

export { Alert, Badge, Button, Col, ConfigProvider, Container, Dialog, DialogCard, DialogPlugin, Flex, Grid, Loading, Row, Select, SelectInput, Tag, dialog };
//# sourceMappingURL=index.js.map
