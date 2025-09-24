import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import classNames from 'classnames';
import { isNumber, isString, get } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useDomRefCallback } from '../_chunks/dep-py6q5XhT.js';
import '@babel/runtime/helpers/typeof';
import '../config-provider/ConfigContext.js';

var componentType = "select";
var Option = function Option(props) {
  var propDisabled = props.disabled,
    propLabel = props.label,
    propTitle = props.title,
    selectedValue = props.selectedValue,
    checkAll = props.checkAll,
    multiple = props.multiple,
    size = props.size,
    max = props.max,
    keys = props.keys,
    value = props.value,
    onSelect = props.onSelect,
    children = props.children,
    content = props.content,
    restData = props.restData,
    style = props.style,
    className = props.className,
    isVirtual = props.isVirtual;
  var selected;
  var indeterminate;
  var label = propLabel || value;
  var disabled = propDisabled || multiple && Array.isArray(selectedValue) && max && selectedValue.length >= max;
  var titleContent = reactExports.useMemo(function () {
    var controlledTitle = Reflect.has(props, "title");
    if (controlledTitle) return propTitle;
    if (typeof label === "string") return label;
    return null;
  }, [propTitle, label]);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(),
    _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2),
    optionRef = _useDomRefCallback2[0],
    setRefCurrent = _useDomRefCallback2[1];
  reactExports.useEffect(function () {
    if (isVirtual && optionRef) {
      var _props$onRowMounted;
      (_props$onRowMounted = props.onRowMounted) === null || _props$onRowMounted === void 0 || _props$onRowMounted.call(props, {
        ref: optionRef,
        data: props
      });
    }
  }, [isVirtual, optionRef]);
  if (!multiple) {
    selected = isNumber(selectedValue) || isString(selectedValue) ? value === selectedValue : value === get(selectedValue, (keys === null || keys === void 0 ? void 0 : keys.value) || "value");
  }
  if (multiple && Array.isArray(selectedValue)) {
    selected = selectedValue.some(function (item) {
      if (isNumber(item) || isString(item)) {
        return item === value;
      }
      return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || "value") === value;
    });
    if (props.checkAll) {
      selected = selectedValue.length === props.optionLength;
      indeterminate = selectedValue.length > 0 && !selected;
    }
  }
  var handleSelect = function handleSelect(event) {
    if (!disabled && !checkAll) {
      if (value) onSelect === null || onSelect === void 0 || onSelect(value, {
        label: String(label),
        selected: selected,
        event: event,
        restData: restData
      });
    }
    if (checkAll) {
      var _props$onCheckAllChan;
      (_props$onCheckAllChan = props.onCheckAllChange) === null || _props$onCheckAllChan === void 0 || _props$onCheckAllChan.call(props, selected, event);
    }
  };
  var renderItem = function renderItem(children2) {
    if (multiple) {
      return /* @__PURE__ */React.createElement("label", {
        className: classNames("".concat(classPrefix, "-checkbox"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-indeterminate"), indeterminate), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-checked"), selected)),
        title: titleContent
      }, /* @__PURE__ */React.createElement("input", {
        type: "checkbox",
        className: classNames("".concat(classPrefix, "-checkbox__former")),
        value: "",
        disabled: disabled && !selected,
        onClick: function onClick(e) {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }
      }), /* @__PURE__ */React.createElement("span", {
        className: classNames("".concat(classPrefix, "-checkbox__input"))
      }), /* @__PURE__ */React.createElement("span", {
        className: classNames("".concat(classPrefix, "-checkbox__label"))
      }, children2 || content || label));
    }
    return /* @__PURE__ */React.createElement("span", {
      title: titleContent
    }, children2 || content || label);
  };
  return /* @__PURE__ */React.createElement("li", {
    className: classNames(className, "".concat(classPrefix, "-").concat(componentType, "-option"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-selected"), selected), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large")),
    key: value,
    onClick: handleSelect,
    ref: setRefCurrent,
    style: style
  }, renderItem(children));
};

export { Option as default };
//# sourceMappingURL=Option.js.map
