export { A as ALPHA_FORMAT_MAP, k as COLOR_FORMAT_INPUTS, i as COLOR_MODES, C as Color, D as DEFAULT_COLOR, j as DEFAULT_LINEAR_GRADIENT, a as DEFAULT_SYSTEM_SWATCH_COLORS, F as FORMATS, G as GRADIENT_SLIDER_DEFAULT_WIDTH, l as SATURATION_PANEL_DEFAULT_HEIGHT, S as SATURATION_PANEL_DEFAULT_WIDTH, m as SLIDER_DEFAULT_WIDTH, T as TD_COLOR_USED_COLORS_MAX_SIZE, c as cmyk2rgb, b as cmykInputToColor, h as genGradientPoint, f as genId, g as getColorObject, e as getColorWithoutAlpha, d as gradientColors2string, n as isGradientColor, p as parseGradientString, r as rgb2cmyk } from '../../../_chunks/dep-D1aIcw94.js';
import { a as _classCallCheck, _ as _createClass } from '../../../_chunks/dep-Chz4ZJCb.js';
import { _ as _defineProperty } from '../../../_chunks/dep-Cwish4GD.js';
export { b as getColorFormatInputs, g as getColorFormatMap, a as getColorFormatOptions, i as initColorFormat } from '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-CgyDw_YI.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var defaultsOptions = {
  start: function start(_coordinate, _event) {},
  drag: function drag(_coordinate, _event) {},
  end: function end(_coordinate, _event) {}
};
var _Draggable_brand = /*#__PURE__*/new WeakSet();
var Draggable = /*#__PURE__*/function () {
  function Draggable(el, options) {
    _classCallCheck(this, Draggable);
    _classPrivateMethodInitSpec(this, _Draggable_brand);
    _defineProperty(this, "dragging", false);
    this.$el = el;
    this.props = _objectSpread(_objectSpread({}, defaultsOptions), options);
    this.handles = {
      start: _assertClassBrand(_Draggable_brand, this, _dragStart).bind(this),
      drag: _assertClassBrand(_Draggable_brand, this, _drag).bind(this),
      end: _assertClassBrand(_Draggable_brand, this, _dragEnd).bind(this)
    };
    this.$el.addEventListener("mousedown", this.handles.start, false);
  }
  return _createClass(Draggable, [{
    key: "destroy",
    value: function destroy() {
      this.$el.removeEventListener("mousedown", this.handles.start, false);
      window.removeEventListener("mousemove", this.handles.drag, false);
      window.removeEventListener("mouseup", this.handles.end, false);
      window.removeEventListener("contextmenu", this.handles.end, false);
    }
  }]);
}();
function _dragStart(event) {
  if (this.dragging) {
    return;
  }
  window.addEventListener("mousemove", this.handles.drag, false);
  window.addEventListener("mouseup", this.handles.end, false);
  window.addEventListener("contextmenu", this.handles.end, false);
  this.dragging = true;
  this.props.start(_assertClassBrand(_Draggable_brand, this, _getCoordinate).call(this, event), event);
}
function _drag(event) {
  if (!this.dragging) {
    return;
  }
  this.props.drag(_assertClassBrand(_Draggable_brand, this, _getCoordinate).call(this, event), event);
}
function _dragEnd(event) {
  var _this = this;
  setTimeout(function () {
    _this.dragging = false;
    _this.props.end(_assertClassBrand(_Draggable_brand, _this, _getCoordinate).call(_this, event), event);
  }, 0);
  window.removeEventListener("mousemove", this.handles.drag, false);
  window.removeEventListener("mouseup", this.handles.end, false);
  window.removeEventListener("contextmenu", this.handles.end, false);
}
function _getCoordinate(event) {
  var rect = this.$el.getBoundingClientRect();
  var mouseEvent = event;
  var left = mouseEvent.clientX - rect.left;
  var top = mouseEvent.clientY - rect.top;
  return {
    y: Math.min(Math.max(0, top), rect.height),
    x: Math.min(Math.max(0, left), rect.width)
  };
}

export { Draggable };
//# sourceMappingURL=index.js.map
