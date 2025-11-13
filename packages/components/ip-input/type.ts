import { StyledProps } from "../common";

export interface TdIPInputProps {
  /**
   * 受控值，格式为 "192.168.0.1" 或 "2001:db8::1" 或 "192.168.0.1/24"
   */
  value?: string;
  /**
   * 非受控初始值
   */
  defaultValue?: string;
  /**
   * 值变化时触发
   */
  onChange?: (value: string) => void;
  /**
   * 失去焦点时触发
   */
  onBlur?: (value: string) => void;
  /**
   * 获得焦点时触发
   */
  onFocus?: () => void;
  /**
   * 是否允许 IPv6
   * @default false
   */
  allowIPv6?: boolean;
  /**
   * 是否允许 CIDR 格式（带掩码）
   * @default false
   */
  allowCIDR?: boolean;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;
  /**
   * 是否显示清空按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * 是否自动聚焦第一个输入框
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 是否显示分隔符（仅视觉，不可编辑）
   * @default true
   */
  showSegmentSeparators?: boolean;
  /**
   * 自定义格式化函数
   */
  formatter?: (value: string) => string;
  /**
   * 输入框 ID
   */
  id?: string;
  /**
   * 输入框 name 属性
   */
  name?: string;
  /**
   * aria-label
   */
  ariaLabel?: string;
  /**
   * 段输入框的 className
   */
  segmentClassName?: string;
  /**
   * 段输入框的 style
   */
  inputStyle?: React.CSSProperties;
  /**
   * 分隔符（默认根据 IPv4/IPv6 自动选择）
   */
  separator?: string;
  /**
   * 提示文本
   */
  tips?: string;
}

export interface IPInputProps extends TdIPInputProps, StyledProps {}

export interface IPInputRef {
  /**
   * 聚焦第一个输入框
   */
  focus: () => void;
  /**
   * 失焦
   */
  blur: () => void;
  /**
   * 清空所有输入
   */
  clear: () => void;
  /**
   * 获取当前值
   */
  getValue: () => string;
}
