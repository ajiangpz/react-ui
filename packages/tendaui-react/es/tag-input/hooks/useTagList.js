import { _ as _extends } from '../../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import { _ as _toConsumableArray } from '../../_chunks/dep-CgyDw_YI.js';
import { _ as _slicedToArray } from '../../_chunks/dep-CzLhKWCf.js';
import React, { useState, Fragment } from 'react';
import { isFunction } from 'lodash-es';
import { Tag } from '../../tag/index.js';
import { u as useConfig } from '../../_chunks/dep-u1x3x6MJ.js';
import { u as useControlled } from '../../_chunks/dep-D2IWH4e_.js';
import '../../_chunks/dep-D-UKOauR.js';
import '../../tag/Tag.js';
import '../../_chunks/dep-DN7d1SzH.js';
import 'classnames';
import 'lucide-react';
import '../../_chunks/dep-CVFMdElW.js';
import '../../_chunks/dep-BIZNqCbw.js';
import '../../_chunks/dep-5jl2j2BI.js';
import '../../config-provider/ConfigContext.js';
import '../../_chunks/dep-BP0-apUT.js';
import 'hoist-non-react-statics';
import '../../tag/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTagList(props) {
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  var onRemove = props.onRemove,
    max = props.max,
    minCollapsedNum = props.minCollapsedNum,
    size = props.size,
    disabled = props.disabled,
    readonly = props.readonly,
    tagProps = props.tagProps,
    tag = props.tag,
    collapsedItems = props.collapsedItems,
    getDragProps = props.getDragProps;
  var _useControlled = useControlled(props, 'value', props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    tagValue = _useControlled2[0],
    setTagValue = _useControlled2[1];
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    oldInputValue = _useState2[0],
    setOldInputValue = _useState2[1];
  var _onClose = function onClose(p) {
    var arr = _toConsumableArray(tagValue);
    var _arr$splice = arr.splice(p.index, 1),
      _arr$splice2 = _slicedToArray(_arr$splice, 1),
      item = _arr$splice2[0];
    setTagValue(arr, _objectSpread(_objectSpread({
      trigger: 'tag-remove'
    }, p), {}, {
      item: item
    }));
    onRemove === null || onRemove === void 0 || onRemove(_objectSpread(_objectSpread({}, p), {}, {
      item: item,
      trigger: 'tag-remove',
      value: arr
    }));
  };
  var clearAll = function clearAll(context) {
    setTagValue([], {
      trigger: 'clear',
      e: context.e
    });
  };

  // 按下 Enter 键，新增标签
  var onInnerEnter = function onInnerEnter(value, context) {
    var _props$onEnter;
    var valueStr = value ? String(value).trim() : '';
    var newValue = tagValue;
    var isLimitExceeded = max && (tagValue === null || tagValue === void 0 ? void 0 : tagValue.length) >= max;
    if (valueStr && !isLimitExceeded) {
      newValue = tagValue instanceof Array ? tagValue.concat(String(valueStr)) : [valueStr];
      setTagValue(newValue, {
        trigger: 'enter',
        index: newValue.length - 1,
        item: valueStr,
        e: context.e
      });
    }
    props === null || props === void 0 || (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, _objectSpread(_objectSpread({}, context), {}, {
      inputValue: value
    }));
  };
  var onInputBackspaceKeyUp = function onInputBackspaceKeyUp(value) {
    if (!tagValue || !tagValue.length) return;
    setOldInputValue(value);
  };

  // 按下回退键，删除标签
  var onInputBackspaceKeyDown = function onInputBackspaceKeyDown(value, context) {
    var e = context.e;
    if (!tagValue || !tagValue.length || readonly) return;
    // 回车键删除，输入框值为空时，才允许 Backspace 删除标签
    if (!value && ['Backspace', 'NumpadDelete'].includes(e.key)) {
      var index = tagValue.length - 1;
      var item = tagValue[index];
      var trigger = 'backspace';
      var newValue = tagValue.slice(0, -1);
      setTagValue(newValue, {
        e: e,
        index: index,
        item: item,
        trigger: trigger
      });
      onRemove === null || onRemove === void 0 || onRemove({
        e: e,
        index: index,
        item: item,
        trigger: trigger,
        value: newValue
      });
    }
  };
  var renderLabel = function renderLabel(_ref) {
    var displayNode = _ref.displayNode,
      label = _ref.label;
    var newList = minCollapsedNum ? tagValue.slice(0, minCollapsedNum) : tagValue;
    var list = displayNode ? [/*#__PURE__*/React.createElement(Fragment, {
      key: "display-node"
    }, displayNode)] : newList === null || newList === void 0 ? void 0 : newList.map(function (item, index) {
      var tagContent = isFunction(tag) ? tag({
        value: item
      }) : tag;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        key: index,
        size: size,
        disabled: disabled,
        onClose: function onClose(context) {
          return _onClose({
            e: context.e,
            index: index
          });
        },
        closable: !readonly && !disabled
      }, getDragProps === null || getDragProps === void 0 ? void 0 : getDragProps(index, item), tagProps), tagContent !== null && tagContent !== void 0 ? tagContent : item);
    });
    if (label) {
      list === null || list === void 0 || list.unshift(/*#__PURE__*/React.createElement("div", {
        className: "".concat(prefix, "-tag-input__prefix"),
        key: "label"
      }, label));
    }
    // 超出省略
    if (newList.length !== tagValue.length) {
      var len = tagValue.length - newList.length;
      // 这里会从selectInput/SelectInput中传递options参数，用于自定义选中项呈现的内容和多选状态下设置折叠项内容
      var options = Array.isArray(props === null || props === void 0 ? void 0 : props.options) ? props.options : tagValue;
      var params = {
        value: tagValue,
        count: tagValue.length - minCollapsedNum,
        collapsedTags: tagValue.slice(minCollapsedNum, tagValue.length),
        collapsedSelectedItems: options.slice(minCollapsedNum, tagValue.length),
        onClose: _onClose
      };
      var more = isFunction(collapsedItems) ? collapsedItems(params) : collapsedItems;
      list.push(/*#__PURE__*/React.createElement(Fragment, {
        key: "more"
      }, more !== null && more !== void 0 ? more : /*#__PURE__*/React.createElement(Tag, _extends({
        size: size
      }, tagProps), "+", len)));
    }
    return list;
  };
  return {
    tagValue: tagValue,
    clearAll: clearAll,
    onClose: _onClose,
    onInnerEnter: onInnerEnter,
    onInputBackspaceKeyDown: onInputBackspaceKeyDown,
    onInputBackspaceKeyUp: onInputBackspaceKeyUp,
    renderLabel: renderLabel
  };
}

export { useTagList as default };
//# sourceMappingURL=useTagList.js.map
