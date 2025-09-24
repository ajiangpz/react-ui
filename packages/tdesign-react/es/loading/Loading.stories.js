import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectDestructuringEmpty from '@babel/runtime/helpers/objectDestructuringEmpty';
import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Loading from './Loading.js';
import '@/style';
import './index.js';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import { S as Switch } from '../_chunks/dep-Dz65bPKB.js';
import { B as Button } from '../_chunks/dep-CWE5nGYy.js';
import 'classnames';
import '../_chunks/dep-6TeJvJOF.js';
import 'lodash-es';
import '../_chunks/dep-CaeblIEM.js';
import '../config-provider/ConfigContext.js';
import '@babel/runtime/helpers/typeof';
import '../common/Portal.js';
import '../_chunks/dep-DU45RdGB.js';
import './Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-e4v9VeEm.js';
import '../_chunks/dep-2sN3YgeE.js';
import './style/css.js';
import '../_chunks/dep-SBwAlUYy.js';
import '../_chunks/dep-B232LrJC.js';
import '../_chunks/dep-DWZDJ_hQ.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var meta = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"]
};
var Default = {
  args: {},
  render: function render(args) {
    return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(Loading, _objectSpread({}, args)));
  }
};
var LoadingFullscreen = function LoadingFullscreen(_ref) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var _useState = reactExports.useState("on"),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var _useState3 = reactExports.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var onChange = function onChange(value) {
    console.log(value);
    setChecked(value);
    setLoading(value);
    if (value) setTimeout(function () {
      setChecked("off");
      setLoading(false);
    }, 2e3);
  };
  return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement(Loading, _objectSpread({
    loading: loading,
    fullscreen: true,
    preventScrollThrough: true,
    text: "\u52A0\u8F7D\u4E2D"
  }, args)), "Loading state:", /* @__PURE__ */React.createElement(Switch, {
    value: checked,
    onCheckedChange: onChange
  }));
};
var Fullscreen = {
  render: function render(args) {
    return /* @__PURE__ */React.createElement(LoadingFullscreen, _objectSpread({}, args));
  }
};
var LoadingDelay = function LoadingDelay(_ref2) {
  var args = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var _useState5 = reactExports.useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = reactExports.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var loadingData = function loadingData(time) {
    setLoading(true);
    setData("");
    var timer = setTimeout(function () {
      setLoading(false);
      setData("\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u77ED\u65F6\u95F4\u7684\u6570\u636E\u52A0\u8F7D\u5E76\u672A\u51FA\u73B0 loading");
      clearTimeout(timer);
    }, time || 100);
  };
  reactExports.useEffect(function () {
    loadingData();
  }, []);
  return /* @__PURE__ */React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement(Loading, _objectSpread({
    loading: loading,
    delay: 500,
    size: "small",
    showOverlay: true
  }, args), /* @__PURE__ */React.createElement("div", null, data ? "loading \u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\uFF1A".concat(data) : ""))), /* @__PURE__ */React.createElement("div", {
    className: "mt-2 flex justify-center gap-2"
  }, /* @__PURE__ */React.createElement(Button, {
    onClick: function onClick() {
      return loadingData();
    },
    size: "sm"
  }, "\u5FEB\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF08\u65E0loading\uFF09"), /* @__PURE__ */React.createElement(Button, {
    onClick: function onClick() {
      return loadingData(1e3);
    },
    size: "sm"
  }, "\u6162\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E")));
};
var Delay = {
  render: function render(args) {
    return /* @__PURE__ */React.createElement(LoadingDelay, _objectSpread({}, args));
  }
};

export { Default, Delay, Fullscreen, meta as default };
//# sourceMappingURL=Loading.stories.js.map
