import { R as React } from '../_chunks/dep-C52Ear6B.js';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import '@babel/runtime/helpers/typeof';

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

export { Col, col, offsetVariants, spanVariants };
//# sourceMappingURL=Col.js.map
