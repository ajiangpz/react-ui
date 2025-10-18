import { ReactNode } from 'react';

// TNode 类型定义
export type TNode<T = any> = ReactNode | ((props: T) => ReactNode) | boolean;
