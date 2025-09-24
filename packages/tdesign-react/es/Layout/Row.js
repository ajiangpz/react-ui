import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { R as React } from '../_chunks/dep-C52Ear6B.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      style: _objectSpread({
        paddingLeft: "".concat(horizontal / 2, "px"),
        paddingRight: "".concat(horizontal / 2, "px"),
        paddingTop: "-".concat(vertical / 2, "px"),
        paddingBottom: "-".concat(vertical / 2, "px")
      }, ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.style) || {})
    });
  }));
};

export { Row };
//# sourceMappingURL=Row.js.map
