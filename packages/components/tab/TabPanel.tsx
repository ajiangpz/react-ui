import React, { useState, useEffect } from "react";
import classNames from "classnames";
import type { TdTabPanelProps } from "./type";
import { StyledProps } from "../common";
import { useTabClass } from "./useTabClass";
import { tabPanelDefaultProps } from "./defaultProps";
import useDefaultProps from "../hooks/useDefaultProps";

export interface TabPanelProps extends TdTabPanelProps, StyledProps {
  children?: React.ReactNode;
  isActive?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { className, lazy, isActive, destroyOnHide, style } = useDefaultProps<TabPanelProps>(
    props,
    tabPanelDefaultProps
  );
  const { tdTabPanelClassPrefix } = useTabClass();
  const [shouldRender, setShouldRender] = useState(!lazy);

  // 当标签激活且是延迟渲染时，设置为应该渲染
  useEffect(() => {
    if (lazy && isActive) {
      setShouldRender(true);
    }
  }, [lazy, isActive]);

  if ((!isActive && destroyOnHide) || !shouldRender) {
    return null;
  }

  return (
    <div
      className={classNames(tdTabPanelClassPrefix, className)}
      style={{ display: !isActive ? "none" : undefined, ...style }}
    >
      {props.children || props.panel}
    </div>
  );
};

TabPanel.displayName = "TabPanel";

export default TabPanel;
