import React, { forwardRef, useRef, useCallback, useMemo } from "react";
import type { TableProps, TableContextType } from "./types";
import { useTable } from "./useTable";
import { useVirtualScroll } from "./useVirtualScroll";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableContext } from "./context";
import clsx from "clsx";

export const DataTable = forwardRef<HTMLDivElement, TableProps>(
  (props, ref) => {
    const {
      columns,
      dataSource,
      loading,
      height,
      className,
      onRowClick,
      rowSelection,
      rowKey = "id",
      stickyHeader,
      virtualScroll: virtualScrollConfig,
      scroll
    } = props;

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const containerHeight = typeof scroll?.y === 'number' ? scroll.y : 
                          typeof height === 'number' ? height : 
                          undefined;

    const { sortState, handleSort, getRowKey } = useTable(props);

    const { virtualState, updateVirtualScroll } = useVirtualScroll(
      dataSource.length,
      containerHeight,
      virtualScrollConfig
    );

    const handleScroll = useCallback(
      (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop;
        updateVirtualScroll(scrollTop);
      },
      [updateVirtualScroll]
    );

    const contextValue = useMemo<TableContextType>(
      () => ({
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
      }),
      [
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
      ]
    );

    // 计算表格容器样式
    const tableContainerStyle = useMemo(() => {
      const style: React.CSSProperties = {};
      
      if (scroll?.y) {
        style.maxHeight = scroll.y;
        style.overflowY = 'auto';
      }
      
      if (scroll?.x) {
        style.minWidth = scroll.x;
      }
      
      return style;
    }, [scroll]);

    // 计算表格样式
    const tableStyle = useMemo(() => {
      const style: React.CSSProperties = {};
      
      if (scroll?.x) {
        style.width = scroll.x;
        style.maxWidth = 'none';
      }
      
      return style;
    }, [scroll]);

    return (
      <div
        ref={ref}
        className={clsx(
          "-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900",
          className
        )}
      >
        <div className="w-full">
          <div className="flow-root">
            <div className="relative">
              {loading && (
                <div className="absolute inset-0 bg-white/75 dark:bg-zinc-900/75 flex items-center justify-center z-50">
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary-600 border-t-transparent" />
                </div>
              )}

              <TableContext.Provider value={contextValue}>
                <div className="w-full relative">
                  {/* 表头容器 - 固定位置，不滚动 */}
                  <div className="w-full">
                    <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
                      <colgroup>
                        {rowSelection && <col className="w-12" />}
                        {contextValue.columnWidths.map((width, index) => (
                          <col key={index} style={{ width }} />
                        ))}
                      </colgroup>
                      <TableHead />
                    </table>
                  </div>

                  {/* 表体容器 - 可滚动区域 */}
                  <div
                    ref={scrollContainerRef}
                    className={clsx(
                      "w-full overflow-y-auto",
                      "scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent hover:scrollbar-thumb-zinc-400 dark:hover:scrollbar-thumb-zinc-500"
                    )}
                    style={{
                      ...tableContainerStyle,
                      maxHeight: containerHeight ? `${containerHeight}px` : undefined // 减去表头高度
                    }}
                    onScroll={handleScroll}
                  >
                    <table 
                      className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white"
                      style={tableStyle}
                    >
                      <colgroup>
                        {rowSelection && <col className="w-12" />}
                        {contextValue.columnWidths.map((width, index) => (
                          <col key={index} style={{ width }} />
                        ))}
                      </colgroup>
                      <TableBody />
                    </table>
                  </div>
                </div>
              </TableContext.Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
