import React, { MouseEvent } from "react";
import classNames from "classnames";
import { isFunction, get } from "lodash-es";
import useConfig from "../hooks/useConfig";
import { BaseTableCellParams, TableRowData } from "./type";

export interface CellProps<T extends TableRowData = TableRowData> {
  cellParams: BaseTableCellParams<T>;
  cellEmptyContent?: React.ReactNode | ((params: BaseTableCellParams<T>) => React.ReactNode);
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

/**
 * 渲染单元格内容
 */
export function renderCell<T extends TableRowData = TableRowData>(
  params: BaseTableCellParams<T>,
  extra?: {
    cellEmptyContent?: React.ReactNode | ((params: BaseTableCellParams<T>) => React.ReactNode);
  }
): React.ReactNode {
  const { col, row } = params;

  // 如果列配置了自定义渲染函数
  if (isFunction(col.cell)) {
    return col.cell(params);
  }

  if (isFunction(col.render)) {
    return col.render(params);
  }

  // 如果列配置了字符串或 ReactNode
  if (col.cell && !isFunction(col.cell)) {
    return col.cell;
  }

  // 默认从 row 数据中获取值
  const value = get(row, col.colKey) as React.ReactNode;

  // 处理空值
  if (value === undefined || value === null || value === "") {
    if (extra?.cellEmptyContent) {
      return isFunction(extra.cellEmptyContent) ? extra.cellEmptyContent(params) : extra.cellEmptyContent;
    }
  }

  return value;
}

const Cell = <T extends TableRowData = TableRowData>(props: CellProps<T>) => {
  const { cellParams, cellEmptyContent, onClick } = props;
  const { col, colIndex } = cellParams;
  const { classPrefix } = useConfig();

  const cellNode = renderCell(cellParams, { cellEmptyContent });

  // 处理省略文本
  const isEllipsis = Boolean(col.ellipsis);
  const cellContent = isEllipsis ? (
    <div
      className={`${classPrefix}-table__ellipsis`}
      title={String(cellNode)}
      style={{ width: "100%", overflow: "hidden" }}
    >
      {cellNode}
    </div>
  ) : (
    cellNode
  );

  // 处理类名
  const customClasses = isFunction(col.className) ? col.className(cellParams) : col.className;

  const classes = classNames(customClasses, {
    [`${classPrefix}-table__cell--ellipsis`]: isEllipsis,
    [`${classPrefix}-align-left`]: col.align === "left" || !col.align,
    [`${classPrefix}-align-center`]: col.align === "center",
    [`${classPrefix}-align-right`]: col.align === "right"
  });

  // 处理属性
  const attrs = isFunction(col.attrs) ? col.attrs(cellParams) : col.attrs || {};

  // 处理单元格样式
  const cellStyle: React.CSSProperties = {};
  if (col.width) {
    cellStyle.width = typeof col.width === "number" ? `${col.width}px` : col.width;
  }
  if (col.minWidth) {
    cellStyle.minWidth = typeof col.minWidth === "number" ? `${col.minWidth}px` : col.minWidth;
  }

  return (
    <td
      key={col.colKey || colIndex}
      className={classes || undefined}
      style={Object.keys(cellStyle).length > 0 ? cellStyle : undefined}
      {...attrs}
      onClick={onClick}
    >
      {cellContent}
    </td>
  );
};

Cell.displayName = "Cell";

export default Cell;
