import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useDefaultProps } from '../_chunks/dep-e4v9VeEm.js';
import '@babel/runtime/helpers/typeof';
import '../config-provider/ConfigContext.js';

var badgeDefaultProps = {
  count: 0,
  dot: false,
  maxCount: 99,
  shape: "circle",
  showZero: false,
  size: "medium"
};

var _excluded = ["color", "dot", "maxCount", "count", "size", "shape", "showZero", "offset", "className", "content", "children", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Badge = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
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
    restProps = _objectWithoutProperties(_useDefaultProps, _excluded);
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
    var mergedStyle = _objectSpread({}, style);
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
  var badge = !isHidden ? /* @__PURE__ */React.createElement("span", _objectSpread(_objectSpread({}, childNode ? {} : restProps), {}, {
    className: badgeClassName,
    style: getStyle()
  }), !dot ? getDisplayCount() : null) : null;
  if (!childNode) {
    return badge;
  }
  return /* @__PURE__ */React.createElement("span", _objectSpread(_objectSpread({}, restProps), {}, {
    className: classNames("".concat(classPrefix, "-badge"), className),
    ref: ref
  }), childNode, badge);
});
Badge.displayName = "Badge";

export { Badge as default };
//# sourceMappingURL=Badge.js.map
