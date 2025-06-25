import React from 'react';
import { TableCellProps } from './types';
import clsx from 'clsx';

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = 'left', children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={clsx(
          'px-4 py-2 text-sm',
          {
            'text-left': align === 'left',
            'text-center': align === 'center',
            'text-right': align === 'right',
          },
          className
        )}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell'; 