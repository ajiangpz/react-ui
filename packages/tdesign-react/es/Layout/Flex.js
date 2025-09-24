import { R as React } from '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';

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

export { Flex };
//# sourceMappingURL=Flex.js.map
