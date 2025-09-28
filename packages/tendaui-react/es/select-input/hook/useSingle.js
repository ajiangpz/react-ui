import { _ as _extends } from '../../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../../_chunks/dep-CzLhKWCf.js';
import React, { useRef } from 'react';
import { b as isObject, r as pick } from '../../_chunks/dep-uPo9oRq0.js';
import { c as classNames } from '../../_chunks/dep-Cro9u0Fl.js';
import { Input } from '../../input/index.js';
import { u as useControlled } from '../../_chunks/dep-IfD-elqQ.js';
import '../../_chunks/dep-D-UKOauR.js';
import '../../_chunks/dep-0Agal8xo.js';
import '../../input/Input.js';
import '../../_chunks/dep-DcgYxvIK.js';
import '../../_chunks/dep-LgDsOUkE.js';
import '../../_chunks/dep-0EpSXuwN.js';
import '../../_chunks/dep-CVM4W9uS.js';
import '../../_chunks/dep-5jl2j2BI.js';
import '../../_chunks/dep-u1x3x6MJ.js';
import '../../config-provider/ConfigContext.js';
import '../../input/InputGroup.js';
import '../../input/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// single 和 multiple 共有特性
var COMMON_PROPERTIES = ['status', 'clearable', 'disabled', 'label', 'placeholder', 'readonly', 'suffix', 'suffixIcon', 'onPaste', 'onEnter', 'onMouseenter', 'onMouseleave', 'size', 'prefixIcon'];
var DEFAULT_KEYS = {
  label: 'label',
  value: 'value'
};
function getInputValue(value, keys) {
  var iKeys = keys || DEFAULT_KEYS;
  return isObject(value) ? value[iKeys.label] : value;
}
function useSingle(props) {
  var value = props.value,
    keys = props.keys;
  var inputRef = useRef(null);
  var _useControlled = useControlled(props, 'inputValue', props.onInputChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    inputValue = _useControlled2[0],
    setInputValue = _useControlled2[1];
  var commonInputProps = _objectSpread(_objectSpread({}, pick(props, COMMON_PROPERTIES)), {}, {
    suffixIcon: props.suffixIcon
  });
  var onInnerClear = function onInnerClear(context) {
    var _context$e, _props$onClear;
    context === null || context === void 0 || (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, context);
    setInputValue('', {
      trigger: 'clear'
    });
  };
  var onInnerInputChange = function onInnerInputChange(value, context) {
    if (props.allowInput) {
      setInputValue(value, _objectSpread(_objectSpread({}, context), {}, {
        trigger: 'input'
      }));
    }
  };
  var handleEmptyPanelBlur = function handleEmptyPanelBlur(value, _ref) {
    var _props$onBlur;
    var e = _ref.e;
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, value, {
      e: e,
      inputValue: value
    });
  };
  var renderSelectSingle = function renderSelectSingle(popupVisible) {
    var _props$inputProps;
    var singleValueDisplay = !props.multiple ? props.valueDisplay : null;
    var displayedValue = popupVisible && props.allowInput ? inputValue : getInputValue(value, keys);
    return /*#__PURE__*/React.createElement(Input, _extends({
      ref: inputRef
    }, commonInputProps, {
      autoWidth: props.autoWidth,
      placeholder: props.placeholder,
      value: singleValueDisplay ? ' ' : displayedValue,
      label: (props.label || singleValueDisplay) && /*#__PURE__*/React.createElement(React.Fragment, null, props.label, singleValueDisplay),
      onChange: onInnerInputChange,
      onClear: onInnerClear
      // [Important Info]: SelectInput.blur is not equal to Input, example: click popup panel
      ,
      onFocus: function onFocus(val, context) {
        var _props$onFocus;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, value, _objectSpread(_objectSpread({}, context), {}, {
          inputValue: val
        }));
        // focus might not need to change input value. it will caught some curious errors in tree-select
        // !popupVisible && setInputValue(getInputValue(value, keys), { ...context, trigger: 'input' });
      },
      onEnter: function onEnter(val, context) {
        var _props$onEnter;
        (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, value, _objectSpread(_objectSpread({}, context), {}, {
          inputValue: val
        }));
      }
      // onBlur need to triggered by input when popup panel is null
      ,
      onBlur: !props.panel ? handleEmptyPanelBlur : null
    }, props.inputProps, {
      inputClass: classNames((_props$inputProps = props.inputProps) === null || _props$inputProps === void 0 ? void 0 : _props$inputProps.className, _defineProperty(_defineProperty({}, "t-input--focused", popupVisible), "t-is-focused", popupVisible))
    }));
  };
  return {
    inputRef: inputRef,
    commonInputProps: commonInputProps,
    singleInputValue: inputValue,
    onInnerClear: onInnerClear,
    renderSelectSingle: renderSelectSingle
  };
}

export { useSingle as default };
//# sourceMappingURL=useSingle.js.map
