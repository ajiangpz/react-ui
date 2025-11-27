import { TabValue, TdTabsProps } from "./type";
import forwardRefWithStatics from "../utils/forwardRefWithStatics";
import TabNav from "./TabNav";
import TabPanel from "./TabPanel";
import classNames from "classnames";
import React from "react";
import { useTabClass } from "./useTabClass";
import { StyledProps } from "../common";
import { tabsDefaultProps } from "./defaultProps";
import useDefaultProps from "../hooks/useDefaultProps";
import useControlled from "../hooks/useControlled";

export interface TabsProps extends TdTabsProps, StyledProps {
  children?: React.ReactNode;
}
const Tabs = forwardRefWithStatics(
  (originalProps: TabsProps, ref: React.Ref<HTMLDivElement>) => {
    const props = useDefaultProps<TabsProps>(originalProps, tabsDefaultProps);
    const { children, list, placement, dragSort, className, style, onRemove } = props;
    const [value, onChange] = useControlled(props, "value", props.onChange);
    const { tdTabsClassPrefix, tdTabsClassGenerator, tdClassGenerator } = useTabClass();
    const targetClassNameRegExpStr = `^${tdTabsClassPrefix}(__nav-item|__nav-item-wrapper|__nav-item-text-wrapper)`;
    const memoChildren = React.useMemo<React.ReactNode | React.ReactNode[]>(() => {
      if (!list || list.length === 0) {
        return children;
      }
      return list.map<React.ReactNode>((panelProps) => <TabPanel key={panelProps.value} {...panelProps} />);
    }, [children, list]);

    const itemList = React.Children.map(memoChildren, (child: React.ReactElement<any>) => {
      if (child && child.type === TabPanel) {
        return child.props;
      }
      return null;
    });

    const handleChange = React.useCallback(
      (v: TabValue) => {
        onChange?.(v);
      },
      [onChange]
    );

    const headerNode = React.useMemo<React.ReactNode>(
      () => (
        <div className={classNames(tdTabsClassGenerator("header"), tdClassGenerator(`is-${placement}`))}>
          <TabNav {...props} activeValue={value} onRemove={onRemove} itemList={itemList} onChange={handleChange} />
        </div>
      ),
      [props, value, onRemove, itemList, handleChange, placement, tdTabsClassGenerator, tdClassGenerator]
    );

    return (
      <div ref={ref} className={classNames(tdTabsClassPrefix, className)} style={style}>
        {headerNode}
        <div className={classNames(tdTabsClassGenerator("content"), tdClassGenerator(`is-${placement}`))}>
          {React.Children.map(memoChildren, (child: any) => {
            if (child && child.type === TabPanel) {
              return <TabPanel {...child.props} isActive={child.props.value === value} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  },
  { TabPanel }
);
Tabs.displayName = "Tabs";

export default Tabs;
