import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';

var _excluded = ["className", "align", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableCell = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "center" : _ref$align,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /* @__PURE__ */React.createElement("td", _objectSpread({
    ref: ref,
    className: clsx("px-4 py-2 text-sm", {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right"
    }, className)
  }, props), children);
});
TableCell.displayName = "TableCell";

export { TableCell };
//# sourceMappingURL=TableCell.js.map
