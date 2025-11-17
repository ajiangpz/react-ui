import { useMemo } from "react";
import classNames from "classnames";
import { BaseTableProps } from "../type";
import useTableClassName from "./useTableClassName";

export interface TableStyleResult {
  tableClasses: string;
  tableContentStyles: React.CSSProperties;
  tableElementStyles: React.CSSProperties;
}

/**
 * 格式化 CSS 单位
 */
export function formatCSSUnit(unit: string | number | undefined): string | undefined {
  if (!unit) return undefined;
  if (typeof unit === "string") {
    // 如果已经是字符串且包含单位，直接返回
    if (/px|em|rem|%|vh|vw/.test(unit)) {
      return unit;
    }
    // 如果是纯数字字符串，添加 px
    if (!isNaN(Number(unit))) {
      return `${unit}px`;
    }
    return unit;
  }
  // 数字类型，添加 px
  return `${unit}px`;
}

export default function useTableStyle(props: BaseTableProps): TableStyleResult {
  const {
    bordered = false,
    stripe = false,
    hover = false,
    size = "medium",
    tableLayout = "fixed",
    verticalAlign = "middle",
    height,
    maxHeight,
    className,
    style
  } = props;

  const tableClassNames = useTableClassName();

  // 构建表格类名
  const tableClasses = useMemo(
    () =>
      classNames(
        tableClassNames.table,
        {
          [tableClassNames.bordered]: bordered,
          [tableClassNames.stripe]: stripe,
          [tableClassNames.hover]: hover,
          [tableClassNames.sizeSmall]: size === "small",
          [tableClassNames.sizeMedium]: size === "medium",
          [tableClassNames.sizeLarge]: size === "large",
          [tableClassNames.layoutFixed]: tableLayout === "fixed",
          [tableClassNames.layoutAuto]: tableLayout === "auto",
          [tableClassNames.verticalAlignTop]: verticalAlign === "top",
          [tableClassNames.verticalAlignMiddle]: verticalAlign === "middle",
          [tableClassNames.verticalAlignBottom]: verticalAlign === "bottom"
        },
        className
      ),
    [bordered, stripe, hover, size, tableLayout, verticalAlign, className, tableClassNames]
  );

  // 表格内容区样式
  const tableContentStyles = useMemo<React.CSSProperties>(() => {
    const styles: React.CSSProperties = {};
    if (maxHeight) {
      styles.maxHeight = formatCSSUnit(maxHeight);
    }
    if (height) {
      styles.height = formatCSSUnit(height);
    }
    return styles;
  }, [height, maxHeight]);

  // 表格元素样式
  const tableElementStyles = useMemo<React.CSSProperties>(() => {
    return style || {};
  }, [style]);

  return {
    tableClasses,
    tableContentStyles,
    tableElementStyles
  };
}
