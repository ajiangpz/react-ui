import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import { r as reactDomExports } from '../_chunks/dep-DU45RdGB.js';
import NotificationContainer from './NotifyContainer.js';
import '@babel/runtime/helpers/typeof';
import './NotifyItem.js';
import 'lucide-react';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';

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
  var contextValue = React.useMemo(function () {
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
  return /* @__PURE__ */React.createElement(NotificationContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/reactDomExports.createPortal(/* @__PURE__ */React.createElement(NotificationContainer, {
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

export { NotificationProvider, useNotification };
//# sourceMappingURL=NotifyContext.js.map
