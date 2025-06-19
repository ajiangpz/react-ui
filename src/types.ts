// types.ts
export interface RowProps {
  gutter?: number; // 单位 px
  children: React.ReactNode;
  className?: string;
}

export interface ColProps {
  span?: number; // 默认栅格为 24
  offset?: number;
  order?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: React.ReactNode;
  className?: string;
}
