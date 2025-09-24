import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { u as useConfig } from './dep-CaeblIEM.js';
import { Loading } from '../loading/index.js';
import { p as parseTNode } from './dep-DWZDJ_hQ.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';
import './style/css.js';

var buttonDefaultProps = {
  block: false,
  disabled: false,
  form: void 0,
  ghost: false,
  loading: false,
  shape: "rectangle",
  size: "medium",
  type: "button",
  variant: "base"
};

var _excluded = ["type", "theme", "variant", "icon", "disabled", "loading", "size", "block", "ghost", "shape", "children", "content", "className", "suffix", "href", "tag", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Button$1 = /*#__PURE__*/reactExports.forwardRef(function (originProps, ref) {
  var props = useDefaultProps(originProps, buttonDefaultProps);
  var type = props.type,
    theme = props.theme,
    variant = props.variant,
    icon = props.icon,
    disabled = props.disabled,
    loading = props.loading,
    size = props.size,
    block = props.block,
    ghost = props.ghost,
    shape = props.shape,
    children = props.children,
    content = props.content,
    className = props.className,
    suffix = props.suffix,
    href = props.href,
    tag = props.tag,
    onClick = props.onClick,
    buttonProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var renderChildren = content !== null && content !== void 0 ? content : children;
  var iconNode = icon;
  if (loading) iconNode = /* @__PURE__ */React.createElement(Loading, {
    loading: loading,
    inheritColor: true
  });
  var renderTheme = reactExports.useMemo(function () {
    if (!theme) {
      if (variant === "base") return "primary";
      return "default";
    }
    return theme;
  }, [theme, variant]);
  var renderTag = reactExports.useMemo(function () {
    if (!tag && href && !disabled) return "a";
    if (!tag && disabled) return "div";
    return tag || "button";
  }, [tag, href, disabled]);
  return /*#__PURE__*/React.createElement(renderTag, _objectSpread(_objectSpread({}, buttonProps), {}, {
    href: href,
    type: type,
    ref: ref,
    disabled: disabled || loading,
    className: classNames(className, ["".concat(classPrefix, "-button"), "".concat(classPrefix, "-button--theme-").concat(renderTheme), "".concat(classPrefix, "-button--variant-").concat(variant)], _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-button--shape-").concat(shape), shape !== "rectangle"), "".concat(classPrefix, "-button--ghost"), ghost), "".concat(classPrefix, "-is-loading"), loading), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), "".concat(classPrefix, "-size-full-width"), block)),
    onClick: !disabled && !loading ? onClick : void 0
  }), /* @__PURE__ */React.createElement(React.Fragment, null, iconNode, renderChildren && /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-button__text")
  }, typeof renderChildren === "function" ? renderChildren(children) : renderChildren), suffix && /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-button__suffix")
  }, parseTNode(suffix))));
});
Button$1.displayName = "Button";

var Button = Button$1;

export { Button as B };
//# sourceMappingURL=dep-CWE5nGYy.js.map
