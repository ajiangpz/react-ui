import React, { CSSProperties } from 'react';
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
