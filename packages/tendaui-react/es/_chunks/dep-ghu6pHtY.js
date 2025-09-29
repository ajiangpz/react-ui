import { _ as _extends } from './dep-mO86zOh3.js';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { f as forwardRefWithStatics } from './dep-BP0-apUT.js';
import Check, { CheckContext } from '../common/Check.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { _ as _typeof } from './dep-D-UKOauR.js';
import classNames from 'classnames';
import { isNumber } from 'lodash-es';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { u as useControlled } from './dep-D2IWH4e_.js';
import { u as useDefaultProps } from './dep-5jl2j2BI.js';

var checkboxDefaultProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: undefined,
  indeterminate: false,
  readonly: false
};
var checkboxGroupDefaultProps = {
  max: undefined,
  defaultValue: []
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// 将 checkBox 的 value 转换为 string|number
var getCheckboxValue = function getCheckboxValue(v) {
  switch (_typeof(v)) {
    case 'number':
      return v;
    case 'string':
      return v;
    case 'object':
      {
        var vs = v;
        return vs.value;
      }
    default:
      return undefined;
  }
};

/**
 * 多选选项组，里面可以嵌套 <Checkbox />
 */
var CheckboxGroup = function CheckboxGroup(props) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useDefaultProps = useDefaultProps(props, checkboxGroupDefaultProps),
    onChange = _useDefaultProps.onChange,
    disabled = _useDefaultProps.disabled,
    className = _useDefaultProps.className,
    style = _useDefaultProps.style,
    children = _useDefaultProps.children,
    max = _useDefaultProps.max,
    _useDefaultProps$opti = _useDefaultProps.options,
    options = _useDefaultProps$opti === void 0 ? [] : _useDefaultProps$opti;

  // 去掉所有 checkAll 之后的 options
  var intervalOptions = Array.isArray(options) && options.length > 0 ? options : React.Children.map(children, function (child) {
    var _child$type;
    return (child === null || child === void 0 || (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === Checkbox.displayName && child.props;
  }) || [];
  var optionsWithoutCheckAll = intervalOptions.filter(function (t) {
    return _typeof(t) !== 'object' || !t.checkAll;
  });
  var optionsWithoutCheckAllValues = [];
  optionsWithoutCheckAll.forEach(function (v) {
    var vs = getCheckboxValue(v);
    optionsWithoutCheckAllValues.push(vs);
  });
  var _useControlled = useControlled(props, 'value', onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalValue = _useControlled2[0],
    setInternalValue = _useControlled2[1];
  var _useState = useState(max),
    _useState2 = _slicedToArray(_useState, 2),
    localMax = _useState2[0],
    setLocalMax = _useState2[1];
  var getCheckedSet = useCallback(function () {
    if (!Array.isArray(internalValue)) {
      return new Set([]);
    }
    return new Set([].concat(internalValue));
  }, [internalValue]);
  var checkedSet = useMemo(function () {
    return getCheckedSet();
  }, [getCheckedSet]);

  // 用于决定全选状态的属性
  var indeterminate = useMemo(function () {
    var list = Array.from(checkedSet);
    return list.length !== 0 && list.length !== optionsWithoutCheckAll.length;
  }, [checkedSet, optionsWithoutCheckAll]);
  var checkAllChecked = useMemo(function () {
    var list = Array.from(checkedSet);
    return list.length === optionsWithoutCheckAll.length;
  }, [checkedSet, optionsWithoutCheckAll]);
  useEffect(function () {
    if (!isNumber(max)) {
      return;
    }
    if (max < checkedSet.size) {
      console.warn('[TDesign] max should be less than the length of value, change is invalid');
    } else {
      setLocalMax(max);
    }
  }, [max, checkedSet]);
  var context = {
    inject: function inject(checkProps) {
      // 如果已经受控，则不注入
      if (typeof checkProps.checked !== 'undefined') {
        return checkProps;
      }
      var checkValue = checkProps.value;
      return _objectSpread(_objectSpread({}, checkProps), {}, {
        checked: checkProps.checkAll ? checkAllChecked : checkedSet.has(checkValue),
        indeterminate: checkProps.checkAll ? indeterminate : checkProps.indeterminate,
        disabled: checkProps.disabled || disabled || checkedSet.size >= localMax && !checkedSet.has(checkValue),
        onChange: function onChange(checked, _ref) {
          var e = _ref.e;
          if (typeof checkProps.onChange === 'function') {
            checkProps.onChange(checked, {
              e: e
            });
          }
          var checkedSet = getCheckedSet();
          // 全选时的逻辑处理
          if (checkProps.checkAll) {
            checkedSet.clear();
            if (checked) {
              optionsWithoutCheckAllValues.forEach(function (v) {
                checkedSet.add(v);
              });
            }
          } else if (checked) {
            if (checkedSet.size >= localMax && isNumber(max)) return;
            checkedSet.add(checkValue);
          } else {
            checkedSet["delete"](checkValue);
          }
          var currentOptionChecked = optionsWithoutCheckAll.find(function (item) {
            return item.value === checkValue;
          });

          // 此处 `as` 是因为 `Array.from` 会导致 `checkSet` 的 generic type 丢失
          setInternalValue(Array.from(checkedSet), {
            e: e,
            current: checkProps.checkAll ? undefined : checkValue,
            type: checked ? 'check' : 'uncheck',
            option: checkProps.checkAll ? undefined : currentOptionChecked
          });
        }
      });
    }
  };

  // options 和 children 的抉择,在未明确说明时，暂时以 options 优先
  var useOptions = Array.isArray(options) && options.length !== 0;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(classPrefix, "-checkbox-group"), className),
    style: style
  }, /*#__PURE__*/React.createElement(CheckContext.Provider, {
    value: context
  }, useOptions ? options.map(function (v, index) {
    switch (_typeof(v)) {
      case 'string':
        return /*#__PURE__*/React.createElement(Checkbox, {
          key: index,
          label: v,
          value: v
        }, v);
      case 'number':
        {
          return /*#__PURE__*/React.createElement(Checkbox, {
            key: index,
            label: v,
            value: v
          }, String(v));
        }
      case 'object':
        {
          var vs = v;
          // CheckAll 的 checkBox 不存在 value,故用 checkAll_index 来保证尽量不和用户的 value 冲突.
          return vs.checkAll ? /*#__PURE__*/React.createElement(Checkbox, _extends({}, vs, {
            key: "checkAll_".concat(index),
            indeterminate: indeterminate
          })) : /*#__PURE__*/React.createElement(Checkbox, _extends({}, vs, {
            key: index,
            disabled: vs.disabled || disabled
          }));
        }
      default:
        return null;
    }
  }) : children));
};
CheckboxGroup.displayName = 'CheckboxGroup';

var Checkbox = forwardRefWithStatics(function (props, ref) {
  return /*#__PURE__*/React.createElement(Check, _extends({
    ref: ref,
    type: "checkbox"
  }, useDefaultProps(props, checkboxDefaultProps)));
}, {
  Group: CheckboxGroup
});
Checkbox.displayName = 'Checkbox';

export { Checkbox as C, CheckboxGroup as a };
//# sourceMappingURL=dep-ghu6pHtY.js.map
