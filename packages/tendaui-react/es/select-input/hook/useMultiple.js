import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../../_chunks/dep-CzLhKWCf.js';
import React, { useRef } from 'react';
import { isObject } from 'lodash-es';
import classNames from 'classnames';
import { TagInput } from '../../tag-input/index.js';
import { u as useControlled } from '../../_chunks/dep-CCaTIa7l.js';
import { u as useConfig } from '../../_chunks/dep-u7AyxuYF.js';
import '../../_chunks/dep-D-UKOauR.js';
import '../../tag-input/TagInput.js';
import '@tendaui/icons';
import '../../input/index.js';
import '../../input/Input.js';
import '../../_chunks/dep-DN7d1SzH.js';
import '../../_chunks/dep-BRbJGDI9.js';
import '../../_chunks/dep-DRwijJcv.js';
import '../../_chunks/dep-D6YxJv-F.js';
import '../../_chunks/dep-DGvfel3I.js';
import '../../_chunks/dep-BGP3l2nd.js';
import '../../config-provider/index.js';
import '../../config-provider/ConfigProvider.js';
import '../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../input/InputGroup.js';
import '../../input/style/css.js';
import '../../tag-input/hooks/useTagList.js';
import '../../_chunks/dep-CgyDw_YI.js';
import '../../tag/index.js';
import '../../tag/Tag.js';
import '../../_chunks/dep-zOZQ0R9g.js';
import '../../_chunks/dep-U1T8CQY9.js';
import '../../_chunks/dep-sSDUpJwy.js';
import '../../_chunks/dep-Do9UdkhS.js';
import 'hoist-non-react-statics';
import '../../tag/style/css.js';
import '../../hooks/useDragSorter.js';
import '../../tag-input/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_KEYS = {
  label: "label",
  key: "key",
  children: "children"
};
function useMultiple(props) {
  var value = props.value;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var tagInputRef = useRef(null);
  var _useControlled = useControlled(props, "inputValue", props.onInputChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    tInputValue = _useControlled2[0],
    setTInputValue = _useControlled2[1];
  var iKeys = _objectSpread(_objectSpread({}, DEFAULT_KEYS), props.keys);
  var getTags = function getTags() {
    if (!(value instanceof Array)) {
      if (["", null, void 0].includes(String(value))) return [];
      return isObject(value) ? [value[iKeys.label]] : [value];
    }
    return value.map(function (item) {
      return isObject(item) ? item[iKeys.label] : item;
    });
  };
  var tags = getTags();
  var tPlaceholder = !tags || !tags.length ? props.placeholder : "";
  var onTagInputChange = function onTagInputChange(val, context) {
    var _props$onTagChange;
    if (context.trigger === "tag-remove") {
      var _context$e;
      (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
    }
    (_props$onTagChange = props.onTagChange) === null || _props$onTagChange === void 0 || _props$onTagChange.call(props, val, context);
  };
  var renderSelectMultiple = function renderSelectMultiple(p) {
    var _props$tagInputProps;
    return /* @__PURE__ */React.createElement(TagInput, _objectSpread(_objectSpread(_objectSpread({
      ref: tagInputRef
    }, p.commonInputProps), {}, {
      autoWidth: props.autoWidth,
      readonly: props.readonly,
      minCollapsedNum: props.minCollapsedNum,
      collapsedItems: props.collapsedItems,
      tag: props.tag,
      valueDisplay: props.valueDisplay,
      placeholder: tPlaceholder,
      options: props.options,
      value: tags,
      inputValue: p.popupVisible && p.allowInput ? tInputValue : "",
      onChange: onTagInputChange,
      onInputChange: function onInputChange(val, context) {
        if ((context === null || context === void 0 ? void 0 : context.trigger) === "enter" || (context === null || context === void 0 ? void 0 : context.trigger) === "blur") return;
        setTInputValue(val, {
          trigger: context.trigger,
          e: context.e
        });
      },
      tagProps: props.tagProps,
      onClear: p.onInnerClear,
      onFocus: function onFocus(val, context) {
        var _props$onFocus;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, props.value, _objectSpread(_objectSpread({}, context), {}, {
          tagInputValue: val
        }));
      },
      onBlur: !props.panel ? props.onBlur : null
    }, props.tagInputProps), {}, {
      inputProps: _objectSpread(_objectSpread({}, props.inputProps), {}, {
        readonly: !props.allowInput || props.readonly,
        inputClass: classNames((_props$tagInputProps = props.tagInputProps) === null || _props$tagInputProps === void 0 ? void 0 : _props$tagInputProps.className, _defineProperty(_defineProperty({}, "".concat(classPrefix, "-input--focused"), p.popupVisible), "".concat(classPrefix, "-is-focused"), p.popupVisible))
      })
    }));
  };
  return {
    tags: tags,
    tPlaceholder: tPlaceholder,
    tagInputRef: tagInputRef,
    multipleInputValue: tInputValue,
    renderSelectMultiple: renderSelectMultiple
  };
}

export { useMultiple as default };
//# sourceMappingURL=useMultiple.js.map
