import React, { useContext, useMemo, useCallback } from "react";
import { TableContextType } from "./types";
import { TableContext } from "./context";
import { TableCell } from "./TableCell";
import { Checkbox } from "./Checkbox";
import clsx from "clsx";

export const TableHead: React.FC = () => {
  const {
    columns,
    rowSelection,
    currentSortKey,
    sortOrder,
    setSort,
    dataSource,
    getRowKey,
    stickyHeader
  } = useContext<TableContextType>(TableContext);

  // 计算全选状态
  const { checked: allChecked, indeterminate } = useMemo(() => {
    if (!rowSelection || !dataSource.length) {
      return { checked: false, indeterminate: false };
    }

    const { selectedRowKeys, getCheckboxProps } = rowSelection;
    const availableKeys = dataSource
      .filter(record => !getCheckboxProps?.(record)?.disabled)
      .map(getRowKey);

    if (!availableKeys.length) {
      return { checked: false, indeterminate: false };
    }

    const selectedAvailableKeys = selectedRowKeys.filter(key =>
      availableKeys.includes(key)
    );

    return {
      checked: selectedAvailableKeys.length === availableKeys.length,
      indeterminate:
        selectedAvailableKeys.length > 0 &&
        selectedAvailableKeys.length < availableKeys.length
    };
  }, [rowSelection, dataSource, getRowKey]);

  // 处理全选
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (!rowSelection) return;

      const { onChange, getCheckboxProps } = rowSelection;
      if (!onChange) return;

      const availableRecords = dataSource.filter(
        record => !getCheckboxProps?.(record)?.disabled
      );

      const newSelectedKeys = checked ? availableRecords.map(getRowKey) : [];
      onChange(newSelectedKeys as string[], availableRecords);
    },
    [rowSelection, dataSource, getRowKey]
  );

  const renderSelectionCell = useCallback(() => {
    if (!rowSelection) return null;

    return (
      <th
        key="selection"
        className={clsx(
          "border-b border-b-zinc-950/10 px-6 py-4 font-medium first:pl-6 last:pr-6 dark:border-b-white/10",
          "bg-white dark:bg-zinc-900",
          "w-14"
        )}
      >
        <div className="flex items-center justify-center h-5">
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={handleSelectAll}
          />
        </div>
      </th>
    );
  }, [rowSelection, allChecked, indeterminate, handleSelectAll]);

  return (
    <thead className="text-zinc-500 dark:text-zinc-400">
      <tr>
        {renderSelectionCell()}
        {columns.map((column, index) => {
          const baseClasses = clsx(
            "border-b border-b-zinc-950/10 px-6 py-4 font-medium first:pl-6 last:pr-6 dark:border-b-white/10",
            "bg-white dark:bg-zinc-900",
            "text-left",
            column.sorter && "cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200"
          );

          return (
            <th
              key={column.key || index}
              onClick={() => column.sorter && setSort?.(column.key)}
              className={baseClasses}
            >
              <div className="flex items-center gap-3 h-5">
                {column.title}
                {column.sorter && currentSortKey === column.key && (
                  <span className="text-primary-500 ml-auto">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

TableHead.displayName = "TableHead";
