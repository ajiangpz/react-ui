import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useState, useMemo, useRef, useEffect, useImperativeHandle } from 'react';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { n as noop } from '../_chunks/dep-CVFMdElW.js';
import { f as forwardRefWithStatics } from '../_chunks/dep-KHdXYwsL.js';
import useInstance from './hooks/useInstance.js';
import { H as HOOK_MARK, u as useForm } from '../_chunks/dep-Bo0GwPc0.js';
import { g as get, i as isUndefined } from '../_chunks/dep-uPo9oRq0.js';
import FormContext from './FormContext.js';
import { f as formDefaultProps, F as FormItem } from '../_chunks/dep-goAwWXgH.js';
import FormList from './FormList.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-0Agal8xo.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-DFvx9dpR.js';
import '../_chunks/dep-DcgYxvIK.js';
import '../_chunks/dep-CEvoJEXM.js';
import './utils/index.js';
import '../_chunks/dep-LgDsOUkE.js';
import '../_chunks/dep-BIZNqCbw.js';
import '../_chunks/dep-m9cbRu9t.js';
import '../_chunks/dep-CVM4W9uS.js';
import '../_chunks/dep-CCwJVofP.js';
import '../_chunks/dep-BKTdNIRm.js';
import '../_chunks/dep-mO86zOh3.js';
import '../common/Check.js';
import '../_chunks/dep-IfD-elqQ.js';
import '../tag-input/TagInput.js';
import '../input/index.js';
import '../input/Input.js';
import '../_chunks/dep-0EpSXuwN.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/Tag.js';
import '../tag/style/css.js';
import '../hooks/useDragSorter.js';

function useWatch(name, form) {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = useMemo(function () {
    return JSON.stringify(value);
  }, [value]);
  var valueStrRef = useRef(valueStr);

  // eslint-disable-next-line
  var isValidForm = form && form._init;
  useEffect(function () {
    var _form$getInternalHook3, _form$getFieldsValue2;
    if (!isValidForm) return;
    var _form$getInternalHook = (_form$getInternalHook3 = form.getInternalHooks) === null || _form$getInternalHook3 === void 0 ? void 0 : _form$getInternalHook3.call(form, HOOK_MARK),
      _form$getInternalHook2 = _form$getInternalHook.registerWatch,
      registerWatch = _form$getInternalHook2 === void 0 ? noop : _form$getInternalHook2;
    var cancelRegister = registerWatch(function () {
      var _form$getFieldsValue;
      var allFieldsValue = (_form$getFieldsValue = form.getFieldsValue) === null || _form$getFieldsValue === void 0 ? void 0 : _form$getFieldsValue.call(form, true);
      var newValue = get(allFieldsValue, name);
      var nextValueStr = JSON.stringify(newValue);

      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(nextValueStr);
      }
    });
    var allFieldsValue = (_form$getFieldsValue2 = form.getFieldsValue) === null || _form$getFieldsValue2 === void 0 ? void 0 : _form$getFieldsValue2.call(form, true);
    var initialValue = get(allFieldsValue, name);
    setValue(JSON.stringify(initialValue));
    return cancelRegister;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  var formClass = classNames("".concat(classPrefix, "-form"), className, _defineProperty({}, "".concat(classPrefix, "-form-inline"), layout === 'inline'));
  var _useForm = useForm(props.form),
    _useForm2 = _slicedToArray(_useForm, 1),
    form = _useForm2[0]; // 内部与外部共享 form 实例，外部不传则内部创建
  var formRef = useRef(null);
  var formMapRef = useRef(new Map()); // 收集所有包含 name 属性 formItem 实例
  var floatingFormDataRef = useRef({}); // 储存游离值的 formData
  var formInstance = useInstance(props, formRef, formMapRef, floatingFormDataRef);
  useImperativeHandle(ref, function () {
    return formInstance;
  });
  Object.assign(form, _objectSpread({}, formInstance));
  form === null || form === void 0 || (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 || (_form$getInternalHook = _form$getInternalHook.call(form, HOOK_MARK)) === null || _form$getInternalHook === void 0 || (_form$getInternalHook2 = _form$getInternalHook.setForm) === null || _form$getInternalHook2 === void 0 || _form$getInternalHook2.call(_form$getInternalHook, formInstance);

  // form 初始化后清空队列
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
    // 禁用 input 输入框回车自动提交 form
    if (e.target.tagName.toLowerCase() !== 'input') return;
    if (preventSubmitDefault && e.key === 'Enter') {
      var _e$preventDefault, _e$stopPropagation;
      (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 || _e$preventDefault.call(e);
      (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
    }
  }
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
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
  }, /*#__PURE__*/React.createElement("form", {
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
Form.displayName = 'Form';

export { Form as default };
//# sourceMappingURL=Form.js.map
