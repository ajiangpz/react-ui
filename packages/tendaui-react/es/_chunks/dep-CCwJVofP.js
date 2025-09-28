import { _ as _objectWithoutProperties } from './dep-DcgYxvIK.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { p as camelCase } from './dep-uPo9oRq0.js';

var _excluded = ["from", "to", "direction"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function omit(obj, fields) {
  var shallowCopy = _objectSpread({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
function removeEmptyAttrs(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== 'undefined' || obj[key] === null) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
function getTabElementByValue() {
  var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var _tabs$filter = tabs.filter(function (item) {
      var _ref = item,
        id = _ref.id;
      return id === value;
    }),
    _tabs$filter2 = _slicedToArray(_tabs$filter, 1),
    result = _tabs$filter2[0];
  return result || null;
}
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (_char) {
    return _char.toUpperCase();
  });
}
function getBackgroundColor(color) {
  if (typeof color === 'string') {
    return color;
  }
  if (Array.isArray(color)) {
    if (color[0] && color[0][0] === '#') {
      color.unshift('90deg');
    }
    return "linear-gradient( ".concat(color.join(','), " )");
  }
  var from = color.from,
    to = color.to,
    _color$direction = color.direction,
    direction = _color$direction === void 0 ? 'to right' : _color$direction,
    rest = _objectWithoutProperties(color, _excluded);
  var keys = Object.keys(rest);
  if (keys.length) {
    keys = keys.sort(function (a, b) {
      return parseFloat(a.substr(0, a.length - 1)) - parseFloat(b.substr(0, b.length - 1));
    });
    var tempArr = keys.map(function (key) {
      return "".concat(rest[key], " ").concat(key);
    });
    return "linear-gradient(".concat(direction, ", ").concat(tempArr.join(','), ")");
  }
  return "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
}

// keyboard-event => onKeyboardEvent
function getPropsApiByEvent(eventName) {
  return camelCase("on-".concat(eventName));
}

/**
 * 兼容样式中支持 number/string 类型的传值 得出最后的结果。
 * @param param number 或 string 类型的可用于样式上的值
 * @returns 可使用的样式值。
 */
function pxCompat(param) {
  return typeof param === 'number' ? "".concat(param, "px") : param;
}

/**
 * 获取元素相对于容器(祖先)的偏移量
 * @param element 目标元素
 * @param container 容器元素
 * @returns 相对于容器的偏移量
 */
function getOffsetTopToContainer(element, container) {
  var offsetTop = element.offsetTop;
  var current = element.offsetParent;
  while (current && current !== container) {
    offsetTop += current.offsetTop;
    current = current.offsetParent;
  }
  return offsetTop;
}
function getIEVersion() {
  if (typeof navigator === 'undefined' || !navigator) return Number.MAX_SAFE_INTEGER;
  var _navigator = navigator,
    userAgent = _navigator.userAgent;
  // 判断是否IE<11浏览器
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否IE11浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    var match = userAgent.match(reIE);
    if (!match) return -1;
    var fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    // IE11
    return 11;
  }
  // 不是ie浏览器
  return Number.MAX_SAFE_INTEGER;
}

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */

function getCharacterLength(str, maxCharacter) {
  var hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}

export { getOffsetTopToContainer as a, getIEVersion as b, getCharacterLength as g, omit as o };
//# sourceMappingURL=dep-CCwJVofP.js.map
