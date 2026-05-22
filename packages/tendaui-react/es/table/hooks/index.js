import { useMemo } from 'react';
import { u as useConfig } from '../../_chunks/dep-u7AyxuYF.js';
import { _ as _defineProperty } from '../../_chunks/dep-Cwish4GD.js';
import classNames from 'classnames';
import '../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../_chunks/dep-D-UKOauR.js';

function useTableClassName() {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var classNames = useMemo(function () {
    return {
      table: "".concat(classPrefix, "-table"),
      content: "".concat(classPrefix, "-table__content"),
      tableElm: "".concat(classPrefix, "-table__table"),
      header: "".concat(classPrefix, "-table__header"),
      body: "".concat(classPrefix, "-table__body"),
      empty: "".concat(classPrefix, "-table__empty"),
      emptyRow: "".concat(classPrefix, "-table__empty-row"),
      bordered: "".concat(classPrefix, "-table--bordered"),
      stripe: "".concat(classPrefix, "-table--stripe"),
      hover: "".concat(classPrefix, "-table--hover"),
      sizeSmall: "".concat(classPrefix, "-table--size-small"),
      sizeMedium: "".concat(classPrefix, "-table--size-medium"),
      sizeLarge: "".concat(classPrefix, "-table--size-large"),
      layoutFixed: "".concat(classPrefix, "-table--layout-fixed"),
      layoutAuto: "".concat(classPrefix, "-table--layout-auto"),
      verticalAlignTop: "".concat(classPrefix, "-table--vertical-align-top"),
      verticalAlignMiddle: "".concat(classPrefix, "-table--vertical-align-middle"),
      verticalAlignBottom: "".concat(classPrefix, "-table--vertical-align-bottom"),
      alignLeft: "".concat(classPrefix, "-align-left"),
      alignCenter: "".concat(classPrefix, "-align-center"),
      alignRight: "".concat(classPrefix, "-align-right"),
      ellipsis: "".concat(classPrefix, "-table__ellipsis"),
      cellEllipsis: "".concat(classPrefix, "-table__cell--ellipsis")
    };
  }, [classPrefix]);
  return classNames;
}

function formatCSSUnit(unit) {
  if (!unit) return void 0;
  if (typeof unit === "string") {
    if (/px|em|rem|%|vh|vw/.test(unit)) {
      return unit;
    }
    if (!isNaN(Number(unit))) {
      return "".concat(unit, "px");
    }
    return unit;
  }
  return "".concat(unit, "px");
}
function useTableStyle(props) {
  var _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? false : _props$bordered,
    _props$stripe = props.stripe,
    stripe = _props$stripe === void 0 ? false : _props$stripe,
    _props$hover = props.hover,
    hover = _props$hover === void 0 ? false : _props$hover,
    _props$size = props.size,
    size = _props$size === void 0 ? "medium" : _props$size,
    _props$tableLayout = props.tableLayout,
    tableLayout = _props$tableLayout === void 0 ? "fixed" : _props$tableLayout,
    _props$verticalAlign = props.verticalAlign,
    verticalAlign = _props$verticalAlign === void 0 ? "middle" : _props$verticalAlign,
    height = props.height,
    maxHeight = props.maxHeight,
    className = props.className,
    style = props.style;
  var tableClassNames = useTableClassName();
  var tableClasses = useMemo(function () {
    var _classNames;
    return classNames(tableClassNames.table, (_classNames = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames, tableClassNames.bordered, bordered), tableClassNames.stripe, stripe), tableClassNames.hover, hover), tableClassNames.sizeSmall, size === "small"), tableClassNames.sizeMedium, size === "medium"), tableClassNames.sizeLarge, size === "large"), tableClassNames.layoutFixed, tableLayout === "fixed"), tableClassNames.layoutAuto, tableLayout === "auto"), tableClassNames.verticalAlignTop, verticalAlign === "top"), tableClassNames.verticalAlignMiddle, verticalAlign === "middle"), _defineProperty(_classNames, tableClassNames.verticalAlignBottom, verticalAlign === "bottom")), className);
  }, [bordered, stripe, hover, size, tableLayout, verticalAlign, className, tableClassNames]);
  var tableContentStyles = useMemo(function () {
    var styles = {};
    if (maxHeight) {
      styles.maxHeight = formatCSSUnit(maxHeight);
    }
    if (height) {
      styles.height = formatCSSUnit(height);
    }
    return styles;
  }, [height, maxHeight]);
  var tableElementStyles = useMemo(function () {
    return style || {};
  }, [style]);
  return {
    tableClasses: tableClasses,
    tableContentStyles: tableContentStyles,
    tableElementStyles: tableElementStyles
  };
}

export { formatCSSUnit, useTableClassName, useTableStyle };
//# sourceMappingURL=index.js.map
