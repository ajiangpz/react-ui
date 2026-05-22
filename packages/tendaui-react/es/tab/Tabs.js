import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { f as forwardRefWithStatics } from '../_chunks/dep-Do9UdkhS.js';
import TabNav from './TabNav.js';
import { t as tabsDefaultProps, T as TabPanel } from '../_chunks/dep-Cbiyz2Sq.js';
import classNames from 'classnames';
import React from 'react';
import { u as useTabClass } from '../_chunks/dep-CFsE8bd2.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import '../_chunks/dep-D-UKOauR.js';
import 'hoist-non-react-statics';
import '../_chunks/dep-U1T8CQY9.js';
import './TabNavItem.js';
import '@tendaui/icons';
import '../_chunks/dep-sSDUpJwy.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import './TabBar.js';
import '../_chunks/dep-B2D1svZy.js';
import 'lodash-es';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-DRwijJcv.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Tabs = forwardRefWithStatics(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, tabsDefaultProps);
  var children = props.children,
    list = props.list,
    placement = props.placement,
    className = props.className,
    style = props.style,
    onRemove = props.onRemove;
  var _useControlled = useControlled(props, "value", props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var _useTabClass = useTabClass(),
    tdTabsClassPrefix = _useTabClass.tdTabsClassPrefix,
    tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator,
    tdClassGenerator = _useTabClass.tdClassGenerator;
  var memoChildren = React.useMemo(function () {
    if (!list || list.length === 0) {
      return children;
    }
    return list.map(function (panelProps) {
      return /* @__PURE__ */React.createElement(TabPanel, _objectSpread({
        key: panelProps.value
      }, panelProps));
    });
  }, [children, list]);
  var itemList = React.Children.map(memoChildren, function (child) {
    if (child && child.type === TabPanel) {
      return child.props;
    }
    return null;
  });
  var handleChange = React.useCallback(function (v) {
    onChange === null || onChange === void 0 || onChange(v);
  }, [onChange]);
  var headerNode = React.useMemo(function () {
    return /* @__PURE__ */React.createElement("div", {
      className: classNames(tdTabsClassGenerator("header"), tdClassGenerator("is-".concat(placement)))
    }, /* @__PURE__ */React.createElement(TabNav, _objectSpread(_objectSpread({}, props), {}, {
      activeValue: value,
      onRemove: onRemove,
      itemList: itemList,
      onChange: handleChange
    })));
  }, [props, value, onRemove, itemList, handleChange, placement, tdTabsClassGenerator, tdClassGenerator]);
  return /* @__PURE__ */React.createElement("div", {
    ref: ref,
    className: classNames(tdTabsClassPrefix, className),
    style: style
  }, headerNode, /* @__PURE__ */React.createElement("div", {
    className: classNames(tdTabsClassGenerator("content"), tdClassGenerator("is-".concat(placement)))
  }, React.Children.map(memoChildren, function (child) {
    if (child && child.type === TabPanel) {
      return /* @__PURE__ */React.createElement(TabPanel, _objectSpread(_objectSpread({}, child.props), {}, {
        isActive: child.props.value === value
      }));
    }
    return null;
  })));
}, {
  TabPanel: TabPanel
});
Tabs.displayName = "Tabs";

export { Tabs as default };
//# sourceMappingURL=Tabs.js.map
