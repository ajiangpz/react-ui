import React, { forwardRef, useRef, useCallback, useMemo } from 'react';
import type { TableProps, TableContextType } from './types';
import { useTable } from './useTable';
import { useVirtualScroll } from './useVirtualScroll';
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
    rowSelection,
    rowKey = 'id',
    stickyHeader,
    virtualScroll: virtualScrollConfig,
    ...restProps
  } = props;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerHeight = typeof height === 'number' ? height : undefined;

  const {
    sortState,
    handleSort,
    getRowKey,
  } = useTable(props);

  const { virtualState, updateVirtualScroll, totalHeight } = useVirtualScroll(
    dataSource.length,
    containerHeight,
    virtualScrollConfig
  );

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    updateVirtualScroll(scrollTop);
  }, [updateVirtualScroll]);

  // 使用 useMemo 缓存 contextValue
  const contextValue = useMemo<TableContextType>(() => ({
    columns,
    dataSource,
    rowKey,
    rowSelection,
    currentSortKey: sortState?.key,
    sortOrder: sortState?.order,
    setSort: handleSort,
    getRowKey,
    onRowClick,
    stickyHeader,
    columnWidths: columns.map(column => {
      if (column.width) return column.width;
      return `${100 / columns.length}%`;
    }),
    virtualScroll: virtualState
  }), [
    columns,
    dataSource,
    rowKey,
    rowSelection,
    sortState,
    handleSort,
    getRowKey,
    onRowClick,
    stickyHeader,
    virtualState
  ]);

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
      
      <TableContext.Provider value={contextValue}>
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-auto" 
          style={height ? { height } : undefined}
          onScroll={handleScroll}
        >
          <div style={{ height: totalHeight || undefined }}>
            <table className="w-full table-fixed border-collapse">
              <colgroup>
                {rowSelection && <col style={{ width: 48 }} />}
                {contextValue.columnWidths.map((width, index) => (
                  <col key={index} style={{ width }} />
                ))}
              </colgroup>
              <TableHead />
              <TableBody />
            </table>
          </div>
        </div>
      </TableContext.Provider>
    </div>
  );
}); 