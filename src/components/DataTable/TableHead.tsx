import React, { useContext, useMemo, useCallback } from 'react';
import { TableHeadProps, ColumnDef, TableContextType } from './types';
import { TableContext } from './context';
import { TableCell } from './TableCell';
import { Checkbox } from './Checkbox';
import clsx from 'clsx';

export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    const { 
      columns, 
      dataSource,
      rowSelection,
      currentSortKey, 
      sortOrder, 
      setSort,
      getRowKey,
      columnWidths,
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
        indeterminate: selectedAvailableKeys.length > 0 && 
          selectedAvailableKeys.length < availableKeys.length
      };
    }, [rowSelection, dataSource, getRowKey]);

    // 处理全选
    const handleSelectAll = useCallback((checked: boolean) => {
      if (!rowSelection) return;

      const { onChange, getCheckboxProps } = rowSelection;
      if (!onChange) return;

      const availableRecords = dataSource.filter(
        record => !getCheckboxProps?.(record)?.disabled
      );

      const newSelectedKeys = checked ? availableRecords.map(getRowKey) : [];
      onChange(newSelectedKeys, availableRecords);
    }, [rowSelection, dataSource, getRowKey]);

    const renderSelectionCell = useCallback(() => {
      if (!rowSelection) return null;

      return (
        <TableCell
          key="selection"
          className={clsx(
            'w-12 px-4 py-3 border-b border-gray-200',
            stickyHeader && 'sticky left-0 z-10 bg-gray-50'
          )}
        >
          <Checkbox
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={handleSelectAll}
          />
        </TableCell>
      );
    }, [rowSelection, allChecked, indeterminate, handleSelectAll, stickyHeader]);

    return (
      <thead
        ref={ref}
        className={clsx(
          'bg-gray-50 text-gray-700',
          stickyHeader && 'sticky top-0 z-20',
          className
        )}
        {...props}
      >
        <tr>
          {renderSelectionCell()}
          {columns.map((column: ColumnDef, index: number) => (
            <TableCell
              key={column.key}
              align={column.align}
              style={{ width: columnWidths[index] }}
              className={clsx(
                'px-4 py-3 font-medium border-b border-gray-200',
                column.sortable && 'cursor-pointer select-none hover:bg-gray-100',
                stickyHeader && 'bg-gray-50'
              )}
              onClick={() => column.sortable && setSort(column.key)}
            >
              <div className="flex items-center gap-1 justify-center">
                {column.title}
                {column.sortable && currentSortKey === column.key && (
                  <span className="text-xs text-blue-600">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </TableCell>
          ))}
        </tr>
      </thead>
    );
  }
);

TableHead.displayName = 'TableHead'; 