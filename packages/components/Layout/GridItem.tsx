import React from "react";
import clsx from "clsx";

// 预定义所有可能的类名组合
const colsClassMap = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12"
} as const;

// 预定义所有响应式类名
const responsiveColsClassMap = {
  sm: {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-6",
    7: "sm:col-span-7",
    8: "sm:col-span-8",
    9: "sm:col-span-9",
    10: "sm:col-span-10",
    11: "sm:col-span-11",
    12: "sm:col-span-12"
  },
  md: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12"
  },
  lg: {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12"
  },
  xl: {
    1: "xl:col-span-1",
    2: "xl:col-span-2",
    3: "xl:col-span-3",
    4: "xl:col-span-4",
    5: "xl:col-span-5",
    6: "xl:col-span-6",
    7: "xl:col-span-7",
    8: "xl:col-span-8",
    9: "xl:col-span-9",
    10: "xl:col-span-10",
    11: "xl:col-span-11",
    12: "xl:col-span-12"
  },
  "2xl": {
    1: "2xl:col-span-1",
    2: "2xl:col-span-2",
    3: "2xl:col-span-3",
    4: "2xl:col-span-4",
    5: "2xl:col-span-5",
    6: "2xl:col-span-6",
    7: "2xl:col-span-7",
    8: "2xl:col-span-8",
    9: "2xl:col-span-9",
    10: "2xl:col-span-10",
    11: "2xl:col-span-11",
    12: "2xl:col-span-12"
  }
} as const;

type Span = keyof typeof colsClassMap;
type Breakpoint = keyof typeof responsiveColsClassMap;

type ResponsiveSpan = {
  [K in Breakpoint]?: Span;
} & {
  base?: Span; // 添加基础尺寸配置，用于小于 sm 的屏幕
};

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span: Span | ResponsiveSpan;
  children: React.ReactNode;
}

const getResponsiveClasses = (span: Span | ResponsiveSpan): string[] => {
  if (typeof span === "number") {
    return [colsClassMap[span]];
  }

  const classes: string[] = [];

  // 处理响应式配置
  if (typeof span === "object") {
    // 首先添加基础样式（用于小于 sm 的屏幕）
    if (span.base) {
      classes.push(colsClassMap[span.base]);
    } else {
      classes.push(colsClassMap[12]); // 如果没有指定基础尺寸，默认占满宽度
    }

    // 添加响应式样式
    Object.entries(span).forEach(([breakpoint, value]) => {
      if (breakpoint !== 'base') {
        const bp = breakpoint as Breakpoint;
        if (value && bp in responsiveColsClassMap) {
          classes.push(responsiveColsClassMap[bp][value]);
        }
      }
    });
  }

  return classes;
};

export const GridItem: React.FC<GridItemProps> = ({
  span,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={clsx(getResponsiveClasses(span), className)} {...rest}>
      {children}
    </div>
  );
};
