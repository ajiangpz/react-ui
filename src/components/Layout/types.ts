// types.ts

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ResponsiveCol {
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 18 | 24;
  offset?: 1 | 2 | 3 | 6 | 12;
  order?: 1 | 2 | 3 | 4;
}

export interface RowProps {
  gutter?: number | [number, number]; // [水平, 垂直]
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'top' | 'middle' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

export interface ColProps extends ResponsiveCol {
  xs?: number | ResponsiveCol["span"];
  sm?: number | ResponsiveCol["span"];
  md?: number | ResponsiveCol["span"];
  lg?: number | ResponsiveCol["span"];
  xl?: number | ResponsiveCol["span"];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
