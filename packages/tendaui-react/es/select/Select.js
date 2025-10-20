import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useEffect, useRef, useMemo, useCallback, Children, isValidElement, cloneElement } from 'react';
import classNames from 'classnames';
import { get, isFunction, debounce } from 'lodash-es';
import { a as getOffsetTopToContainer } from '../_chunks/dep-DiKH-oTP.js';
import { u as useControlled } from '../_chunks/dep-D2IWH4e_.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { f as forwardRefWithStatics } from '../_chunks/dep-BP0-apUT.js';
import { g as getValueToOption, a as getSelectValueArr, b as getSelectedOptions, P as PopupContent } from '../_chunks/dep-Cpxla0Xq.js';
import { n as noop } from '../_chunks/dep-CVFMdElW.js';
import FakeArrow from '../common/FakeArrow.js';
import { Loading } from '../loading/index.js';
import { SelectInput } from '../select-input/index.js';
import Option from './Option.js';
import { O as OptionGroup, s as selectDefaultProps } from '../_chunks/dep-CaIqSFC_.js';
import { Tag } from '../tag/index.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { c as composeRefs } from '../_chunks/dep-BggCUGKG.js';
import { p as parseContentTNode } from '../_chunks/dep-CumfPFh_.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import '../config-provider/ConfigContext.js';
import 'hoist-non-react-statics';
import '../_chunks/dep-CgyDw_YI.js';
import '../loading/Loading.js';
import '../_chunks/dep-CKiAytca.js';
import '../common/Portal.js';
import 'react-dom';
import '../loading/Gradient.js';
import '../_chunks/dep-BlRTpQ02.js';
import '../_chunks/dep-BrowiCr7.js';
import '../loading/style/css.js';
import '../select-input/SelectInput.js';
import '../select-input/hook/useSingle.js';
import '../input/index.js';
import '../input/Input.js';
import 'tendaui-react-icons';
import '../_chunks/dep-_E1HIQZ7.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../select-input/hook/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/TagInput.js';
import '../tag-input/hooks/useTagList.js';
import '../_chunks/dep-BIZNqCbw.js';
import '../hooks/useDragSorter.js';
import '../tag/Tag.js';
import '../tag/style/css.js';
import '../tag-input/style/css.js';
import '../popup/index.js';
import '../popup/Popup.js';
import '../portal/Portal.js';
import 'react-is';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../popup/style/css.js';
import '../select-input/style/css.js';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup(option) {
  return !!option && 'group' in option && 'children' in option;
}
// 处理 options 的逻辑
function UseOptions(keys, options, children, valueType, value, reserveKeyword) {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    valueToOption = _useState2[0],
    setValueToOption = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentOptions = _useState4[0],
    setCurrentOptions = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tmpPropOptions = _useState6[0],
    setTmpPropOptions = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOptions = _useState8[0],
    setSelectedOptions = _useState8[1];

  // 处理设置 option 的逻辑
  useEffect(function () {
    var transformedOptions = options;
    var arrayChildren = React.Children.toArray(children);
    var optionChildren = arrayChildren.filter(function (v) {
      return v.type === Option || v.type === OptionGroup;
    });
    var isChildrenFilterable = arrayChildren.length > 0 && optionChildren.length === arrayChildren.length;
    if (reserveKeyword && currentOptions.length && isChildrenFilterable) return;
    if (isChildrenFilterable) {
      var _handlerOptionElement = function handlerOptionElement(v) {
        if (/*#__PURE__*/React.isValidElement(v)) {
          if (v.type === OptionGroup) {
            var _v$props$children;
            return _objectSpread$1(_objectSpread$1({}, v.props), {}, {
              group: v.props.label,
              children: (_v$props$children = v.props.children) === null || _v$props$children === void 0 ? void 0 : _v$props$children.map(function (v) {
                return _handlerOptionElement(v);
              })
            });
          }
          return _objectSpread$1(_objectSpread$1({}, v.props), {}, {
            label: v.props.label || v.props.children
          });
        }
        return {
          label: v
        };
      };
      transformedOptions = arrayChildren === null || arrayChildren === void 0 ? void 0 : arrayChildren.map(function (v) {
        return _handlerOptionElement(v);
      });
    }
    if (keys) {
      var _transformedOptions;
      // 如果有定制 keys 先做转换
      transformedOptions = (_transformedOptions = transformedOptions) === null || _transformedOptions === void 0 ? void 0 : _transformedOptions.map(function (option) {
        return _objectSpread$1(_objectSpread$1({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value'),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label')
        });
      });
    }
    setCurrentOptions(transformedOptions);
    setTmpPropOptions(transformedOptions);
    setValueToOption(getValueToOption(children, options, keys) || {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, keys, children, reserveKeyword]);

  // 同步 value 对应的 options
  useEffect(function () {
    var valueKey = (keys === null || keys === void 0 ? void 0 : keys.value) || 'value';
    var labelKey = (keys === null || keys === void 0 ? void 0 : keys.label) || 'label';
    setSelectedOptions(function (oldSelectedOptions) {
      var createOptionFromValue = function createOptionFromValue(item) {
        if (valueType === 'value') {
          return valueToOption[item] || oldSelectedOptions.find(function (option) {
            return get(option, valueKey) === item;
          }) || _defineProperty(_defineProperty({}, valueKey, item), labelKey, item);
        }
        if (_typeof(item) === 'object' && item !== null) {
          return item;
        }
        return [];
      };

      // 多选
      if (Array.isArray(value)) {
        return value.map(createOptionFromValue);
      }

      // 单选
      if (value !== undefined && value !== null) {
        var option = createOptionFromValue(value);
        return option ? [option] : [];
      }
      return [];
    });
  }, [value, keys, valueType, valueToOption, setSelectedOptions]);
  return {
    currentOptions: currentOptions,
    setCurrentOptions: setCurrentOptions,
    tmpPropOptions: tmpPropOptions,
    setTmpPropOptions: setTmpPropOptions,
    valueToOption: valueToOption,
    setValueToOption: setValueToOption,
    selectedOptions: selectedOptions,
    setSelectedOptions: setSelectedOptions
  };
}

var _excluded = ["overlayClassName", "onScroll", "onScrollToBottom"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Select = forwardRefWithStatics(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, selectDefaultProps);
  var readonly = props.readonly,
    borderless = props.borderless,
    autoWidth = props.autoWidth,
    creatable = props.creatable,
    _props$loadingText = props.loadingText,
    loadingText = _props$loadingText === void 0 ? '加载中...' : _props$loadingText,
    max = props.max,
    popupProps = props.popupProps,
    reserveKeyword = props.reserveKeyword,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    size = props.size,
    multiple = props.multiple,
    placeholder = props.placeholder,
    clearable = props.clearable,
    prefixIcon = props.prefixIcon,
    options = props.options,
    filterable = props.filterable,
    loading = props.loading,
    empty = props.empty,
    valueType = props.valueType,
    keys = props.keys,
    children = props.children,
    collapsedItems = props.collapsedItems,
    minCollapsedNum = props.minCollapsedNum,
    valueDisplay = props.valueDisplay,
    showArrow = props.showArrow,
    inputProps = props.inputProps,
    panelBottomContent = props.panelBottomContent,
    panelTopContent = props.panelTopContent,
    selectInputProps = props.selectInputProps,
    tagInputProps = props.tagInputProps,
    tagProps = props.tagProps,
    scroll = props.scroll,
    suffixIcon = props.suffixIcon,
    label = props.label,
    filter = props.filter,
    onFocus = props.onFocus,
    _onBlur = props.onBlur,
    _props$onClear = props.onClear,
    onClear = _props$onClear === void 0 ? noop : _props$onClear,
    onCreate = props.onCreate,
    onRemove = props.onRemove,
    onSearch = props.onSearch,
    onEnter = props.onEnter,
    onPopupVisibleChange = props.onPopupVisibleChange;
  var _useControlled = useControlled(props, 'value', props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var selectInputRef = useRef(null);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _ref = popupProps || {},
    overlayClassName = _ref.overlayClassName,
    onScroll = _ref.onScroll,
    onScrollToBottom = _ref.onScrollToBottom,
    restPopupProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolling = _useState2[0],
    toggleIsScrolling = _useState2[1];
  var name = "".concat(classPrefix, "-select"); // t-select

  var _useControlled3 = useControlled(props, 'popupVisible', onPopupVisibleChange),
    _useControlled4 = _slicedToArray(_useControlled3, 2),
    showPopup = _useControlled4[0],
    setShowPopup = _useControlled4[1];
  var _useControlled5 = useControlled(props, 'inputValue', props.onInputChange),
    _useControlled6 = _slicedToArray(_useControlled5, 2),
    inputValue = _useControlled6[0],
    onInputChange = _useControlled6[1];
  var _useOptions = UseOptions(keys, options, children, valueType, value, reserveKeyword),
    currentOptions = _useOptions.currentOptions,
    setCurrentOptions = _useOptions.setCurrentOptions,
    tmpPropOptions = _useOptions.tmpPropOptions,
    valueToOption = _useOptions.valueToOption,
    selectedOptions = _useOptions.selectedOptions;
  var selectedLabel = useMemo(function () {
    if (multiple) {
      return selectedOptions.map(function (selectedOption) {
        return get(selectedOption || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label') || '';
      });
    }
    return get(selectedOptions[0] || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label') || undefined;
  }, [selectedOptions, keys, multiple]);
  var handleShowPopup = function handleShowPopup(visible, ctx) {
    if (disabled) return;
    visible && toggleIsScrolling(false);
    !visible && onInputChange('', {
      trigger: 'blur'
    });
    setShowPopup(visible, ctx);
  };

  // 可以根据触发来源，自由定制标签变化时的筛选器行为
  var onTagChange = function onTagChange(_currentTags, context) {
    var trigger = context.trigger,
      index = context.index,
      item = context.item,
      e = context.e;
    // backspace
    if (trigger === 'backspace') {
      e.stopPropagation();
      var closest = -1;
      var len = index;
      while (len >= 0) {
        var option = selectedOptions[len];
        if (!isSelectOptionGroup(option) && !option.disabled) {
          closest = len;
          break;
        }
        len -= 1;
      }
      if (closest < 0) {
        return;
      }
      var values = getSelectValueArr(value, value[closest], true, valueType, keys);

      // 处理onChange回调中的selectedOptions参数
      var _getSelectedOptions = getSelectedOptions(values, multiple, valueType, keys, valueToOption),
        currentSelectedOptions = _getSelectedOptions.currentSelectedOptions;
      onChange(values, {
        e: e,
        trigger: trigger,
        selectedOptions: currentSelectedOptions
      });
      return;
    }
    if (trigger === 'tag-remove') {
      var _e$stopPropagation;
      e === null || e === void 0 || (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
      var _values = getSelectValueArr(value, value[index], true, valueType, keys);
      // 处理onChange回调中的selectedOptions参数
      var _getSelectedOptions2 = getSelectedOptions(_values, multiple, valueType, keys, valueToOption),
        _currentSelectedOptions = _getSelectedOptions2.currentSelectedOptions;
      onChange(_values, {
        e: e,
        trigger: trigger,
        selectedOptions: _currentSelectedOptions
      });
      if (isFunction(onRemove)) {
        onRemove({
          value: value[index],
          data: {
            label: item,
            value: value[index]
          },
          e: e
        });
      }
    }
  };
  var onCheckAllChange = function onCheckAllChange(checkAll, e) {
    var _props$value;
    var isDisabledCheckAll = function isDisabledCheckAll(opt) {
      return opt.checkAll && opt.disabled;
    };
    if (!multiple || currentOptions.some(function (opt) {
      return !isSelectOptionGroup(opt) && isDisabledCheckAll(opt);
    })) {
      return;
    }
    var isSelectableOption = function isSelectableOption(opt) {
      return !opt.checkAll && !opt.disabled;
    };
    var getOptionValue = function getOptionValue(option) {
      return valueType === 'object' ? option : option[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'];
    };
    var values = [];
    currentOptions.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        option.children.forEach(function (item) {
          if (isSelectableOption(item)) {
            values.push(getOptionValue(item));
          }
        });
      } else if (isSelectableOption(option)) {
        values.push(getOptionValue(option));
      }
    });
    var _getSelectedOptions3 = getSelectedOptions(values, multiple, valueType, keys, valueToOption),
      currentSelectedOptions = _getSelectedOptions3.currentSelectedOptions,
      allSelectedValue = _getSelectedOptions3.allSelectedValue;
    var checkAllValue = !checkAll && allSelectedValue.length !== ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) ? allSelectedValue : [];
    onChange === null || onChange === void 0 || onChange(checkAllValue, {
      e: e,
      trigger: !checkAll ? 'check' : 'uncheck',
      selectedOptions: currentSelectedOptions
    });
  };

  // 选中 Popup 某项
  var handleChange = function handleChange(value, context) {
    var selectedValue = multiple ? context.value : value;
    if (multiple) {
      !reserveKeyword && inputValue && onInputChange('', {
        e: context.e,
        trigger: 'change'
      });
    }
    if (creatable && isFunction(onCreate)) {
      if (options.filter(function (option) {
        return option.value === selectedValue;
      }).length === 0) {
        onCreate(selectedValue); // 手动输入 此时为string
      }
    }
    // 处理onChange回调中的selectedOptions参数
    var _getSelectedOptions4 = getSelectedOptions(value, multiple, valueType, keys, valueToOption, selectedValue),
      currentSelectedOptions = _getSelectedOptions4.currentSelectedOptions,
      currentOption = _getSelectedOptions4.currentOption;
    onChange === null || onChange === void 0 || onChange(value, {
      e: context.e,
      trigger: context.trigger,
      selectedOptions: currentSelectedOptions,
      option: currentOption
    });
    if (multiple && (context === null || context === void 0 ? void 0 : context.trigger) === 'uncheck' && isFunction(onRemove)) {
      var _value = context === null || context === void 0 ? void 0 : context.value;
      var option = options.find(function (option) {
        return option.value === _value;
      });
      onRemove({
        value: _value,
        data: option,
        e: context.e
      });
    }
  };

  // 处理filter逻辑
  var handleFilter = function handleFilter(value) {
    var filteredOptions = [];
    if (filterable && isFunction(onSearch)) {
      return;
    }
    if (!value) {
      setCurrentOptions(tmpPropOptions);
      return;
    }
    var filterLabels = [];
    var filterMethods = function filterMethods(option) {
      if (filter && isFunction(filter)) {
        return filter(value, option);
      }
      var upperValue = value.toUpperCase();
      return ((option === null || option === void 0 ? void 0 : option.label) || '').toUpperCase().includes(upperValue);
    };
    tmpPropOptions === null || tmpPropOptions === void 0 || tmpPropOptions.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        filteredOptions.push(_objectSpread(_objectSpread({}, option), {}, {
          children: (_option$children = option.children) === null || _option$children === void 0 ? void 0 : _option$children.filter(function (child) {
            if (filterMethods(child)) {
              filterLabels.push(child.label);
              return true;
            }
            return false;
          })
        }));
      } else if (filterMethods(option)) {
        filterLabels.push(option.label);
        filteredOptions.push(option);
      }
    });
    var isSameLabelOptionExist = filterLabels.includes(value);
    if (creatable && !isSameLabelOptionExist) {
      filteredOptions = filteredOptions.concat([{
        label: value,
        value: value
      }]);
    }
    setCurrentOptions(filteredOptions);
  };

  // 处理输入框逻辑
  var handleInputChange = function handleInputChange(value, context) {
    if (context.trigger !== 'clear') {
      onInputChange(value, {
        e: context.e,
        trigger: 'input'
      });
    }
    if (value === undefined) {
      return;
    }
    if (isFunction(onSearch)) {
      onSearch(value, {
        e: context.e
      });
      return;
    }
  };
  var handleClear = function handleClear(context) {
    context.e.stopPropagation();
    if (Array.isArray(value)) {
      onChange([], _objectSpread(_objectSpread({}, context), {}, {
        trigger: 'clear',
        selectedOptions: []
      }));
    } else {
      onChange(null, _objectSpread(_objectSpread({}, context), {}, {
        trigger: 'clear',
        selectedOptions: []
      }));
    }
    onClear(context);
  };
  useEffect(function () {
    if (typeof inputValue !== 'undefined') {
      handleFilter(String(inputValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, tmpPropOptions]);

  // 渲染后置图标
  var renderSuffixIcon = function renderSuffixIcon() {
    if (suffixIcon) {
      return suffixIcon;
    }
    if (loading) {
      return /*#__PURE__*/React.createElement(Loading, {
        className: classNames("".concat(name, "__right-icon"), "".concat(name, "__active-icon")),
        loading: true,
        size: "small"
      });
    }
    return showArrow && /*#__PURE__*/React.createElement(FakeArrow, {
      className: "".concat(name, "__right-icon"),
      isActive: showPopup,
      disabled: disabled
    });
  };
  var getPopupInstance = useCallback(function () {
    var _current;
    return (_current = selectInputRef.current) === null || _current === void 0 ? void 0 : _current.getPopupContentElement();
  }, []);
  var childrenWithProps = Children.map(children, function (child) {
    if (/*#__PURE__*/isValidElement(child)) {
      var addedProps = {
        multiple: multiple
      };
      return /*#__PURE__*/cloneElement(child, _objectSpread({}, addedProps));
    }
    return child;
  });

  // 渲染主体内容
  var renderContent = function renderContent() {
    var popupContentProps = {
      onChange: handleChange,
      value: value,
      className: className,
      size: size,
      multiple: multiple,
      showPopup: showPopup,
      // popup弹出层内容只会在点击事件之后触发 并且无任何透传参数
      setShowPopup: function setShowPopup(show) {
        return handleShowPopup(show, {});
      },
      options: currentOptions,
      empty: empty,
      max: max,
      loadingText: loadingText,
      loading: loading,
      valueType: valueType,
      keys: keys,
      panelBottomContent: panelBottomContent,
      panelTopContent: panelTopContent,
      onCheckAllChange: onCheckAllChange,
      getPopupInstance: getPopupInstance,
      scroll: scroll
    };
    return /*#__PURE__*/React.createElement(PopupContent, popupContentProps, childrenWithProps);
  };
  var renderValueDisplay = function renderValueDisplay() {
    if (!valueDisplay) {
      if (!multiple) {
        if (typeof selectedLabel !== 'string') {
          return selectedLabel;
        }
        return '';
      }
      return function (_ref2) {
        var val = _ref2.value;
        return val.slice(0, minCollapsedNum ? minCollapsedNum : val.length).map(function (v, key) {
          var filterOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
            return option.label === v;
          });
          return /*#__PURE__*/React.createElement(Tag, _extends({
            key: key,
            closable: !(filterOption !== null && filterOption !== void 0 && filterOption.disabled) && !disabled && !readonly,
            size: size
          }, tagProps, {
            onClose: function onClose(_ref3) {
              var _e$nativeEvent, _e$nativeEvent$stopIm, _tagProps$onClose;
              var e = _ref3.e;
              e.stopPropagation();
              e === null || e === void 0 || (_e$nativeEvent = e.nativeEvent) === null || _e$nativeEvent === void 0 || (_e$nativeEvent$stopIm = _e$nativeEvent.stopImmediatePropagation) === null || _e$nativeEvent$stopIm === void 0 || _e$nativeEvent$stopIm.call(_e$nativeEvent);
              var values = getSelectValueArr(value, value[key], true, valueType, keys);
              var _getSelectedOptions5 = getSelectedOptions(values, multiple, valueType, keys, valueToOption, value),
                currentSelectedOptions = _getSelectedOptions5.currentSelectedOptions;
              onChange(values, {
                e: e,
                selectedOptions: currentSelectedOptions,
                trigger: 'tag-remove'
              });
              tagProps === null || tagProps === void 0 || (_tagProps$onClose = tagProps.onClose) === null || _tagProps$onClose === void 0 || _tagProps$onClose.call(tagProps, {
                e: e
              });
              onRemove === null || onRemove === void 0 || onRemove({
                value: value[key],
                data: {
                  label: v,
                  value: value[key]
                },
                e: e
              });
            }
          }), v);
        });
      };
    }
    if (typeof valueDisplay === 'string') {
      return valueDisplay;
    }
    if (multiple) {
      return function (_ref4) {
        var onClose = _ref4.onClose;
        return parseContentTNode(valueDisplay, {
          value: selectedOptions,
          onClose: onClose
        });
      };
    }
    return parseContentTNode(valueDisplay, {
      value: selectedLabel,
      onClose: noop
    });
  };

  // 将第一个选中的 option 置于列表可见范围的最后一位
  var updateScrollTop = function updateScrollTop(content) {
    if (!content || isScrolling) {
      return;
    }
    var firstSelectedNode = content.querySelector(".".concat(classPrefix, "-is-selected"));
    if (!multiple && firstSelectedNode) {
      var _getComputedStyle = getComputedStyle(firstSelectedNode),
        paddingBottom = _getComputedStyle.paddingBottom;
      var _getComputedStyle2 = getComputedStyle(content),
        marginBottom = _getComputedStyle2.marginBottom;
      var elementBottomHeight = parseInt(paddingBottom, 10) + parseInt(marginBottom, 10);
      // 小于0时不需要特殊处理，会被设为0
      var updateValue = getOffsetTopToContainer(firstSelectedNode, content) - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;

      // 通过 setTimeout 确保组件渲染完成后再设置 scrollTop
      setTimeout(function () {
        // eslint-disable-next-line no-param-reassign
        content.scrollTop = updateValue;
      });
    }
  };
  var onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave;
  var handleEnter = function handleEnter(_, context) {
    onEnter === null || onEnter === void 0 || onEnter(_objectSpread(_objectSpread({}, context), {}, {
      value: value
    }));
  };
  var handleScroll = function handleScroll(_ref5) {
    var e = _ref5.e;
    toggleIsScrolling(true);
    onScroll === null || onScroll === void 0 || onScroll({
      e: e
    });
    if (onScrollToBottom) {
      var debounceOnScrollBottom = debounce(function (e) {
        return onScrollToBottom({
          e: e
        });
      }, 100);
      var _ref6 = e.target,
        scrollTop = _ref6.scrollTop,
        clientHeight = _ref6.clientHeight,
        scrollHeight = _ref6.scrollHeight;
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(name, "__wrap"), className),
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(SelectInput, _extends({
    autoWidth: !(style !== null && style !== void 0 && style.width) && autoWidth,
    ref: composeRefs(ref, selectInputRef),
    className: name,
    readonly: readonly,
    autofocus: props.autofocus,
    allowInput: filterable || isFunction(filter),
    multiple: multiple,
    value: selectedLabel,
    options: selectedOptions,
    valueDisplay: renderValueDisplay(),
    clearable: clearable,
    disabled: disabled,
    status: props.status,
    tips: props.tips,
    borderless: borderless,
    label: label,
    suffix: props.suffix,
    prefixIcon: prefixIcon,
    suffixIcon: renderSuffixIcon(),
    panel: renderContent(),
    placeholder: !multiple && showPopup && selectedLabel ? selectedLabel : placeholder || '请选择',
    inputValue: inputValue,
    tagInputProps: _objectSpread({
      size: size
    }, tagInputProps),
    tagProps: _objectSpread({
      size: size
    }, tagProps),
    inputProps: _objectSpread({
      size: size
    }, inputProps),
    minCollapsedNum: minCollapsedNum,
    collapsedItems: collapsedItems,
    updateScrollTop: updateScrollTop,
    popupProps: _objectSpread({
      overlayClassName: ["".concat(name, "__dropdown"), overlayClassName],
      onScroll: handleScroll
    }, restPopupProps),
    popupVisible: showPopup,
    onPopupVisibleChange: handleShowPopup,
    onTagChange: onTagChange,
    onInputChange: handleInputChange,
    onFocus: onFocus,
    onEnter: handleEnter,
    onBlur: function onBlur(_, context) {
      _onBlur === null || _onBlur === void 0 || _onBlur({
        value: value,
        e: context.e
      });
    },
    onClear: handleClear
  }, selectInputProps)));
}, {
  Option: Option,
  OptionGroup: OptionGroup
});
Select.displayName = 'Select';

export { Select as default };
//# sourceMappingURL=Select.js.map
