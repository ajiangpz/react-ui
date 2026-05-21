import type React from "react";

export type InputNumberValue = number | string;
export type SelectValue<T = unknown> = string | number | Array<string | number> | T;
export interface SelectOption {
  [key: string]: unknown;
}

interface TendauiComponentProps {
  [key: string]: any;
  onChange?: (value: any, ...args: any[]) => void;
  onClose?: (context: any) => void;
  onConfirm?: (context: any) => void;
  onVisibleChange?: (visible: boolean, context: any) => void;
}

type TendauiComponent = React.ComponentType<TendauiComponentProps>;

export const Button: TendauiComponent;
export const ColorPickerPanel: TendauiComponent;
export const Drawer: TendauiComponent;
export const InputNumber: TendauiComponent;
export const List: TendauiComponent & {
  ListItem: TendauiComponent;
};
export const Popup: TendauiComponent;
export const Radio: TendauiComponent & {
  Button: TendauiComponent;
};
export const RadioGroup: TendauiComponent & {
  Button: TendauiComponent;
};
export const Select: TendauiComponent;
export const Slider: TendauiComponent;

export const DialogPlugin: {
  confirm: (options: {
    [key: string]: any;
    onClose?: (context: any) => void;
    onConfirm?: (context: any) => void;
  }) => {
    hide: () => void;
  };
};

declare const FakeArrow: TendauiComponent;
export default FakeArrow;
