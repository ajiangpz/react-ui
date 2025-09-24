import { Badge } from './index.js';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import '@/style';
import './Badge.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-C52Ear6B.js';
import '@babel/runtime/helpers/typeof';
import 'classnames';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-e4v9VeEm.js';
import './style/css.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-6TeJvJOF.js';
import 'lodash-es';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';
import '../_chunks/dep-DWZDJ_hQ.js';

var meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"]
};
function BadgeExample() {
  return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(Badge, {
    count: 100,
    shape: "circle",
    size: "medium"
  }, /* @__PURE__ */React.createElement(Button, null, "\u6309\u94AE")));
}
var Default = {
  args: {
    children: /* @__PURE__ */React.createElement(Button, {
      size: "large"
    }, "aa"),
    dot: true,
    count: 2
  },
  render: function render() {
    return /* @__PURE__ */React.createElement(BadgeExample, null);
  }
};
function CustomExample() {
  var badgeBlockStyle = {
    width: "40px",
    height: "40px",
    background: "#EEEEEE",
    border: "1px solid #DCDCDC",
    borderRadius: "3px"
  };
  return /* @__PURE__ */React.createElement("div", {
    className: "flex gap-8"
  }, /* @__PURE__ */React.createElement(Badge, {
    count: "2",
    dot: true
  }, /* @__PURE__ */React.createElement("div", {
    style: badgeBlockStyle
  })), /* @__PURE__ */React.createElement(Badge, {
    count: "hot"
  }, /* @__PURE__ */React.createElement("div", {
    style: badgeBlockStyle
  })), /* @__PURE__ */React.createElement(Badge, {
    count: "new",
    color: "var(--td-success-color)"
  }, /* @__PURE__ */React.createElement("div", {
    style: badgeBlockStyle
  })), /* @__PURE__ */React.createElement(Badge, {
    count: "100",
    color: "var(--td-warning-color)",
    shape: "round"
  }, /* @__PURE__ */React.createElement("div", {
    style: badgeBlockStyle
  })));
}
var Custom = {
  render: function render() {
    return /* @__PURE__ */React.createElement(CustomExample, null);
  }
};

export { Custom, Default, meta as default };
//# sourceMappingURL=Badge.stories.js.map
