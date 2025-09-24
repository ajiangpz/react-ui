import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectDestructuringEmpty from '@babel/runtime/helpers/objectDestructuringEmpty';
import _extends from '@babel/runtime/helpers/extends';
import TagInput from './TagInput.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import '../_chunks/dep-CtWL9Bq2.js';
import '@/style/index.js';
import 'lucide-react';
import 'lodash-es';
import 'classnames';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-CCk9KX71.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-6TeJvJOF.js';
import '../_chunks/dep-Dqh5DYAh.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-e4v9VeEm.js';
import './style/css.js';
import './hooks/useTagList.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../tag/index.js';
import '../tag/Tag.js';
import 'tinycolor2';
import '../_chunks/dep-U1T8CQY9.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import '../hooks/useDragSorter.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BaseExample = function BaseExample(_ref) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useState = reactExports.useState(["Vue", "React", "Angular"]),
    _useState2 = _slicedToArray(_useState, 2),
    tags1 = _useState2[0],
    setTags1 = _useState2[1];
  var _useState3 = reactExports.useState(["Vue", "React"]),
    _useState4 = _slicedToArray(_useState3, 1),
    tags2 = _useState4[0];
  var _useState5 = reactExports.useState(["Vue", "React"]),
    _useState6 = _slicedToArray(_useState5, 1),
    tags3 = _useState6[0];
  var onTagInputEnter = function onTagInputEnter(val, context) {
    console.log(val, context);
  };
  var onChange = function onChange(val, context) {
    console.log(val, context);
    setTags1(val);
  };
  var onPaste = function onPaste(context) {
    console.log(context);
  };
  return /* @__PURE__ */React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */React.createElement(TagInput, _objectSpread({
    value: tags1,
    onChange: onChange,
    clearable: true,
    onPaste: onPaste,
    onEnter: onTagInputEnter,
    placeholder: "\u8BF7\u8F93\u5165"
  }, args)), /* @__PURE__ */React.createElement(TagInput, _objectSpread({
    value: tags2,
    label: "Controlled: ",
    placeholder: "\u8BF7\u8F93\u5165",
    clearable: true
  }, args)), /* @__PURE__ */React.createElement(TagInput, _objectSpread({
    defaultValue: tags3,
    label: "UnControlled: ",
    placeholder: "\u8BF7\u8F93\u5165",
    clearable: true
  }, args)));
};
var meta = {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"]
};
var Default = {
  args: {},
  render: function render(args) {
    return /* @__PURE__ */React.createElement(BaseExample, _objectSpread({}, args));
  }
};

export { Default, meta as default };
//# sourceMappingURL=TagInput.stories.js.map
