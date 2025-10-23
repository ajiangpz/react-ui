import { TdSelectProps, TdOptionProps, TdOptionGroupProps } from "./type";

export const selectDefaultProps: TdSelectProps = {
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  creatable: false,
  loading: false,
  max: 0,
  minCollapsedNum: 0,
  multiple: false,
  placeholder: undefined,
  readonly: false,
  reserveKeyword: false,
  showArrow: true,
  size: "medium",
  status: "default",
  valueType: "value",
};

export const optionDefaultProps: TdOptionProps = {
  checkAll: false,
  disabled: false,
};

export const optionGroupDefaultProps: TdOptionGroupProps = { divider: true };
