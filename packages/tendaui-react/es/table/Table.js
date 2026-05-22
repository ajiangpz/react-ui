import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React, { forwardRef } from 'react';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { useTableStyle, formatCSSUnit } from './hooks/index.js';
import THead from './THead.js';
import TBody from './TBody.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import 'classnames';
import 'lodash-es';
import '../_chunks/dep-CzLhKWCf.js';
import '../_chunks/dep-BGP3l2nd.js';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import './TR.js';
import './Cell.js';
import './Ellipsis.js';
import '../tooltip/index.js';
import '../tooltip/Tooltip.js';
import '../popup/index.js';
import '../popup/Popup.js';
import '../portal/Portal.js';
import 'react-dom';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-CCaTIa7l.js';
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

var tableDefaultProps = {
  columns: [],
  data: [],
  rowKey: "id",
  showHeader: true,
  bordered: false,
  stripe: false,
  hover: false,
  size: "medium",
  tableLayout: "fixed",
  verticalAlign: "middle"
};

var _excluded = ["columns", "data", "rowKey", "showHeader", "empty", "cellEmptyContent", "rowClassName", "rowAttributes", "onRowClick", "onCellClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableComponent = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, tableDefaultProps);
  var _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey,
    _props$showHeader = props.showHeader,
    showHeader = _props$showHeader === void 0 ? true : _props$showHeader,
    empty = props.empty,
    cellEmptyContent = props.cellEmptyContent,
    rowClassName = props.rowClassName,
    rowAttributes = props.rowAttributes,
    onRowClick = props.onRowClick,
    onCellClick = props.onCellClick,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useTableStyle = useTableStyle(props),
    tableClasses = _useTableStyle.tableClasses,
    tableContentStyles = _useTableStyle.tableContentStyles,
    tableElementStyles = _useTableStyle.tableElementStyles;
  return /* @__PURE__ */React.createElement("div", _objectSpread({
    ref: ref,
    className: tableClasses,
    style: tableElementStyles
  }, restProps), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-table__content"),
    style: tableContentStyles
  }, /* @__PURE__ */React.createElement("table", {
    className: "".concat(classPrefix, "-table__table"),
    style: {
      tableLayout: props.tableLayout || "fixed"
    }
  }, /* @__PURE__ */React.createElement("colgroup", null, columns.map(function (col, index) {
    var colStyle = {};
    if (col.width) {
      colStyle.width = formatCSSUnit(col.width);
    }
    if (col.minWidth) {
      colStyle.minWidth = formatCSSUnit(col.minWidth);
    }
    return /* @__PURE__ */React.createElement("col", {
      key: col.colKey || index,
      style: colStyle
    });
  })), showHeader && /* @__PURE__ */React.createElement(THead, {
    columns: columns
  }), /* @__PURE__ */React.createElement(TBody, {
    data: data,
    columns: columns,
    rowKey: rowKey,
    rowClassName: rowClassName,
    rowAttributes: rowAttributes,
    cellEmptyContent: cellEmptyContent,
    empty: empty,
    onRowClick: onRowClick,
    onCellClick: onCellClick
  }))));
});
TableComponent.displayName = "Table";
var Table = TableComponent;

export { Table as default };
//# sourceMappingURL=Table.js.map
