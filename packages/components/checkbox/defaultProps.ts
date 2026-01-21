import { CheckboxGroupValue, TdCheckboxProps, TdCheckboxGroupProps } from "./type";

export const checkboxDefaultProps: TdCheckboxProps = {
  checkAll: false,
  defaultChecked: false,
  disabled: undefined,
  indeterminate: false,
  readonly: false
};

export const checkboxGroupDefaultProps: Partial<TdCheckboxGroupProps> = {
  max: undefined,
  defaultValue: [] as CheckboxGroupValue
};
