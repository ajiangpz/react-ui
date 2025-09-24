import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { SelectInput } from './index.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import '@/style/index.js';
import '../_chunks/dep-CCk9KX71.js';
import { Search } from 'lucide-react';
import '../_chunks/dep-DJbNj1-A.js';
import 'classnames';
import './hook/useSingle.js';
import 'lodash-es';
import '../_chunks/dep-Dqh5DYAh.js';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-6TeJvJOF.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import './style/css.js';
import './hook/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/TagInput.js';
import '../tag-input/hooks/useTagList.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../tag/index.js';
import '../tag/Tag.js';
import 'tinycolor2';
import '../_chunks/dep-U1T8CQY9.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import '../hooks/useDragSorter.js';
import '../_chunks/dep-CtWL9Bq2.js';
import '../_chunks/dep-BuRcs8ei.js';
import 'react-is';
import '../_chunks/dep-DU45RdGB.js';
import '@popperjs/core';
import 'react-fast-compare';
import '../portal/Portal.js';
import '../_chunks/dep-C1XcmShP.js';
import 'react-transition-group';
import '../_chunks/dep-2sN3YgeE.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/SelectInput",
  component: SelectInput,
  tags: ["autodocs"]
};
var classStyles = "\n<style>\n.tdesign-demo__select-input-ul-autocomplete {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tdesign-demo__select-input-ul-autocomplete > li {\n  display: block;\n  border-radius: 3px;\n  line-height: 22px;\n  cursor: pointer;\n  padding: 3px 8px;\n  color: var(--td-text-color-primary);\n  transition: background-color 0.2s linear;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tdesign-demo__select-input-ul-autocomplete > li:hover {\n  background-color: var(--td-bg-color-container-hover);\n}\n</style>  \n";
var OPTIONS = ["Student A", "Student B", "Student C", "Student D", "Student E", "Student F"];
var SelectInputAutocomplete = function SelectInputAutocomplete(args) {
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    popupVisible = _useState2[0],
    setPopupVisible = _useState2[1];
  var _useState3 = reactExports.useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selectValue = _useState4[0],
    setSelectValue = _useState4[1];
  var _useState5 = reactExports.useState(OPTIONS),
    _useState6 = _slicedToArray(_useState5, 2),
    options = _useState6[0],
    setOptions = _useState6[1];
  var onOptionClick = function onOptionClick(item) {
    setSelectValue(item);
    setPopupVisible(false);
  };
  var onInputChange = function onInputChange(keyword) {
    setSelectValue(keyword);
    var options2 = new Array(5).fill(null).map(function (t, index) {
      return "".concat(keyword, " Student ").concat(index);
    });
    setOptions(options2);
  };
  var onPopupVisibleChange = function onPopupVisibleChange(val) {
    setPopupVisible(val);
  };
  reactExports.useEffect(function () {
    document.head.insertAdjacentHTML("beforeend", classStyles);
  }, []);
  return /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement(SelectInput, _objectSpread({
    value: selectValue,
    popupVisible: popupVisible,
    placeholder: "\u8BF7\u8F93\u5165\u4EFB\u610F\u5173\u952E\u8BCD",
    allowInput: true,
    clearable: true,
    style: {
      width: "300px"
    },
    onInputChange: onInputChange,
    onPopupVisibleChange: onPopupVisibleChange,
    panel: /* @__PURE__ */React.createElement("ul", {
      className: "tdesign-demo__select-input-ul-autocomplete"
    }, options.map(function (item) {
      return /* @__PURE__ */React.createElement("li", {
        key: item,
        onClick: function onClick() {
          return onOptionClick(item);
        }
      }, item);
    })),
    suffixIcon: /* @__PURE__ */React.createElement(Search, null)
  }, args)));
};
var Default = {
  args: {},
  render: function render(args) {
    return /* @__PURE__ */React.createElement(SelectInputAutocomplete, _objectSpread({}, args));
  }
};

export { Default, meta as default };
//# sourceMappingURL=SelectInput.stories.js.map
