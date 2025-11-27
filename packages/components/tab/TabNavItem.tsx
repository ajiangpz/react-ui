import React, { MouseEvent } from "react";
import classNames from "classnames";
import { IconClose as TdCloseIcon } from "@tendaui/icons";

import noop from "../utils/noop";
import { useTabClass } from "./useTabClass";
import useGlobalIcon from "../hooks/useGlobalIcon";

import type { StyledProps } from "../common";
import type { TdTabPanelProps, TdTabsProps } from "./type";

export interface TabNavItemProps extends TdTabPanelProps, StyledProps {
  // 当前 item 是否处于激活态
  isActive: boolean;
  // 点击事件
  onClick: (e: MouseEvent) => void;
  theme: "normal" | "card";
  placement: string;
  size?: "medium" | "large";
  index: number;
  innerRef(ref: HTMLElement): void;
  onTabRemove: TdTabsProps["onRemove"];
}

const TabNavItem: React.FC<TabNavItemProps> = (props) => {
  const {
    label,
    removable,
    isActive,
    onClick = noop,
    placement,
    onRemove = noop,
    value,
    size = "medium",
    disabled = false,
    index,
    onTabRemove = noop,
    innerRef
  } = props;

  const { CloseIcon } = useGlobalIcon({ CloseIcon: TdCloseIcon });

  // 样式变量和常量定义
  const { tdTabsClassGenerator, tdClassGenerator, tdSizeClassGenerator } = useTabClass();

  // 斜八度动画
  return (
    <div
      ref={innerRef}
      onClick={disabled ? noop : onClick}
      className={classNames(
        tdTabsClassGenerator("nav-item"),
        tdSizeClassGenerator(size),
        isActive ? tdClassGenerator("is-active") : "",
        tdClassGenerator(`is-${placement}`),
        disabled ? tdClassGenerator("is-disabled") : "",
        props.className
      )}
    >
      {/* 根据新的 dom 结构和样式进行改动，卡片类型情况下不需要 nav-item-wrapper 这个 div */}
      <div className={classNames(tdTabsClassGenerator("nav-item-wrapper"))}>
        <span className={classNames(tdTabsClassGenerator("nav-item-text-wrapper"))}>{label}</span>
      </div>
      {removable && !disabled ? (
        <span
          className={classNames("remove-btn")}
          onClick={(e) => {
            e.stopPropagation();
            onRemove({ value, e });
            onTabRemove({ value, e, index });
          }}
        >
          <CloseIcon svg={""} />
        </span>
      ) : null}
    </div>
  );
};

export default TabNavItem;
