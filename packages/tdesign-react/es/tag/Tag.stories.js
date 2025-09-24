import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { R as React, r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import { Tag } from './index.js';
import '@/style/index.js';
import '@babel/runtime/helpers/typeof';
import './Tag.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'classnames';
import 'lucide-react';
import 'tinycolor2';
import '../_chunks/dep-U1T8CQY9.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-Bdljkd5o.js';
import 'hoist-non-react-statics';
import './style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"]
};
var Default = {
  args: {},
  render: function render(args) {
    return /* @__PURE__ */React.createElement("div", {
      className: "flex gap-2"
    }, /* @__PURE__ */React.createElement(Tag, _objectSpread({
      theme: "primary"
    }, args), "\u6807\u7B7E\u4E00"), /* @__PURE__ */React.createElement(Tag, _objectSpread({
      theme: "warning"
    }, args), "\u6807\u7B7E\u4E8C"), /* @__PURE__ */React.createElement(Tag, _objectSpread({
      theme: "danger",
      variant: "dark"
    }, args), "\u6807\u7B7E\u4E09"), /* @__PURE__ */React.createElement(Tag, _objectSpread({
      theme: "success",
      variant: "dark"
    }, args), "\u6807\u7B7E\u56DB"));
  }
};
var ClosableTagExample = function ClosableTagExample() {
  var _useState = reactExports.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    inputVisible = _useState2[0],
    toggleInputVisible = _useState2[1];
  var _useState3 = reactExports.useState([{
      name: "\u53EF\u5220\u9664\u6807\u7B7E1",
      showClose: true
    }, {
      name: "\u53EF\u5220\u9664\u6807\u7B7E2",
      showClose: true
    }, {
      name: "\u53EF\u5220\u9664\u6807\u7B7E3",
      showClose: true
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    tagList = _useState4[0],
    setTagList = _useState4[1];
  var deleteTag = function deleteTag(i) {
    var newtagList = _toConsumableArray(tagList);
    newtagList.splice(i, 1);
    setTagList(newtagList);
  };
  var handleClickAdd = function handleClickAdd() {
    toggleInputVisible(true);
  };
  var handleInputEnter = function handleInputEnter(value) {
    toggleInputVisible(false);
    if (value) setTagList(function (currentList) {
      return currentList.concat([{
        name: value,
        showClose: true
      }]);
    });
  };
  return tagList.map(function (tag, i) {
    return /* @__PURE__ */React.createElement(Tag, {
      key: i,
      closable: true,
      onClose: function onClose() {
        deleteTag(i);
      },
      disabled: tag.disabled,
      style: {
        marginRight: 30
      }
    }, tag.name);
  });
};
var DeleteTag = {
  args: {},
  render: function render() {
    return /* @__PURE__ */React.createElement(ClosableTagExample, null);
  }
};

export { Default, DeleteTag, meta as default };
//# sourceMappingURL=Tag.stories.js.map
