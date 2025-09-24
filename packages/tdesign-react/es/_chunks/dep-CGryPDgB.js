import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { r as reactExports, R as React } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { get, isPlainObject, isEqual } from 'lodash-es';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { O as OptionGroup } from './dep-Bj9PpzCF.js';
import Option from '../Select/Option.js';
import { u as useConfig } from './dep-CaeblIEM.js';
import { u as useVirtualScroll } from './dep-Dz5FZMJg.js';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup(option) {
  return !!option && "group" in option && "children" in option;
}
function setValueToOptionFormOptionDom(dom, valueToOption, keys) {
  var _dom$props = dom.props,
    value = _dom$props.value,
    label = _dom$props.label,
    children = _dom$props.children;
  valueToOption[value] = _objectSpread$1(_objectSpread$1({}, dom.props), {}, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.value) || "value", value), (keys === null || keys === void 0 ? void 0 : keys.label) || "label", label || children || value));
}
var getValueToOption = function getValueToOption(children, options, keys) {
  var valueToOption = {};
  if (Array.isArray(options)) {
    options.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        (_option$children = option.children) === null || _option$children === void 0 || _option$children.forEach(function (child) {
          valueToOption[get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || "value")] = _objectSpread$1(_objectSpread$1({}, child), {}, {
            value: get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
            label: get(child, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
          });
        });
      } else {
        valueToOption[get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value")] = _objectSpread$1(_objectSpread$1({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || "label")
        });
      }
    });
    return valueToOption;
  }
  if (isPlainObject(children)) {
    if (children.type === Option) {
      setValueToOptionFormOptionDom(children, valueToOption, keys);
      return valueToOption;
    }
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.forEach(function (item) {
          setValueToOptionFormOptionDom(item, valueToOption, keys);
        });
        return valueToOption;
      }
    }
  }
  if (Array.isArray(children)) {
    var _handlerElement = function handlerElement(item) {
      if (item.type === Option) {
        setValueToOptionFormOptionDom(item, valueToOption, keys);
      }
      if (item.type === OptionGroup) {
        var _groupChildren = item.props.children;
        if (Array.isArray(_groupChildren)) {
          _groupChildren.forEach(function (groupItem) {
            setValueToOptionFormOptionDom(groupItem, valueToOption, keys);
          });
        }
      }
      if (Array.isArray(item)) {
        item.forEach(function (child) {
          _handlerElement(child);
        });
      }
    };
    children.forEach(function (item) {
      return _handlerElement(item);
    });
  }
  return valueToOption;
};
var getLabel = function getLabel(children, value, options, keys) {
  var selectedLabel = "";
  if (Array.isArray(options)) {
    options.some(function (option) {
      if ([get(value, (keys === null || keys === void 0 ? void 0 : keys.value) || "value"), value].includes(option.value)) {
        selectedLabel = option.label;
        return true;
      }
      return false;
    });
    return selectedLabel;
  }
  if (isPlainObject(children)) {
    selectedLabel = children.props.label;
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.some(function (item) {
          var selectedValue = isPlainObject(value) ? get(value, "value") : value;
          if (isPlainObject(item.props) && item.props.value === selectedValue) {
            selectedLabel = item.props.label || item.props.children;
            return true;
          }
          return false;
        });
      }
    }
  }
  if (Array.isArray(children)) {
    children.some(function (item) {
      if (item.type === OptionGroup) {
        var _groupChildren2 = item.props.children;
        if (Array.isArray(_groupChildren2)) {
          var isSelected = _groupChildren2.some(function (item2) {
            var selectedValue2 = isPlainObject(value) ? get(value, "value") : value;
            if (isPlainObject(item2.props) && item2.props.value === selectedValue2) {
              selectedLabel = item2.props.label || item2.props.children;
              return true;
            }
            return false;
          });
          return isSelected;
        }
      }
      var selectedValue = isPlainObject(value) ? get(value, "value") : value;
      if (isPlainObject(item.props) && item.props.value === selectedValue) {
        selectedLabel = item.props.label || item.props.children;
        return true;
      }
      return false;
    });
  }
  return selectedLabel;
};
var getMultipleTags = function getMultipleTags(values, keys) {
  var tags = values.map(function (item) {
    return {
      label: get(item, (keys === null || keys === void 0 ? void 0 : keys.label) || "label") || item.toString(),
      value: get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") || item
    };
  });
  return tags;
};
var getSelectValueArr = function getSelectValueArr(values, activeValue, selected, valueType, keys, objVal) {
  values = Array.isArray(values) ? values : [];
  if (Array.isArray(values)) {
    var currentValues = _toConsumableArray(values);
    var isValueObj = valueType === "object";
    if (selected) {
      currentValues = currentValues.filter(function (item) {
        if (isValueObj) {
          if (isPlainObject(activeValue)) {
            return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") !== get(activeValue, (keys === null || keys === void 0 ? void 0 : keys.value) || "value");
          }
          return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") !== activeValue;
        }
        return item !== activeValue;
      });
    } else {
      var item = isValueObj ? objVal : activeValue;
      currentValues.push(item);
    }
    return currentValues;
  }
};
var getSelectedOptions = function getSelectedOptions(value, multiple, valueType, keys, valueToOption, selectedValue) {
  var isObjectType = valueType === "object";
  var currentSelectedOptions = [];
  var currentOption;
  var allSelectedValue;
  var tmpPropOptions = Object.values(valueToOption);
  if (multiple) {
    var _tmpPropOptions$filte, _currentSelectedOptio, _currentSelectedOptio2;
    currentSelectedOptions = isObjectType ? value : tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte = tmpPropOptions.filter) === null || _tmpPropOptions$filte === void 0 ? void 0 : _tmpPropOptions$filte.call(tmpPropOptions, function (v) {
      var _value$includes;
      return (_value$includes = value.includes) === null || _value$includes === void 0 ? void 0 : _value$includes.call(value, v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"]);
    });
    allSelectedValue = isObjectType ? currentSelectedOptions : (_currentSelectedOptio = currentSelectedOptions) === null || _currentSelectedOptio === void 0 ? void 0 : _currentSelectedOptio.map(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
    });
    currentOption = isObjectType ? value.find(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    }) : (_currentSelectedOptio2 = currentSelectedOptions) === null || _currentSelectedOptio2 === void 0 ? void 0 : _currentSelectedOptio2.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    });
  } else {
    var _tmpPropOptions$filte2, _currentSelectedOptio3;
    currentSelectedOptions = isObjectType ? [value] : (tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte2 = tmpPropOptions.filter) === null || _tmpPropOptions$filte2 === void 0 ? void 0 : _tmpPropOptions$filte2.call(tmpPropOptions, function (v) {
      return value === v[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"];
    })) || [];
    allSelectedValue = currentSelectedOptions;
    currentOption = isObjectType ? value : (_currentSelectedOptio3 = currentSelectedOptions) === null || _currentSelectedOptio3 === void 0 ? void 0 : _currentSelectedOptio3.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || "value"] === selectedValue;
    });
  }
  return {
    currentSelectedOptions: currentSelectedOptions,
    currentOption: currentOption,
    allSelectedValue: allSelectedValue
  };
};

