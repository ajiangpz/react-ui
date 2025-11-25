import { TdRadioProps, TdRadioGroupProps } from "./type";

export const radioDefaultProps: TdRadioProps = {
  allowUncheck: false,
  defaultChecked: false,
  disabled: undefined,
  readonly: undefined,
  value: undefined
};

export const radioGroupDefaultProps: TdRadioGroupProps = {
  allowUncheck: false,
  disabled: undefined,
  readonly: undefined,
  size: "medium",
  variant: "outline",
  theme: "radio"
};
