import React from 'react';
import { TableRowProps } from './types';

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps<any>>(
  ({ className, record, index, selected, onClick, children, ...props }, ref) => {
    const handleClick = () => {
      onClick?.(record, index);
    };

    return (
      <tr
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow'; 