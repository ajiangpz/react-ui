import React, { MouseEvent } from "react";
import classNames from "classnames";
import { isFunction } from "lodash-es";
import { TableRowData, BaseTableCol, BaseTableCellParams } from "./type";
import Cell from "./Cell";

export interface TRProps<T extends TableRowData = TableRowData> {
  row: T;
  rowIndex: number;
  columns: BaseTableCol<T>[];
  rowKey: string;
  rowClassName?: string | ((params: { row: T; rowIndex: number }) => string);
  rowAttributes?: Record<string, unknown> | ((params: { row: T; rowIndex: number }) => Record<string, unknown>);
  cellEmptyContent?: React.ReactNode | ((params: BaseTableCellParams<T>) => React.ReactNode);
  onRowClick?: (params: { row: T; rowIndex: number; e: MouseEvent<HTMLTableRowElement> }) => void;
  onCellClick?: (params: BaseTableCellParams<T>) => void;
}

const TR = <T extends TableRowData = TableRowData>(props: TRProps<T>) => {
  const { row, rowIndex, columns, rowClassName, rowAttributes, cellEmptyContent, onRowClick, onCellClick } = props;

  // 处理行类名
  const customRowClassName = isFunction(rowClassName) ? rowClassName({ row, rowIndex }) : rowClassName;

  const rowClasses = classNames(customRowClassName);

  // 处理行属性
  const customRowAttributes = isFunction(rowAttributes) ? rowAttributes({ row, rowIndex }) : rowAttributes || {};

  // 处理单元格点击
  const handleCellClick = (e: React.MouseEvent<HTMLElement>, col: BaseTableCol<T>, colIndex: number) => {
    if (onCellClick) {
      onCellClick({
        row,
        rowIndex,
        col,
        colIndex,
        e
      });
    }
  };

  // 处理行点击
  const handleRowClick = (e: MouseEvent<HTMLTableRowElement>) => {
    if (onRowClick) {
      onRowClick({ row, rowIndex, e });
    }
  };

  // 渲染单元格
  const cells = columns.map((col, colIndex) => {
    const cellParams: BaseTableCellParams<T> = {
      row,
      rowIndex,
      col,
      colIndex
    };

    return (
      <Cell
        key={col.colKey || colIndex}
        cellParams={cellParams}
        cellEmptyContent={cellEmptyContent}
        onClick={(e) => handleCellClick(e, col, colIndex)}
      />
    );
  });

  return (
    <tr className={rowClasses || undefined} {...customRowAttributes} onClick={handleRowClick}>
      {cells}
    </tr>
  );
};

TR.displayName = "TR";

export default TR;
