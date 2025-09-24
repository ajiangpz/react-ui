import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import '@babel/runtime/helpers/typeof';

var _excluded = ["separate", "children", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputGroup = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var separate = props.separate,
    children = props.children,
    className = props.className,
    wrapperProps = _objectWithoutProperties(props, _excluded);
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: classNames("t-input-group", className, _defineProperty({}, "t-input-group--separate", separate))
  }, wrapperProps), children);
});
InputGroup.displayName = "InputGroup";

export { InputGroup as default };
//# sourceMappingURL=InputGroup.js.map
