import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';

var _excluded = ["cols", "gap", "className", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    rest = _objectWithoutProperties(_ref, _excluded);
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    className: clsx("grid ".concat(gridClassMap.cols[cols], " ").concat(gridClassMap.gap[gap]), className)
  }, rest), children);
};

export { Grid };
//# sourceMappingURL=Grid.js.map
