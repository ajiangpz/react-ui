import React, { useCallback, useEffect, useRef, useState, WheelEvent } from "react";
import classNames from "classnames";
import noop from "../utils/noop";
import { useTabClass } from "./useTabClass";
import TabNavItem from "./TabNavItem";
import TabBar from "./TabBar";
import { omit } from "lodash-es";
import { TdTabsProps, TdTabPanelProps, TabValue } from "./type";
export interface TabNavProps extends TdTabsProps {
  itemList: TdTabPanelProps[];
  activeValue: TabValue;
  size?: "medium" | "large";
  children?: React.ReactNode;
}
const TabNav: React.FC<TabNavProps> = (props) => {
  const {
    placement = "top",
    itemList = [],
    theme,
    addable,
    onAdd,
    scrollPosition = "auto",
    size = "medium",
    disabled = false,
    onRemove = noop,
    onChange = noop,
    activeValue,
    children,
    action
  } = props;
  const { tdTabsClassGenerator, tdClassGenerator, tdSizeClassGenerator } = useTabClass();
  const navsContainerRef = useRef<HTMLDivElement>(null);
  const navsWrapRef = useRef<HTMLDivElement>(null);
  const getIndex = useCallback(
    (value) => {
      const index = itemList.findIndex((item) => item.value === value);
      return index > -1 ? index : -1;
    },
    [itemList]
  );

  const activeIndex = getIndex(activeValue);
  const [activeTab, setActiveTab] = useState<HTMLElement>(null);
  const TabBarCom = (
    <TabBar tabPosition={placement} activeId={activeIndex} containerRef={navsWrapRef} navsWrapRef={navsWrapRef} />
  );
  const handleTabItemClick = (clickItem) => {
    if (activeValue !== clickItem.value) {
      onChange(clickItem.value);
    }
    clickItem?.onClick?.(clickItem.value);
  };
  const handleTabItemRemove = (removeItem) => {
    const { value: removeValue, index: removeIndex } = removeItem;
    if (removeValue === activeValue) {
      onChange(removeIndex === 0 ? itemList[removeIndex + 1]?.value : itemList[removeIndex - 1].value);
    }
    onRemove(removeItem);
  };
  const handleTabAdd = (e) => {
    onAdd({ e });
  };
  return (
    <div ref={navsContainerRef} className={classNames(tdTabsClassGenerator("nav"))} style={{ minHeight: 48 }}>
      <div className={classNames(tdTabsClassGenerator("nav-container"), addable ? tdClassGenerator("is-addable") : "")}>
        <div
          className={classNames(
            tdTabsClassGenerator("nav-wrap"),
            ["left", "right"].includes(placement) ? tdClassGenerator("is-vertical") : "",
            tdClassGenerator("is-smooth")
          )}
          ref={navsWrapRef}
        >
          {TabBarCom}
          {itemList.map((v, index) => (
            <TabNavItem
              {...omit(props, ["className", "style"])}
              {...v}
              onRemove={v.onRemove}
              key={v.value}
              label={v.label}
              isActive={activeValue === v.value}
              theme={theme}
              placement={placement}
              index={index}
              disabled={disabled || v.disabled}
              onClick={() => handleTabItemClick(v)}
              onTabRemove={handleTabItemRemove}
              innerRef={(ref) => {
                if (activeValue === v.value) {
                  setActiveTab(ref);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

TabNav.displayName = "TabNav";
export default TabNav;
