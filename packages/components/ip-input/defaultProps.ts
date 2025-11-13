import { TdIPInputProps } from "./type";

export const ipInputDefaultProps: Partial<TdIPInputProps> = {
  allowIPv6: false,
  allowCIDR: false,
  readOnly: false,
  showClear: false,
  autoFocus: false,
  showSegmentSeparators: true,
  defaultValue: ""
};
