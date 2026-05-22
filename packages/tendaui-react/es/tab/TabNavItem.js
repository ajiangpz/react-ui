import React from 'react';
import classNames from 'classnames';
import { IconClose } from '@tendaui/icons';
import { n as noop } from '../_chunks/dep-U1T8CQY9.js';
import { u as useTabClass } from '../_chunks/dep-CFsE8bd2.js';
import { u as useGlobalIcon } from '../_chunks/dep-sSDUpJwy.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'dayjs';

var TabNavItem = function TabNavItem(props) {
  var label = props.label,
    removable = props.removable,
    isActive = props.isActive,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? noop : _props$onClick,
    placement = props.placement,
    _props$onRemove = props.onRemove,
    onRemove = _props$onRemove === void 0 ? noop : _props$onRemove,
    value = props.value,
    _props$size = props.size,
    size = _props$size === void 0 ? "medium" : _props$size,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    index = props.index,
    _props$onTabRemove = props.onTabRemove,
    onTabRemove = _props$onTabRemove === void 0 ? noop : _props$onTabRemove,
    innerRef = props.innerRef;
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: IconClose
    }),
    CloseIcon = _useGlobalIcon.CloseIcon;
  var _useTabClass = useTabClass(),
    tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator,
    tdClassGenerator = _useTabClass.tdClassGenerator,
    tdSizeClassGenerator = _useTabClass.tdSizeClassGenerator;
  return /* @__PURE__ */React.createElement("div", {
    ref: innerRef,
    onClick: disabled ? noop : onClick,
    className: classNames(tdTabsClassGenerator("nav-item"), tdSizeClassGenerator(size), isActive ? tdClassGenerator("is-active") : "", tdClassGenerator("is-".concat(placement)), disabled ? tdClassGenerator("is-disabled") : "", props.className)
  }, /* @__PURE__ */React.createElement("div", {
    className: classNames(tdTabsClassGenerator("nav-item-wrapper"))
  }, /* @__PURE__ */React.createElement("span", {
    className: classNames(tdTabsClassGenerator("nav-item-text-wrapper"))
  }, label)), removable && !disabled ? /* @__PURE__ */React.createElement("span", {
    className: classNames("remove-btn"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemove({
        value: value,
        e: e
      });
      onTabRemove({
        value: value,
        e: e,
        index: index
      });
    }
  }, /* @__PURE__ */React.createElement(CloseIcon, null)) : null);
};

export { TabNavItem as default };
//# sourceMappingURL=TabNavItem.js.map
