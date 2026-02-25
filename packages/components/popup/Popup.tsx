import { Placement, type Options } from "@popperjs/core";
import { debounce, isFunction } from "lodash-es";
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { getRefDom } from "../utils/ref";
import Portal from "../portal/Portal";
import useControlled from "../hooks/useControlled";
import useDefaultProps from "../hooks/useDefaultProps";
import useMutationObserver from "../hooks/useMutationObserver";
import useWindowSize from "../hooks/useWindowSize";
import useTrigger from "./hooks/useTrigger";
import type { TdPopupProps, PopupVisibleChangeContext } from "./type";
import usePopper from "../hooks/usePopper";
import { popupDefaultProps } from "./defaultProps";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { getCssVarsValue } from "../utils/style";
import useConfig from "../hooks/useConfig";

export interface PopupProps extends TdPopupProps {
  // 是否触发展开收起动画，内部下拉式组件使用
  expandAnimation?: boolean;
  // 更新内容区域滚动条
  updateScrollTop?: (content: HTMLDivElement) => void;
}

export interface PopupRef {
  /** 获取 popper 实例 */
  getPopper: () => ReturnType<typeof usePopper>;
  /** 获取 Popup dom 元素 */
  getPopupElement: () => HTMLDivElement;
  /** 获取 portal dom 元素 */
  getPortalElement: () => HTMLDivElement;
  /** 获取内容区域 dom 元素 */
  getPopupContentElement: () => HTMLDivElement;
  /** 设置 popup 显示隐藏 */
  setVisible: (visible: boolean) => void;
}