var usePanelVirtualScroll = function usePanelVirtualScroll(_ref) {
  var popupContentRef = _ref.popupContentRef,
    scroll = _ref.scroll,
    options = _ref.options,
    size = _ref.size;
  var scrollThreshold = (scroll === null || scroll === void 0 ? void 0 : scroll.threshold) || 100;
  var scrollType = scroll === null || scroll === void 0 ? void 0 : scroll.type;
  var isVirtual = reactExports.useMemo(function () {
    return scrollType === "virtual" && (options === null || options === void 0 ? void 0 : options.length) > scrollThreshold;
  }, [scrollType, scrollThreshold, options]);
  var scrollParams = reactExports.useMemo(function () {
    var heightMap = {
      small: 20,
      medium: 28,
      large: 36
    };
    var rowHeight = heightMap[size] || 28;
    return {
      type: "virtual",
      isFixedRowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.isFixedRowHeight) || false,
      rowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || rowHeight,
      bufferSize: (scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 20,
      threshold: scrollThreshold
    };
  }, [scroll, scrollThreshold, size]);
  var _useVirtualScroll = useVirtualScroll(popupContentRef, {
      data: options || [],
      scroll: scrollParams
    }),
    _useVirtualScroll$vis = _useVirtualScroll.visibleData,
    visibleData = _useVirtualScroll$vis === void 0 ? null : _useVirtualScroll$vis,
    _useVirtualScroll$han = _useVirtualScroll.handleScroll,
    handleVirtualScroll = _useVirtualScroll$han === void 0 ? null : _useVirtualScroll$han,
    _useVirtualScroll$scr = _useVirtualScroll.scrollHeight,
    scrollHeight = _useVirtualScroll$scr === void 0 ? null : _useVirtualScroll$scr,
    _useVirtualScroll$tra = _useVirtualScroll.translateY,
    translateY = _useVirtualScroll$tra === void 0 ? null : _useVirtualScroll$tra,
    _useVirtualScroll$han2 = _useVirtualScroll.handleRowMounted,
    handleRowMounted = _useVirtualScroll$han2 === void 0 ? null : _useVirtualScroll$han2;
  var lastScrollY = -1;
  var onInnerVirtualScroll = reactExports.useCallback(function (e) {
    if (!isVirtual) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  }, []);
  reactExports.useEffect(function () {
    var popupContentDom = popupContentRef === null || popupContentRef === void 0 ? void 0 : popupContentRef.current;
    if (isVirtual) {
      var _popupContentDom$addE;
      popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$addE = popupContentDom.addEventListener) === null || _popupContentDom$addE === void 0 || _popupContentDom$addE.call(popupContentDom, "scroll", onInnerVirtualScroll);
    }
    return function () {
      if (isVirtual) {
        var _popupContentDom$remo;
        popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$remo = popupContentDom.removeEventListener) === null || _popupContentDom$remo === void 0 || _popupContentDom$remo.call(popupContentDom, "scroll", onInnerVirtualScroll);
      }
    };
  }, [isVirtual, onInnerVirtualScroll, popupContentRef.current]);
  var cursorStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    transition: "transform 0.2s",
    transform: "translate(0, ".concat(scrollHeight, "px)"),
    MsTransform: "translate(0, ".concat(scrollHeight, "px)"),
    MozTransform: "translate(0, ".concat(scrollHeight, "px)"),
    WebkitTransform: "translate(0, ".concat(scrollHeight, "px)")
  };
  var panelStyle = {
    transform: "translate(0, ".concat(translateY, "px)"),
    MsTransform: "translate(0, ".concat(translateY, "px)"),
    MozTransform: "translate(0, ".concat(translateY, "px)"),
    WebkitTransform: "translate(0, ".concat(translateY, "px)")
  };
  return {
    scrollHeight: scrollHeight,
    translateY: translateY,
    visibleData: visibleData,
    handleRowMounted: handleRowMounted,
    isVirtual: isVirtual,
    cursorStyle: cursorStyle,
    panelStyle: panelStyle
  };
};

