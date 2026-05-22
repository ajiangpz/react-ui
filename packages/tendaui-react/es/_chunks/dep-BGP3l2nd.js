import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _typeof } from './dep-D-UKOauR.js';
import React from 'react';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { isString } from 'lodash-es';
import '../config-provider/index.js';
import { C as ConfigContext } from './dep-zVwpnryi.js';

function getPluralIndex(count) {
  if (count === 0) return 0;
  if (count === 1) return 1;
  return 2;
}
function isRecord(value) {
  return _typeof(value) === "object" && value !== null;
}
function t(pattern) {
  if (isString(pattern)) {
    var text = pattern;
    var count;
    var data = {};
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length > 0) {
      var firstArg = args[0],
        secondArg = args[1];
      if (typeof firstArg === "number") {
        count = firstArg;
        if (isRecord(secondArg)) {
          data = secondArg;
        } else {
          data.count = count;
        }
      } else if (isRecord(firstArg)) {
        data = firstArg;
      }
    }
    if (text.includes("|")) {
      var pluralParts = text.split("|").map(function (part) {
        return part.trim();
      });
      if (typeof count === "number") {
        var pluralIndex = getPluralIndex(count);
        if (pluralIndex < pluralParts.length) {
          text = pluralParts[pluralIndex];
        } else {
          text = pluralParts[pluralParts.length - 1];
        }
      } else {
        var _pluralParts = _slicedToArray(pluralParts, 1),
          firstPart = _pluralParts[0];
        text = firstPart;
      }
    }
    if (data && Object.keys(data).length > 0) {
      var regular = /\{\s*([\w-]+)\s*\}/g;
      text = text.replace(regular, function (match, key) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          return String(data[key]);
        }
        return match;
      });
    }
    return text;
  }
  return "";
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useLocaleReceiver(componentName, defaultLocale) {
  var _React$useContext = React.useContext(ConfigContext),
    globalConfig = _React$useContext.globalConfig;
  function transformLocale(pattern) {
    var REGEXP = /\{\s*([\w-]+)\s*\}/g;
    var placement = arguments.length <= 1 ? undefined : arguments[1];
    if (Array.isArray(pattern)) {
      return pattern.map(function (p, index) {
        return p.replace(REGEXP, function (_, key) {
          var _placement$index$key, _placement$index, _placement$key;
          if (Array.isArray(placement)) return String((_placement$index$key = (_placement$index = placement[index]) === null || _placement$index === void 0 ? void 0 : _placement$index[key]) !== null && _placement$index$key !== void 0 ? _placement$index$key : "");
          if (placement && _typeof(placement) === "object") return String((_placement$key = placement[key]) !== null && _placement$key !== void 0 ? _placement$key : "");
          return "";
        });
      });
    }
    if (typeof pattern === "function") {
      return pattern(placement);
    }
    if (typeof pattern !== "string") {
      return t(pattern);
    }
    var normalizedPlacement = Array.isArray(placement) ? void 0 : placement;
    var data = typeof normalizedPlacement === "number" ? arguments.length <= 2 ? undefined : arguments[2] : void 0;
    if (data && typeof normalizedPlacement === "number") {
      return t(pattern, normalizedPlacement, data);
    }
    if (typeof normalizedPlacement === "number") {
      return t(pattern, normalizedPlacement);
    }
    if (normalizedPlacement) {
      return t(pattern, normalizedPlacement);
    }
    return t(pattern);
  }
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || {};
    var connectLocaleByName = globalConfig[componentName];
    var localeFromContext = componentName && globalConfig ? connectLocaleByName : {};
    return _objectSpread(_objectSpread({}, typeof locale === "function" ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, globalConfig]);
  return [componentLocale, transformLocale];
}

export { useLocaleReceiver as u };
//# sourceMappingURL=dep-BGP3l2nd.js.map
