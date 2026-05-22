import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import React from 'react';
import classNames from 'classnames';
import { isFunction } from 'lodash-es';
import Cell from './Cell.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import './Ellipsis.js';
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
var TR = function TR(props) {
  var row = props.row,
    rowIndex = props.rowIndex,
    columns = props.columns,
    rowKey = props.rowKey,
    rowClassName = props.rowClassName,
    rowAttributes = props.rowAttributes,
    cellEmptyContent = props.cellEmptyContent,
    onRowClick = props.onRowClick,
    onCellClick = props.onCellClick;
  var customRowClassName = isFunction(rowClassName) ? rowClassName({
    row: row,
    rowIndex: rowIndex
  }) : rowClassName;
  var rowClasses = classNames(customRowClassName);
  var customRowAttributes = isFunction(rowAttributes) ? rowAttributes({
    row: row,
    rowIndex: rowIndex
  }) : rowAttributes || {};
  var handleCellClick = function handleCellClick(e, col, colIndex) {
    if (onCellClick) {
      onCellClick({
        id: row[rowKey],
        row: row,
        rowIndex: rowIndex,
        col: col,
        colIndex: colIndex,
        e: e
      });
    }
  };
  var handleRowClick = function handleRowClick(e) {
    if (onRowClick) {
      onRowClick({
        row: row,
        rowIndex: rowIndex,
        e: e
      });
    }
  };
  var cells = columns.map(function (col, colIndex) {
    var cellParams = {
      id: row[rowKey],
      row: row,
      rowIndex: rowIndex,
      col: col,
      colIndex: colIndex
    };
    return /* @__PURE__ */React.createElement(Cell, {
      key: col.colKey || colIndex,
      cellParams: cellParams,
      cellEmptyContent: cellEmptyContent,
      onClick: function onClick(e) {
        return handleCellClick(e, col, colIndex);
      }
    });
  });
  return /* @__PURE__ */React.createElement("tr", _objectSpread(_objectSpread({
    className: rowClasses || void 0
  }, customRowAttributes), {}, {
    onClick: handleRowClick
  }), cells);
};
TR.displayName = "TR";

export { TR as default };
//# sourceMappingURL=TR.js.map
