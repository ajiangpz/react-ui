import { _ as _slicedToArray } from '../../_chunks/dep-CzLhKWCf.js';
import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import { _ as _toConsumableArray } from '../../_chunks/dep-CgyDw_YI.js';
import { b as isObject, t as isArray, e as isEmpty, v as has, g as get } from '../../_chunks/dep-uPo9oRq0.js';
import '../../_chunks/dep-D-UKOauR.js';

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// 获取 formMap 管理的数据
function getMapValue(name, formMapRef) {
  if (!formMapRef.current) return;

  // 提取所有 map key
  var mapKeys = _toConsumableArray(formMapRef.current.keys());
  // 转译为字符串后比对 key 兼容数组格式
  var key = mapKeys.find(function (key) {
    return String(key) === String(name);
  });
  // 拿到 key 引用地址获取 value
  return formMapRef.current.get(key);
}

// { user: { name: '' } } => [['user', 'name']]
// 不处理数组类型
// { user: [{ name: '' }]} => [['user']]
function objectToArray(obj) {
  var result = [];
  function traverse(current) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (isObject(current) && !isArray(current) && !isEmpty(current)) {
      Object.keys(current).forEach(function (key) {
        traverse(current[key], [].concat(_toConsumableArray(path), [key]));
      });
    } else {
      result.push(path);
    }
  }
  traverse(obj);
  return result;
}

// 将数据整理成对象，数组 name 转化嵌套对象: ['user', 'name'] => { user: { name: '' } }
function calcFieldValue(name, value) {
  var isFormList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (Array.isArray(name)) {
    if (isFormList) {
      var fieldValue = name.reduceRight(function (prev, curr) {
        var arr = [];
        if (/^\d+$/.test(String(curr))) arr[curr] = prev;
        return arr.length ? arr : _defineProperty({}, curr, prev);
      }, value);
      return _objectSpread({}, fieldValue);
    }
    return name.reduceRight(function (prev, curr, currentIndex) {
      if (currentIndex === name.length - 1) {
        return _defineProperty({}, curr, value);
      }
      return _defineProperty({}, curr, prev);
    }, {});
  }
  return _defineProperty({}, name, value);
}

// 通过对象数据类型获取 map 引用: { user: { name: '' } } => formMap.get(['user', 'name'])
function travelMapFromObject(obj, formMapRef, callback) {
  var _iterator = _createForOfIteratorHelper(formMapRef.current.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        mapName = _step$value[0],
        formItemRef = _step$value[1];
      if (has(obj, mapName)) {
        callback(formItemRef, get(obj, mapName));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

export { calcFieldValue, getMapValue, objectToArray, travelMapFromObject };
//# sourceMappingURL=index.js.map
