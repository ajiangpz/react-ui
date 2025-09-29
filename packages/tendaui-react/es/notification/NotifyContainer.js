import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useCallback } from 'react';
import NotificationItem from './NotifyItem.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-CgyDw_YI.js';
import 'lucide-react';
import '../config-provider/ConfigContext.js';

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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovering = _useState2[0],
    setIsHovering = _useState2[1];
  var latestNotifications = notifications.slice(0, maxStack);
  var _position$split = position.split("-"),
    _position$split2 = _slicedToArray(_position$split, 2),
    y = _position$split2[0],
    x = _position$split2[1];
  var handleMouseEnter = useCallback(function () {
    setIsHovering(true);
    onHoverStart();
  }, [onHoverStart]);
  var handleMouseLeave = useCallback(function () {
    setIsHovering(false);
    onHoverEnd();
  }, [onHoverEnd]);
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    heights = _useState4[0],
    setHeights = _useState4[1];
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  return /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-notify__container"),
    style: {
      pointerEvents: "all"
    }
  }, latestNotifications.map(function (notification) {
    // const stackedStyle = !isHovering && !isLast;

    // let offsetY = isHovering
    //   ? index * 100 // 展开时，索引0在顶部
    //   : stackedStyle
    //   ? index * 8
    //   : 0;

    // const scale = stackedStyle ? 1 - index * 0.01 : 1;
    // const opacity = stackedStyle ? 1 - index * 0.15 : 1;
    return /*#__PURE__*/React.createElement(NotificationItem, _extends({
      key: notification.id,
      heights: heights,
      setHeights: setHeights,
      gap: GAP
    }, notification, {
      onRemove: onRemove,
      isExpanded: isHovering
    }));
  })));
};

export { GAP, TOAST_WIDTH, NotificationContainer as default };
//# sourceMappingURL=NotifyContainer.js.map
