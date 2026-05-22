import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import { CheckContext } from '../common/Check.js';
import { u as useCommonClassName } from '../_chunks/dep-C4qhHlmM.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { u as useMutationObservable } from '../_chunks/dep-B2D1svZy.js';
import { r as radioGroupDefaultProps, R as Radio } from '../_chunks/dep-C0K5Xywv.js';
import { o as on, a as off } from '../_chunks/dep-Ccktr_jk.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-DN7d1SzH.js';
import 'lodash-es';
import '../_chunks/dep-DHWwZ2Nj.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../_chunks/dep-Do9UdkhS.js';
import 'hoist-non-react-statics';
import '../_chunks/dep-DRwijJcv.js';

function observe(element, root, callback, marginBottom) {
  if (typeof window === "undefined") return null;
  if (!window || !window.IntersectionObserver) {
    callback();
    return null;
  }
  var io = null;
  try {
    io = new window.IntersectionObserver(function (entries) {
      var entry = entries[0];
      if (entry.isIntersecting) {
        callback();
        io.unobserve(element);
      }
    }, {
      rootMargin: "0px 0px ".concat(marginBottom, "px 0px"),
      root: root
    });
    io.observe(element);
  } catch (e) {
    console.error(e);
    callback();
  }
  return io;
}

var ARROW_DOWN_REG = /^ArrowDown$/i;
var ARROW_UP_REG = /^ArrowUp$/i;
var ARROW_LEFT_REG = /^ArrowLeft$/i;
var ARROW_RIGHT_REG = /^ArrowRight$/i;
var ESCAPE_REG = /^Escape$/i;
var SPACE_REG = /^Space$/i;
var ENTER_REG = /^Enter$/i;
var SHIFT_REG = /^(Shift|ShiftLeft|ShiftRight)$/i;
var CLEAR_REG = /^KeyC$/i;
var ALL_REG = /^(KeyA|KeyL)$/i;
var CHECKED_CODE_REG = /^(Enter|Space)$/i;
var THEME_MODE = "theme-mode";

