import { C as Checkbox$1 } from './dep-m5bu896E.js';
import './style/css.js';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports, R as React$1 } from './dep-C52Ear6B.js';
import { r as reactDomExports } from './dep-DU45RdGB.js';
import { CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';
import { u as useConfig } from './dep-CaeblIEM.js';

var Checkbox = Checkbox$1;

var addNotification = function addNotification() {};
function notification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
  var title = arguments.length > 2 ? arguments[2] : undefined;
  var id = (/* @__PURE__ */new Date()).getTime().toString();
  addNotification({
    id: id,
    message: message,
    type: type,
    title: title
  });
}
function registerNotificationHandler(cb) {
  addNotification = cb;
}

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NotificationItem = function NotificationItem(_ref) {
  var message = _ref.message,
    type = _ref.type,
    heights = _ref.heights,
    setHeights = _ref.setHeights,
    id = _ref.id,
    gap = _ref.gap,
    isExpanded = _ref.isExpanded,
    isRemoved = _ref.isRemoved,
    title = _ref.title;
  var _useState = reactExports.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    initialHeight = _useState2[0],
    setInitialHeight = _useState2[1];
  var _useState3 = reactExports.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMounted = _useState4[0],
    setIsMounted = _useState4[1];
  var nofityItem = reactExports.useRef(null);
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  React$1.useEffect(function () {
    setIsMounted(true);
  }, []);
  React$1.useEffect(function () {
    var notifyNode = nofityItem.current;
    if (notifyNode) {
      var height = notifyNode.getBoundingClientRect().height;
      setInitialHeight(height);
      setHeights(function (h) {
        return [{
          toastId: id,
          height: height,
          message: message,
          type: type
        }].concat(_toConsumableArray(h));
      });
      return function () {
        setHeights(function (h) {
          return h.filter(function (h2) {
            return h2.toastId !== id;
          });
        });
      };
    }
  }, [setHeights, id]);
  reactExports.useLayoutEffect(function () {
    if (!isMounted) return;
    var notifyNode = nofityItem.current;
    if (notifyNode) {
      var originalHeight = notifyNode.style.height;
      notifyNode.style.height = "auto";
      var newHeight = notifyNode.getBoundingClientRect().height;
      notifyNode.style.height = originalHeight;
      setInitialHeight(newHeight);
      setHeights(function (heights2) {
        var isExist = heights2.some(function (h) {
          return h.toastId === id;
        });
        if (isExist) {
          return heights2.map(function (h) {
            return h.toastId === id ? _objectSpread$2(_objectSpread$2({}, h), {}, {
              height: newHeight,
              message: message,
              type: type
            }) : h;
          });
        }
        return [{
          toastId: id,
          height: newHeight,
          message: message,
          type: type
        }].concat(_toConsumableArray(heights2));
      });
    }
  }, [isMounted, initialHeight, setHeights, id, message, type]);
  var heightIndex = React$1.useMemo(function () {
    return heights.findIndex(function (h) {
      return h.toastId === id;
    });
  }, [heights, id]);
  var toastHeightBefore = React$1.useMemo(function () {
    return heights.reduce(function (acc, h, reduceIndex) {
      if (reduceIndex < heightIndex) {
        return acc + h.height;
      }
      return acc;
    }, 0);
  }, [initialHeight, heightIndex, heights]);
  var offset = React$1.useMemo(function () {
    return heightIndex * gap + toastHeightBefore;
  }, [toastHeightBefore, heightIndex]);
  return /* @__PURE__ */React$1.createElement("div", {
    className: "".concat(prefix, "-notify__item"),
    ref: nofityItem,
    style: {
      position: "absolute",
      height: isExpanded ? "auto" : "var(--front-toast-height)",
      width: "var(--toast-width)",
      "--offset": offset + "px",
      "--index": heightIndex,
      "--gap": gap + "px",
      "--z-index": heights.length - heightIndex
    },
    "data-toast": true,
    "data-mounted": isMounted,
    "data-expanded": isExpanded,
    "data-removed": isRemoved,
    "data-front": heightIndex === 0
  }, /* @__PURE__ */React$1.createElement("div", {
    className: "".concat(prefix, "-notify__content")
  }, /* @__PURE__ */React$1.createElement("div", {
    className: "".concat(prefix, "-notify__header")
  }, /* @__PURE__ */React$1.createElement("div", {
    className: "".concat(prefix, "-notify__icon")
  }, type === "success" && /* @__PURE__ */React$1.createElement(CheckCircle, {
    className: "t-icon t-is-success"
  }), type === "error" && /* @__PURE__ */React$1.createElement(XCircle, {
    className: "t-icon t-is-error"
  }), type === "info" && /* @__PURE__ */React$1.createElement(Info, {
    className: "t-icon t-is-info"
  }), type === "warning" && /* @__PURE__ */React$1.createElement(AlertCircle, {
    className: "t-icon t-is-warning"
  }), type === "default" && /* @__PURE__ */React$1.createElement(Info, {
    className: "t-icon t-is-info"
  })), /* @__PURE__ */React$1.createElement("div", {
    className: "".concat(prefix, "-notify__title")
  }, title))), /* @__PURE__ */React$1.createElement("p", {
    className: "".concat(prefix, "-notify__detail"),
    style: {
      opacity: heightIndex === 0 || isExpanded ? 1 : 0,
      transition: "opacity 400ms"
    }
  }, message));
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    return /* @__PURE__ */React.createElement(NotificationItem, _objectSpread$1(_objectSpread$1({
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NotificationContext = /*#__PURE__*/reactExports.createContext(null);
var generateId = function generateId() {
  return Math.random().toString(36).substr(2, 9);
};
var NotificationProvider = function NotificationProvider(_ref) {
  var children = _ref.children,
    _ref$maxStack = _ref.maxStack,
    maxStack = _ref$maxStack === void 0 ? 5 : _ref$maxStack,
    _ref$displayDuration = _ref.displayDuration,
    displayDuration = _ref$displayDuration === void 0 ? 3e3 : _ref$displayDuration,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top-right" : _ref$position;
  var _useState = reactExports.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    notifications = _useState2[0],
    setNotifications = _useState2[1];
  var timersRef = reactExports.useRef(/* @__PURE__ */new Map());
  var pausedAtRef = reactExports.useRef(/* @__PURE__ */new Map());
  var clearNotificationTimer = reactExports.useCallback(function (id) {
    var timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current["delete"](id);
    }
  }, []);
  var startTimer = reactExports.useCallback(function (notification, remainingTime) {
    var duration = remainingTime !== null && remainingTime !== void 0 ? remainingTime : displayDuration;
    var timer = setTimeout(function () {
      setNotifications(function (prev) {
        return prev.map(function (n) {
          return n.id === notification.id ? _objectSpread(_objectSpread({}, n), {}, {
            isRemoved: true
          }) : n;
        });
      });
      setTimeout(function () {
        setNotifications(function (prev) {
          return prev.filter(function (t) {
            return t.id !== notification.id;
          });
        });
        clearNotificationTimer(notification.id);
        pausedAtRef.current["delete"](notification.id);
      }, 400);
    }, duration);
    timersRef.current.set(notification.id, timer);
  }, [displayDuration]);
  var addNotification = reactExports.useCallback(function (type, message) {
    var newNotification = {
      id: generateId(),
      type: type,
      title: message.title,
      message: message.message,
      createdAt: Date.now(),
      isRemoved: false
    };
    setNotifications(function (prev) {
      var newNotifications = [newNotification].concat(_toConsumableArray(prev));
      var removedNotifications = newNotifications.slice(maxStack);
      removedNotifications.forEach(function (notification) {
        clearNotificationTimer(notification.id);
        pausedAtRef.current["delete"](notification.id);
      });
      return newNotifications.slice(0, maxStack);
    });
    startTimer(newNotification);
  }, [maxStack, startTimer, clearNotificationTimer]);
  var contextValue = React$1.useMemo(function () {
    return {
      notify: addNotification,
      success: function success(message) {
        return addNotification("success", message);
      },
      error: function error(message) {
        return addNotification("error", message);
      },
      warning: function warning(message) {
        return addNotification("warning", message);
      },
      info: function info(message) {
        return addNotification("info", message);
      },
      removeNotification: function removeNotification(id) {
        setNotifications(function (prev) {
          return prev.filter(function (t) {
            return t.id !== id;
          });
        });
        clearNotificationTimer(id);
        pausedAtRef.current["delete"](id);
      }
    };
  }, [addNotification, clearNotificationTimer]);
  var clearAllTimers = reactExports.useCallback(function () {
    var now = Date.now();
    notifications.forEach(function (notification) {
      pausedAtRef.current.set(notification.id, now);
      clearNotificationTimer(notification.id);
    });
  }, [notifications]);
  var restartAllTimers = reactExports.useCallback(function () {
    notifications.forEach(function (notification) {
      var pausedAt = pausedAtRef.current.get(notification.id);
      if (pausedAt) {
        var elapsedTime = pausedAt - notification.createdAt;
        var remainingTime = Math.max(0, displayDuration - elapsedTime);
        startTimer(notification, remainingTime);
        pausedAtRef.current["delete"](notification.id);
      }
    });
  }, [notifications, displayDuration, startTimer]);
  return /* @__PURE__ */React$1.createElement(NotificationContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/reactDomExports.createPortal(/* @__PURE__ */React$1.createElement(NotificationContainer, {
    notifications: notifications,
    onRemove: function onRemove(id) {
      return contextValue.removeNotification(id);
    },
    onHoverStart: clearAllTimers,
    onHoverEnd: restartAllTimers,
    "data-testid": "notification-container",
    maxStack: maxStack,
    position: position
  }), document.body));
};
var useNotification = function useNotification() {
  var context = reactExports.useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export { Checkbox as C, NotificationProvider as N, notification as n, useNotification as u };
//# sourceMappingURL=dep-CsTff4aB.js.map
