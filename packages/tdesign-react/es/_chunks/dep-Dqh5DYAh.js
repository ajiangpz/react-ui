import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { upperFirst } from 'lodash-es';
import { R as React } from './dep-C52Ear6B.js';

var useControlled = function useControlled() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var valueKey = arguments.length > 1 ? arguments[1] : undefined;
  var onChange = arguments.length > 2 ? arguments[2] : undefined;
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
};

export { useControlled as u };
//# sourceMappingURL=dep-Dqh5DYAh.js.map
