import React from "react";
import { get } from "lodash-es";
import useConfig from "../hooks/useConfig";
import { useLocaleReceiver } from "../locale/LocalReceiver";
import { TableRowData, BaseTableCol, BaseTableCellParams } from "./type";
import TR from "./TR";

export interface TBodyProps<T extends TableRowData = TableRowData> {
  data: T[];
  columns: BaseTableCol<T>[];
  rowKey: string;
  rowClassName?: string | ((params: { row: T; rowIndex: number }) => string);
  rowAttributes?: Record<string, unknown> | ((params: { row: T; rowIndex: number }) => Record<string, unknown>);
  cellEmptyContent?: React.ReactNode | ((params: BaseTableCellParams<T>) => React.ReactNode);
  empty?: React.ReactNode;
  onRowClick?: (params: { row: T; rowIndex: number; e: React.MouseEvent<HTMLTableRowElement> }) => void;
  onCellClick?: (params: BaseTableCellParams<T>) => void;
}

const TBody = <T extends TableRowData = TableRowData>(props: TBodyProps<T>) => {
  const { data, columns, rowKey, rowClassName, rowAttributes, cellEmptyContent, empty, onRowClick, onCellClick } =
    props;
  const { classPrefix } = useConfig();
  const [local, t] = useLocaleReceiver("table");
  const emptyText = typeof local.empty === "string" ? t(local.empty) : local.empty;

  // 空数据渲染
  const renderEmpty = () => {
    if (empty !== undefined) {
      return (
        <tr className={`${classPrefix}-table__empty-row`}>
          <td colSpan={columns.length}>
            <div className={`${classPrefix}-table__empty`}>{empty}</div>
          </td>
        </tr>
      );
    }
    return (
      <tr className={`${classPrefix}-table__empty-row`}>
        <td colSpan={columns.length}>
          <div className={`${classPrefix}-table__empty`}>{emptyText}</div>
        </td>
      </tr>
    );
  };

  // 如果没有数据，显示空状态
  if (!data || data.length === 0) {
    return <tbody className={`${classPrefix}-table__body`}>{renderEmpty()}</tbody>;
  }

  // 渲染数据行
  const rows = data.map((row, rowIndex) => {
    const rowKeyValue = get(row, rowKey);
    const key = typeof rowKeyValue === "string" || typeof rowKeyValue === "number" ? rowKeyValue : rowIndex;
    return (
      <TR
        key={key}
        row={row}
        rowIndex={rowIndex}
        columns={columns}
        rowKey={rowKey}
        rowClassName={rowClassName}
        rowAttributes={rowAttributes}
        cellEmptyContent={cellEmptyContent}
        onRowClick={onRowClick}
        onCellClick={onCellClick}
      />
    );
  });

  return <tbody className={`${classPrefix}-table__body`}>{rows}</tbody>;
};

TBody.displayName = "TBody";

export default TBody;
