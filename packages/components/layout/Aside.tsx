import React from "react";
import classNames from "classnames";
import useConfig from "../hooks/useConfig";
import { TdAsideProps } from "./type";
import { StyledProps } from "../common";
import useDefaultProps from "../hooks/useDefaultProps";
export interface AsideProps extends TdAsideProps, StyledProps {
  /**
   * 文本内容
   */
  children?: React.ReactNode;
}

const Aside: React.FC<AsideProps> = (props) => {
  const { width, className, style, children, ...otherAsideProps } = useDefaultProps(props, { width: "232px" });

  const { classPrefix } = useConfig();
  const asideClassNames = classNames(`${classPrefix}-layout__sider`, className);
  const asideWidth: string = typeof width === "number" ? `${width}px` : width;

  const asideStyle: React.CSSProperties = {
    width: asideWidth,
    maxWidth: asideWidth,
    minWidth: asideWidth,
    flex: `0 0 ${asideWidth}`,
    ...style
  };

  return (
    <aside className={asideClassNames} style={asideStyle} {...otherAsideProps}>
      {children}
    </aside>
  );
};

Aside.displayName = "Aside";

export default Aside;
