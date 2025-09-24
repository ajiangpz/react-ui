import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { get, isFunction, debounce } from 'lodash-es';
import { g as getOffsetTopToContainer } from '../_chunks/dep-C4qiDhnV.js';
import { u as useControlled } from '../_chunks/dep-Dqh5DYAh.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { f as forwardRefWithStatics } from '../_chunks/dep-Bdljkd5o.js';
import { g as getValueToOption, a as getSelectValueArr, b as getSelectedOptions, P as PopupContent } from '../_chunks/dep-CGryPDgB.js';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import FakeArrow from '../common/FakeArrow.js';
import { Loading } from '../loading/index.js';
import { SelectInput } from '../select-input/index.js';
import Option from './Option.js';
import { O as OptionGroup, s as selectDefaultProps } from '../_chunks/dep-Bj9PpzCF.js';
import { Tag } from '../tag/index.js';
import _typeof from '@babel/runtime/helpers/typeof';
import { c as composeRefs } from '../_chunks/dep-C1XcmShP.js';
import { p as parseContentTNode } from '../_chunks/dep-B232LrJC.js';
import { u as useDefaultProps } from '../_chunks/dep-e4v9VeEm.js';
import '../config-provider/ConfigContext.js';
import 'hoist-non-react-statics';
import '@babel/runtime/helpers/toConsumableArray';
import '../_chunks/dep-Dz5FZMJg.js';
import '../loading/Loading.js';
import '../_chunks/dep-6TeJvJOF.js';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import '../loading/Gradient.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';
import './style/css.js';
import '../_chunks/dep-DJbNj1-A.js';
import '../select-input/hook/useSingle.js';
import '../_chunks/dep-CCk9KX71.js';
import 'lucide-react';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../select-input/hook/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/TagInput.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/Tag.js';
import 'tinycolor2';
import '../_chunks/dep-Dp0dxPtr.js';
import '../hooks/useDragSorter.js';
import '../_chunks/dep-CtWL9Bq2.js';
import '../_chunks/dep-BuRcs8ei.js';
import 'react-is';
import '@popperjs/core';
import 'react-fast-compare';
import '../portal/Portal.js';
import 'react-transition-group';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup(option) {
  return !!option && "group" in option && "children" in option;
}
function UseOptions(keys, options, children, valueType, value, reserveKeyword) {
  var _useState = reactExports.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    valueToOption = _useState2[0],
    setValueToOption = _useState2[1];
  var _useState3 = reactExports.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentOptions = _useState4[0],
    setCurrentOptions = _useState4[1];
  var _useState5 = reactExports.useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tmpPropOptions = _useState6[0],
    setTmpPropOptions = _useState6[1];
  var _useState7 = reactExports.useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOptions = _useState8[0],
    setSelectedOptions = _useState8[1];
  reactExports.useEffect(function () {
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
              children: (_v$props$children = v.props.children) === null || _v$props$children === void 0 ? void 0 : _v$props$children.map(function (v2) {
                return _handlerOptionElement(v2);
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
      transformedOptions = (_transformedOptions = transformedOptions) === null || _transformedOptions === void 0 ? void 0 : _transformedOptions.map(function (option) {
        return _objectSpread$1(_objectSpread$1({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
        });
      });
    }
    setCurrentOptions(transformedOptions);
    setTmpPropOptions(transformedOptions);
    setValueToOption(getValueToOption(children, options, keys) || {});
  }, [options, keys, children, reserveKeyword]);
  reactExports.useEffect(function () {
    var valueKey = (keys === null || keys === void 0 ? void 0 : keys.value) || "value";
    var labelKey = (keys === null || keys === void 0 ? void 0 : keys.label) || "label";
    setSelectedOptions(function (oldSelectedOptions) {
      var createOptionFromValue = function createOptionFromValue(item) {
        if (valueType === "value") {
          return valueToOption[item] || oldSelectedOptions.find(function (option) {
            return get(option, valueKey) === item;
          }) || _defineProperty(_defineProperty({}, valueKey, item), labelKey, item);
        }
        if (_typeof(item) === "object" && item !== null) {
          return item;
        }
        return [];
      };
      if (Array.isArray(value)) {
        return value.map(createOptionFromValue);
      }
      if (value !== void 0 && value !== null) {
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
    loadingText = _props$loadingText === void 0 ? "\u52A0\u8F7D\u4E2D..." : _props$loadingText,
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
  var _useControlled = useControlled(props, "value", props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var selectInputRef = reactExports.useRef(null);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _ref = popupProps || {},
    overlayClassName = _ref.overlayClassName,
    onScroll = _ref.onScroll,
    onScrollToBottom = _ref.onScrollToBottom,
    restPopupProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolling = _useState2[0],
    toggleIsScrolling = _useState2[1];
  var name = "".concat(classPrefix, "-select");
  var _useControlled3 = useControlled(props, "popupVisible", onPopupVisibleChange),
    _useControlled4 = _slicedToArray(_useControlled3, 2),
    showPopup = _useControlled4[0],
    setShowPopup = _useControlled4[1];
  var _useControlled5 = useControlled(props, "inputValue", props.onInputChange),
    _useControlled6 = _slicedToArray(_useControlled5, 2),
    inputValue = _useControlled6[0],
    onInputChange = _useControlled6[1];
  var _useOptions = UseOptions(keys, options, children, valueType, value, reserveKeyword),
    currentOptions = _useOptions.currentOptions,
    setCurrentOptions = _useOptions.setCurrentOptions,
    tmpPropOptions = _useOptions.tmpPropOptions,
    valueToOption = _useOptions.valueToOption,
    selectedOptions = _useOptions.selectedOptions;
  var selectedLabel = reactExports.useMemo(function () {
    if (multiple) {
      return selectedOptions.map(function (selectedOption) {
        return get(selectedOption || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || "";
      });
    }
    return get(selectedOptions[0] || {}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || void 0;
  }, [selectedOptions, keys, multiple]);
  var handleShowPopup = function handleShowPopup(visible, ctx) {
    if (disabled) return;
    visible && toggleIsScrolling(false);
    !visible && onInputChange("", {
      trigger: "blur"
    });
    setShowPopup(visible, ctx);
  };
  var onTagChange = function onTagChange(_currentTags, context) {
    var trigger = context.trigger,
      index = context.index,
      item = context.item,
      e = context.e;
    if (trigger === "backspace") {
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
      var _getSelectedOptions = getSelectedOptions(values, multiple, valueType, keys, valueToOption),
        currentSelectedOptions = _getSelectedOptions.currentSelectedOptions;
      onChange(values, {
        e: e,
        trigger: trigger,
        selectedOptions: currentSelectedOptions
      });
      return;
    }
    if (trigger === "tag-remove") {
      var _e$stopPropagation;
      e === null || e === void 0 || (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
      var _values = getSelectValueArr(value, value[index], true, valueType, keys);
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
      return valueType === "object" ? option : option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
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
      trigger: !checkAll ? "check" : "uncheck",
      selectedOptions: currentSelectedOptions
    });
  };
  var handleChange = function handleChange(value2, context) {
    var selectedValue = multiple ? context.value : value2;
    if (multiple) {
      !reserveKeyword && inputValue && onInputChange("", {
        e: context.e,
        trigger: "change"
      });
    }
    if (creatable && isFunction(onCreate)) {
      if (options.filter(function (option) {
        return option.value === selectedValue;
      }).length === 0) {
        onCreate(selectedValue);
      }
    }
    var _getSelectedOptions4 = getSelectedOptions(value2, multiple, valueType, keys, valueToOption, selectedValue),
      currentSelectedOptions = _getSelectedOptions4.currentSelectedOptions,
      currentOption = _getSelectedOptions4.currentOption;
    onChange === null || onChange === void 0 || onChange(value2, {
      e: context.e,
      trigger: context.trigger,
      selectedOptions: currentSelectedOptions,
      option: currentOption
    });
    if (multiple && (context === null || context === void 0 ? void 0 : context.trigger) === "uncheck" && isFunction(onRemove)) {
      var value3 = context === null || context === void 0 ? void 0 : context.value;
      var option = options.find(function (option2) {
        return option2.value === value3;
      });
      onRemove({
        value: value3,
        data: option,
        e: context.e
      });
    }
  };
  var handleFilter = function handleFilter(value2) {
    var filteredOptions = [];
    if (filterable && isFunction(onSearch)) {
      return;
    }
    if (!value2) {
      setCurrentOptions(tmpPropOptions);
      return;
    }
    var filterLabels = [];
    var filterMethods = function filterMethods(option) {
      if (filter && isFunction(filter)) {
        return filter(value2, option);
      }
      var upperValue = value2.toUpperCase();
      return ((option === null || option === void 0 ? void 0 : option.label) || "").toUpperCase().includes(upperValue);
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
    var isSameLabelOptionExist = filterLabels.includes(value2);
    if (creatable && !isSameLabelOptionExist) {
      filteredOptions = filteredOptions.concat([{
        label: value2,
        value: value2
      }]);
    }
    setCurrentOptions(filteredOptions);
  };
  var handleInputChange = function handleInputChange(value2, context) {
    if (context.trigger !== "clear") {
      onInputChange(value2, {
        e: context.e,
        trigger: "input"
      });
    }
    if (value2 === void 0) {
      return;
    }
    if (isFunction(onSearch)) {
      onSearch(value2, {
        e: context.e
      });
      return;
    }
  };
  var handleClear = function handleClear(context) {
    context.e.stopPropagation();
    if (Array.isArray(value)) {
      onChange([], _objectSpread(_objectSpread({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    } else {
      onChange(null, _objectSpread(_objectSpread({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    }
    onClear(context);
  };
  reactExports.useEffect(function () {
    if (typeof inputValue !== "undefined") {
      handleFilter(String(inputValue));
    }
  }, [inputValue, tmpPropOptions]);
  var renderSuffixIcon = function renderSuffixIcon() {
    if (suffixIcon) {
      return suffixIcon;
    }
    if (loading) {
      return /* @__PURE__ */React.createElement(Loading, {
        className: classNames("".concat(name, "__right-icon"), "".concat(name, "__active-icon")),
        loading: true,
        size: "small"
      });
    }
    return showArrow && /* @__PURE__ */React.createElement(FakeArrow, {
      className: "".concat(name, "__right-icon"),
      isActive: showPopup,
      disabled: disabled
    });
  };
  var getPopupInstance = reactExports.useCallback(function () {
    var _selectInputRef$curre;
    return (_selectInputRef$curre = selectInputRef.current) === null || _selectInputRef$curre === void 0 ? void 0 : _selectInputRef$curre.getPopupContentElement();
  }, []);
  var childrenWithProps = reactExports.Children.map(children, function (child) {
    if (/*#__PURE__*/reactExports.isValidElement(child)) {
      var addedProps = {
        multiple: multiple
      };
      return /*#__PURE__*/reactExports.cloneElement(child, _objectSpread({}, addedProps));
    }
    return child;
  });
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
    return /* @__PURE__ */React.createElement(PopupContent, _objectSpread({}, popupContentProps), childrenWithProps);
  };
  var renderValueDisplay = function renderValueDisplay() {
    if (!valueDisplay) {
      if (!multiple) {
        if (typeof selectedLabel !== "string") {
          return selectedLabel;
        }
        return "";
      }
      return function (_ref2) {
        var val = _ref2.value;
        return val.slice(0, minCollapsedNum ? minCollapsedNum : val.length).map(function (v, key) {
          var filterOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
            return option.label === v;
          });
          return /* @__PURE__ */React.createElement(Tag, _objectSpread(_objectSpread({
            key: key,
            closable: !(filterOption !== null && filterOption !== void 0 && filterOption.disabled) && !disabled && !readonly,
            size: size
          }, tagProps), {}, {
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
                trigger: "tag-remove"
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
    if (typeof valueDisplay === "string") {
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
      var updateValue = getOffsetTopToContainer(firstSelectedNode, content) - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;
      setTimeout(function () {
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
      var debounceOnScrollBottom = debounce(function (e2) {
        return onScrollToBottom({
          e: e2
        });
      }, 100);
      var _e$target = e.target,
        scrollTop = _e$target.scrollTop,
        clientHeight = _e$target.clientHeight,
        scrollHeight = _e$target.scrollHeight;
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e);
      }
    }
  };
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(name, "__wrap"), className),
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /* @__PURE__ */React.createElement(SelectInput, _objectSpread({
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
    placeholder: !multiple && showPopup && selectedLabel ? selectedLabel : placeholder || "\u8BF7\u9009\u62E9",
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
Select.displayName = "Select";

export { Select as default };
//# sourceMappingURL=Select.js.map
