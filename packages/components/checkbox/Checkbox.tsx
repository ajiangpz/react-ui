import React from "react";
import Check, { CheckProps } from "../common/Check";
import { checkboxDefaultProps } from "./defaultProps";
import useDefaultProps from "../hooks/useDefaultProps";

export type CheckboxProps = Omit<CheckProps, "type">;

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLLabelElement>) => (
    <Check ref={ref} type="checkbox" {...useDefaultProps<CheckboxProps>(props, checkboxDefaultProps)} />
  )
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
