import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import '../_chunks/dep-D-UKOauR.js';
import '../config-provider/ConfigContext.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    initialHeight = _useState2[0],
    setInitialHeight = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMounted = _useState4[0],
    setIsMounted = _useState4[1];
  var nofityItem = useRef(null);
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  React.useEffect(function () {
    setIsMounted(true);
  }, []);
  React.useEffect(function () {
    var notifyNode = nofityItem.current;
    if (notifyNode) {
      var height = notifyNode.getBoundingClientRect().height;
      setInitialHeight(height);
      setHeights(function (h) {
        // 如果不存在，则添加
        return [{
          toastId: id,
          height: height,
          message: message,
          type: type
        }].concat(_toConsumableArray(h));
      });
      return function () {
        setHeights(function (h) {
          return h.filter(function (h) {
            return h.toastId !== id;
          });
        });
      };
    }
  }, [setHeights, id]);
  useLayoutEffect(function () {
    if (!isMounted) return;
    var notifyNode = nofityItem.current;
    if (notifyNode) {
      var originalHeight = notifyNode.style.height;
      notifyNode.style.height = "auto";
      var newHeight = notifyNode.getBoundingClientRect().height;
      notifyNode.style.height = originalHeight;
      setInitialHeight(newHeight);
      setHeights(function (heights) {
        var isExist = heights.some(function (h) {
          return h.toastId === id;
        });
        if (isExist) {
          // 如果存在，则更新高度
          return heights.map(function (h) {
            return h.toastId === id ? _objectSpread(_objectSpread({}, h), {}, {
              height: newHeight,
              message: message,
              type: type
            }) : h;
          });
        }
        // 如果不存在，则添加
        return [{
          toastId: id,
          height: newHeight,
          message: message,
          type: type
        }].concat(_toConsumableArray(heights));
      });
    }
  }, [isMounted, initialHeight, setHeights, id, message, type]);
  var heightIndex = React.useMemo(function () {
    return heights.findIndex(function (h) {
      return h.toastId === id;
    });
  }, [heights, id]);
  var toastHeightBefore = React.useMemo(function () {
    return heights.reduce(function (acc, h, reduceIndex) {
      if (reduceIndex < heightIndex) {
        return acc + h.height;
      }
      return acc;
    }, 0);
  }, [initialHeight, heightIndex, heights]);
  var offset = React.useMemo(function () {
    return heightIndex * gap + toastHeightBefore;
  }, [toastHeightBefore, heightIndex]);
  return /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-notify__content")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-notify__header")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-notify__icon")
  }, type === "success" && /*#__PURE__*/React.createElement(CheckCircle, {
    className: "t-icon t-is-success"
  }), type === "error" && /*#__PURE__*/React.createElement(XCircle, {
    className: "t-icon t-is-error"
  }), type === "info" && /*#__PURE__*/React.createElement(Info, {
    className: "t-icon t-is-info"
  }), type === "warning" && /*#__PURE__*/React.createElement(AlertCircle, {
    className: "t-icon t-is-warning"
  }), type === "default" && /*#__PURE__*/React.createElement(Info, {
    className: "t-icon t-is-info"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-notify__title")
  }, title))), /*#__PURE__*/React.createElement("p", {
    className: "".concat(prefix, "-notify__detail"),
    style: {
      opacity: heightIndex === 0 || isExpanded ? 1 : 0,
      transition: "opacity 400ms"
    }
  }, message));
};

export { NotificationItem as default };
//# sourceMappingURL=NotifyItem.js.map
