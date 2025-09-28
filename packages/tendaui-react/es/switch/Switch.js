import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DcgYxvIK.js';
import React, { useMemo, useState, useEffect } from 'react';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import { Loading } from '../loading/index.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { a as parseTNode } from '../_chunks/dep-DlKLfU-G.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-0Agal8xo.js';
import '../loading/Loading.js';
import '../_chunks/dep-0EpSXuwN.js';
import '../_chunks/dep-uPo9oRq0.js';
import '../common/Portal.js';
import 'react-dom';
import '../loading/Gradient.js';
import '../_chunks/dep-CCwJVofP.js';
import '../_chunks/dep-BlRTpQ02.js';
import '../_chunks/dep-D9QqIBS0.js';
import '../config-provider/ConfigContext.js';
import '../loading/style/css.js';

function useCommonClassName() {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  return useMemo(function () {
    var names = {
      SIZE: {
        "default": '',
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
    return {
      SIZE: names.SIZE,
      STATUS: names.STATUS,
      sizeClassNames: names.SIZE,
      statusClassNames: names.STATUS,
      classPrefix: classPrefix
    };
  }, [classPrefix]);
}

var switchDefaultProps = {
  label: [],
  loading: false,
  size: 'medium'
};

var _excluded = ["className", "value", "defaultValue", "disabled", "loading", "size", "label", "customValue", "onChange", "beforeChange"];
var Switch = /*#__PURE__*/React.forwardRef(function (originalProps, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var props = useDefaultProps(originalProps, switchDefaultProps);
  var className = props.className,
    value = props.value,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    loading = props.loading,
    size = props.size,
    label = props.label,
    customValue = props.customValue,
    onChange = props.onChange,
    beforeChange = props.beforeChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _ref = customValue || [],
    _ref2 = _slicedToArray(_ref, 2),
    _ref2$ = _ref2[0],
    activeValue = _ref2$ === void 0 ? true : _ref2$,
    _ref2$2 = _ref2[1],
    inactiveValue = _ref2$2 === void 0 ? false : _ref2$2;
  var isControlled = typeof value !== 'undefined';
  var initChecked = defaultValue === activeValue || value === activeValue;
  var _useState = useState(initChecked),
    _useState2 = _slicedToArray(_useState, 2),
    innerChecked = _useState2[0],
    setInnerChecked = _useState2[1];
  var contentNode = React.useMemo(function () {
    if (Array.isArray(label)) {
      var _label = _slicedToArray(label, 2),
        _label$ = _label[0],
        activeContent = _label$ === void 0 ? '' : _label$,
        _label$2 = _label[1],
        inactiveContent = _label$2 === void 0 ? '' : _label$2;
      var content = innerChecked ? activeContent : inactiveContent;
      return parseTNode(content, {
        value: value
      });
    }
    return parseTNode(label, {
      value: value
    });
  }, [label, innerChecked, value]);
  var handleChange = function handleChange(e) {
    !isControlled && setInnerChecked(!innerChecked);
    var changedValue = !innerChecked ? activeValue : inactiveValue;
    onChange === null || onChange === void 0 || onChange(changedValue, {
      e: e
    });
  };
  var onInternalClick = function onInternalClick(e) {
    if (disabled) {
      return;
    }
    if (!beforeChange) {
      handleChange(e);
      return;
    }
    Promise.resolve(beforeChange()).then(function (v) {
      if (v) {
        handleChange(e);
      }
    })["catch"](function (e) {
      console.error('Switch', "some error occurred: ".concat(e));
    });
  };
  useEffect(function () {
    if (Array.isArray(customValue) && !customValue.includes(value)) {
      console.error('Switch', "value is not in customValue: ".concat(JSON.stringify(customValue)));
    }
    isControlled && setInnerChecked(value === activeValue);
  }, [value, customValue, activeValue, isControlled]);
  var _useCommonClassName = useCommonClassName(),
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var switchClassName = classNames("".concat(classPrefix, "-switch"), className, _defineProperty(_defineProperty(_defineProperty({}, STATUS.checked, innerChecked), STATUS.disabled, disabled), STATUS.loading, loading), SIZE[size]);
  return /*#__PURE__*/React.createElement("button", _extends({}, restProps, {
    type: "button",
    role: "switch",
    disabled: disabled || loading,
    className: switchClassName,
    ref: ref,
    onClick: onInternalClick
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(classPrefix, "-switch__handle")
  }, loading && /*#__PURE__*/React.createElement(Loading, {
    loading: true,
    size: "small"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-switch__content")
  }, contentNode));
});
Switch.displayName = 'Switch';

export { Switch as default };
//# sourceMappingURL=Switch.js.map
