import { useMemo, useState, useCallback } from 'react';
import { u as useConfig } from './dep-u7AyxuYF.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';

var defaultAttach = "body";
var useAttach = function useAttach(name, attach) {
  var globalConfig = useConfig();
  var attachVal = useMemo(function () {
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
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var setMergeState = useCallback(function (patch) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), isFunction(patch) ? patch(prevState) : patch);
    });
  }, []);
  return [state, setMergeState];
};

export { useAttach as a, useSetState as u };
//# sourceMappingURL=dep-TZtijX-L.js.map
