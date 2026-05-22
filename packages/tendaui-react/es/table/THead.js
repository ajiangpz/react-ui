import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React from 'react';
import classNames from 'classnames';
import { isFunction } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function renderTitle(col, colIndex) {
  var params = {
    col: col,
    colIndex: colIndex
  };
  if (isFunction(col.title)) {
    return col.title(params);
  }
  return col.title || "";
}
var THead = function THead(props) {
  var columns = props.columns;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var thList = columns.map(function (col, colIndex) {
    var title = renderTitle(col, colIndex);
    var customClasses = isFunction(col.className) ? col.className({
      row: {},
      rowIndex: -1,
      col: col,
      colIndex: colIndex
    }) : col.className;
    var classes = classNames(customClasses, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-align-left"), col.align === "left" || !col.align), "".concat(classPrefix, "-align-center"), col.align === "center"), "".concat(classPrefix, "-align-right"), col.align === "right"));
    var attrs = isFunction(col.attrs) ? col.attrs({
      row: {},
      rowIndex: -1,
      col: col,
      colIndex: colIndex
    }) : col.attrs || {};
    return /* @__PURE__ */React.createElement("th", _objectSpread({
      key: col.colKey || colIndex,
      className: classes || void 0,
      style: col.width ? {
        width: typeof col.width === "number" ? "".concat(col.width, "px") : col.width
      } : void 0
    }, attrs), title);
  });
  return /* @__PURE__ */React.createElement("thead", {
    className: "".concat(classPrefix, "-table__header")
  }, /* @__PURE__ */React.createElement("tr", null, thList));
};
THead.displayName = "THead";

export { THead as default };
//# sourceMappingURL=THead.js.map
