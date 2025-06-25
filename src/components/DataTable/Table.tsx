import React, { forwardRef } from 'react';
import type { TableProps, TableContextType } from './types';
import { useTable } from './useTable';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableContext } from './context';
import clsx from 'clsx';

export const DataTable = forwardRef<HTMLDivElement, TableProps>((props, ref) => {
  const {
    columns,
    dataSource,
    loading,
    height,
    className,
    onSort,
    onRowClick,
    ...restProps
  } = props;

  const {
    sortState,
    selectedKeys,
    handleSort,
    handleSelect,
    handleSelectAll,
    isSelected,
    getRowKey,
  } = useTable(props);

  const contextValue: TableContextType = {
    columns,
    dataSource,
    rowKey: props.rowKey,
    selectedRowKeys: selectedKeys,
    onSelectionChange: props.onSelectionChange,
    currentSortKey: sortState?.key,
    sortOrder: sortState?.order,
    setSort: handleSort,
    getRowKey,
    isSelected,
    onRowClick,
  };

  // 计算列宽
  const columnWidths = columns.map(column => {
    if (column.width) return column.width;
    const avgWidth = `${100 / columns.length}%`;
    return avgWidth;
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'relative rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm',
        className
      )}
    >
      {loading && (
        <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary-600 border-t-transparent" />
        </div>
      )}
      
      <TableContext.Provider value={{ ...contextValue, columnWidths }}>
        <div className="w-full overflow-auto" style={height ? { height } : undefined}>
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              {columnWidths.map((width, index) => (
                <col key={index} style={{ width }} />
              ))}
            </colgroup>
            <TableHead />
            <TableBody />
          </table>
        </div>
      </TableContext.Provider>
    </div>
  );
}); 