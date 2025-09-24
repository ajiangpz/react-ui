import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { R as React, r as reactExports } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { Loading } from '../loading/index.js';
import { u as useConfig } from './dep-CaeblIEM.js';
import { u as useCommonClassName } from './dep-SBwAlUYy.js';
import { a as parseTNode } from './dep-B232LrJC.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';
import './style/css.js';

var switchDefaultProps = {
  label: [],
  loading: false,
  size: "medium"
};

var _excluded = ["className", "value", "defaultValue", "disabled", "loading", "size", "label", "customValue", "onChange", "beforeChange"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Switch$1 = /*#__PURE__*/React.forwardRef(function (originalProps, ref) {
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
  var isControlled = typeof value !== "undefined";
  var initChecked = defaultValue === activeValue || value === activeValue;
  var _useState = reactExports.useState(initChecked),
    _useState2 = _slicedToArray(_useState, 2),
    innerChecked = _useState2[0],
    setInnerChecked = _useState2[1];
  var contentNode = React.useMemo(function () {
    if (Array.isArray(label)) {
      var _label = _slicedToArray(label, 2),
        _label$ = _label[0],
        activeContent = _label$ === void 0 ? "" : _label$,
        _label$2 = _label[1],
        inactiveContent = _label$2 === void 0 ? "" : _label$2;
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
    })["catch"](function (e2) {
      console.error("Switch", "some error occurred: ".concat(e2));
    });
  };
  reactExports.useEffect(function () {
    if (Array.isArray(customValue) && !customValue.includes(value)) {
      console.error("Switch", "value is not in customValue: ".concat(JSON.stringify(customValue)));
    }
    isControlled && setInnerChecked(value === activeValue);
  }, [value, customValue, activeValue, isControlled]);
  var _useCommonClassName = useCommonClassName(),
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var switchClassName = classNames("".concat(classPrefix, "-switch"), className, _defineProperty(_defineProperty(_defineProperty({}, STATUS.checked, innerChecked), STATUS.disabled, disabled), STATUS.loading, loading), SIZE[size]);
  return /* @__PURE__ */React.createElement("button", _objectSpread(_objectSpread({}, restProps), {}, {
    type: "button",
    role: "switch",
    disabled: disabled || loading,
    className: switchClassName,
    ref: ref,
    onClick: onInternalClick
  }), /* @__PURE__ */React.createElement("span", {
    className: "".concat(classPrefix, "-switch__handle")
  }, loading && /* @__PURE__ */React.createElement(Loading, {
    loading: true,
    size: "small"
  })), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-switch__content")
  }, contentNode));
});
Switch$1.displayName = "Switch";

var Switch = Switch$1;

export { Switch as S };
//# sourceMappingURL=dep-Dz65bPKB.js.map
