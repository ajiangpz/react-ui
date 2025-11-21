import { TdDrawerProps } from "./type";

export const drawerDefaultProps: TdDrawerProps = {
  closeOnEscKeydown: undefined,
  closeOnOverlayClick: undefined,
  closeBtn: true,
  destroyOnClose: false,
  footer: true,
  header: true,
  lazy: true,
  mode: "overlay",
  placement: "right",
  preventScrollThrough: true,
  showInAttachedElement: false,
  showOverlay: true,
  size: undefined,
  sizeDraggable: false,
  visible: false
};
