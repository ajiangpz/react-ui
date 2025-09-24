import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { CSSTransition } from 'react-transition-group';
import { p as parseTNode } from '../_chunks/dep-DWZDJ_hQ.js';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useGlobalIcon } from '../_chunks/dep-Dp0dxPtr.js';
import { c as composeRefs } from '../_chunks/dep-C1XcmShP.js';
import { u as useDefaultProps } from '../_chunks/dep-e4v9VeEm.js';
import '@babel/runtime/helpers/typeof';
import 'lodash-es';
import '../config-provider/ConfigContext.js';

var alertDefaultProps = {
  closeBtn: false,
  maxLine: 0,
  theme: "info"
};

var _excluded = ["message", "title", "operation", "theme", "icon", "closeBtn", "maxLine", "onClose", "className", "onClosed"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var transitionTime = 200;
;
var Alert = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: X,
      InfoCircleFilledIcon: Info,
      CheckCircleFilledIcon: CheckCircle,
      ErrorCircleFilledIcon: AlertTriangle
    }),
    CloseIcon = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
    ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
  var _useDefaultProps = useDefaultProps(props, alertDefaultProps),
    message = _useDefaultProps.message,
    title = _useDefaultProps.title,
    operation = _useDefaultProps.operation,
    theme = _useDefaultProps.theme,
    icon = _useDefaultProps.icon,
    closeBtn = _useDefaultProps.closeBtn,
    maxLine = _useDefaultProps.maxLine,
    onClose = _useDefaultProps.onClose,
    className = _useDefaultProps.className,
    _useDefaultProps$onCl = _useDefaultProps.onClosed,
    onClosed = _useDefaultProps$onCl === void 0 ? noop : _useDefaultProps$onCl,
    alertProps = _objectWithoutProperties(_useDefaultProps, _excluded);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    closed = _React$useState2[0],
    setClosed = _React$useState2[1];
  var _React$useState3 = React.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    collapsed = _React$useState4[0],
    setCollapsed = _React$useState4[1];
  var nodeRef = reactExports.useRef(null);
  var iconMap = {
    success: CheckCircleFilledIcon,
    info: InfoCircleFilledIcon,
    error: ErrorCircleFilledIcon,
    warning: ErrorCircleFilledIcon
  };
  var handleClose = function handleClose(e) {
    setClosed(true);
    onClose === null || onClose === void 0 || onClose({
      e: e
    });
  };
  var handleCollapse = function handleCollapse() {
    setCollapsed(function (collapsed2) {
      return !collapsed2;
    });
  };
  var renderIconNode = function renderIconNode() {
    if (/*#__PURE__*/React.isValidElement(icon)) return icon;
    return /*#__PURE__*/React.createElement(iconMap[theme]);
  };
  var renderMessage = function renderMessage() {
    if (+maxLine > 0 && Array.isArray(message)) {
      return /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-alert__description")
      }, message.map(function (item, index) {
        if (collapsed) {
          if (index < +maxLine) {
            return /* @__PURE__ */React.createElement("div", {
              key: index
            }, item);
          }
        } else {
          return /* @__PURE__ */React.createElement("div", {
            key: index
          }, item);
        }
        return true;
      }), +maxLine < message.length && /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-alert__collapse"),
        onClick: handleCollapse
      }, collapsed ? "\u5C55\u5F00" : "\u6536\u8D77"));
    }
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-alert__description")
    }, message);
  };
  var isUsingClose = Reflect.has(props, "close");
  var closeNode = isUsingClose ? close : closeBtn;
  if (isUsingClose) {
    console.warn("TAlert", "prop `close` is going to be deprecated, please use `closeBtn` instead.");
  }
  var renderClose = function renderClose() {
    if (closeNode === false) return null;
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-alert__close"),
      onClick: handleClose
    }, parseTNode(closeNode, void 0, /* @__PURE__ */React.createElement(CloseIcon, {
      className: "t-icon"
    })));
  };
  return /* @__PURE__ */React.createElement(CSSTransition, {
    "in": !closed,
    unmountOnExit: true,
    classNames: {
      exitActive: "".concat(classPrefix, "-alert--closing")
    },
    nodeRef: nodeRef,
    timeout: transitionTime,
    onExited: onClosed
  }, /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: composeRefs(ref, nodeRef),
    className: classNames("".concat(classPrefix, "-alert"), "".concat(classPrefix, "-alert--").concat(theme), className)
  }, alertProps), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__icon")
  }, renderIconNode()), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__content")
  }, title ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__title")
  }, title) : null, /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__message")
  }, renderMessage(), operation ? /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-alert__operation")
  }, parseTNode(operation)) : null)), renderClose()));
});
Alert.displayName = "Alert";

export { Alert as default };
//# sourceMappingURL=Alert.js.map
