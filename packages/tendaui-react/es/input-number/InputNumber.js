import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { IconPlus, IconChevronUp, IconMinusStroked, IconChevronDown } from '@tendaui/icons';
import classNames from 'classnames';
import { Input } from '../input/index.js';
import { Button } from '../button/index.js';
import useInputNumber from './useInputNumber.js';
import { u as useGlobalIcon } from '../_chunks/dep-sSDUpJwy.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-D-UKOauR.js';
import '../input/Input.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../_chunks/dep-CzLhKWCf.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-DRwijJcv.js';
import 'lodash-es';
import '../_chunks/dep-CCaTIa7l.js';
import '../_chunks/dep-D6YxJv-F.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../_chunks/dep-BGP3l2nd.js';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../button/Button.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../common/Portal.js';
import 'react-dom';
import '../loading/Gradient.js';
import '../_chunks/dep-DHWwZ2Nj.js';
import '../_chunks/dep-PPA-yoAy.js';
import '../_chunks/dep-DbVHGoUC.js';
import '../loading/style/css.js';
import '../button/style/css.js';
import '../utils/log/index.js';
import '../_chunks/dep-C4qhHlmM.js';

var inputNumberDefaultProps = {
  allowInputOverLimit: true,
  autoWidth: false,
  decimalPlaces: void 0,
  disabled: void 0,
  largeNumber: false,
  max: Infinity,
  min: -Infinity,
  placeholder: void 0,
  readonly: void 0,
  size: "medium",
  status: "default",
  step: 1,
  theme: "row"
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TdInputNumber(originalProps, ref) {
  var _useGlobalIcon = useGlobalIcon({
      ChevronDownIcon: IconChevronDown,
      RemoveIcon: IconMinusStroked,
      ChevronUpIcon: IconChevronUp,
      AddIcon: IconPlus
    }),
    ChevronDownIcon = _useGlobalIcon.ChevronDownIcon,
    RemoveIcon = _useGlobalIcon.RemoveIcon,
    ChevronUpIcon = _useGlobalIcon.ChevronUpIcon,
    AddIcon = _useGlobalIcon.AddIcon;
  var props = useDefaultProps(originalProps, inputNumberDefaultProps);
  var _useInputNumber = useInputNumber(props),
    classPrefix = _useInputNumber.classPrefix,
    wrapClasses = _useInputNumber.wrapClasses,
    addClasses = _useInputNumber.addClasses,
    reduceClasses = _useInputNumber.reduceClasses,
    listeners = _useInputNumber.listeners,
    isError = _useInputNumber.isError,
    inputRef = _useInputNumber.inputRef,
    userInput = _useInputNumber.userInput,
    handleAdd = _useInputNumber.handleAdd,
    handleReduce = _useInputNumber.handleReduce,
    onInnerInputChange = _useInputNumber.onInnerInputChange;
  var wrapRef = useRef(null);
  var status = isError ? "error" : props.status;
  var iconSize = props.size === "medium" ? "default" : props.size;
  var addIcon = props.theme === "column" ? /* @__PURE__ */React.createElement(ChevronUpIcon, {
    size: iconSize
  }) : /* @__PURE__ */React.createElement(AddIcon, {
    size: iconSize
  });
  var reduceIcon = props.theme === "column" ? /* @__PURE__ */React.createElement(ChevronDownIcon, {
    size: iconSize
  }) : /* @__PURE__ */React.createElement(RemoveIcon, {
    size: iconSize
  });
  useImperativeHandle(ref, function () {
    return {
      currentElement: wrapRef.current,
      inputElement: inputRef.current
    };
  });
  return /* @__PURE__ */React.createElement("div", {
    className: classNames(wrapClasses, props.className),
    style: props.style,
    ref: wrapRef
  }, props.theme !== "normal" && /* @__PURE__ */React.createElement(Button, {
    className: reduceClasses,
    disabled: props.disabled,
    onClick: handleReduce,
    variant: "outline",
    shape: "square",
    icon: reduceIcon
  }), /* @__PURE__ */React.createElement(Input, _objectSpread(_objectSpread({
    ref: inputRef,
    autocomplete: "off",
    disabled: props.disabled,
    readonly: props.readonly,
    placeholder: props.placeholder,
    autoWidth: props.autoWidth,
    align: props.align || (props.theme === "row" ? "center" : void 0),
    status: status,
    label: props.label,
    suffix: props.suffix,
    value: userInput,
    onChange: onInnerInputChange,
    size: props.size
  }, listeners), props.inputProps || {})), props.theme !== "normal" && /* @__PURE__ */React.createElement(Button, {
    className: addClasses,
    disabled: props.disabled,
    onClick: handleAdd,
    variant: "outline",
    shape: "square",
    icon: addIcon
  }), props.tips && /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-input__tips"), "".concat(classPrefix, "-input__tips--").concat(status))
  }, props.tips));
}
var InputNumber = /*#__PURE__*/forwardRef(TdInputNumber);
InputNumber.displayName = "InputNumber";

export { InputNumber as default };
//# sourceMappingURL=InputNumber.js.map