function useKeyboard(radioGroupRef, setInnerValue) {
  var checkRadioInGroup = function checkRadioInGroup(e) {
    if (CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code)) {
      var inputNode = e.target.querySelector("input");
      if (!inputNode) return;
      var data = inputNode.dataset || {};
      if (inputNode.checked && data.allowUncheck) {
        setInnerValue(void 0, {
          e: e
        });
      } else {
        var value = !isNaN(Number(data.value)) ? Number(data.value) : data.value;
        value = typeof value === "string" && {
          "true": true,
          "false": false
        }[value] || value;
        value = typeof value === "string" && value[0] === "'" ? value.replace(/'/g, "") : value;
        setInnerValue(value, {
          e: e
        });
      }
    }
  };
  useEffect(function () {
    on(radioGroupRef.current, "keydown", checkRadioInGroup);
    return function () {
      off(radioGroupRef.current, "keydown", checkRadioInGroup);
    };
  }, []);
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RadioGroup = function RadioGroup(originalProps) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var props = useDefaultProps(originalProps, radioGroupDefaultProps);
  var disabled = props.disabled,
    readonly = props.readonly,
    children = props.children,
    onChange = props.onChange,
    size = props.size,
    variant = props.variant,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    className = props.className,
    style = props.style,
    theme = props.theme;
  var _useControlled = useControlled(props, "value", onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalValue = _useControlled2[0],
    setInternalValue = _useControlled2[1];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    barStyle = _useState2[0],
    setBarStyle = _useState2[1];
  var radioGroupRef = useRef(null);
  var observerRef = useRef(null);
  var handleKeyboardChange = function handleKeyboardChange(value, context2) {
    setInternalValue(value, {
      e: context2.e,
      name: props.name
    });
  };
  useKeyboard(radioGroupRef, handleKeyboardChange);
  var checkedRadioCls = ".".concat(classPrefix, "-radio-button.").concat(classPrefix, "-is-checked");
  var _useCommonClassName = useCommonClassName(),
    sizeMap = _useCommonClassName.SIZE;
  var context = {
    inject: function inject(checkProps) {
      if (typeof checkProps.checked !== "undefined") {
        return checkProps;
      }
      var checkValue = checkProps.value;
      return _objectSpread(_objectSpread({}, checkProps), {}, {
        name: props.name,
        // 有一个允许取消，就可以取消选中
        allowUncheck: checkProps.allowUncheck || props.allowUncheck,
        checked: internalValue === checkProps.value,
        disabled: checkProps.disabled || disabled,
        readonly: checkProps.readonly || readonly,
        onChange: function onChange(checked, _ref) {
          var e = _ref.e;
          if (typeof checkProps.onChange === "function") {
            checkProps.onChange(checked, {
              e: e
            });
          }
          setInternalValue(checked ? checkValue : void 0, {
            e: e,
            name: props.name
          });
        }
      });
    }
  };
  var calcBarStyle = function calcBarStyle() {
    var _radioGroupRef$curren, _radioGroupRef$curren2;
    if (!variant.includes("filled")) return;
    var checkedRadio = (_radioGroupRef$curren = (_radioGroupRef$curren2 = radioGroupRef.current).querySelector) === null || _radioGroupRef$curren === void 0 ? void 0 : _radioGroupRef$curren.call(_radioGroupRef$curren2, checkedRadioCls);
    if (!checkedRadio) {
      setBarStyle(null);
      return;
    }
    var offsetWidth = checkedRadio.offsetWidth,
      offsetHeight = checkedRadio.offsetHeight,
      offsetLeft = checkedRadio.offsetLeft,
      offsetTop = checkedRadio.offsetTop;
    setBarStyle({
      width: "".concat(offsetWidth, "px"),
      height: "".concat(offsetHeight, "px"),
      left: "".concat(offsetLeft, "px"),
      top: "".concat(offsetTop, "px")
    });
  };
  useMutationObservable(radioGroupRef.current, function (mutations) {
    var filteredMutations = mutations.filter(function (mutation) {
      var _target$classList;
      var target = mutation.target;
      return !((_target$classList = target.classList) !== null && _target$classList !== void 0 && _target$classList.contains("".concat(classPrefix, "-radio-group__bg-block")));
    });
    if (filteredMutations.length > 0) {
      calcBarStyle();
    }
  });
  useEffect(function () {
    calcBarStyle();
    if (!radioGroupRef.current) return;
    var observer = observe(radioGroupRef.current, null, calcBarStyle, 0);
    observerRef.current = observer;
    return function () {
      var _observerRef$current;
      (_observerRef$current = observerRef.current) === null || _observerRef$current === void 0 || _observerRef$current.disconnect();
      observerRef.current = null;
    };
  }, []);
  var renderBlock = function renderBlock() {
    if (!variant.includes("filled") || !barStyle) {
      return null;
    }
    return /* @__PURE__ */React.createElement("div", {
      style: barStyle,
      className: "".concat(classPrefix, "-radio-group__bg-block")
    });
  };
  var renderOptions = function renderOptions() {
    var Comp = theme === "button" ? Radio.Button : Radio;
    return options.map(function (item, index) {
      var label;
      var value;
      var disabled2;
      if (typeof item === "string" || typeof item === "number") {
        label = item;
        value = item;
      } else {
        label = item.label;
        value = item.value;
        disabled2 = item.disabled;
      }
      return /* @__PURE__ */React.createElement(Comp, {
        value: value,
        key: index,
        disabled: disabled2
      }, label);
    });
  };
  return /* @__PURE__ */React.createElement(CheckContext.Provider, {
    value: context
  }, /* @__PURE__ */React.createElement("div", {
    ref: radioGroupRef,
    style: style,
    className: classNames("".concat(classPrefix, "-radio-group"), sizeMap[size], className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-radio-group__outline"), variant === "outline"), "".concat(classPrefix, "-radio-group--filled"), variant.includes("filled")), "".concat(classPrefix, "-radio-group--primary-filled"), variant === "primary-filled"))
  }, children || renderOptions(), renderBlock()));
};
RadioGroup.displayName = "RadioGroup";

export { RadioGroup as default };
//# sourceMappingURL=RadioGroup.js.map
