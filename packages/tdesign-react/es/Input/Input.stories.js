import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Input, InputGroup } from './index.js';
import '@/style/index.js';
import './Input.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'classnames';
import 'lucide-react';
import '../_chunks/dep-6TeJvJOF.js';
import 'lodash-es';
import '../_chunks/dep-Dqh5DYAh.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import './InputGroup.js';
import './style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "file", "password", "number", "tel", "url", "search", "date", "time", "datetime-local", "month", "week"],
      defaultValue: "text"
    },
    disabled: {
      control: "boolean",
      defaultValue: false
    }
  }
};
var Default = {
  args: {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    disabled: false,
    name: "input"
  }
};
var Group = {
  render: function render(args) {
    return /* @__PURE__ */React.createElement(InputGroup, _objectSpread(_objectSpread({}, args), {}, {
      separate: true
    }), /* @__PURE__ */React.createElement(Input, {
      type: "text",
      placeholder: "\u7528\u6237\u540D"
    }), /* @__PURE__ */React.createElement(Input, {
      type: "password",
      placeholder: "\u5BC6\u7801"
    }));
  },
  name: "InputGroup \u793A\u4F8B"
};

export { Default, Group, meta as default };
//# sourceMappingURL=Input.stories.js.map
