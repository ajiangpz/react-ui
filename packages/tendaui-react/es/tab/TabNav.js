import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React, { useRef, useCallback } from 'react';
import classNames from 'classnames';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import { u as useTabClass } from '../_chunks/dep-CFsE8bd2.js';
import TabNavItem from './TabNavItem.js';
import TabBar from './TabBar.js';
import { omit } from 'lodash-es';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '@tendaui/icons';
import '../_chunks/dep-sSDUpJwy.js';
import '../_chunks/dep-CzLhKWCf.js';
import '../_chunks/dep-B2D1svZy.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-DRwijJcv.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TabNav = function TabNav(props) {
  var _props$placement = props.placement,
    placement = _props$placement === void 0 ? "top" : _props$placement,
    _props$itemList = props.itemList,
    itemList = _props$itemList === void 0 ? [] : _props$itemList,
    theme = props.theme,
    addable = props.addable,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$onRemove = props.onRemove,
    onRemove = _props$onRemove === void 0 ? noop : _props$onRemove,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noop : _props$onChange,
    activeValue = props.activeValue;
  var _useTabClass = useTabClass(),
    tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator,
    tdClassGenerator = _useTabClass.tdClassGenerator;
  var navsContainerRef = useRef(null);
  var navsWrapRef = useRef(null);
  var getIndex = useCallback(function (value) {
    var index = itemList.findIndex(function (item) {
      return item.value === value;
    });
    return index > -1 ? index : -1;
  }, [itemList]);
  var activeIndex = getIndex(activeValue);
  var TabBarCom = /* @__PURE__ */React.createElement(TabBar, {
    tabPosition: placement,
    activeId: activeIndex,
    containerRef: navsWrapRef,
    navsWrapRef: navsWrapRef
  });
  var handleTabItemClick = function handleTabItemClick(clickItem) {
    var _clickItem$onClick;
    if (activeValue !== clickItem.value) {
      onChange(clickItem.value);
    }
    clickItem === null || clickItem === void 0 || (_clickItem$onClick = clickItem.onClick) === null || _clickItem$onClick === void 0 || _clickItem$onClick.call(clickItem, clickItem.value);
  };
  var handleTabItemRemove = function handleTabItemRemove(removeItem) {
    var removeValue = removeItem.value,
      removeIndex = removeItem.index;
    if (removeValue === activeValue) {
      var _itemList;
      onChange(removeIndex === 0 ? (_itemList = itemList[removeIndex + 1]) === null || _itemList === void 0 ? void 0 : _itemList.value : itemList[removeIndex - 1].value);
    }
    onRemove(removeItem);
  };
  return /* @__PURE__ */React.createElement("div", {
    ref: navsContainerRef,
    className: classNames(tdTabsClassGenerator("nav")),
    style: {
      minHeight: 48
    }
  }, /* @__PURE__ */React.createElement("div", {
    className: classNames(tdTabsClassGenerator("nav-container"), addable ? tdClassGenerator("is-addable") : "")
  }, /* @__PURE__ */React.createElement("div", {
    className: classNames(tdTabsClassGenerator("nav-wrap"), ["left", "right"].includes(placement) ? tdClassGenerator("is-vertical") : "", tdClassGenerator("is-smooth")),
    ref: navsWrapRef
  }, TabBarCom, itemList.map(function (v, index) {
    return /* @__PURE__ */React.createElement(TabNavItem, _objectSpread(_objectSpread(_objectSpread({}, omit(props, ["className", "style"])), v), {}, {
      onRemove: v.onRemove,
      key: v.value,
      label: v.label,
      isActive: activeValue === v.value,
      theme: theme,
      placement: placement,
      index: index,
      disabled: disabled || v.disabled,
      onClick: function onClick() {
        return handleTabItemClick(v);
      },
      onTabRemove: handleTabItemRemove,
      innerRef: noop
    }));
  }))));
};
TabNav.displayName = "TabNav";

export { TabNav as default };
//# sourceMappingURL=TabNav.js.map
