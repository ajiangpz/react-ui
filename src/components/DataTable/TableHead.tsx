import React, { useContext } from 'react';
import { TableHeadProps, ColumnDef, TableContextType } from './types';
import { TableContext } from './context';
import { TableCell } from './TableCell.tsx';
import clsx from 'clsx';

export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    const { columns, currentSortKey, sortOrder, setSort, columnWidths } = useContext<TableContextType>(TableContext);

    const handleSort = (key: string) => {
      if (!setSort) return;
      setSort(key);
    };

    return (
      <thead
        ref={ref}
        className={clsx('bg-gray-50 text-gray-700', className)}
        {...props}
      >
        <tr>
          {columns.map((column: ColumnDef, index: number) => (
            <TableCell
              key={column.key}
              align={column.align}
              style={{ width: columnWidths?.[index] }}
              className={clsx(
                'px-4 py-3 font-medium border-b border-gray-200',
                column.sortable && 'cursor-pointer select-none hover:bg-gray-100'
              )}
              onClick={() => column.sortable && handleSort(column.key)}
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