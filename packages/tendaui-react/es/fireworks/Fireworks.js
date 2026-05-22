import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React, { forwardRef, useState, useRef, useMemo, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

var _excluded = ["className", "style", "count", "colors", "duration", "size", "interval", "particleCount", "loop", "onLaunch"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_COLORS = ["#FF5F6D", "#FFC371", "#00C9FF", "#92FE9D", "#C77DFF", "#F2EA02"];
var randomInRange = function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
};
var pickColor = function pickColor(palette) {
  if (!palette || palette.length === 0) return DEFAULT_COLORS[0];
  var index = Math.floor(Math.random() * palette.length);
  return palette[index];
};
var createBurstList = function createBurstList(count, colors) {
  return Array.from({
    length: Math.max(1, count)
  }).map(function (_, index) {
    return {
      id: "".concat(Date.now(), "-").concat(index, "-").concat(Math.random().toString(36).slice(2, 7)),
      color: pickColor(colors),
      left: randomInRange(8, 92),
      top: randomInRange(15, 85),
      delay: randomInRange(0, 500),
      rotationOffset: randomInRange(0, 360)
    };
  });
};
var Fireworks = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
    style = props.style,
    _props$count = props.count,
    count = _props$count === void 0 ? 6 : _props$count,
    _props$colors = props.colors,
    colors = _props$colors === void 0 ? DEFAULT_COLORS : _props$colors,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 2400 : _props$duration,
    _props$size = props.size,
    size = _props$size === void 0 ? 140 : _props$size,
    _props$interval = props.interval,
    interval = _props$interval === void 0 ? 2800 : _props$interval,
    _props$particleCount = props.particleCount,
    particleCount = _props$particleCount === void 0 ? 12 : _props$particleCount,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? true : _props$loop,
    onLaunch = props.onLaunch,
    rest = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-fireworks");
  var safeParticleCount = Math.max(6, particleCount);
  var _useState = useState(function () {
      return createBurstList(count, colors);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    bursts = _useState2[0],
    setBursts = _useState2[1];
  var timerRef = useRef();
  var particleAngles = useMemo(function () {
    return Array.from({
      length: safeParticleCount
    }).map(function (_, index) {
      return 360 / safeParticleCount * index;
    });
  }, [safeParticleCount]);
  var triggerLaunch = useCallback(function () {
    var nextBursts = createBurstList(count, colors);
    setBursts(nextBursts);
    var context = {
      bursts: nextBursts
    };
    onLaunch === null || onLaunch === void 0 || onLaunch(context);
  }, [count, colors, onLaunch]);
  useEffect(function () {
    triggerLaunch();
  }, [triggerLaunch]);
  useEffect(function () {
    if (!loop) return void 0;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(triggerLaunch, Math.max(interval, duration));
    return function () {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [duration, interval, loop, triggerLaunch]);
  useEffect(function () {
    return function () {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: classNames(componentCls, className),
    style: style,
    role: "presentation",
    "aria-hidden": "true"
  }, rest), bursts.map(function (burst) {
    var burstStyle = {
      "--fireworks-left": "".concat(burst.left, "%"),
      "--fireworks-top": "".concat(burst.top, "%"),
      "--fireworks-delay": "".concat(burst.delay, "ms"),
      "--fireworks-color": burst.color,
      "--fireworks-size": "".concat(size, "px"),
      "--fireworks-duration": "".concat(duration, "ms")
    };
    return /* @__PURE__ */React.createElement("span", {
      key: burst.id,
      className: "".concat(componentCls, "__burst"),
      style: burstStyle
    }, particleAngles.map(function (angle, index) {
      var sparkStyle = {
        "--fireworks-delay": "".concat(burst.delay, "ms"),
        "--fireworks-duration": "".concat(duration, "ms"),
        "--fireworks-color": burst.color,
        "--fireworks-rotate": "".concat(angle + burst.rotationOffset, "deg")
      };
      return /* @__PURE__ */React.createElement("i", {
        key: "".concat(burst.id, "-").concat(index),
        className: "".concat(componentCls, "__spark"),
        style: sparkStyle
      });
    }));
  }));
});
Fireworks.displayName = "Fireworks";

export { Fireworks as default };
//# sourceMappingURL=Fireworks.js.map
