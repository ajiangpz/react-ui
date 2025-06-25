import React, { useContext } from 'react';
import { TableBodyProps, TableContextType, ColumnDef } from './types';
import { TableContext } from './context';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import clsx from 'clsx';

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    const {
      columns,
      dataSource,
      getRowKey,
      isSelected,
      onRowClick,
    } = useContext<TableContextType>(TableContext);

    const renderRow = <T extends Record<string, any>>(record: T, index: number) => (
      <TableRow
        key={getRowKey(record)}
        record={record}
        index={index}
        selected={isSelected(record)}
        onClick={onRowClick}
      >
        {columns.map((column: ColumnDef<T>) => (
          <TableCell
            key={column.key}
            align={column.align}
            className="px-4 py-2.5 text-gray-800 border-b border-gray-200"
          >
            {column.render
              ? column.render(record[column.dataIndex], record, index)
              : record[column.dataIndex]}
          </TableCell>
        ))}
      </TableRow>
    );

    return (
      <tbody
        ref={ref}
        className={clsx('bg-white divide-y divide-gray-200', className)}
        {...props}
      >
        {dataSource.map((record, index) => renderRow(record, index))}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody'; 