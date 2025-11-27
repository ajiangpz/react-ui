import useConfig from "../hooks/useConfig";

export const useTabClass = () => {
  const { classPrefix } = useConfig();
  const tdTabsClassPrefix = `${classPrefix}-tabs`;
  const tdTabPanelClassPrefix = `${classPrefix}-tab-panel`;
  const tdClassGenerator = (append: string) => `${classPrefix}-${append}`;
  const tdTabsClassGenerator = (append: string) => `${tdTabsClassPrefix}__${append}`;
  const tdTabPanelClassGenerator = (append: string) => `${tdTabPanelClassPrefix}__${append}`;
  const tdSizeClassGenerator = (size: "medium" | "large") => `${classPrefix}-size-${size === "large" ? "l" : "m"}`;

  return {
    tdTabsClassPrefix,
    tdTabPanelClassPrefix,
    tdClassGenerator,
    tdTabsClassGenerator,
    tdTabPanelClassGenerator,
    tdSizeClassGenerator
  };
};
