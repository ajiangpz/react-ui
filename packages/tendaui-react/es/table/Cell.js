import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React from 'react';
import classNames from 'classnames';
import { isFunction, get } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import Ellipsis from './Ellipsis.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../_chunks/dep-CzLhKWCf.js';
import '../tooltip/index.js';
import '../tooltip/Tooltip.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../popup/index.js';
import '../popup/Popup.js';
import '../portal/Portal.js';
import 'react-dom';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-CCaTIa7l.js';
import '../_chunks/dep-DGvfel3I.js';
import '../_chunks/dep-B2D1svZy.js';
import 'react-is';
import '../_chunks/dep-C1XcmShP.js';
import '../_chunks/dep-Ccktr_jk.js';
import '../_chunks/dep-CgyDw_YI.js';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../_chunks/dep-DbVHGoUC.js';
import '../popup/style/css.js';
import './css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function renderCell(params, extra) {
  var col = params.col,
    row = params.row;
  if (isFunction(col.cell)) {
    return col.cell(params);
  }
  if (isFunction(col.render)) {
    return col.render(params);
  }
  if (col.cell && !isFunction(col.cell)) {
    return col.cell;
  }
  var value = get(row, col.colKey);
  if (value === void 0 || value === null || value === "") {
    if (extra !== null && extra !== void 0 && extra.cellEmptyContent) {
      return isFunction(extra.cellEmptyContent) ? extra.cellEmptyContent(params) : extra.cellEmptyContent;
    }
  }
  return value;
}
var Cell = function Cell(props) {
  var cellParams = props.cellParams,
    cellEmptyContent = props.cellEmptyContent,
    onClick = props.onClick;
  var col = cellParams.col,
    colIndex = cellParams.colIndex;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var cellNode = renderCell(cellParams, {
    cellEmptyContent: cellEmptyContent
  });
  var isEllipsis = Boolean(col.ellipsis);
  var cellContent = isEllipsis ? /* @__PURE__ */React.createElement(Ellipsis, {
    classPrefix: classPrefix
  }, cellNode) : cellNode;
  var customClasses = isFunction(col.className) ? col.className(cellParams) : col.className;
  var classes = classNames(customClasses, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-table__cell--ellipsis"), isEllipsis), "".concat(classPrefix, "-align-left"), col.align === "left" || !col.align), "".concat(classPrefix, "-align-center"), col.align === "center"), "".concat(classPrefix, "-align-right"), col.align === "right"));
  var attrs = isFunction(col.attrs) ? col.attrs(cellParams) : col.attrs || {};
  var cellStyle = {};
  if (col.width) {
    cellStyle.width = typeof col.width === "number" ? "".concat(col.width, "px") : col.width;
  }
  if (col.minWidth) {
    cellStyle.minWidth = typeof col.minWidth === "number" ? "".concat(col.minWidth, "px") : col.minWidth;
  }
  return /* @__PURE__ */React.createElement("td", _objectSpread(_objectSpread({
    key: col.colKey || colIndex,
    className: classes || void 0,
    style: Object.keys(cellStyle).length > 0 ? cellStyle : void 0
  }, attrs), {}, {
    onClick: onClick
  }), cellContent);
};
Cell.displayName = "Cell";

export { Cell as default, renderCell };
//# sourceMappingURL=Cell.js.map
