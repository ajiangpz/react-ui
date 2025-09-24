import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _typeof from '@babel/runtime/helpers/typeof';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { R as React, r as reactExports } from './dep-C52Ear6B.js';
import { ErrorCircleFilledIcon, CloseCircleFilledIcon, CheckCircleFilledIcon } from 'tdesign-icons-react';
import { isNumber, isEmpty, unset, get, flattenDeep, isEqual, set, isString, isObject, isFunction, merge } from 'lodash-es';
import { u as useConfig } from './dep-CaeblIEM.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';
import { u as useGlobalIcon } from './dep-Dp0dxPtr.js';
import { u as useFormItemStyle, V as ValidateStatus } from './dep-BpYapwIO.js';
import { useFormContext, useFormListContext } from '../form/FormContext.js';
import isDate from 'validator/lib/isDate';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import { a as getCharacterLength } from './dep-C4qiDhnV.js';
import { H as HOOK_MARK } from './dep-CcL4GSfv.js';
import { f as forwardRefWithStatics } from './dep-Bdljkd5o.js';
import Check, { CheckContext } from '../common/Check.js';
import classNames from 'classnames';
import { u as useControlled } from './dep-Dqh5DYAh.js';
import TagInput from '../tag-input/TagInput.js';
import { calcFieldValue } from '../form/utils/index.js';

var checkboxDefaultProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: void 0,
  indeterminate: false,
  readonly: false
};
var checkboxGroupDefaultProps = {
  max: void 0,
  defaultValue: []
};

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    var _child$type;
    return (child === null || child === void 0 || (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === Checkbox.displayName && child.props;
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
  var _useState = reactExports.useState(max),
    _useState2 = _slicedToArray(_useState, 2),
    localMax = _useState2[0],
    setLocalMax = _useState2[1];
  var getCheckedSet = reactExports.useCallback(function () {
    if (!Array.isArray(internalValue)) {
      return /* @__PURE__ */new Set([]);
    }
    return new Set([].concat(internalValue));
  }, [internalValue]);
  var checkedSet = reactExports.useMemo(function () {
    return getCheckedSet();
  }, [getCheckedSet]);
  var indeterminate = reactExports.useMemo(function () {
    var list = Array.from(checkedSet);
    return list.length !== 0 && list.length !== optionsWithoutCheckAll.length;
  }, [checkedSet, optionsWithoutCheckAll]);
  var checkAllChecked = reactExports.useMemo(function () {
    var list = Array.from(checkedSet);
    return list.length === optionsWithoutCheckAll.length;
  }, [checkedSet, optionsWithoutCheckAll]);
  reactExports.useEffect(function () {
    if (!isNumber(max)) {
      return;
    }
    if (max < checkedSet.size) {
      console.warn("[TDesign] max should be less than the length of value, change is invalid");
    } else {
      setLocalMax(max);
    }
  }, [max, checkedSet]);
  var context = {
    inject: function inject(checkProps) {
      if (typeof checkProps.checked !== "undefined") {
        return checkProps;
      }
      var checkValue = checkProps.value;
      return _objectSpread$3(_objectSpread$3({}, checkProps), {}, {
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
          return vs.checkAll ? /* @__PURE__ */React.createElement(Checkbox, _objectSpread$3(_objectSpread$3({}, vs), {}, {
            key: "checkAll_".concat(index),
            indeterminate: indeterminate
          })) : /* @__PURE__ */React.createElement(Checkbox, _objectSpread$3(_objectSpread$3({}, vs), {}, {
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

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = forwardRefWithStatics(function (props, ref) {
  return /* @__PURE__ */React.createElement(Check, _objectSpread$2({
    ref: ref,
    type: "checkbox"
  }, useDefaultProps(props, checkboxDefaultProps)));
}, {
  Group: CheckboxGroup
});
Checkbox.displayName = "Checkbox";

var formDefaultProps = {
  colon: false,
  disabled: void 0,
  id: void 0,
  labelAlign: "right",
  labelWidth: "100px",
  layout: "vertical",
  preventSubmitDefault: true,
  requiredMark: void 0,
  resetType: "empty",
  showErrorMessage: true,
  statusIcon: void 0,
  submitWithWarningMessage: false,
  supportNumberKey: true
};
var formItemDefaultProps = {
  label: "",
  requiredMark: void 0,
  shouldUpdate: false,
  showErrorMessage: void 0,
  statusIcon: void 0,
  successBorder: false
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isValueEmpty(val) {
  var type = Object.prototype.toString.call(val);
  var typeMap = {
    Date: "[object Date]"
  };
  if (type === typeMap.Date) {
    return false;
  }
  return _typeof(val) === "object" ? isEmpty(val) : ["", void 0, null].includes(val);
}
var compareValue = function compareValue(val, num, isMax) {
  var compare = function compare(a, b) {
    return isMax ? a <= b : a >= b;
  };
  if (isNumber(val)) return compare(val, num);
  if (Array.isArray(val)) return compare(val.length, num);
  return compare(getCharacterLength(val), num);
};
var VALIDATE_MAP = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: function required(val) {
    return !isValueEmpty(val);
  },
  whitespace: function whitespace(val) {
    return !(/^\s+$/.test(val) || val === "");
  },
  "boolean": function boolean(val) {
    return typeof val === "boolean";
  },
  max: function max(val, num) {
    return compareValue(val, num, true);
  },
  min: function min(val, num) {
    return compareValue(val, num, false);
  },
  len: function len(val, num) {
    return getCharacterLength(val) === num;
  },
  number: function number(val) {
    return isNumber(val);
  },
  "enum": function _enum(val, strs) {
    return strs.includes(val);
  },
  idcard: function idcard(val) {
    return /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val);
  },
  telnumber: function telnumber(val) {
    return /^1[3-9]\d{9}$/.test(val);
  },
  pattern: function pattern(val, regexp) {
    return regexp.test(val);
  },
  // 自定义校验规则，可能是异步校验
  validator: function validator(val, validate2) {
    return validate2(val);
  }
};
function validateOneRule(_x, _x2) {
  return _validateOneRule.apply(this, arguments);
}
function _validateOneRule() {
  _validateOneRule = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(value, rule) {
    var validateResult, keys, vOptions, vValidateFun, i, key, validateRule;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          validateResult = {
            result: true
          };
          keys = Object.keys(rule);
          i = 0;
        case 1:
          if (!(i < keys.length)) {
            _context.next = 4;
            break;
          }
          key = keys[i];
          if (!(!rule.required && isValueEmpty(value) && !rule.validator)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 2:
          validateRule = VALIDATE_MAP[key];
          if (!(validateRule && ![void 0, null].includes(rule[key]))) {
            _context.next = 3;
            break;
          }
          vOptions = rule[key] === true ? void 0 : rule[key];
          vValidateFun = validateRule;
          return _context.abrupt("continue", 4);
        case 3:
          i++;
          _context.next = 1;
          break;
        case 4:
          if (!vValidateFun) {
            _context.next = 7;
            break;
          }
          _context.next = 5;
          return vValidateFun(value, vOptions);
        case 5:
          validateResult = _context.sent;
          if (!(typeof validateResult === "boolean")) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", _objectSpread$1(_objectSpread$1({}, rule), {}, {
            result: validateResult
          }));
        case 6:
          if (!(_typeof(validateResult) === "object")) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 7:
          return _context.abrupt("return", validateResult);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _validateOneRule.apply(this, arguments);
}
function validate(_x3, _x4) {
  return _validate.apply(this, arguments);
}
function _validate() {
  _validate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(value, rules) {
    var all, r;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          all = rules.map(function (rule) {
            return validateOneRule(value, rule);
          });
          _context2.next = 1;
          return Promise.all(all);
        case 1:
          r = _context2.sent;
          return _context2.abrupt("return", r);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _validate.apply(this, arguments);
}
function parseMessage(template, options) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return options[key];
  });
}

var ctrlKeyMap = /* @__PURE__ */new Map();
ctrlKeyMap.set(Checkbox, "checked");
var initialDataMap = /* @__PURE__ */new Map();
[
// Tree,
// Upload,
// Transfer,
TagInput,
// RangeInput,
CheckboxGroup
// DateRangePicker,
// TimeRangePicker,
].forEach(function (component) {
  initialDataMap.set(component, []);
});
[Checkbox].forEach(function (component) {
  initialDataMap.set(component, false);
});
function useFormItemInitialData(name) {
  var hadReadFloatingFormData = false;
  var _useFormContext = useFormContext(),
    floatingFormDataRef = _useFormContext.floatingFormDataRef,
    formContextInitialData = _useFormContext.initialData;
  var _useFormListContext = useFormListContext(),
    formListName = _useFormListContext.name,
    formListInitialData = _useFormListContext.initialData;
  reactExports.useEffect(function () {
    if (hadReadFloatingFormData) {
      var nameList = formListName ? [formListName, name].flat() : name;
      unset(floatingFormDataRef.current, nameList);
    }
  }, [hadReadFloatingFormData, floatingFormDataRef, formListName, name]);
  function getDefaultInitialData(_ref) {
    var children = _ref.children,
      initialData = _ref.initialData;
    if (name && floatingFormDataRef !== null && floatingFormDataRef !== void 0 && floatingFormDataRef.current && !isEmpty(floatingFormDataRef.current)) {
      var nameList = formListName ? [formListName, name].flat() : name;
      var defaultInitialData = get(floatingFormDataRef.current, nameList);
      if (typeof defaultInitialData !== "undefined") {
        hadReadFloatingFormData = true;
        return defaultInitialData;
      }
    }
    if (typeof initialData !== "undefined") {
      return initialData;
    }
    if (name && formListInitialData.length) {
      var _defaultInitialData = get(formListInitialData, name);
      if (typeof _defaultInitialData !== "undefined") return _defaultInitialData;
    }
    if (name && formContextInitialData) {
      var _defaultInitialData2 = get(formContextInitialData, name);
      if (typeof _defaultInitialData2 !== "undefined") return _defaultInitialData2;
    }
    if (typeof children !== "function") {
      var childList = React.Children.toArray(children);
      var lastChild = childList[childList.length - 1];
      if (lastChild && /*#__PURE__*/React.isValidElement(lastChild)) {
        var _lastChild$props;
        var isMultiple = lastChild === null || lastChild === void 0 || (_lastChild$props = lastChild.props) === null || _lastChild$props === void 0 ? void 0 : _lastChild$props.multiple;
        return isMultiple ? [] : initialDataMap.get(lastChild.type);
      }
    }
  }
  return {
    getDefaultInitialData: getDefaultInitialData
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormItem = /*#__PURE__*/reactExports.forwardRef(function (originalProps, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    globalFormConfig = _useConfig.form;
  var _useGlobalIcon = useGlobalIcon({
      CheckCircleFilledIcon: CheckCircleFilledIcon,
      CloseCircleFilledIcon: CloseCircleFilledIcon,
      ErrorCircleFilledIcon: ErrorCircleFilledIcon
    }),
    CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
    CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon,
    ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
  var _useFormContext = useFormContext(),
    form = _useFormContext.form,
    colon = _useFormContext.colon,
    layout = _useFormContext.layout,
    requiredMarkFromContext = _useFormContext.requiredMark,
    requiredMarkPosition = _useFormContext.requiredMarkPosition,
    labelAlignFromContext = _useFormContext.labelAlign,
    labelWidthFromContext = _useFormContext.labelWidth,
    showErrorMessageFromContext = _useFormContext.showErrorMessage,
    disabledFromContext = _useFormContext.disabled,
    resetTypeFromContext = _useFormContext.resetType,
    rulesFromContext = _useFormContext.rules,
    statusIconFromContext = _useFormContext.statusIcon,
    errorMessage = _useFormContext.errorMessage,
    formMapRef = _useFormContext.formMapRef,
    onFormItemValueChange = _useFormContext.onFormItemValueChange;
  var _useFormListContext = useFormListContext(),
    formListName = _useFormListContext.name,
    formListRules = _useFormListContext.rules,
    formListMapRef = _useFormListContext.formListMapRef,
    formOfFormList = _useFormListContext.form;
  var props = useDefaultProps(originalProps, formItemDefaultProps);
  var children = props.children,
    style = props.style,
    label = props.label,
    name = props.name,
    status = props.status,
    tips = props.tips,
    help = props.help,
    valueFormat = props.valueFormat,
    initialData = props.initialData,
    className = props.className,
    shouldUpdate = props.shouldUpdate,
    successBorder = props.successBorder,
    _props$statusIcon = props.statusIcon,
    statusIcon = _props$statusIcon === void 0 ? statusIconFromContext : _props$statusIcon,
    _props$rules = props.rules,
    innerRules = _props$rules === void 0 ? getInnerRules(name, rulesFromContext, formListName, formListRules) : _props$rules,
    _props$labelWidth = props.labelWidth,
    labelWidth = _props$labelWidth === void 0 ? labelWidthFromContext : _props$labelWidth,
    _props$labelAlign = props.labelAlign,
    labelAlign = _props$labelAlign === void 0 ? labelAlignFromContext : _props$labelAlign,
    _props$requiredMark = props.requiredMark,
    requiredMark = _props$requiredMark === void 0 ? requiredMarkFromContext : _props$requiredMark;
  var _useFormItemInitialDa = useFormItemInitialData(name),
    getDefaultInitialData = _useFormItemInitialDa.getDefaultInitialData;
  var _useState = reactExports.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  var _useState3 = reactExports.useState(void 0),
    _useState4 = _slicedToArray(_useState3, 2),
    freeShowErrorMessage = _useState4[0],
    setFreeShowErrorMessage = _useState4[1];
  var _useState5 = reactExports.useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    errorList = _useState6[0],
    setErrorList = _useState6[1];
  var _useState7 = reactExports.useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    successList = _useState8[0],
    setSuccessList = _useState8[1];
  var _useState9 = reactExports.useState("validating"),
    _useState0 = _slicedToArray(_useState9, 2),
    verifyStatus = _useState0[0],
    setVerifyStatus = _useState0[1];
  var _useState1 = reactExports.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    resetValidating = _useState10[0],
    setResetValidating = _useState10[1];
  var _useState11 = reactExports.useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    needResetField = _useState12[0],
    setNeedResetField = _useState12[1];
  var _useState13 = reactExports.useState(function () {
      var fieldName = flattenDeep([formListName, name]);
      var storeValue = get(form === null || form === void 0 ? void 0 : form.store, fieldName);
      return storeValue !== null && storeValue !== void 0 ? storeValue : getDefaultInitialData({
        children: children,
        initialData: initialData
      });
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    formValue = _useState14[0],
    setFormValue = _useState14[1];
  var formItemRef = reactExports.useRef(null);
  var innerFormItemsRef = reactExports.useRef([]);
  var shouldEmitChangeRef = reactExports.useRef(false);
  var isUpdatedRef = reactExports.useRef(false);
  var shouldValidate = reactExports.useRef(false);
  var valueRef = reactExports.useRef(formValue);
  var errorListMapRef = reactExports.useRef(/* @__PURE__ */new Map());
  var isSameForm = reactExports.useMemo(function () {
    return isEqual(form, formOfFormList);
  }, [form, formOfFormList]);
  var snakeName = [].concat(isSameForm ? formListName : void 0, name).filter(function (item) {
    return item !== void 0;
  }).toString();
  var errorMessages = reactExports.useMemo(function () {
    return errorMessage !== null && errorMessage !== void 0 ? errorMessage : globalFormConfig.errorMessage;
  }, [errorMessage, globalFormConfig]);
  var showErrorMessage = reactExports.useMemo(function () {
    if (typeof freeShowErrorMessage === "boolean") return freeShowErrorMessage;
    if (typeof props.showErrorMessage === "boolean") return props.showErrorMessage;
    return showErrorMessageFromContext;
  }, [freeShowErrorMessage, props.showErrorMessage, showErrorMessageFromContext]);
  var _useFormItemStyle = useFormItemStyle({
      className: className,
      help: help,
      tips: tips,
      snakeName: snakeName,
      status: status,
      successBorder: successBorder,
      errorList: errorList,
      successList: successList,
      layout: layout,
      verifyStatus: verifyStatus,
      label: label,
      labelWidth: labelWidth,
      labelAlign: labelAlign,
      requiredMark: requiredMark,
      requiredMarkPosition: requiredMarkPosition,
      showErrorMessage: showErrorMessage,
      innerRules: innerRules
    }),
    formItemClass = _useFormItemStyle.formItemClass,
    formItemLabelClass = _useFormItemStyle.formItemLabelClass,
    contentClass = _useFormItemStyle.contentClass,
    labelStyle = _useFormItemStyle.labelStyle,
    contentStyle = _useFormItemStyle.contentStyle,
    helpNode = _useFormItemStyle.helpNode,
    extraNode = _useFormItemStyle.extraNode;
  var updateFormValue = function updateFormValue(newVal) {
    var _form$getInternalHook, _form$getFieldsValue;
    var validate2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var shouldEmitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _ref = (form === null || form === void 0 || (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 ? void 0 : _form$getInternalHook.call(form, HOOK_MARK)) || {},
      setPrevStore = _ref.setPrevStore;
    setPrevStore === null || setPrevStore === void 0 || setPrevStore(form === null || form === void 0 || (_form$getFieldsValue = form.getFieldsValue) === null || _form$getFieldsValue === void 0 ? void 0 : _form$getFieldsValue.call(form, true));
    shouldEmitChangeRef.current = shouldEmitChange;
    isUpdatedRef.current = true;
    shouldValidate.current = validate2;
    valueRef.current = newVal;
    var fieldName = [].concat(name);
    var fieldValue = formValue;
    if (formListName) {
      fieldName = [].concat(formListName, name);
      fieldValue = get(form === null || form === void 0 ? void 0 : form.store, fieldName);
    }
    fieldName = fieldName.filter(function (item) {
      return item !== void 0;
    });
    if (!fieldName) return;
    if (isEqual(fieldValue, newVal)) return;
    set(form === null || form === void 0 ? void 0 : form.store, fieldName, newVal);
    setFormValue(newVal);
  };
  function getInnerRules(name2, formRules, formListName2, formListRules2) {
    if (Array.isArray(name2)) {
      return get(formRules === null || formRules === void 0 ? void 0 : formRules[formListName2], name2) || get(formListRules2, name2) || get(formRules, name2.join(".")) || [];
    }
    return (formRules === null || formRules === void 0 ? void 0 : formRules[name2]) || formListRules2 || [];
  }
  var renderSuffixIcon = function renderSuffixIcon() {
    if (statusIcon === false) return null;
    var resultIcon = function resultIcon(iconSlot) {
      return /* @__PURE__ */React.createElement("span", {
        className: "".concat(classPrefix, "-form__status")
      }, iconSlot);
    };
    var getDefaultIcon = function getDefaultIcon() {
      var iconMap = {
        success: /* @__PURE__ */React.createElement(CheckCircleFilledIcon$1, {
          size: "25px"
        }),
        error: /* @__PURE__ */React.createElement(CloseCircleFilledIcon$1, {
          size: "25px"
        }),
        warning: /* @__PURE__ */React.createElement(ErrorCircleFilledIcon$1, {
          size: "25px"
        })
      };
      if (verifyStatus === ValidateStatus.SUCCESS) {
        return resultIcon(iconMap[verifyStatus]);
      }
      if (errorList && errorList[0]) {
        var type = errorList[0].type || "error";
        return resultIcon(iconMap[type]);
      }
      return null;
    };
    if (/*#__PURE__*/React.isValidElement(statusIcon)) {
      return resultIcon(/*#__PURE__*/React.cloneElement(statusIcon, _objectSpread({
        style: {
          color: "unset"
        }
      }, statusIcon.props)));
    }
    if (statusIcon === true) {
      return getDefaultIcon();
    }
    return null;
  };
  function analysisValidateResult(_x) {
    return _analysisValidateResult.apply(this, arguments);
  }
  function _analysisValidateResult() {
    _analysisValidateResult = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(trigger) {
      var _result$rules;
      var result;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = {
              successList: [],
              errorList: [],
              rules: [],
              resultList: [],
              allowSetValue: false
            };
            result.rules = trigger === "all" ? innerRules : innerRules.filter(function (item) {
              return (item.trigger || "change") === trigger;
            });
            if ((_result$rules = result.rules) !== null && _result$rules !== void 0 && _result$rules.length) {
              _context.next = 1;
              break;
            }
            setResetValidating(false);
            return _context.abrupt("return", result);
          case 1:
            result.allowSetValue = true;
            _context.next = 2;
            return validate(formValue, result.rules);
          case 2:
            result.resultList = _context.sent;
            result.errorList = result.resultList.filter(function (item) {
              return item.result !== true;
            }).map(function (item) {
              Object.keys(item).forEach(function (key) {
                if (!item.message && errorMessages[key]) {
                  item.message = parseMessage(errorMessages[key], {
                    validate: item[key],
                    name: isString(label) ? label : String(name)
                  });
                }
              });
              return item;
            });
            result.successList = result.resultList.filter(function (item) {
              return item.result === true && item.message && item.type === "success";
            });
            return _context.abrupt("return", result);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _analysisValidateResult.apply(this, arguments);
  }
  function validate$1() {
    return _validate.apply(this, arguments);
  }
  function _validate() {
    _validate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var trigger,
        showErrorMessage2,
        _yield$analysisValida,
        innerSuccessList,
        innerErrorList,
        validateRules,
        resultList,
        allowSetValue,
        cacheErrorList,
        status2,
        _innerErrorList$,
        _cacheErrorList$,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            trigger = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "all";
            showErrorMessage2 = _args2.length > 1 ? _args2[1] : undefined;
            if (!innerFormItemsRef.current.length) {
              _context2.next = 1;
              break;
            }
            return _context2.abrupt("return", innerFormItemsRef.current.map(function (innerFormItem) {
              return innerFormItem === null || innerFormItem === void 0 ? void 0 : innerFormItem.validate(trigger, showErrorMessage2);
            }));
          case 1:
            setResetValidating(true);
            setFreeShowErrorMessage(showErrorMessage2);
            _context2.next = 2;
            return analysisValidateResult(trigger);
          case 2:
            _yield$analysisValida = _context2.sent;
            innerSuccessList = _yield$analysisValida.successList;
            innerErrorList = _yield$analysisValida.errorList;
            validateRules = _yield$analysisValida.rules;
            resultList = _yield$analysisValida.resultList;
            allowSetValue = _yield$analysisValida.allowSetValue;
            if (innerErrorList.length && trigger !== "all") {
              errorListMapRef.current.set(trigger, innerErrorList);
            } else {
              errorListMapRef.current["delete"](trigger);
            }
            if (!innerErrorList.length && trigger === "all") {
              errorListMapRef.current.clear();
            }
            cacheErrorList = _toConsumableArray(errorListMapRef.current.values()).flat();
            if (allowSetValue) {
              setSuccessList(innerSuccessList);
              setErrorList(cacheErrorList.length ? cacheErrorList : innerErrorList);
            }
            if (validateRules.length) {
              status2 = ValidateStatus.SUCCESS;
              if (innerErrorList.length || cacheErrorList.length) {
                status2 = (innerErrorList === null || innerErrorList === void 0 || (_innerErrorList$ = innerErrorList[0]) === null || _innerErrorList$ === void 0 ? void 0 : _innerErrorList$.type) || (cacheErrorList === null || cacheErrorList === void 0 || (_cacheErrorList$ = cacheErrorList[0]) === null || _cacheErrorList$ === void 0 ? void 0 : _cacheErrorList$.type) || ValidateStatus.ERROR;
              }
              setVerifyStatus(status2);
            } else {
              setVerifyStatus(ValidateStatus.VALIDATING);
            }
            if (needResetField) {
              resetHandler();
            }
            setResetValidating(false);
            return _context2.abrupt("return", _defineProperty({}, snakeName, innerErrorList.length === 0 ? true : resultList));
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _validate.apply(this, arguments);
  }
  function validateOnly() {
    return _validateOnly.apply(this, arguments);
  }
  function _validateOnly() {
    _validateOnly = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var trigger,
        _yield$analysisValida2,
        innerErrorList,
        resultList,
        _args3 = arguments;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            trigger = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "all";
            _context3.next = 1;
            return analysisValidateResult(trigger);
          case 1:
            _yield$analysisValida2 = _context3.sent;
            innerErrorList = _yield$analysisValida2.errorList;
            resultList = _yield$analysisValida2.resultList;
            return _context3.abrupt("return", _defineProperty({}, snakeName, innerErrorList.length === 0 ? true : resultList));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _validateOnly.apply(this, arguments);
  }
  function handleItemBlur() {
    var filterRules = innerRules.filter(function (item) {
      return item.trigger === "blur";
    });
    filterRules.length && validate$1("blur");
  }
  function getResetValue(resetType) {
    if (resetType === "initial") {
      return getDefaultInitialData({
        children: children,
        initialData: initialData
      });
    }
    var emptyValue;
    if (Array.isArray(formValue)) {
      emptyValue = [];
    } else if (isObject(formValue)) {
      emptyValue = {};
    } else if (isString(formValue)) {
      emptyValue = "";
    }
    return emptyValue;
  }
  function resetField(type) {
    if (typeof name === "undefined") return;
    var resetType = type || resetTypeFromContext;
    var resetValue = getResetValue(resetType);
    updateFormValue(resetValue, false);
    if (resetValidating) {
      setNeedResetField(true);
    } else {
      resetHandler();
    }
  }
  function resetHandler() {
    setNeedResetField(false);
    setErrorList([]);
    setSuccessList([]);
    setVerifyStatus(ValidateStatus.VALIDATING);
  }
  function setField(field) {
    var value = field.value,
      status2 = field.status,
      validateMessage = field.validateMessage;
    if (typeof status2 !== "undefined") {
      setErrorList(validateMessage ? [validateMessage] : []);
      setSuccessList(validateMessage ? [validateMessage] : []);
      setNeedResetField(false);
      setVerifyStatus(status2);
    }
    if (typeof value !== "undefined") {
      updateFormValue(value, typeof status2 === "undefined" ? true : false, true);
    }
  }
  function setValidateMessage(validateMessage) {
    var _validateMessage$;
    if (!validateMessage || !Array.isArray(validateMessage)) return;
    if (validateMessage.length === 0) {
      setErrorList([]);
      setVerifyStatus(ValidateStatus.SUCCESS);
      return;
    }
    setErrorList(validateMessage);
    var status2 = (validateMessage === null || validateMessage === void 0 || (_validateMessage$ = validateMessage[0]) === null || _validateMessage$ === void 0 ? void 0 : _validateMessage$.type) || ValidateStatus.ERROR;
    setVerifyStatus(status2);
  }
  function getValidateMessage() {
    return errorList;
  }
  reactExports.useEffect(function () {
    var _form$getInternalHook2;
    if (!shouldUpdate || !form) return;
    var _ref2 = (form === null || form === void 0 || (_form$getInternalHook2 = form.getInternalHooks) === null || _form$getInternalHook2 === void 0 ? void 0 : _form$getInternalHook2.call(form, HOOK_MARK)) || {},
      getPrevStore = _ref2.getPrevStore,
      registerWatch = _ref2.registerWatch;
    var cancelRegister = registerWatch === null || registerWatch === void 0 ? void 0 : registerWatch(function () {
      var _form$getFieldsValue2;
      var currStore = (form === null || form === void 0 || (_form$getFieldsValue2 = form.getFieldsValue) === null || _form$getFieldsValue2 === void 0 ? void 0 : _form$getFieldsValue2.call(form, true)) || {};
      var updateFlag = shouldUpdate;
      if (isFunction(shouldUpdate)) updateFlag = shouldUpdate(getPrevStore === null || getPrevStore === void 0 ? void 0 : getPrevStore(), currStore);
      if (updateFlag) forceUpdate({});
    });
    return cancelRegister;
  }, [shouldUpdate, form]);
  reactExports.useEffect(function () {
    if (typeof name === "undefined") return;
    if (formListName && isSameForm) {
      formListMapRef.current.set(name, formItemRef);
      return function () {
        formListMapRef.current["delete"](name);
        unset(form === null || form === void 0 ? void 0 : form.store, name);
      };
    }
    if (!formMapRef) return;
    formMapRef.current.set(name, formItemRef);
    return function () {
      formMapRef.current["delete"](name);
      unset(form === null || form === void 0 ? void 0 : form.store, name);
    };
  }, [snakeName, formListName]);
  reactExports.useEffect(function () {
    var _form$getInternalHook3, _form$getInternalHook4;
    form === null || form === void 0 || (_form$getInternalHook3 = form.getInternalHooks) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook3 = _form$getInternalHook3.call(form, HOOK_MARK)) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook4 = _form$getInternalHook3.notifyWatch) === null || _form$getInternalHook4 === void 0 || _form$getInternalHook4.call(_form$getInternalHook3, name);
    if (!shouldValidate.current) return;
    if (typeof name !== "undefined" && shouldEmitChangeRef.current) {
      if (formListName && isSameForm) {
        var formListValue = merge([], calcFieldValue(name, formValue));
        var fieldValue = calcFieldValue(formListName, formListValue);
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, fieldValue));
      } else {
        var _fieldValue = calcFieldValue(name, formValue);
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, _fieldValue));
      }
    }
    var filterRules = innerRules.filter(function (item) {
      return (item.trigger || "change") === "change";
    });
    filterRules.length && validate$1("change");
  }, [formValue, snakeName]);
  var instance = {
    name: name,
    value: formValue,
    isUpdated: isUpdatedRef.current,
    getValue: function getValue() {
      return valueRef.current;
    },
    setValue: function setValue(newVal) {
      return updateFormValue(newVal, true, true);
    },
    setField: setField,
    validate: validate$1,
    validateOnly: validateOnly,
    resetField: resetField,
    setValidateMessage: setValidateMessage,
    getValidateMessage: getValidateMessage,
    resetValidate: resetHandler
  };
  reactExports.useImperativeHandle(ref, function () {
    return instance;
  });
  reactExports.useImperativeHandle(formItemRef, function () {
    return instance;
  });
  if (isFunction(children)) return children(form);
  return /* @__PURE__ */React.createElement("div", {
    className: formItemClass,
    style: style
  }, label && /* @__PURE__ */React.createElement("div", {
    className: formItemLabelClass,
    style: labelStyle
  }, /* @__PURE__ */React.createElement("label", {
    htmlFor: props === null || props === void 0 ? void 0 : props["for"]
  }, label), colon || "Colon"), /* @__PURE__ */React.createElement("div", {
    className: contentClass(),
    style: contentStyle
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-form__controls-content")
  }, React.Children.map(children, function (child, index) {
    if (!child) return null;
    var ctrlKey = "value";
    if (/*#__PURE__*/React.isValidElement(child)) {
      if (child.type === FormItem) {
        return /*#__PURE__*/React.cloneElement(child, {
          // @ts-ignore
          ref: function ref(el) {
            if (!el) return;
            innerFormItemsRef.current[index] = el;
          }
        });
      }
      if (_typeof(child.type) === "object") {
        ctrlKey = ctrlKeyMap.get(child.type) || "value";
      }
      var childProps = child.props;
      return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({
        disabled: disabledFromContext
      }, childProps), {}, _defineProperty(_defineProperty(_defineProperty({}, ctrlKey, formValue), "onChange", function onChange(value) {
        var _childProps$onChange, _childProps$onChange$;
        var newValue = valueFormat ? valueFormat(value) : value;
        updateFormValue(newValue, true, true);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        childProps === null || childProps === void 0 || (_childProps$onChange = childProps.onChange) === null || _childProps$onChange === void 0 || (_childProps$onChange$ = _childProps$onChange.call) === null || _childProps$onChange$ === void 0 || _childProps$onChange$.call.apply(_childProps$onChange$, [_childProps$onChange, null, value].concat(args));
      }), "onBlur", function onBlur(value) {
        var _childProps$onBlur, _childProps$onBlur$ca;
        handleItemBlur();
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        childProps === null || childProps === void 0 || (_childProps$onBlur = childProps.onBlur) === null || _childProps$onBlur === void 0 || (_childProps$onBlur$ca = _childProps$onBlur.call) === null || _childProps$onBlur$ca === void 0 || _childProps$onBlur$ca.call.apply(_childProps$onBlur$ca, [_childProps$onBlur, null, value].concat(args));
      })));
    }
    return child;
  }), renderSuffixIcon()), helpNode, extraNode));
});
FormItem.displayName = "FormItem";

export { Checkbox as C, FormItem as F, formDefaultProps as f };
//# sourceMappingURL=dep-m5bu896E.js.map
