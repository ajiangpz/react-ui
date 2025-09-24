import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';

var _excluded = ["className", "record", "index", "selected", "onClick", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableRow = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    record = _ref.record,
    index = _ref.index,
    selected = _ref.selected,
    onClick = _ref.onClick,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var handleClick = function handleClick() {
    onClick === null || onClick === void 0 || onClick(record, index);
  };
  return /* @__PURE__ */React.createElement("tr", _objectSpread({
    ref: ref,
    onClick: handleClick
  }, props), children);
});
TableRow.displayName = "TableRow";

export { TableRow };
//# sourceMappingURL=TableRow.js.map
