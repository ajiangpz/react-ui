import useConfig from "./useConfig";
import Icon, { IconProps } from "@tendaui/icons";
import React from "react";

// 通过 convertIcon 创建的图标组件类型，不需要 svg 和 type 属性
type ConvertedIconComponent = React.ForwardRefExoticComponent<
  Omit<IconProps, "svg" | "type"> & React.RefAttributes<HTMLSpanElement>
>;

// 从 globalConfig 获取 icon 配置用于覆盖组件内置 icon
export default function useGlobalIcon(tdIcon: Record<string, ConvertedIconComponent>) {
  const { icon: globalIcon } = useConfig();

  const resultIcon: Record<string, ConvertedIconComponent> = {};

  Object.keys(tdIcon).forEach((key) => {
    resultIcon[key] = globalIcon?.[key] || tdIcon[key];
  });

  return resultIcon;
}
