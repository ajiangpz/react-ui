import { TNode, TElement } from "../common";
import { TdPopupProps, PopupPlacement } from "../popup/type";
export interface TdTooltipProps extends Omit<TdPopupProps, "content"> {
  /**
   *  tooltip 内容
   */
  content: TNode;
  /**
   * 触发方式，可选项：hover/click/focus/context-menu
   * @default 'hover'
   */
  trigger?: "hover" | "click" | "focus" | "context-menu";
  /**
   * 主题，可选项：dark/light/primary/success/error/warning
   * @default 'dark'
   */
  theme?: "dark" | "light" | "primary" | "success" | "error" | "warning";
  /**
   * 显示/隐藏触发方式
   * @default 'hover'
   */
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "left-top"
    | "left-bottom"
    | "right-top"
    | "right-bottom";
  /**
   * 浮层出现后自动隐藏延时，单位：毫秒
   * @default 0
   */
  duration?: number;
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 自定义提示框类名
   */
  overlayClassName?: string | string[];
  /**
   * 浮层隐藏时是否销毁浮层
   * @default true
   */
  destroyOnClose?: boolean;
  /**
   * 自定义弹出层内容
   */
  popupContent?: TNode;

  /**
   * 箭头是否指向目标元素中心
   * @default true
   */
  arrowPointAtCenter?: boolean;
  /**
   * 手动控制浮层显隐
   */
  visible?: boolean;
  /**
   * 当浮层无法完全显示时，是否自动调整位置
   * @default true
   */
  autoAdjustOverflow?: boolean;
  /**
   * 浮层偏移量，示例：[10, 20] 或 (placement) => [10, 20]
   */
  offset?: Array<number> | ((placement: string) => Array<number>);
  /**
   * 透传 Popper.js 的配置项
   */
  popperOptions?: object;
  /**
   * 触发元素
   */
  triggerElement?: TElement;

  /**
   * 层级
   */
  zIndex?: number;
  /**
   * 鼠标是否可进入浮层
   * @default false
   */
  mouseEnterPopup?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}
