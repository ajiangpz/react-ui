import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { upperFirst } from 'lodash-es';
import React from 'react';

function useControlled(props, valueKey, onChange) {
  var defaultOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var isControlled = Reflect.has(props, valueKey);
  var value = props[valueKey];
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
}

export { useControlled as u };
//# sourceMappingURL=dep-CCaTIa7l.js.map
