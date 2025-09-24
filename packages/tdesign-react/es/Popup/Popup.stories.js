import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Popup } from './index.js';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import '@/style';
import './Popup.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/slicedToArray';
import 'lodash-es';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-BuRcs8ei.js';
import '../_chunks/dep-6TeJvJOF.js';
import 'react-is';
import '@babel/runtime/helpers/toConsumableArray';
import '../_chunks/dep-DU45RdGB.js';
import '@popperjs/core';
import 'react-fast-compare';
import '../portal/Portal.js';
import '../_chunks/dep-Dqh5DYAh.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-C1XcmShP.js';
import 'classnames';
import 'react-transition-group';
import '../_chunks/dep-2sN3YgeE.js';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import './style/css.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../common/Portal.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-DWZDJ_hQ.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Popup",
  component: Popup,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: {
        type: "select"
      },
      options: ["click", "hover", "focus", "mousedown", "context-menu", "touch"]
    },
    placement: {
      control: {
        type: "select"
      },
      options: ["top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end"]
    }
  }
};
var Default = {
  args: {
    trigger: "click",
    placement: "top",
    content: /* @__PURE__ */React.createElement("div", {
      style: {
        fontSize: "20px"
      }
    }, "content content content"),
    showArrow: true
  },
  render: function render(args) {
    return /* @__PURE__ */React.createElement("div", {
      className: "my-4 flex justify-center"
    }, /* @__PURE__ */React.createElement(Popup, _objectSpread({}, args), /* @__PURE__ */React.createElement(Button, null, "\u70B9\u51FB\u663E\u793APopup")));
  }
};

export { Default, meta as default };
//# sourceMappingURL=Popup.stories.js.map
