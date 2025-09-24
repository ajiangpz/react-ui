import React, { useContext } from "react";
import { TableContext } from "./context";
import { Checkbox } from "./Checkbox";
import clsx from "clsx";

export const TableBody: React.FC = () => {
  const {
    columns,
    dataSource,
    rowSelection,
    getRowKey,
    onRowClick,
    virtualScroll
  } = useContext(TableContext);

  const renderRows = () => {
    const rows = virtualScroll
      ? dataSource.slice(virtualScroll.startIndex, virtualScroll.endIndex)
      : dataSource;

    return rows.map((record, rowIndex) => {
      const key = getRowKey(record);
      const baseRowClasses = clsx(
        "transition-colors duration-100",
        onRowClick && "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
      );
      const baseCellClasses =
        "relative px-6 first:pl-6 last:pr-6 border-b border-zinc-950/5 dark:border-white/5 py-4 table-cell align-middle leading-none";

      return (
        <tr
          key={key}
          onClick={() => onRowClick?.(record)}
          className={baseRowClasses}
        >
          {rowSelection && (
            <td className={clsx(baseCellClasses, "w-14")}>
              <div className="flex items-center justify-center">
                <Checkbox
                  checked={rowSelection.selectedRowKeys.includes(key.toString())}
                  onChange={checked => {
                    const newKeys = checked
                      ? [...rowSelection.selectedRowKeys, key.toString()]
                      : rowSelection.selectedRowKeys.filter(k => k !== key.toString());
                    rowSelection.onChange(newKeys, [record]);
                  }}
                  {...(rowSelection.getCheckboxProps?.(record) || {})}
                />
              </div>
            </td>
          )}
          {columns.map((column, colIndex) => {
            const cellClasses = clsx(
              baseCellClasses,
              colIndex === 0 && "font-medium",
              column.key === "access" && "text-zinc-500",
              "text-left"
            );

            return (
              <td key={column.key || colIndex} className={cellClasses}>
                <div className="py-0.5">
                  {column.render
                    ? column.render(record[column.key], record, rowIndex)
                    : record[column.key]}
                </div>
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
      {renderRows()}
    </tbody>
  );
};
