import { TdTabsProps, TdTabPanelProps } from "./type";

export const tabsDefaultProps: TdTabsProps = {
  addable: false,
  disabled: false,
  dragSort: false,
  placement: "top",
  scrollPosition: "auto",
  size: "medium",
  theme: "normal"
};

export const tabPanelDefaultProps: TdTabPanelProps = {
  destroyOnHide: true,
  disabled: false,
  draggable: true,
  lazy: false,
  removable: false
};