const Popup = forwardRef<PopupRef, PopupProps>((originalProps, ref) => {
  const props = useDefaultProps<PopupProps>(originalProps, popupDefaultProps);
  const { classPrefix, direction } = useConfig();
  const {
    trigger,
    content,
    placement,
    showArrow,
    destroyOnClose,
    overlayClassName,
    overlayInnerClassName,
    overlayStyle,
    overlayInnerStyle,
    triggerElement,
    children = triggerElement,
    disabled,
    zIndex,
    onScroll,
    onScrollToBottom,
    delay,
    hideEmptyPopup,
    updateScrollTop
  } = props;

  // 全局配置
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const handleVisibleChange = (visible: boolean, context: PopupVisibleChangeContext) => {
    props.onVisibleChange?.(visible, context);
  };
  const [visible, onVisibleChangeInternal] = useControlled(props, "visible", handleVisibleChange);
  // 适配 useTrigger 的类型
  const onVisibleChangeForTrigger = (
    visible: boolean,
    context: {
      e?:
        | React.MouseEvent<HTMLElement>
        | React.TouchEvent<HTMLElement>
        | React.FocusEvent<HTMLElement>
        | React.KeyboardEvent<HTMLElement>;
      trigger: string;
    }
  ) => {
    const popupContext: PopupVisibleChangeContext = {
      e: context.e as any,
      trigger: context.trigger as any
    };
    onVisibleChangeInternal(visible, popupContext);
  };
  // 记录 popup 元素
  // 如果内容为 null 或 undefined，且 hideEmptyPopup 为 true，则不展示 popup
  const [popupElement, setPopupElement] = useState(null);
  const triggerRef = useRef(null); // 记录 trigger 元素
  const popupRef = useRef(null); // popup dom 元素，css transition 需要用
  const portalRef = useRef(null); // portal dom 元素
  const contentRef = useRef(null); // 内容部分
  const popperRef = useRef<ReturnType<typeof usePopper> | null>(null); // 保存 popper 实例

  // 默认动画时长
  const DEFAULT_TRANSITION_TIMEOUT = 180;

  // 处理切换 panel 为 null 和正常内容动态切换的情况
  useEffect(() => {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(() => setPopupElement(null));
    }
  }, [content, hideEmptyPopup]);

  // 判断展示浮层
  const showOverlay = useMemo(() => {
    if (hideEmptyPopup && !content) return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);

  // 转化 placement
  const popperPlacement = useMemo(() => {
    if (!placement) return placement;
    const normalized = placement
      .replace(/-(left|top)$/, "-start")
      .replace(/-(right|bottom)$/, "-end");
    if (direction !== "rtl") return normalized as Placement;
    const parts = normalized.split("-");
    const mirrored = parts
      .map((part) => {
        if (part === "left") return "right";
        if (part === "right") return "left";
        if (part === "start") return "end";
        if (part === "end") return "start";
        return part;
      })
      .join("-");
    return mirrored as Placement;
  }, [placement, direction]);
  // 获取 triggerNode
  const { getTriggerNode, getPopupProps, getTriggerDom } = useTrigger({
    triggerRef,
    content,
    disabled,
    trigger,
    visible,
    delay,
    onVisibleChange: onVisibleChangeForTrigger
  });
  // 传入popperjs 配置选项
  const popperOptions = props.popperOptions as Options;
  const { placement: _ignored, ...restPopperOptions } = popperOptions || {};
  // Suppress unused variable warning
  void _ignored;

  // popperRef 表示 popper 实例
  popperRef.current = usePopper(getRefDom(triggerRef) as HTMLElement | null, popupElement, {
    placement: popperPlacement as Placement,
    ...restPopperOptions
  });

  // arrow modifier 用于显示箭头
  const hasArrowModifier = popperOptions?.modifiers?.some((modifier) => modifier.name === "arrow");
  const { styles, attributes } = popperRef.current;
  // 获取 triggerNode
  // 如果 children 是函数，则调用函数获取 triggerNode
  // getTriggerNode 设置触发元素的事件
  const triggerNode = isFunction(children) ? getTriggerNode(children({ visible })) : getTriggerNode(children);

  const updateTimeRef = useRef(null);
  // 监听 trigger 节点或内容变化动态更新 popup 定位
  useMutationObserver(getRefDom(triggerRef) as HTMLElement | null, () => {
    const triggerDom = getRefDom(triggerRef) as HTMLElement | null;
    const isDisplayNone = triggerDom ? getCssVarsValue("display", triggerDom) === "none" : true;
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(() => popperRef.current?.update?.(), 0);
    }
  });
  // 清理定时器
  useEffect(() => () => clearTimeout(updateTimeRef.current), []);

  // 窗口尺寸变化时调整位置
  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => popperRef.current?.update?.());
    }
  }, [visible, content, windowHeight, windowWidth]);

  // 下拉展开时更新内部滚动条
  useEffect(() => {
    if (!triggerRef.current) triggerRef.current = getTriggerDom();
    if (visible) {
      updateScrollTop?.(contentRef.current);
    }
  }, [visible, updateScrollTop, getTriggerDom]);

  function handleExited() {
    if (!destroyOnClose && popupElement) {
      (popupElement as HTMLElement).style.display = "none";
    }
  }
  function handleEnter() {
    if (!destroyOnClose && popupElement) {
      popupElement.style.display = "block";
    }
  }

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    onScroll?.({ e });

    // 防止多次触发添加截流
    const debounceOnScrollBottom = debounce((e) => onScrollToBottom?.({ e }), 100);

    const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
    // windows 下滚动会出现小数，所以这里取整
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      // touch bottom
      debounceOnScrollBottom(e);
    }
  }

  // 整理浮层样式
  function getOverlayStyle(overlayStyle: TdPopupProps["overlayStyle"]) {
    const triggerDom = getRefDom(triggerRef) as HTMLElement | null;
    if (triggerDom && popupRef.current && typeof overlayStyle === "function") {
      return { ...overlayStyle(triggerDom, popupRef.current) };
    }
    return { ...overlayStyle };
  }

  const overlay = showOverlay && (
    <CSSTransition
      appear
      in={visible}
      timeout={DEFAULT_TRANSITION_TIMEOUT}
      nodeRef={portalRef}
      unmountOnExit={destroyOnClose}
      onEnter={handleEnter}
      onExited={handleExited}
      classNames={`${classPrefix}-portal`}
    >
      <Portal triggerNode={getRefDom(triggerRef) as HTMLElement | null} attach="body" ref={portalRef}>
        <CSSTransition appear timeout={0} in={visible} nodeRef={popupRef} classNames={`${classPrefix}-popup`}>
          <div
            ref={(node) => {
              if (node) {
                popupRef.current = node;
                setPopupElement(node);
              }
            }}
            style={{
              ...styles.popper,
              zIndex,
              ...getOverlayStyle(overlayStyle)
            }}
            className={classNames(`${classPrefix}-popup`, overlayClassName, "")}
            {...attributes.popper}
            {...getPopupProps()}
          >
            <div
              ref={contentRef}
              className={classNames(
                `${classPrefix}-popup__content`,
                {
                  [`${classPrefix}-popup__content--arrow`]: showArrow
                },
                overlayInnerClassName
              )}
              style={getOverlayStyle(overlayInnerStyle)}
              onScroll={handleScroll}
            >
              {content}
              {showArrow && (
                <div
                  style={styles.arrow}
                  className={`${classPrefix}-popup__arrow`}
                  {...(hasArrowModifier && { "data-popper-arrow": "" })}
                />
              )}
            </div>
          </div>
        </CSSTransition>
      </Portal>
    </CSSTransition>
  );
  // 使用 useImperativeHandle 暴露给父组件
  // 这样父组件可以通过 ref 获取 popper 实例、popup 元素
  // portal 元素和内容区域元素
  // 以及设置 popup 的显示隐藏状态
  useImperativeHandle(ref, () => ({
    getPopper: () => popperRef.current,
    getPopupElement: () => popupRef.current,
    getPortalElement: () => portalRef.current,
    getPopupContentElement: () => contentRef.current,
    setVisible: (visible: boolean) =>
      onVisibleChangeInternal(visible, { trigger: "document" } as PopupVisibleChangeContext)
  }));
  // 这里使用 React.Fragment 包裹 triggerNode 和 overlay，确保返回一个单一的父节点
  // 这样可以避免在渲染时出现多个根节点的错误
  return (
    <React.Fragment>
      {triggerNode}
      {overlay}
    </React.Fragment>
  );
});

Popup.displayName = "Popup";

export default Popup;
