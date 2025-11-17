import React, { forwardRef } from "react";
import useConfig from "../hooks/useConfig";
import useDefaultProps from "../hooks/useDefaultProps";
import { BaseTableProps, TableRowData } from "./type";
import { tableDefaultProps } from "./defaultProps";
import { useTableStyle, formatCSSUnit } from "./hooks";
import THead from "./THead";
import TBody from "./TBody";

export interface TableProps<T extends TableRowData = TableRowData>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">,
    BaseTableProps<T> {}

const TableComponent = forwardRef<HTMLDivElement, TableProps<TableRowData>>((originalProps, ref) => {
  const props = useDefaultProps<TableProps<TableRowData>>(originalProps, tableDefaultProps);
  const {
    columns = [],
    data = [],
    rowKey = "id",
    showHeader = true,
    empty,
    cellEmptyContent,
    rowClassName,
    rowAttributes,
    onRowClick,
    onCellClick,
    ...restProps
  } = props;

  const { classPrefix } = useConfig();
  const { tableClasses, tableContentStyles, tableElementStyles } = useTableStyle(props);

  return (
    <div ref={ref} className={tableClasses} style={tableElementStyles} {...restProps}>
      <div className={`${classPrefix}-table__content`} style={tableContentStyles}>
        <table className={`${classPrefix}-table__table`} style={{ tableLayout: props.tableLayout || "fixed" }}>
          <colgroup>
            {columns.map((col, index) => {
              const colStyle: React.CSSProperties = {};
              if (col.width) {
                colStyle.width = formatCSSUnit(col.width);
              }
              if (col.minWidth) {
                colStyle.minWidth = formatCSSUnit(col.minWidth);
              }
              return <col key={col.colKey || index} style={colStyle} />;
            })}
          </colgroup>
          {showHeader && <THead columns={columns} />}
          <TBody
            data={data}
            columns={columns}
            rowKey={rowKey}
            rowClassName={rowClassName}
            rowAttributes={rowAttributes}
            cellEmptyContent={cellEmptyContent}
            empty={empty}
            onRowClick={onRowClick}
            onCellClick={onCellClick}
          />
        </table>
      </div>
    </div>
  );
});

TableComponent.displayName = "Table";

const Table = TableComponent as <T extends TableRowData = TableRowData>(
  props: TableProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement;

export default Table;
