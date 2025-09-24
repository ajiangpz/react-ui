import { Alert } from './index.js';
import '@/style';
import './Alert.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'classnames';
import 'lucide-react';
import 'react-transition-group';
import '../_chunks/dep-DWZDJ_hQ.js';
import 'lodash-es';
import '../_chunks/dep-U1T8CQY9.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-Dp0dxPtr.js';
import '../_chunks/dep-C1XcmShP.js';
import '../_chunks/dep-e4v9VeEm.js';
import './style/css.js';

var meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"]
};
var Base = function Base() {
  return /* @__PURE__ */React.createElement("div", {
    className: "flex gap-2 flex-col"
  }, /* @__PURE__ */React.createElement(Alert, {
    theme: "success",
    message: "\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A"
  }), /* @__PURE__ */React.createElement(Alert, {
    theme: "info",
    message: "\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A"
  }), /* @__PURE__ */React.createElement(Alert, {
    theme: "warning",
    message: "\u8FD9\u662F\u4E00\u6761\u8B66\u793A\u6D88\u606F"
  }), /* @__PURE__ */React.createElement(Alert, {
    theme: "error",
    message: "\u9AD8\u5371\u64CD\u4F5C/\u51FA\u9519\u4FE1\u606F\u63D0\u793A"
  }));
};
var Default = {
  args: {},
  render: function render() {
    return /* @__PURE__ */React.createElement(Base, null);
  }
};
var Collapse = function Collapse() {
  var message = ["1.\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u63CF\u8FF0\uFF0C", "2.\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u63CF\u8FF0\uFF0C", "3.\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u63CF\u8FF0\uFF0C", "4.\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u63CF\u8FF0\uFF0C", "5.\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u63CF\u8FF0\uFF0C"];
  return /* @__PURE__ */React.createElement(Alert, {
    message: message,
    maxLine: 2,
    closeBtn: true
  });
};
var CollapseExample = function CollapseExample() {
  return /* @__PURE__ */React.createElement(Collapse, null);
};

export { CollapseExample, Default, meta as default };
//# sourceMappingURL=Alert.stories.js.map
