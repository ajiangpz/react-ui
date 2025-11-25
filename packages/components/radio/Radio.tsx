import React, { Ref, forwardRef } from "react";
import forwardRefWithStatics from "../utils/forwardRefWithStatics";
import Check, { CheckProps } from "../common/Check";
import RadioGroup from "./RadioGroup";
import { radioDefaultProps } from "./defaultProps";
import useDefaultProps from "../hooks/useDefaultProps";

export type RadioProps = Omit<CheckProps, "type">;
const RadioButton = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => (
  <Check ref={ref} type="radio-button" {...useDefaultProps<RadioProps>(props, radioDefaultProps)} />
));
RadioButton.displayName = "RadioButton";
const Radio = forwardRefWithStatics(
  (props: RadioProps, ref: Ref<HTMLLabelElement>) => (
    <Check ref={ref} type="radio" {...useDefaultProps<RadioProps>(props, radioDefaultProps)} />
  ),
  {
    Group: RadioGroup,
    Button: RadioButton
  }
);
Radio.displayName = "Radio";

export default Radio;
