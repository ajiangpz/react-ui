import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { createContext, useState, useRef, useCallback, useContext } from 'react';
import { createPortal } from 'react-dom';
import NotificationContainer from './NotifyContainer.js';
import '../_chunks/dep-D-UKOauR.js';
import './NotifyItem.js';
import '@tendaui/icons';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NotificationContext = /*#__PURE__*/createContext(null);
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
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    notifications = _useState2[0],
    setNotifications = _useState2[1];
  var timersRef = useRef(/* @__PURE__ */new Map());
  var pausedAtRef = useRef(/* @__PURE__ */new Map());
  var clearNotificationTimer = useCallback(function (id) {
    var timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current["delete"](id);
    }
  }, []);
  var startTimer = useCallback(function (notification, remainingTime) {
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
  }, [displayDuration, clearNotificationTimer]);
  var addNotification = useCallback(function (type, message) {
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
  var clearAllTimers = useCallback(function () {
    var now = Date.now();
    notifications.forEach(function (notification) {
      pausedAtRef.current.set(notification.id, now);
      clearNotificationTimer(notification.id);
    });
  }, [notifications, clearNotificationTimer]);
  var restartAllTimers = useCallback(function () {
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
  }, children, /*#__PURE__*/createPortal(/* @__PURE__ */React.createElement(NotificationContainer, {
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
  var context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export { NotificationProvider, useNotification };
//# sourceMappingURL=NotifyContext.js.map
