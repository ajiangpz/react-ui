import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import NotificationItem from './NotifyItem.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/toConsumableArray';
import 'lucide-react';
import '../config-provider/ConfigContext.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var GAP = 14;
var TOAST_WIDTH = 356;
var NotificationContainer = function NotificationContainer(_ref) {
  var _heights$;
  var notifications = _ref.notifications,
    onRemove = _ref.onRemove,
    onHoverStart = _ref.onHoverStart,
    onHoverEnd = _ref.onHoverEnd,
    maxStack = _ref.maxStack,
    position = _ref.position;
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovering = _useState2[0],
    setIsHovering = _useState2[1];
  var latestNotifications = notifications.slice(0, maxStack);
  var _position$split = position.split("-"),
    _position$split2 = _slicedToArray(_position$split, 2),
    y = _position$split2[0],
    x = _position$split2[1];
  var handleMouseEnter = reactExports.useCallback(function () {
    setIsHovering(true);
    onHoverStart();
  }, [onHoverStart]);
  var handleMouseLeave = reactExports.useCallback(function () {
    setIsHovering(false);
    onHoverEnd();
  }, [onHoverEnd]);
  var _useState3 = reactExports.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    heights = _useState4[0],
    setHeights = _useState4[1];
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  return /* @__PURE__ */React.createElement("div", {
    className: "".concat(prefix, "-notify"),
    style: {
      height: isHovering ? "".concat(notifications.length * 100 + 16, "px") : "auto",
      minHeight: "80px",
      "--front-toast-height": (((_heights$ = heights[0]) === null || _heights$ === void 0 ? void 0 : _heights$.height) || 0) + "px",
      "--toast-width": TOAST_WIDTH + "px"
    },
    "data-toaster": true,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    "data-x-position": x,
    "data-y-position": y
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(prefix, "-notify__container"),
    style: {
      pointerEvents: "all"
    }
  }, latestNotifications.map(function (notification) {
    return /* @__PURE__ */React.createElement(NotificationItem, _objectSpread(_objectSpread({
      key: notification.id,
      heights: heights,
      setHeights: setHeights,
      gap: GAP
    }, notification), {}, {
      onRemove: onRemove,
      isExpanded: isHovering
    }));
  })));
};

export { GAP, TOAST_WIDTH, NotificationContainer as default };
//# sourceMappingURL=NotifyContainer.js.map
