import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React, { useState, useMemo, useRef, useEffect, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { u as useConfig } from './dep-u7AyxuYF.js';
import { n as noop } from './dep-U1T8CQY9.js';
import { f as forwardRefWithStatics } from './dep-Do9UdkhS.js';
import useInstance from '../form/hooks/useInstance.js';
import { H as HOOK_MARK, u as useForm } from './dep-4LYjB3c6.js';
import { get, isUndefined } from 'lodash-es';
import FormContext from '../form/FormContext.js';
import { f as formDefaultProps, F as FormItem } from './dep-wDcIa4mJ.js';
import FormList from '../form/FormList.js';
import { u as useDefaultProps } from './dep-DGvfel3I.js';

function useWatch(name, form) {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = useMemo(function () {
    return JSON.stringify(value);
  }, [value]);
  var valueStrRef = useRef(valueStr);
  var isValidForm = form && form._init;
  useEffect(function () {
    var _form$getInternalHook, _form$getFieldsValue2;
    if (!isValidForm) return;
    var internalHooks = (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 ? void 0 : _form$getInternalHook.call(form, HOOK_MARK);
    var _ref = internalHooks || {},
      _ref$registerWatch = _ref.registerWatch,
      registerWatch = _ref$registerWatch === void 0 ? noop : _ref$registerWatch;
    var cancelRegister = registerWatch(function () {
      var _form$getFieldsValue;
      var allFieldsValue2 = (_form$getFieldsValue = form.getFieldsValue) === null || _form$getFieldsValue === void 0 ? void 0 : _form$getFieldsValue.call(form, true);
      var newValue = get(allFieldsValue2, name);
      var nextValueStr = JSON.stringify(newValue);
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(nextValueStr);
      }
    });
    var allFieldsValue = (_form$getFieldsValue2 = form.getFieldsValue) === null || _form$getFieldsValue2 === void 0 ? void 0 : _form$getFieldsValue2.call(form, true);
    var initialValue = get(allFieldsValue, name);
    setValue(JSON.stringify(initialValue));
    return cancelRegister;
  }, []);
  return isUndefined(value) ? value : JSON.parse(value);
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Form = forwardRefWithStatics(function (originalProps, ref) {
  var _form$getInternalHook, _form$getInternalHook2;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    globalFormConfig = _useConfig.form;
  var props = useDefaultProps(originalProps, formDefaultProps);
  var style = props.style,
    className = props.className,
    labelWidth = props.labelWidth,
    statusIcon = props.statusIcon,
    labelAlign = props.labelAlign,
    layout = props.layout,
    colon = props.colon,
    initialData = props.initialData,
    _props$requiredMark = props.requiredMark,
    requiredMark = _props$requiredMark === void 0 ? globalFormConfig.requiredMark : _props$requiredMark,
    _props$requiredMarkPo = props.requiredMarkPosition,
    requiredMarkPosition = _props$requiredMarkPo === void 0 ? globalFormConfig.requiredMarkPosition : _props$requiredMarkPo,
    scrollToFirstError = props.scrollToFirstError,
    showErrorMessage = props.showErrorMessage,
    resetType = props.resetType,
    rules = props.rules,
    _props$errorMessage = props.errorMessage,
    errorMessage = _props$errorMessage === void 0 ? globalFormConfig.errorMessage : _props$errorMessage,
    preventSubmitDefault = props.preventSubmitDefault,
    disabled = props.disabled,
    children = props.children,
    id = props.id,
    onReset = props.onReset,
    _props$onValuesChange = props.onValuesChange,
    onValuesChange = _props$onValuesChange === void 0 ? noop : _props$onValuesChange;
  var formClass = classNames("".concat(classPrefix, "-form"), className, _defineProperty({}, "".concat(classPrefix, "-form-inline"), layout === "inline"));
  var _useForm = useForm(props.form),
    _useForm2 = _slicedToArray(_useForm, 1),
    form = _useForm2[0];
  var formRef = useRef(null);
  var formMapRef = useRef(/* @__PURE__ */new Map());
  var floatingFormDataRef = useRef({});
  var formInstance = useInstance(props, formRef, formMapRef, floatingFormDataRef);
  var exposedFormInstance = formInstance;
  useImperativeHandle(ref, function () {
    return exposedFormInstance;
  });
  Object.assign(form, _objectSpread({}, exposedFormInstance));
  form === null || form === void 0 || (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 || (_form$getInternalHook = _form$getInternalHook.call(form, HOOK_MARK)) === null || _form$getInternalHook === void 0 || (_form$getInternalHook2 = _form$getInternalHook.setForm) === null || _form$getInternalHook2 === void 0 || _form$getInternalHook2.call(_form$getInternalHook, exposedFormInstance);
  React.useEffect(function () {
    var _form$getInternalHook3, _form$getInternalHook4;
    form === null || form === void 0 || (_form$getInternalHook3 = form.getInternalHooks) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook3 = _form$getInternalHook3.call(form, HOOK_MARK)) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook4 = _form$getInternalHook3.flashQueue) === null || _form$getInternalHook4 === void 0 || _form$getInternalHook4.call(_form$getInternalHook3);
  }, [form]);
  function onResetHandler(e) {
    var _form$getInternalHook5, _form$getInternalHook6;
    _toConsumableArray(formMapRef.current.values()).forEach(function (formItemRef) {
      formItemRef === null || formItemRef === void 0 || formItemRef.current.resetField();
    });
    form === null || form === void 0 || (_form$getInternalHook5 = form.getInternalHooks) === null || _form$getInternalHook5 === void 0 || (_form$getInternalHook5 = _form$getInternalHook5.call(form, HOOK_MARK)) === null || _form$getInternalHook5 === void 0 || (_form$getInternalHook6 = _form$getInternalHook5.notifyWatch) === null || _form$getInternalHook6 === void 0 || _form$getInternalHook6.call(_form$getInternalHook5, []);
    form.store = {};
    onReset === null || onReset === void 0 || onReset({
      e: e
    });
  }
  function onFormItemValueChange(changedValue) {
    var allFields = formInstance.getFieldsValue(true);
    onValuesChange(changedValue, allFields);
  }
  function onKeyDownHandler(e) {
    if (e.target.tagName.toLowerCase() !== "input") return;
    if (preventSubmitDefault && e.key === "Enter") {
      var _e$preventDefault, _e$stopPropagation;
      (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 || _e$preventDefault.call(e);
      (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
    }
  }
  return /* @__PURE__ */React.createElement(FormContext.Provider, {
    value: {
      form: form,
      labelWidth: labelWidth,
      statusIcon: statusIcon,
      labelAlign: labelAlign,
      layout: layout,
      colon: colon,
      initialData: initialData,
      requiredMark: requiredMark,
      requiredMarkPosition: requiredMarkPosition,
      errorMessage: errorMessage,
      showErrorMessage: showErrorMessage,
      scrollToFirstError: scrollToFirstError,
      resetType: resetType,
      rules: rules,
      disabled: disabled,
      formMapRef: formMapRef,
      floatingFormDataRef: floatingFormDataRef,
      onFormItemValueChange: onFormItemValueChange
    }
  }, /* @__PURE__ */React.createElement("form", {
    ref: formRef,
    id: id,
    style: style,
    className: formClass,
    onSubmit: formInstance.submit,
    onReset: onResetHandler,
    onKeyDown: onKeyDownHandler
  }, children));
}, {
  useForm: useForm,
  useWatch: useWatch,
  FormItem: FormItem,
  FormList: FormList
});
Form.displayName = "Form";

export { Form as F, useWatch as u };
//# sourceMappingURL=dep-CpNU-v8L.js.map
