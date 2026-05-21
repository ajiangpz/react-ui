import _Checkbox from "./Checkbox";
import _CheckboxGroup from "./CheckboxGroup";

import "./style/index.js";

export type { CheckboxProps } from "./Checkbox";
export type { CheckboxGroupProps } from "./CheckboxGroup";
export * from "./type";

export const Checkbox = Object.assign(_Checkbox, { Group: _CheckboxGroup });
export const CheckboxGroup = _CheckboxGroup;
export default Checkbox;
