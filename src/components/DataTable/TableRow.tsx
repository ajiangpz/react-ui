import React from 'react';
import { TableRowProps } from './types';
import clsx from 'clsx';
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps<any>>(
  ({ className, record, index, selected, onClick, children, ...props }, ref) => {
    const handleClick = () => {
      onClick?.(record, index);
    };

    return (
      <tr
        ref={ref}
        className={clsx(
          'transition-colors duration-200',
          'hover:bg-gray-50',
          {
            'bg-blue-50 hover:bg-blue-100': selected,
          },
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow'; 