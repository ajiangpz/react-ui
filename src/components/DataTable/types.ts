import { ReactNode } from 'react';

export interface ColumnDef<T = any> {
  key: string;
  title: string;
  dataIndex: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

export interface TableProps<T = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  rowKey?: string | ((record: T) => string);
  className?: string;
  loading?: boolean;
  height?: string | number;
  onSelectionChange?: (selectedKeys: string[]) => void;
  onSort?: (key: string, order: 'asc' | 'desc' | undefined) => void;
  onRowClick?: (record: T, index: number) => void;
}

export interface TableContextType<T = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  rowKey?: string | ((record: T) => string);
  selectedRowKeys: string[];
  onSelectionChange?: (selectedKeys: string[]) => void;
  currentSortKey?: string;
  sortOrder?: 'asc' | 'desc';
  setSort: (key: string) => void;
  getRowKey: (record: T) => string;
  isSelected: (record: T) => boolean;
  onRowClick?: (record: T, index: number) => void;
  columnWidths?: (string | number)[];
}

export interface TableHeadProps {
  className?: string;
}

export interface TableBodyProps {
  className?: string;
}

export interface TableRowProps<T = any> {
  record: T;
  index: number;
  selected?: boolean;
  onClick?: (record: T, index: number) => void;
  children?: React.ReactNode;
  className?: string;
}

export interface TableCellProps {
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
} 

