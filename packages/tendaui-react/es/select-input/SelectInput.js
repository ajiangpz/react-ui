import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useMemo, useRef, useImperativeHandle } from 'react';
import classNames from 'classnames';
import useSingle from './hook/useSingle.js';
import useMultiple from './hook/useMultiple.js';
import { Popup } from '../popup/index.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { isFunction, isObject } from 'lodash-es';
import { u as useControlled } from '../_chunks/dep-D2IWH4e_.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import '../input/index.js';
import '../input/Input.js';
import '../_chunks/dep-DN7d1SzH.js';
import 'lucide-react';
import '../_chunks/dep-CKiAytca.js';
import '../_chunks/dep-_E1HIQZ7.js';
import '../config-provider/ConfigContext.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../tag-input/index.js';
import '../tag-input/TagInput.js';
import '../tag-input/hooks/useTagList.js';
import '../_chunks/dep-CgyDw_YI.js';
import '../tag/index.js';
import '../tag/Tag.js';
import '../_chunks/dep-CVFMdElW.js';
import '../_chunks/dep-BIZNqCbw.js';
import '../_chunks/dep-BP0-apUT.js';
import 'hoist-non-react-statics';
import '../tag/style/css.js';
import '../hooks/useDragSorter.js';
import '../tag-input/style/css.js';
import '../popup/Popup.js';
import '../portal/Portal.js';
import 'react-dom';
import 'react-is';
import '../_chunks/dep-BggCUGKG.js';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../_chunks/dep-BrowiCr7.js';
import '../popup/style/css.js';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MAX_POPUP_WIDTH = 1000;
function useOverlayInnerStyle(props, extra) {
  var popupProps = props.popupProps,
    autoWidth = props.autoWidth,
    readonly = props.readonly,
    disabled = props.disabled,
    onPopupVisibleChange = props.onPopupVisibleChange,
    allowInput = props.allowInput;
  var _useControlled = useControlled(props, 'popupVisible', onPopupVisibleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    innerPopupVisible = _useControlled2[0],
    setInnerPopupVisible = _useControlled2[1];
  var matchWidthFunc = function matchWidthFunc(triggerElement, popupElement) {
    if (!triggerElement || !popupElement) {
      return;
    }
    var prevDisplay = popupElement.style.display;
    popupElement.style.display = '';
    var overlayScrollWidth = popupElement.offsetWidth - popupElement.scrollWidth;
    var width = popupElement.offsetWidth - overlayScrollWidth > triggerElement.offsetWidth ? popupElement.scrollWidth : triggerElement.offsetWidth - overlayScrollWidth;
    if (prevDisplay === 'none') {
      // eslint-disable-next-line no-param-reassign
      popupElement.style.display = 'none';
    }
    var otherOverlayInnerStyle = {};
    if (popupProps && _typeof(popupProps.overlayInnerStyle) === 'object' && !popupProps.overlayInnerStyle.width) {
      otherOverlayInnerStyle = popupProps.overlayInnerStyle;
    }
    return _objectSpread$1({
      width: "".concat(Math.min(width, MAX_POPUP_WIDTH), "px")
    }, otherOverlayInnerStyle);
  };
  var onInnerPopupVisibleChange = function onInnerPopupVisibleChange(visible, context) {
    if (disabled || readonly) {
      return;
    }
    // 如果点击触发元素（输入框）且为可输入状态，则继续显示下拉框
    var newVisible = context.trigger === 'trigger-element-click' && allowInput ? true : visible;
    if (props.popupVisible !== newVisible) {
      setInnerPopupVisible(newVisible, context);
      if (!newVisible) {
        var _extra$afterHidePopup;
        extra === null || extra === void 0 || (_extra$afterHidePopup = extra.afterHidePopups) === null || _extra$afterHidePopup === void 0 || _extra$afterHidePopup.call(extra, context);
      }
    }
  };
  var tOverlayInnerStyle = useMemo(function () {
    var result = {};
    var overlayInnerStyle = (popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle) || {};
    if (isFunction(overlayInnerStyle) || isObject(overlayInnerStyle) && overlayInnerStyle.width) {
      result = overlayInnerStyle;
    } else if (!autoWidth) {
      result = matchWidthFunc;
    }
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoWidth, popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle]);
  return {
    tOverlayInnerStyle: tOverlayInnerStyle,
    innerPopupVisible: innerPopupVisible,
    onInnerPopupVisibleChange: onInnerPopupVisibleChange
  };
}

var selectInputDefaultProps = {
  allowInput: false,
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  loading: false,
  minCollapsedNum: 0,
  multiple: false,
  readonly: false,
  reserveKeyword: false,
  status: 'default'
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SelectInput = /*#__PURE__*/React.forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, selectInputDefaultProps);
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  var selectInputRef = useRef(null);
  var selectInputWrapRef = useRef(null);
  var multiple = props.multiple,
    value = props.value,
    popupVisible = props.popupVisible,
    popupProps = props.popupProps,
    borderless = props.borderless,
    disabled = props.disabled;
  var _useSingle = useSingle(props),
    commonInputProps = _useSingle.commonInputProps,
    inputRef = _useSingle.inputRef,
    singleInputValue = _useSingle.singleInputValue,
    onInnerClear = _useSingle.onInnerClear,
    renderSelectSingle = _useSingle.renderSelectSingle;
  var _useMultiple = useMultiple(props),
    tagInputRef = _useMultiple.tagInputRef,
    multipleInputValue = _useMultiple.multipleInputValue,
    renderSelectMultiple = _useMultiple.renderSelectMultiple;
  var _useOverlayInnerStyle = useOverlayInnerStyle(props, {
      afterHidePopups: onInnerBlur
    }),
    tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
    innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
    onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
  var popupClasses = classNames([props.className, "".concat(prefix, "-select-input"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix, "-select-input--borderless"), borderless), "".concat(prefix, "-select-input--multiple"), multiple), "".concat(prefix, "-select-input--popup-visible"), popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible), "".concat(prefix, "-select-input--empty"), value instanceof Array ? !value.length : !value)]);
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread(_objectSpread({}, selectInputRef.current || {}), inputRef.current || {}), tagInputRef.current || {});
  });

  // 浮层显示的受控与非受控
  var visibleProps = {
    visible: popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible
  };
  function onInnerBlur(ctx) {
    var _props$onBlur;
    var inputValue = props.multiple ? multipleInputValue : singleInputValue;
    var params = {
      e: ctx.e,
      inputValue: inputValue
    };
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, props.value, params);
  }
  var mainContent = /*#__PURE__*/React.createElement("div", {
    className: popupClasses,
    style: props.style
  }, /*#__PURE__*/React.createElement(Popup, _extends({
    ref: selectInputRef,
    trigger: (popupProps === null || popupProps === void 0 ? void 0 : popupProps.trigger) || 'click',
    placement: "bottom-left",
    content: props.panel,
    hideEmptyPopup: true,
    onVisibleChange: onInnerPopupVisibleChange,
    updateScrollTop: props.updateScrollTop
  }, visibleProps, popupProps, {
    disabled: disabled,
    overlayInnerStyle: tOverlayInnerStyle
  }), multiple ? renderSelectMultiple({
    commonInputProps: commonInputProps,
    onInnerClear: onInnerClear,
    popupVisible: visibleProps.visible,
    allowInput: props.allowInput
  }) : renderSelectSingle(visibleProps.visible)));
  if (!props.tips) {
    return mainContent;
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: selectInputWrapRef,
    className: "t-select-input__wrap"
  }, mainContent, props.tips && /*#__PURE__*/React.createElement("div", {
    className: "t-input__tips t-input__tips--".concat(props.status || 'normal')
  }, props.tips));
});
SelectInput.displayName = 'SelectInput';

export { SelectInput as default };
//# sourceMappingURL=SelectInput.js.map
