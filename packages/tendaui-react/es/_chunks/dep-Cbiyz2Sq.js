import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { u as useTabClass } from './dep-CFsE8bd2.js';
import { u as useDefaultProps } from './dep-DGvfel3I.js';

var tabsDefaultProps = {
  addable: false,
  disabled: false,
  dragSort: false,
  placement: "top",
  scrollPosition: "auto",
  size: "medium",
  theme: "normal"
};
var tabPanelDefaultProps = {
  destroyOnHide: true,
  disabled: false,
  draggable: true,
  lazy: false,
  removable: false
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TabPanel = function TabPanel(props) {
  var _useDefaultProps = useDefaultProps(props, tabPanelDefaultProps),
    className = _useDefaultProps.className,
    lazy = _useDefaultProps.lazy,
    isActive = _useDefaultProps.isActive,
    destroyOnHide = _useDefaultProps.destroyOnHide,
    style = _useDefaultProps.style;
  var _useTabClass = useTabClass(),
    tdTabPanelClassPrefix = _useTabClass.tdTabPanelClassPrefix;
  var _useState = useState(!lazy),
    _useState2 = _slicedToArray(_useState, 2),
    shouldRender = _useState2[0],
    setShouldRender = _useState2[1];
  useEffect(function () {
    if (lazy && isActive) {
      setShouldRender(true);
    }
  }, [lazy, isActive]);
  if (!isActive && destroyOnHide || !shouldRender) {
    return null;
  }
  return /* @__PURE__ */React.createElement("div", {
    className: classNames(tdTabPanelClassPrefix, className),
    style: _objectSpread({
      display: !isActive ? "none" : void 0
    }, style)
  }, props.children || props.panel);
};
TabPanel.displayName = "TabPanel";

export { TabPanel as T, tabsDefaultProps as t };
//# sourceMappingURL=dep-Cbiyz2Sq.js.map
