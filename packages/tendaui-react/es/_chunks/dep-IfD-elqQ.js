import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { o as upperFirst } from './dep-uPo9oRq0.js';
import React from 'react';

var useControlled = function useControlled() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var valueKey = arguments.length > 1 ? arguments[1] : undefined;
  var
  // 默认受控属性为 value
  onChange = arguments.length > 2 ? arguments[2] : undefined;
  var defaultOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var isControlled = Reflect.has(props, valueKey);
  // 受控属性
  var value = props[valueKey];

  // 默认值
  var defaultKey = "default".concat(upperFirst(valueKey));
  var defaultValue = defaultOptions[defaultKey] || props[defaultKey];
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    internalValue = _React$useState2[0],
    setInternalValue = _React$useState2[1];
  if (isControlled) return [value, onChange || function () {}];
  return [internalValue, function (newValue) {
    setInternalValue(newValue);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
};

export { useControlled as u };
//# sourceMappingURL=dep-IfD-elqQ.js.map
