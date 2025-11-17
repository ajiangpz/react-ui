import { ReactNode, MouseEvent } from "react";

// HTMLTableCellElement 是浏览器全局类型，无需导入

/**
 * 表格行数据类型
 */
export type TableRowData = Record<string, unknown>;

/**
 * 列对齐方式
 */
export type TableColumnAlign = "left" | "center" | "right";

/**
 * 表格尺寸
 */
export type TableSize = "small" | "medium" | "large";

/**
 * 表格布局方式
 */
export type TableLayout = "auto" | "fixed";

/**
 * 单元格参数
 */
export interface BaseTableCellParams<T extends TableRowData = TableRowData> {
  row: T;
  rowIndex: number;
  col: BaseTableCol<T>;
  colIndex: number;
  e?: React.MouseEvent<HTMLElement>;
}

/**
 * 表头单元格参数
 */
export interface BaseTableHeadCellParams<T extends TableRowData = TableRowData> {
  col: BaseTableCol<T>;
  colIndex: number;
}

/**
 * 表格列配置
 */
export interface BaseTableCol<T extends TableRowData = TableRowData> {
  /**
   * 列标识，必需
   */
  colKey: string;
  /**
   * 列标题
   */
  title?: string | ReactNode | ((params: BaseTableHeadCellParams<T>) => ReactNode);
  /**
   * 列宽度
   */
  width?: string | number;
  /**
   * 列最小宽度
   */
  minWidth?: string | number;
  /**
   * 列对齐方式
   */
  align?: TableColumnAlign;
  /**
   * 自定义单元格渲染
   */
  cell?: string | ReactNode | ((params: BaseTableCellParams<T>) => ReactNode);
  /**
   * 自定义表头渲染
   */
  render?: (params: BaseTableHeadCellParams<T> | BaseTableCellParams<T>) => ReactNode;
  /**
   * 是否固定列
   */
  fixed?: "left" | "right";
  /**
   * 列类名
   */
  className?: string | ((params: BaseTableCellParams<T>) => string);
  /**
   * 列属性
   */
  attrs?: Record<string, unknown> | ((params: BaseTableCellParams<T>) => Record<string, unknown>);
  /**
   * 是否省略文本
   */
  ellipsis?: boolean | { content?: ReactNode; props?: Record<string, unknown> };
  /**
   * 子列（多级表头）
   */
  children?: BaseTableCol<T>[];
}

/**
 * 基础表格属性
 */
export interface BaseTableProps<T extends TableRowData = TableRowData> {
  /**
   * 列配置
   * @default []
   */
  columns?: BaseTableCol<T>[];
  /**
   * 数据源
   * @default []
   */
  data?: T[];
  /**
   * 行唯一标识字段名
   * @default 'id'
   */
  rowKey?: string;
  /**
   * 是否显示表头
   * @default true
   */
  showHeader?: boolean;
  /**
   * 是否显示边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: boolean;
  /**
   * 是否显示悬浮效果
   * @default false
   */
  hover?: boolean;
  /**
   * 表格尺寸
   * @default 'medium'
   */
  size?: TableSize;
  /**
   * 表格布局方式
   * @default 'fixed'
   */
  tableLayout?: TableLayout;
  /**
   * 垂直对齐方式
   * @default 'middle'
   */
  verticalAlign?: "top" | "middle" | "bottom";
  /**
   * 表格高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px
   */
  height?: string | number;
  /**
   * 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px
   */
  maxHeight?: string | number;
  /**
   * 空数据展示内容
   */
  empty?: ReactNode;
  /**
   * 单元格为空时的展示内容
   */
  cellEmptyContent?: ReactNode | ((params: BaseTableCellParams<T>) => ReactNode);
  /**
   * 行类名
   */
  rowClassName?: string | ((params: { row: T; rowIndex: number }) => string);
  /**
   * 行属性
   */
  rowAttributes?: Record<string, unknown> | ((params: { row: T; rowIndex: number }) => Record<string, unknown>);
  /**
   * 行点击事件
   */
  onRowClick?: (params: { row: T; rowIndex: number; e: MouseEvent<HTMLTableRowElement> }) => void;
  /**
   * 单元格点击事件
   */
  onCellClick?: (params: BaseTableCellParams<T>) => void;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
}
