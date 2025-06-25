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

export interface VirtualScrollConfig {
  enabled?: boolean;
  rowHeight: number;
  overscan?: number;
}

export interface VirtualScrollState {
  startIndex: number;
  endIndex: number;
  scrollTop: number;
  visibleCount: number;
}

export interface RowSelection<T> {
  selectedRowKeys: string[];
  onChange: (selectedRowKeys: string[], selectedRows: T[]) => void;
  getCheckboxProps?: (record: T) => { 
    disabled?: boolean; 
    title?: string;
  };
}

export interface TableProps<T extends Record<string, any> = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  rowKey?: string | ((record: T) => string);
  className?: string;
  loading?: boolean;
  height?: string | number;
  stickyHeader?: boolean;
  virtualScroll?: VirtualScrollConfig;
  rowSelection?: RowSelection<T>;
  onSort?: (key: string, order: 'asc' | 'desc' | undefined) => void;
  onRowClick?: (record: T, index: number) => void;
}

export interface TableContextType<T extends Record<string, any> = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  rowKey: string | ((record: T) => string);
  rowSelection?: RowSelection<T>;
  currentSortKey?: string;
  sortOrder?: 'asc' | 'desc';
  setSort: (key: string) => void;
  getRowKey: (record: T) => string;
  onRowClick?: (record: T, index: number) => void;
  columnWidths: (string | number)[];
  virtualScroll?: VirtualScrollState;
  stickyHeader?: boolean;
}

export interface TableHeadProps {
  className?: string;
}

export interface TableBodyProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface TableRowProps<T = any> {
  record: T;
  index: number;
  selected?: boolean;
  onClick?: (record: T, index: number) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface TableCellProps {
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  title?: string;
} 

