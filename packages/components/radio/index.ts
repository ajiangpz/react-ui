import _Radio from "./Radio";
import _RadioGroup from "./RadioGroup";

import "./style/index.js";

export type { RadioProps } from "./Radio";
export type { RadioGroupProps } from "./RadioGroup";
export * from "./type";

export const Radio = Object.assign(_Radio, { Group: _RadioGroup });
export const RadioGroup = _RadioGroup;

export default Radio;
