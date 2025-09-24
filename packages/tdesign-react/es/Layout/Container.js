import { R as React } from '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';

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

export { Container };
//# sourceMappingURL=Container.js.map
