
export interface ColumnDef<T = any> {
  key: string;
  title: string;
  width?: string | number;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sorter?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface VirtualScrollConfig {
  rowHeight: number;
  overscan?: number;
}

export interface VirtualScrollState {
  startIndex: number;
  endIndex: number;
  paddingTop: number;
  paddingBottom: number;
}

export interface RowSelection<T> {
  selectedRowKeys: string[];
  onChange: (selectedRowKeys: string[], selectedRows: T[]) => void;
  getCheckboxProps?: (record: T) => { 
    disabled?: boolean; 
    title?: string;
  };
}

export interface TableProps<T = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  loading?: boolean;
  height?: number | string;
  className?: string;
  onSort?: (key: string, order: 'asc' | 'desc') => void;
  onRowClick?: (record: T) => void;
  rowSelection?: RowSelection<T>;
  rowKey?: string;
  stickyHeader?: boolean;
  virtualScroll?: {
    rowHeight: number;
    overscan?: number;
  };
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
}

export interface TableContextType<T = any> {
  columns: ColumnDef<T>[];
  dataSource: T[];
  rowKey: string;
  rowSelection?: RowSelection<T>;
  currentSortKey?: string;
  sortOrder?: 'asc' | 'desc';
  setSort?: (key: string) => void;
  getRowKey: (record: T) => string | number;
  onRowClick?: (record: T) => void;
  stickyHeader?: boolean;
  columnWidths: (string | number)[];
  virtualScroll?: VirtualScrollState;
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

