import React from "react";
import clsx from "clsx";
const gridClassMap = {
  cols: {
    12: "grid-cols-12",
    11: "grid-cols-11",
    10: "grid-cols-10",
    9: "grid-cols-9",
    8: "grid-cols-8",
    7: "grid-cols-7",
    6: "grid-cols-6",
    5: "grid-cols-5",
    4: "grid-cols-4",
    3: "grid-cols-3",
    2: "grid-cols-2",
    1: "grid-cols-1"
  },
  gap: {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16"
  }
};
type Cols = keyof typeof gridClassMap.cols;
type Gap = keyof typeof gridClassMap.gap;
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: Cols; // 默认12栅格
  gap?: Gap; // 间距
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  cols = 12,
  gap = 4,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        `grid ${gridClassMap.cols[cols]} ${gridClassMap.gap[gap]}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
