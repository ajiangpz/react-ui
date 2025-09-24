import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectDestructuringEmpty from '@babel/runtime/helpers/objectDestructuringEmpty';
import _extends from '@babel/runtime/helpers/extends';
import { Select } from './index.js';
import '@/style';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import { Select as Select$1 } from 'tdesign-react';
import './Select.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import 'lodash-es';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-Dqh5DYAh.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import '../_chunks/dep-CGryPDgB.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../_chunks/dep-Bj9PpzCF.js';
import '../_chunks/dep-e4v9VeEm.js';
import './Option.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-Dz5FZMJg.js';
import '../_chunks/dep-U1T8CQY9.js';
import '../common/FakeArrow.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../_chunks/dep-6TeJvJOF.js';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import '../loading/Gradient.js';
import '../_chunks/dep-2sN3YgeE.js';
import './style/css.js';
import '../select-input/index.js';
import '../_chunks/dep-DJbNj1-A.js';
import '../select-input/hook/useSingle.js';
import '../_chunks/dep-CCk9KX71.js';
import 'lucide-react';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../select-input/hook/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/TagInput.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
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
import '../_chunks/dep-C1XcmShP.js';
import 'react-transition-group';
import '../_chunks/dep-B232LrJC.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Select",
  component: Select,
  args: {},
  tags: ["autodocs"]
};
var SingleSelect = function SingleSelect(_ref) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useState = reactExports.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var onChange = function onChange(value2) {
    setValue(value2);
  };
  return /* @__PURE__ */React.createElement(Select, _objectSpread({
    value: value,
    onChange: onChange,
    style: {
      width: "40%"
    },
    clearable: true,
    options: [{
      label: "\u67B6\u6784\u4E91",
      value: "1",
      title: "\u67B6\u6784\u4E91\u9009\u9879"
    }, {
      label: "\u5927\u6570\u636E",
      value: "2"
    }, {
      label: "\u533A\u5757\u94FE",
      value: "3"
    }, {
      label: "\u7269\u8054\u7F51",
      value: "4",
      disabled: true
    }, {
      label: "\u4EBA\u5DE5\u667A\u80FD",
      value: "5"
    }]
  }, args));
};
var Default = {
  args: {},
  render: function render(_ref2) {
    var args = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
    return /* @__PURE__ */React.createElement(SingleSelect, _objectSpread({}, args));
  }
};
var options1 = [{
  label: "\u5168\u9009",
  checkAll: true
}, {
  label: "\u67B6\u6784\u4E91",
  value: "1"
}, {
  label: "\u5927\u6570\u636E",
  value: "2"
}, {
  label: "\u533A\u5757\u94FE",
  value: "3"
}, {
  label: "\u7269\u8054\u7F51",
  value: "4",
  disabled: true
}, {
  label: "\u4EBA\u5DE5\u667A\u80FD",
  value: "5",
  content: /* @__PURE__ */React.createElement("span", null, "\u4EBA\u5DE5\u667A\u80FD\uFF08\u65B0\uFF09")
}, {
  label: "\u8BA1\u7B97\u573A\u666F",
  value: "6"
}];
var MultiSelect = function MultiSelect() {
  var _useState3 = reactExports.useState(["3", "5"]),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var handleChange = function handleChange(v) {
    setValue(v);
  };
  return /* @__PURE__ */React.createElement(Select, {
    value: value,
    onChange: handleChange,
    filterable: true,
    multiple: true,
    options: options1,
    onRemove: function onRemove(options) {
      console.log("onRemove", options);
    }
  });
};
var TMultiSelect = function TMultiSelect() {
  var _useState5 = reactExports.useState(["3", "5"]),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var handleChange = function handleChange(v) {
    console.log(v);
    setValue(v);
  };
  return /* @__PURE__ */React.createElement(Select$1, {
    value: value,
    onChange: handleChange,
    filterable: true,
    multiple: true,
    options: options1,
    onRemove: function onRemove(options) {
      console.log("onRemove", options);
    }
  });
};
var MultiSelectExample = {
  args: {},
  render: function render(_ref3) {
    var args = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
    return /* @__PURE__ */React.createElement(MultiSelect, _objectSpread({}, args));
  }
};
var TMultiSelectExample = {
  args: {},
  render: function render(_ref4) {
    var args = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
    return /* @__PURE__ */React.createElement(TMultiSelect, _objectSpread({}, args));
  }
};

export { Default, MultiSelectExample, TMultiSelectExample, meta as default };
//# sourceMappingURL=Select.stories.js.map
