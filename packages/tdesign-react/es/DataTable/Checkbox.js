import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';

var _excluded = ["checked", "indeterminate", "disabled", "onChange", "className", "title"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = /*#__PURE__*/reactExports.forwardRef(function (_ref, _ref2) {
  var checked = _ref.checked,
    indeterminate = _ref.indeterminate,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    className = _ref.className,
    title = _ref.title,
    props = _objectWithoutProperties(_ref, _excluded);
  var innerRef = reactExports.useRef(null);
  reactExports.useEffect(function () {
    if (innerRef.current) {
      innerRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  var handleChange = function handleChange(e) {
    if (disabled) return;
    onChange === null || onChange === void 0 || onChange(e.target.checked);
  };
  return /* @__PURE__ */React.createElement("label", {
    className: clsx("inline-flex items-center", disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", className),
    title: title
  }, /* @__PURE__ */React.createElement("input", _objectSpread({
    type: "checkbox",
    ref: function ref(node) {
      innerRef.current = node;
      if (typeof _ref2 === "function") {
        _ref2(node);
      } else if (_ref2) {
        _ref2.current = node;
      }
    },
    className: clsx("form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out", "border-gray-300 rounded", disabled ? "cursor-not-allowed" : "cursor-pointer"),
    checked: checked,
    disabled: disabled,
    onChange: handleChange
  }, props)));
});

export { Checkbox };
//# sourceMappingURL=Checkbox.js.map
