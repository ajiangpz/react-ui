import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React, r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { X } from 'lucide-react';
import tinycolor from 'tinycolor2';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useGlobalIcon } from '../_chunks/dep-Dp0dxPtr.js';
import { u as useDefaultProps } from '../_chunks/dep-e4v9VeEm.js';
import '@babel/runtime/helpers/typeof';
import '../config-provider/ConfigContext.js';

var tagDefaultProps = {
  closable: false,
  disabled: false,
  icon: void 0,
  shape: "square",
  size: "medium",
  theme: "default",
  variant: "dark"
};
var checkTagDefaultProps = {
  disabled: false,
  size: "medium"
};
var checkTagGroupDefaultProps = {
  multiple: false,
  defaultValue: []
};

var _excluded = ["theme", "size", "shape", "variant", "closable", "maxWidth", "icon", "content", "onClick", "onClose", "className", "style", "disabled", "children", "color", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TagFunction = function TagFunction(originalProps, ref) {
  var props = useDefaultProps(originalProps, tagDefaultProps);
  var theme = props.theme,
    size = props.size,
    shape = props.shape,
    variant = props.variant,
    closable = props.closable,
    maxWidth = props.maxWidth,
    icon = props.icon,
    content = props.content,
    _props$onClick = props.onClick,
    _onClick = _props$onClick === void 0 ? noop : _props$onClick,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? noop : _props$onClose,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    children = props.children,
    color = props.color,
    titleAttr = props.title,
    otherTagProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: X
    }),
    CloseIcon = _useGlobalIcon.CloseIcon;
  var tagClassPrefix = "".concat(classPrefix, "-tag");
  var sizeMap = {
    large: "".concat(classPrefix, "-size-l"),
    small: "".concat(classPrefix, "-size-s")
  };
  var tagClassNames = classNames(tagClassPrefix, "".concat(tagClassPrefix, "--").concat(theme), "".concat(tagClassPrefix, "--").concat(variant), _defineProperty(_defineProperty(_defineProperty({}, "".concat(tagClassPrefix, "--").concat(shape), shape !== "square"), "".concat(tagClassPrefix, "--ellipsis"), !!maxWidth), "".concat(tagClassPrefix, "--disabled"), disabled), sizeMap[size], className);
  var deleteIcon = /* @__PURE__ */React.createElement(CloseIcon, {
    onClick: function onClick(e) {
      if (disabled) return;
      onClose({
        e: e
      });
    },
    className: "".concat(tagClassPrefix, "__icon-close")
  });
  var title = reactExports.useMemo(function () {
    if (Reflect.has(props, "title")) return titleAttr;
    if (children && typeof children === "string") return children;
    if (content && typeof content === "string") return content;
  }, [children, content, props, titleAttr]);
  var titleAttribute = title ? {
    title: title
  } : void 0;
  var getTagStyle = reactExports.useMemo(function () {
    if (!color) return style;
    var luminance = tinycolor(color).getLuminance();
    var calculatedStyle = {};
    calculatedStyle.color = luminance > 0.5 ? "black" : "white";
    if (variant === "outline" || variant === "light-outline") {
      calculatedStyle.borderColor = color;
    }
    if (variant !== "outline") {
      var getLightestShade = function getLightestShade() {
        var _tinycolor$toRgb = tinycolor(color).toRgb(),
          r = _tinycolor$toRgb.r,
          g = _tinycolor$toRgb.g,
          b = _tinycolor$toRgb.b;
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.1)");
      };
      calculatedStyle.backgroundColor = variant === "dark" ? color : getLightestShade();
    }
    if (variant !== "dark") {
      calculatedStyle.color = color;
    }
    return _objectSpread(_objectSpread({}, calculatedStyle), style);
  }, [color, variant, style]);
  var getTextStyle = reactExports.useMemo(function () {
    if (!maxWidth) return {};
    return {
      maxWidth: isNaN(Number(maxWidth)) ? String(maxWidth) : "".concat(maxWidth, "px")
    };
  }, [maxWidth]);
  var tag = /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: tagClassNames,
    onClick: function onClick(e) {
      if (disabled) return;
      _onClick({
        e: e
      });
    },
    style: getTagStyle
  }, otherTagProps), /* @__PURE__ */React.createElement(React.Fragment, null, icon, /* @__PURE__ */React.createElement("span", _objectSpread({
    className: maxWidth ? "".concat(tagClassPrefix, "--text") : void 0,
    style: getTextStyle
  }, titleAttribute), children !== null && children !== void 0 ? children : content), closable && !disabled && deleteIcon));
  return tag;
};
var Tag = /*#__PURE__*/reactExports.forwardRef(TagFunction);
Tag.displayName = "Tag";

export { Tag, TagFunction, Tag as default };
//# sourceMappingURL=Tag.js.map
