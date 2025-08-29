import React, { CSSProperties, ReactElement } from 'react';
export interface StyledProps {
  style?: React.CSSProperties;
  className?: string;
}

export type AttachNodeReturnValue = HTMLElement | Element | Document | null;
export type AttachNode =
  | CSSSelector
  | ((triggerNode?: HTMLElement) => AttachNodeReturnValue);

export type CSSSelector = string;

export type Styles = CSSProperties;

export type TNode = React.ReactNode | ((options: any) => React.ReactNode);

export type ClassName = string | string[] | { [key: string]: boolean };

export type SizeEnum = 'small' | 'medium' | 'large';

export type ShapeEnum = 'circle' | 'round';

export type HorizontalAlignEnum = 'left' | 'center' | 'right';

export type VerticalAlignEnum = 'top' | 'middle' | 'bottom';

export type LayoutEnum = 'vertical' | 'horizontal';
// TElement 表示 API 只接受传入组件
export type TElement<T = undefined> = T extends undefined
  ? ReactElement
  : (props: T) => ReactElement;
