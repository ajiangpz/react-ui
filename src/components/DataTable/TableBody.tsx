import React, { useContext, useCallback, memo } from 'react';
import { TableBodyProps, TableContextType, ColumnDef } from './types';
import { TableContext } from './context';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { Checkbox } from './Checkbox';
import clsx from 'clsx';

// 创建一个独立的 TableRowMemo 组件来优化行渲染
const TableRowMemo = memo<{
  record: any;
  index: number;
  columns: ColumnDef[];
  rowSelection?: TableContextType['rowSelection'];
  getRowKey: (record: any) => string;
  onRowClick?: (record: any, index: number) => void;
  virtualScroll?: boolean;
}>(({ record, index, columns, rowSelection, getRowKey, onRowClick, virtualScroll }) => {
  const key = getRowKey(record);
  const selected = rowSelection?.selectedRowKeys?.includes(key);

  const renderSelectionCell = () => {
    if (!rowSelection) return null;

    const { selectedRowKeys, onChange, getCheckboxProps } = rowSelection;
    const checked = selectedRowKeys.includes(key);
    const checkboxProps = getCheckboxProps?.(record) || {};

    const handleSelect = (checked: boolean) => {
      if (!onChange) return;

      const newSelectedKeys = checked
        ? [...selectedRowKeys, key]
        : selectedRowKeys.filter(k => k !== key);

      onChange(newSelectedKeys, [record]);
    };

    return (
      <TableCell
        key="selection"
        className="w-12 px-4 py-2.5 border-b border-gray-200"
      >
        <Checkbox
          checked={checked}
          disabled={checkboxProps.disabled}
          title={checkboxProps.title}
          onChange={handleSelect}
        />
      </TableCell>
    );
  };

  return (
    <TableRow
      key={key}
      record={record}
      index={index}
      selected={selected}
      onClick={onRowClick}
      style={virtualScroll ? { height: '40px' } : undefined}
      className={clsx(
        'transition-colors duration-200',
        selected && 'bg-blue-50 hover:bg-blue-100',
        !selected && 'hover:bg-gray-50'
      )}
    >
      {rowSelection && renderSelectionCell()}
      {columns.map((column: ColumnDef) => (
        <TableCell
          key={column.key}
          align={column.align}
          className={clsx(
            'px-4 py-2.5 text-gray-800 border-b border-gray-200',
            selected && 'border-blue-100'
          )}
        >
          {column.render
            ? column.render(record[column.dataIndex], record, index)
            : record[column.dataIndex]}
        </TableCell>
      ))}
    </TableRow>
  );
});

TableRowMemo.displayName = 'TableRowMemo';

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, style, ...props }, ref) => {
    const {
      columns,
      dataSource,
      getRowKey,
      onRowClick,
      rowSelection,
      virtualScroll
    } = useContext<TableContextType>(TableContext);

    const visibleData = virtualScroll
      ? dataSource.slice(virtualScroll.startIndex, virtualScroll.endIndex + 1)
      : dataSource;

    const translateY = virtualScroll
      ? virtualScroll.startIndex * 40
      : 0;

    return (
      <tbody
        ref={ref}
        className={clsx('bg-white relative', className)}
        {...props}
      >
        {virtualScroll && (
          <tr style={{ height: `${translateY}px` }}>
            <td colSpan={columns.length + (rowSelection ? 1 : 0)} className="border-none p-0" />
          </tr>
        )}
        {visibleData.map((record, index) => (
          <TableRowMemo
            key={getRowKey(record)}
            record={record}
            index={virtualScroll ? index + virtualScroll.startIndex : index}
            columns={columns}
            rowSelection={rowSelection}
            getRowKey={getRowKey}
            onRowClick={onRowClick}
            virtualScroll={!!virtualScroll}
          />
        ))}
        {virtualScroll && (
          <tr style={{ height: `${(dataSource.length - virtualScroll.endIndex - 1) * 40}px` }}>
            <td colSpan={columns.length + (rowSelection ? 1 : 0)} className="border-none p-0" />
          </tr>
        )}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody'; 