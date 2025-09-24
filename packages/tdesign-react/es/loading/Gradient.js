import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { b as getIEVersion } from '../_chunks/dep-C4qiDhnV.js';
import { u as useDomRefCallback } from '../_chunks/dep-py6q5XhT.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'lodash-es';
import '../config-provider/ConfigContext.js';

function setStyle(el, styles) {
  var keys = Object.keys(styles);
  keys.forEach(function (key) {
    el.style[key] = styles[key];
  });
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function circleAdapter(circleElem) {
  var _window, _window$getComputedSt2, _window2;
  var basicStyle = {};
  if (!circleElem || typeof window === "undefined") {
    return;
  }
  var _window$getComputedSt = (_window = window) === null || _window === void 0 || (_window$getComputedSt2 = _window.getComputedStyle) === null || _window$getComputedSt2 === void 0 ? void 0 : _window$getComputedSt2.call(_window, circleElem),
    color = _window$getComputedSt.color,
    fontSize = _window$getComputedSt.fontSize;
  var ua = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.userAgent;
  var isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  var isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  var isIpadWechat = /(?=.*iPad)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  if (isSafari || isIosWechat || isIpadWechat) {
    basicStyle = {
      transformOrigin: "0px 0px",
      transform: "scale(".concat(parseInt(fontSize, 10) / 12, ")")
    };
  }
  if (color && getIEVersion() > 11) {
    var matched = color.match(/[\d.]+/g);
    var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
    setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
    }));
  } else {
    setStyle(circleElem, _objectSpread(_objectSpread({}, basicStyle), {}, {
      background: ""
    }));
  }
}

var GradientLoading = function GradientLoading() {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(),
    _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2),
    conicRef = _useDomRefCallback2[0],
    setConicRef = _useDomRefCallback2[1];
  var gradientClass = "".concat(classPrefix, "-loading__gradient");
  reactExports.useEffect(function () {
    var el = conicRef;
    circleAdapter(el);
  }, [conicRef]);
  return /* @__PURE__ */React.createElement("svg", {
    className: classNames(gradientClass, "".concat(classPrefix, "-icon-loading")),
    viewBox: "0 0 12 12",
    version: "1.1",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "12",
    height: "12"
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(gradientClass, "-conic"),
    ref: setConicRef
  })));
};

export { GradientLoading as default };
//# sourceMappingURL=Gradient.js.map
