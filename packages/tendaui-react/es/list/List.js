import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useMemo, useRef, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { compact, isString } from 'lodash-es';
import { f as forwardRefWithStatics } from '../_chunks/dep-Do9UdkhS.js';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import { p as parseTNode } from '../_chunks/dep-D6YxJv-F.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { Loading } from '../loading/index.js';
import { u as useLocaleReceiver } from '../_chunks/dep-BGP3l2nd.js';
import ListItem from './ListItem.js';
import ListItemMeta from './ListItemMeta.js';
import { u as useVirtualScroll } from '../_chunks/dep-Dlppf0JU.js';
import '../_chunks/dep-D-UKOauR.js';
import 'hoist-non-react-statics';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../loading/Loading.js';
import '../_chunks/dep-DRwijJcv.js';
import '../common/Portal.js';
import 'react-dom';
import '../_chunks/dep-BRbJGDI9.js';
import '../loading/Gradient.js';
import '../_chunks/dep-DHWwZ2Nj.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../_chunks/dep-PPA-yoAy.js';
import '../_chunks/dep-DbVHGoUC.js';
import '../loading/style/css.js';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import '../_chunks/dep-CgyDw_YI.js';

var listDefaultProps = {
  layout: "horizontal",
  size: "medium",
  split: false,
  stripe: false
};
var listItemDefaultProps = {};
var listItemMetaDefaultProps = {};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useListVirtualScroll = function useListVirtualScroll(scroll, listRef, listItems) {
  var virtualScrollParams = useMemo(function () {
    return {
      data: listItems,
      scroll: scroll
    };
  }, [listItems, scroll]);
  var virtualConfig = useVirtualScroll(listRef, virtualScrollParams);
  var isVirtualScroll = virtualConfig.isVirtualScroll;
  var lastScrollY = -1;
  var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
    var target = e.target || e.srcElement;
    var top = target.scrollTop;
    if (lastScrollY !== top) {
      virtualConfig.isVirtualScroll && virtualConfig.handleScroll();
    } else {
      lastScrollY = -1;
    }
    lastScrollY = top;
  };
  var cursorStyle = useMemo(function () {
    return {
      position: "absolute",
      width: "1px",
      height: "1px",
      transition: "transform 0.2s",
      transform: "translate(0, ".concat(virtualConfig.scrollHeight, "px)"),
      msTransform: "translate(0, ".concat(virtualConfig.scrollHeight, "px)"),
      MozTransform: "translate(0, ".concat(virtualConfig.scrollHeight, "px)"),
      WebkitTransform: "translate(0, ".concat(virtualConfig.scrollHeight, "px)")
    };
  }, [virtualConfig.scrollHeight]);
  var listStyle = useMemo(function () {
    return {
      transform: "translate(0, ".concat(virtualConfig.translateY, "px)"),
      msTransform: "translate(0, ".concat(virtualConfig.translateY, "px)"),
      MozTransform: "translate(0, ".concat(virtualConfig.translateY, "px)"),
      WebkitTransform: "translate(0, ".concat(virtualConfig.translateY, "px)")
    };
  }, [virtualConfig.translateY]);
  var handleScrollTo = function handleScrollTo(params) {
    var index = params.index,
      key = params.key;
    var targetIndex = index === 0 ? index : index !== null && index !== void 0 ? index : Number(key);
    if (!targetIndex && targetIndex !== 0) {
      console.error("List", "scrollTo: `index` or `key` must exist.");
      return;
    }
    if (targetIndex < 0 || targetIndex >= listItems.length) {
      console.error("List", "".concat(targetIndex, " does not exist in data, check `index` or `key` please."));
      return;
    }
    virtualConfig.scrollToElement(_objectSpread$1(_objectSpread$1({}, params), {}, {
      index: targetIndex - 1
    }));
  };
  return {
    virtualConfig: virtualConfig,
    cursorStyle: cursorStyle,
    listStyle: listStyle,
    isVirtualScroll: isVirtualScroll,
    onInnerVirtualScroll: onInnerVirtualScroll,
    scrollToElement: handleScrollTo
  };
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var List = forwardRefWithStatics(function (props, ref) {
  var _useDefaultProps = useDefaultProps(props, listDefaultProps),
    header = _useDefaultProps.header,
    footer = _useDefaultProps.footer,
    asyncLoading = _useDefaultProps.asyncLoading,
    size = _useDefaultProps.size,
    split = _useDefaultProps.split,
    stripe = _useDefaultProps.stripe,
    layout = _useDefaultProps.layout,
    children = _useDefaultProps.children,
    className = _useDefaultProps.className,
    _useDefaultProps$onLo = _useDefaultProps.onLoadMore,
    onLoadMore = _useDefaultProps$onLo === void 0 ? noop : _useDefaultProps$onLo,
    _useDefaultProps$onSc = _useDefaultProps.onScroll,
    onScroll = _useDefaultProps$onSc === void 0 ? noop : _useDefaultProps$onSc,
    style = _useDefaultProps.style,
    scroll = _useDefaultProps.scroll;
  var wrapperRef = useRef(null);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useLocaleReceiver = useLocaleReceiver("list"),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2),
    local = _useLocaleReceiver2[0],
    t = _useLocaleReceiver2[1];
  var listItems = useMemo(function () {
    var _compact;
    return (_compact = compact(React.Children.map(children, function (child) {
      return /*#__PURE__*/React.isValidElement(child) ? child.props : void 0;
    }))) !== null && _compact !== void 0 ? _compact : [];
  }, [children]);
  var _useListVirtualScroll = useListVirtualScroll(scroll, wrapperRef, listItems),
    virtualConfig = _useListVirtualScroll.virtualConfig,
    cursorStyle = _useListVirtualScroll.cursorStyle,
    listStyle = _useListVirtualScroll.listStyle,
    isVirtualScroll = _useListVirtualScroll.isVirtualScroll,
    onInnerVirtualScroll = _useListVirtualScroll.onInnerVirtualScroll,
    scrollToElement = _useListVirtualScroll.scrollToElement;
  var COMPONENT_NAME = "".concat(classPrefix, "-list");
  var handleClickLoad = function handleClickLoad(e) {
    if (asyncLoading === "load-more") {
      onLoadMore({
        e: e
      });
    }
  };
  var handleScroll = function handleScroll(event) {
    var currentTarget = event.currentTarget;
    var scrollTop = currentTarget.scrollTop,
      offsetHeight = currentTarget.offsetHeight,
      scrollHeight = currentTarget.scrollHeight;
    var scrollBottom = scrollHeight - scrollTop - offsetHeight;
    if (isVirtualScroll) onInnerVirtualScroll(event);
    onScroll({
      e: event,
      scrollTop: scrollTop,
      scrollBottom: scrollBottom
    });
  };
  var loadElement = isString(asyncLoading) ? /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-list__load"), _defineProperty(_defineProperty({}, "".concat(classPrefix, "-list__load--loading"), asyncLoading === "loading"), "".concat(classPrefix, "-list__load--load-more"), asyncLoading === "load-more")),
    onClick: handleClickLoad
  }, asyncLoading === "loading" && /* @__PURE__ */React.createElement("div", null, /* @__PURE__ */React.createElement(Loading, {
    loading: true
  }), /* @__PURE__ */React.createElement("span", null, t(local.loadingText))), asyncLoading === "load-more" && /* @__PURE__ */React.createElement("span", null, t(local.loadingMoreText))) : asyncLoading;
  useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollToElement
    };
  });
  var renderContent = function renderContent() {
    return /* @__PURE__ */React.createElement(React.Fragment, null, isVirtualScroll ? /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement("div", {
      style: cursorStyle
    }), /* @__PURE__ */React.createElement("ul", {
      className: "".concat(COMPONENT_NAME, "__inner"),
      style: listStyle
    }, virtualConfig.visibleData.map(function (item, index) {
      return /* @__PURE__ */React.createElement(ListItem, _objectSpread({
        key: index
      }, item));
    }))) : /* @__PURE__ */React.createElement("ul", {
      className: "".concat(COMPONENT_NAME, "__inner")
    }, children));
  };
  return /* @__PURE__ */React.createElement("div", {
    ref: wrapperRef,
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: isVirtualScroll ? "relative" : void 0
    }),
    onScroll: handleScroll,
    className: classNames("".concat(COMPONENT_NAME), className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME, "--split"), split), "".concat(COMPONENT_NAME, "--stripe"), stripe), "".concat(COMPONENT_NAME, "--vertical-action"), layout === "vertical"), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"))
  }, header && /* @__PURE__ */React.createElement("div", {
    className: "".concat(COMPONENT_NAME, "__header")
  }, parseTNode(header)), renderContent(), asyncLoading && loadElement, footer && /* @__PURE__ */React.createElement("div", {
    className: "".concat(COMPONENT_NAME, "__footer")
  }, parseTNode(footer)));
}, {
  ListItem: ListItem,
  ListItemMeta: ListItemMeta
});
List.displayName = "List";

export { List as default };
//# sourceMappingURL=List.js.map