var _excluded = ["group", "divider"],
  _excluded2 = ["value", "label", "disabled", "content", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PopupContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    size = props.size,
    max = props.max,
    multiple = props.multiple,
    showPopup = props.showPopup,
    setShowPopup = props.setShowPopup,
    empty = props.empty,
    loadingText = props.loadingText,
    loading = props.loading,
    valueType = props.valueType,
    children = props.children,
    keys = props.keys,
    panelTopContent = props.panelTopContent,
    panelBottomContent = props.panelBottomContent,
    onChange = props.onChange,
    onCheckAllChange = props.onCheckAllChange,
    getPopupInstance = props.getPopupInstance,
    propsOptions = props.options,
    propsScroll = props.scroll;
  var popupContentRef = reactExports.useRef(null);
  popupContentRef.current = getPopupInstance();
  var _usePanelVirtualScrol = usePanelVirtualScroll({
      popupContentRef: popupContentRef,
      scroll: propsScroll,
      options: propsOptions,
      size: size
    }),
    visibleData = _usePanelVirtualScrol.visibleData,
    handleRowMounted = _usePanelVirtualScrol.handleRowMounted,
    isVirtual = _usePanelVirtualScrol.isVirtual,
    panelStyle = _usePanelVirtualScrol.panelStyle,
    cursorStyle = _usePanelVirtualScrol.cursorStyle;
  var selectableOptions = reactExports.useMemo(function () {
    var uniqueOptions = {};
    propsOptions === null || propsOptions === void 0 || propsOptions.forEach(function (option) {
      if (option.group) {
        option.children.forEach(function (item) {
          if (!item.disabled && !item.checkAll) {
            uniqueOptions[item.value] = item;
          }
        });
      } else if (!option.disabled && !option.checkAll) {
        uniqueOptions[option.value] = option;
      }
    });
    return Object.values(uniqueOptions);
  }, [propsOptions]);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  if (!children && !propsOptions) {
    return null;
  }
  var onSelect = function onSelect(selectedValue, _ref) {
    var label = _ref.label,
      selected = _ref.selected,
      event = _ref.event,
      restData = _ref.restData;
    var isValObj = valueType === "object";
    var objVal = {};
    if (isValObj) {
      objVal = _objectSpread({}, restData);
      if (!(keys !== null && keys !== void 0 && keys.label)) {
        Object.assign(objVal, {
          label: label
        });
      }
      if (!(keys !== null && keys !== void 0 && keys.value)) {
        Object.assign(objVal, {
          value: selectedValue
        });
      }
    }
    if (!Object.keys(objVal).length) {
      Object.assign(objVal, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.label) || "label", label), (keys === null || keys === void 0 ? void 0 : keys.value) || "value", selectedValue));
    }
    if (multiple) {
      var values = getSelectValueArr(value, selectedValue, selected, valueType, keys, objVal);
      onChange(values, {
        label: label,
        value: selectedValue,
        e: event,
        trigger: selected ? "uncheck" : "check"
      });
    } else {
      var selectVal = valueType === "object" ? objVal : selectedValue;
      if (!isEqual(value, selectVal)) {
        onChange(selectVal, {
          label: label,
          value: selectVal,
          e: event,
          trigger: "check"
        });
      }
      setShowPopup(!showPopup);
    }
  };
  var childrenWithProps = reactExports.Children.map(children, function (child) {
    if (/*#__PURE__*/reactExports.isValidElement(child)) {
      var addedProps = {
        size: size,
        max: max,
        multiple: multiple,
        selectedValue: value,
        onSelect: onSelect
      };
      return /*#__PURE__*/reactExports.cloneElement(child, _objectSpread({}, addedProps));
    }
    return child;
  });
  var _renderOptions = function renderOptions(options) {
    if (options) {
      return /* @__PURE__ */React.createElement("ul", {
        className: "".concat(classPrefix, "-select__list")
      }, options.map(function (item, index) {
        var group = item.group,
          divider = item.divider,
          rest = _objectWithoutProperties(item, _excluded);
        if (group) {
          return /* @__PURE__ */React.createElement(OptionGroup, {
            label: group,
            divider: divider,
            key: index
          }, _renderOptions(rest.children));
        }
        var optionValue = item.value,
          label = item.label,
          disabled = item.disabled,
          content = item.content,
          children2 = item.children,
          restData = _objectWithoutProperties(item, _excluded2);
        return /* @__PURE__ */React.createElement(Option, _objectSpread(_objectSpread({
          key: index,
          max: max,
          label: label,
          value: optionValue,
          onSelect: onSelect,
          selectedValue: value,
          optionLength: selectableOptions.length,
          multiple: multiple,
          size: size,
          disabled: disabled,
          restData: restData,
          keys: keys,
          content: content,
          onCheckAllChange: onCheckAllChange,
          onRowMounted: handleRowMounted
        }, isVirtual ? {
          isVirtual: isVirtual,
          bufferSize: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.bufferSize,
          scrollType: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.type
        } : {}), restData), children2);
      }));
    }
    return /* @__PURE__ */React.createElement("ul", {
      className: "".concat(classPrefix, "-select__list")
    }, childrenWithProps);
  };
  var isEmpty = Array.isArray(childrenWithProps) && !childrenWithProps.length || propsOptions && propsOptions.length === 0;
  var renderPanel = function renderPanel(renderedOptions, extraStyle) {
    return /* @__PURE__ */React.createElement("div", {
      ref: ref,
      className: classNames("".concat(classPrefix, "-select__dropdown-inner"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-select__dropdown-inner--size-s"), size === "small"), "".concat(classPrefix, "-select__dropdown-inner--size-l"), size === "large"), "".concat(classPrefix, "-select__dropdown-inner--size-m"), size === "medium")),
      style: extraStyle
    }, loading && /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-select__loading-tips")
    }, loadingText), !loading && isEmpty && /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-select__empty")
    }, empty), !loading && !isEmpty && _renderOptions(renderedOptions));
  };
  if (isVirtual) {
    return /* @__PURE__ */React.createElement(React.Fragment, null, panelTopContent, /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement("div", {
      style: cursorStyle
    }), renderPanel(visibleData, panelStyle)), panelBottomContent);
  }
  return /* @__PURE__ */React.createElement(React.Fragment, null, panelTopContent, renderPanel(propsOptions), panelBottomContent);
});

export { PopupContent as P, getSelectValueArr as a, getSelectedOptions as b, getValueToOption as g };
//# sourceMappingURL=dep-CGryPDgB.js.map
