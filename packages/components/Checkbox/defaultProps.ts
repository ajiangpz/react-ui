import { TdCheckboxProps, TdCheckboxGroupProps } from "./type";

export const checkboxDefaultProps: TdCheckboxProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: undefined,
  indeterminate: false,
  readonly: false,
};

export const checkboxGroupDefaultProps: TdCheckboxGroupProps = { max: undefined, defaultValue: [] };
