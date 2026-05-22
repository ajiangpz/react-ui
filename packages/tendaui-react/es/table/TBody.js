import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React from 'react';
import { get } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useLocaleReceiver } from '../_chunks/dep-BGP3l2nd.js';
import TR from './TR.js';
import '../_chunks/dep-zVwpnryi.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'dayjs';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import 'classnames';
import './Cell.js';
import './Ellipsis.js';
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

var TBody = function TBody(props) {
  var data = props.data,
    columns = props.columns,
    rowKey = props.rowKey,
    rowClassName = props.rowClassName,
    rowAttributes = props.rowAttributes,
    cellEmptyContent = props.cellEmptyContent,
    empty = props.empty,
    onRowClick = props.onRowClick,
    onCellClick = props.onCellClick;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useLocaleReceiver = useLocaleReceiver("table"),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2),
    local = _useLocaleReceiver2[0],
    t = _useLocaleReceiver2[1];
  var emptyText = typeof local.empty === "string" ? t(local.empty) : local.empty;
  var renderEmpty = function renderEmpty() {
    if (empty !== void 0) {
      return /* @__PURE__ */React.createElement("tr", {
        className: "".concat(classPrefix, "-table__empty-row")
      }, /* @__PURE__ */React.createElement("td", {
        colSpan: columns.length
      }, /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-table__empty")
      }, empty)));
    }
    return /* @__PURE__ */React.createElement("tr", {
      className: "".concat(classPrefix, "-table__empty-row")
    }, /* @__PURE__ */React.createElement("td", {
      colSpan: columns.length
    }, /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-table__empty")
    }, emptyText)));
  };
  if (!data || data.length === 0) {
    return /* @__PURE__ */React.createElement("tbody", {
      className: "".concat(classPrefix, "-table__body")
    }, renderEmpty());
  }
  var rows = data.map(function (row, rowIndex) {
    var rowKeyValue = get(row, rowKey);
    var key = typeof rowKeyValue === "string" || typeof rowKeyValue === "number" ? rowKeyValue : rowIndex;
    return /* @__PURE__ */React.createElement(TR, {
      key: key,
      row: row,
      rowIndex: rowIndex,
      columns: columns,
      rowKey: rowKey,
      rowClassName: rowClassName,
      rowAttributes: rowAttributes,
      cellEmptyContent: cellEmptyContent,
      onRowClick: onRowClick,
      onCellClick: onCellClick
    });
  });
  return /* @__PURE__ */React.createElement("tbody", {
    className: "".concat(classPrefix, "-table__body")
  }, rows);
};
TBody.displayName = "TBody";

export { TBody as default };
//# sourceMappingURL=TBody.js.map
