import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import classNames from 'classnames';
import { isNumber } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { CheckContext } from '../common/Check.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { c as checkboxGroupDefaultProps, C as Checkbox } from '../_chunks/dep-CtgX06Xn.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../_chunks/dep-DN7d1SzH.js';
import '../_chunks/dep-DHWwZ2Nj.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getCheckboxValue = function getCheckboxValue(v) {
  switch (_typeof(v)) {
    case "number":
      return v;
    case "string":
      return v;
    case "object":
      {
        var vs = v;
        return vs.value;
      }
    default:
      return void 0;
  }
};
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
  var intervalOptions = Array.isArray(options) && options.length > 0 ? options : React.Children.map(children, function (child) {
    return typeof child.type === "function" && "displayName" in child.type && child.type.displayName === "Checkbox" && child.props;
  }) || [];
  var optionsWithoutCheckAll = intervalOptions.filter(function (t) {
    return _typeof(t) !== "object" || !t.checkAll;
  });
  var optionsWithoutCheckAllValues = [];
  optionsWithoutCheckAll.forEach(function (v) {
    var vs = getCheckboxValue(v);
    optionsWithoutCheckAllValues.push(vs);
  });
  var _useControlled = useControlled(props, "value", onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalValue = _useControlled2[0],
    setInternalValue = _useControlled2[1];
  var _useState = useState(max),
    _useState2 = _slicedToArray(_useState, 2),
    localMax = _useState2[0],
    setLocalMax = _useState2[1];
  var getCheckedSet = useCallback(function () {
    if (!Array.isArray(internalValue)) {
      return /* @__PURE__ */new Set([]);
    }
    return new Set([].concat(internalValue));
  }, [internalValue]);
  var checkedSet = useMemo(function () {
    return getCheckedSet();
  }, [getCheckedSet]);
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
      console.warn("[TDesign] max should be less than the length of value, change is invalid");
    } else {
      setTimeout(function () {
        setLocalMax(max);
      }, 0);
    }
  }, [max, checkedSet]);
  var context = {
    inject: function inject(checkProps) {
      if (typeof checkProps.checked !== "undefined") {
        return checkProps;
      }
      var checkValue = checkProps.value;
      return _objectSpread(_objectSpread({}, checkProps), {}, {
        checked: checkProps.checkAll ? checkAllChecked : checkedSet.has(checkValue),
        indeterminate: checkProps.checkAll ? indeterminate : checkProps.indeterminate,
        disabled: checkProps.disabled || disabled || checkedSet.size >= localMax && !checkedSet.has(checkValue),
        onChange: function onChange(checked, _ref) {
          var e = _ref.e;
          if (typeof checkProps.onChange === "function") {
            checkProps.onChange(checked, {
              e: e
            });
          }
          var checkedSet2 = getCheckedSet();
          if (checkProps.checkAll) {
            checkedSet2.clear();
            if (checked) {
              optionsWithoutCheckAllValues.forEach(function (v) {
                checkedSet2.add(v);
              });
            }
          } else if (checked) {
            if (checkedSet2.size >= localMax && isNumber(max)) return;
            checkedSet2.add(checkValue);
          } else {
            checkedSet2["delete"](checkValue);
          }
          var currentOptionChecked = optionsWithoutCheckAll.find(function (item) {
            return item.value === checkValue;
          });
          setInternalValue(Array.from(checkedSet2), {
            e: e,
            current: checkProps.checkAll ? void 0 : checkValue,
            type: checked ? "check" : "uncheck",
            option: checkProps.checkAll ? void 0 : currentOptionChecked
          });
        }
      });
    }
  };
  var useOptions = Array.isArray(options) && options.length !== 0;
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-checkbox-group"), className),
    style: style
  }, /* @__PURE__ */React.createElement(CheckContext.Provider, {
    value: context
  }, useOptions ? options.map(function (v, index) {
    switch (_typeof(v)) {
      case "string":
        return /* @__PURE__ */React.createElement(Checkbox, {
          key: index,
          label: v,
          value: v
        }, v);
      case "number":
        {
          return /* @__PURE__ */React.createElement(Checkbox, {
            key: index,
            label: v,
            value: v
          }, String(v));
        }
      case "object":
        {
          var vs = v;
          return vs.checkAll ? /* @__PURE__ */React.createElement(Checkbox, _objectSpread(_objectSpread({}, vs), {}, {
            key: "checkAll_".concat(index),
            indeterminate: indeterminate
          })) : /* @__PURE__ */React.createElement(Checkbox, _objectSpread(_objectSpread({}, vs), {}, {
            key: index,
            disabled: vs.disabled || disabled
          }));
        }
      default:
        return null;
    }
  }) : children));
};
CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup as default };
//# sourceMappingURL=CheckboxGroup.js.map
