import { r as reactExports } from './dep-C52Ear6B.js';
import { u as useConfig } from './dep-CaeblIEM.js';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

var defaultAttach = "body";
var useAttach = function useAttach(name, attach) {
  var globalConfig = useConfig();
  var attachVal = reactExports.useMemo(function () {
    var _globalConfig$attach;
    return attach || (globalConfig === null || globalConfig === void 0 || (_globalConfig$attach = globalConfig.attach) === null || _globalConfig$attach === void 0 ? void 0 : _globalConfig$attach[name]) || (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.attach) || defaultAttach;
  }, [name, attach, globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.attach]);
  return attachVal;
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var isFunction = function isFunction(arg) {
  return typeof arg === "function";
};
var useSetState = function useSetState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = reactExports.useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var setMergeState = reactExports.useCallback(function (patch) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), isFunction(patch) ? patch(prevState) : patch);
    });
  }, []);
  return [state, setMergeState];
};

var useMouseEvent = function useMouseEvent(elementRef, options) {
  var _options$enabled = options.enabled,
    enabled = _options$enabled === void 0 ? true : _options$enabled,
    _options$enableTouch = options.enableTouch,
    enableTouch = _options$enableTouch === void 0 ? true : _options$enableTouch;
  var isMovingRef = reactExports.useRef(false);
  var normalizeEvent = function normalizeEvent(e) {
    if (!enableTouch) {
      return e;
    }
    if ("touches" in e && e.touches.length > 0) {
      return e.touches[0];
    }
    if ("changedTouches" in e && e.changedTouches.length > 0) {
      return e.changedTouches[0];
    }
    if ("clientX" in e && "clientY" in e) {
      return e;
    }
    return void 0;
  };
  var getCoordinate = function getCoordinate(event) {
    var _elementRef$current;
    var rect = elementRef === null || elementRef === void 0 || (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.getBoundingClientRect();
    if (!rect) {
      return {
        x: 0,
        y: 0
      };
    }
    var clientX = event.clientX,
      clientY = event.clientY;
    var left = clientX - rect.left;
    var top = clientY - rect.top;
    return {
      x: Math.min(Math.max(0, left), rect.width),
      y: Math.min(Math.max(0, top), rect.height)
    };
  };
  var emitMouseChange = function emitMouseChange(e, handler) {
    if (!handler) return;
    var event = normalizeEvent(e);
    if (event !== void 0) {
      var coordinate = getCoordinate(event);
      handler(event, {
        coordinate: coordinate
      });
    }
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isMovingRef.current) return;
    e.preventDefault();
    emitMouseChange(e, options.onMove);
  };
  var _handleMouseUp = function handleMouseUp(e) {
    if (!isMovingRef.current) return;
    isMovingRef.current = false;
    emitMouseChange(e, options.onUp);
    document.removeEventListener("mouseup", _handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("touchend", _handleMouseUp);
    document.removeEventListener("touchmove", handleMouseMove);
  };
  var handleMouseDown = function handleMouseDown(e) {
    isMovingRef.current = true;
    emitMouseChange(e, options.onDown);
    document.addEventListener("mouseup", _handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    if (!enableTouch) return;
    document.addEventListener("touchend", _handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove, {
      passive: false
    });
  };
  var handleMouseEnter = function handleMouseEnter(e) {
    emitMouseChange(e, options.onEnter);
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    emitMouseChange(e, options.onLeave);
  };
  reactExports.useEffect(function () {
    var el = elementRef.current;
    if (!el || !enabled) return;
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseup", _handleMouseUp);
    options.onEnter && el.addEventListener("mouseenter", handleMouseEnter);
    options.onLeave && el.addEventListener("mouseleave", handleMouseLeave);
    if (!enableTouch) return;
    el.addEventListener("touchstart", handleMouseDown, {
      passive: false
    });
    el.addEventListener("touchend", _handleMouseUp);
    return function () {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseenter", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseup", _handleMouseUp);
      el.removeEventListener("touchstart", handleMouseDown);
      el.removeEventListener("touchend", _handleMouseUp);
    };
  }, [elementRef.current, options, enabled]);
  return {
    isMoving: isMovingRef.current
  };
};

function getScrollbarWidth() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  if (container === document.body) {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return container.offsetWidth - container.clientWidth;
}

export { useSetState as a, useAttach as b, getScrollbarWidth as g, useMouseEvent as u };
//# sourceMappingURL=dep-DJQi-lRj.js.map
