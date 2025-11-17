import React from "react";
import classNames from "classnames";
import { isFunction } from "lodash-es";
import useConfig from "../hooks/useConfig";
import { BaseTableCol, TableRowData, BaseTableHeadCellParams } from "./type";

export interface THeadProps<T extends TableRowData = TableRowData> {
  columns: BaseTableCol<T>[];
}

/**
 * 渲染表头标题
 */
function renderTitle<T extends TableRowData = TableRowData>(col: BaseTableCol<T>, colIndex: number): React.ReactNode {
  const params: BaseTableHeadCellParams<T> = { col, colIndex };

  if (isFunction(col.title)) {
    return col.title(params);
  }

  return col.title || "";
}

const THead = <T extends TableRowData = TableRowData>(props: THeadProps<T>) => {
  const { columns } = props;
  const { classPrefix } = useConfig();

  const thList = columns.map((col, colIndex) => {
    const title = renderTitle(col, colIndex);
    const customClasses = isFunction(col.className)
      ? col.className({ row: {} as T, rowIndex: -1, col, colIndex })
      : col.className;

    const classes = classNames(customClasses, {
      [`${classPrefix}-align-left`]: col.align === "left" || !col.align,
      [`${classPrefix}-align-center`]: col.align === "center",
      [`${classPrefix}-align-right`]: col.align === "right"
    });

    const attrs = isFunction(col.attrs) ? col.attrs({ row: {} as T, rowIndex: -1, col, colIndex }) : col.attrs || {};

    return (
      <th
        key={col.colKey || colIndex}
        className={classes || undefined}
        style={col.width ? { width: typeof col.width === "number" ? `${col.width}px` : col.width } : undefined}
        {...attrs}
      >
        {title}
      </th>
    );
  });

  return (
    <thead className={`${classPrefix}-table__header`}>
      <tr>{thList}</tr>
    </thead>
  );
};

THead.displayName = "THead";

export default THead;
