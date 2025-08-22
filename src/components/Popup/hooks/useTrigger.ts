import React, {
  useRef,
  useEffect,
  isValidElement,
  useCallback,
  useMemo,
} from 'react';
import { isFragment } from 'react-is';
import { supportRef, getRefDom, getNodeRef } from '@/utils/refs';
import composeRefs from '@/utils/composeRefs';
import { off, on } from '@/utils/listener';
import classNames from 'classnames';
import { TNode } from '@/components/common';
const ESC_KEY = 'Escape';

interface UseTriggerProps {
  content: TNode;
  disabled?: boolean;
  trigger:
    | 'hover'
    | 'click'
    | 'mousedown'
    | 'focus'
    | 'context-menu'
    | undefined;
  visible: boolean | undefined;
  onVisibleChange: (visible: boolean, context: any) => void;
  triggerRef: React.Ref<any>;
  delay?: number | [number, number] | number[];
}

export default function useTrigger({
  content,
  disabled,
  trigger,
  visible,
  onVisibleChange,
  triggerRef,
  delay,
}: UseTriggerProps) {
  const hasPopupMouseDown = useRef(false);
  const mouseDownTimer = useRef(0);
  const visibleTimer = useRef(null);
  const triggerDataKey = useRef(`t-popup--${Math.random().toFixed(10)}`);
  const leaveFlag = useRef(false); // 防止多次触发显隐

  // 禁用和无内容时不展示
  const shouldToggle = useMemo(() => {
    if (disabled) return false; // 禁用
    return !disabled && content === 0 ? true : content; // 无内容时
  }, [disabled, content]);

  // 解析 delay 数据类型
  const [appearDelay = 0, exitDelay = 0] = useMemo(() => {
    if (Array.isArray(delay)) return delay;
    return [delay, delay];
  }, [delay]);

  function callFuncWithDelay({
    delay,
    callback,
  }: {
    delay?: number;
    callback: Function;
  }) {
    if (delay) {
      clearTimeout(visibleTimer.current as any);
      (visibleTimer as any).current = setTimeout(callback, delay);
    } else {
      callback();
    }
  }

  // 点击 trigger overlay 以外的元素关闭
  useEffect(() => {
    if (!shouldToggle) return;

    const handleDocumentClick = (e: any) => {
      if (
        getRefDom(triggerRef as any)?.contains?.(e.target) ||
        hasPopupMouseDown.current
      ) {
        return;
      }
      visible && onVisibleChange(false, { e, trigger: 'document' });
    };
    on(document, 'mousedown', handleDocumentClick);
    on(document, 'touchend', handleDocumentClick);

    // 清理事件监听
    return () => {
      off(document, 'mousedown', handleDocumentClick);
      off(document, 'touchend', handleDocumentClick);
    };
  }, [shouldToggle, visible, onVisibleChange, triggerRef]);

  // 弹出内容交互处理
  function getPopupProps(): any {
    if (!shouldToggle) return {};

    return {
      onMouseEnter: (e: MouseEvent) => {
        console.log('popup mouse enter');
        // leaveFlag表示是从 trigger 元素 hover 过来的，避免频繁显示隐藏
        if (trigger === 'hover' && !leaveFlag.current) {
          // 清除延迟显示定时器
          clearTimeout((visibleTimer as any).current);
          // 立即显示
          onVisibleChange(true, { e, trigger: 'trigger-element-hover' });
        }
      },
      onMouseLeave: (e: MouseEvent) => {
        console.log('popup mouse leave');
        if (trigger === 'hover') {
          // 防止 鼠标移出后，马上移入 popup 元素，导致 popup 重新显示 特别是有延迟显示时 是一个防抖标志
          leaveFlag.current = true;

          // 清除延迟显示定时器
          clearTimeout((visibleTimer as any).current);
          // 立即隐藏
          onVisibleChange(false, { e, trigger: 'trigger-element-hover' });
        }
      },
      onMouseDown: () => {
        //  清除鼠标按下定时器
        clearTimeout(mouseDownTimer.current);
        // 鼠标按下时，触发 useEffect 中的 document click 事件，点击trigger和popup元素 不需要隐藏
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          // 事件处理完毕后，重置标志
          hasPopupMouseDown.current = false;
        });
      },
      // 触摸结束时,和mouseDown 类似

      onTouchEnd: () => {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          hasPopupMouseDown.current = false;
        });
      },
    };
  }

  // 整理 trigger props
  function getTriggerProps(triggerNode: React.ReactElement<any>) {
    if (!shouldToggle) return {};

    const triggerProps: any = {
      className: visible
        ? classNames(triggerNode.props.className, `t-popup-open`)
        : triggerNode.props.className,
      onMouseDown: (e: MouseEvent) => {
        if (trigger === 'mousedown') {
          callFuncWithDelay({
            delay: visible ? appearDelay : exitDelay,
            callback: () =>
              onVisibleChange(!visible, {
                e,
                trigger: 'trigger-element-mousedown',
              }),
          });
        }
        triggerNode.props.onMouseDown?.(e);
      },
      onClick: (e: MouseEvent) => {
        if (trigger === 'click') {
          callFuncWithDelay({
            // appearDelay 和 exitDelay 分别表示点击时的延迟显示和隐藏
            delay: visible ? appearDelay : exitDelay,
            callback: () =>
              onVisibleChange(!visible, {
                e,
                trigger: 'trigger-element-click',
              }),
          });
        }
        triggerNode.props.onClick?.(e);
      },
      onTouchStart: (e: TouchEvent) => {
        if (trigger === 'hover' || trigger === 'mousedown') {
          // leaveFlag 表示是从 trigger 元素 hover 过来的，避免频繁显示隐藏
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: () =>
              onVisibleChange(true, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onTouchStart?.(e);
      },
      onMouseEnter: (e: MouseEvent) => {
        if (trigger === 'hover') {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: () =>
              onVisibleChange(true, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: MouseEvent) => {
        if (trigger === 'hover') {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: exitDelay,
            callback: () =>
              onVisibleChange(false, { e, trigger: 'trigger-element-hover' }),
          });
        }
        triggerNode.props.onMouseLeave?.(e);
      },
      onFocus: (...args: any) => {
        if (trigger === 'focus') {
          callFuncWithDelay({
            delay: appearDelay,
            callback: () =>
              onVisibleChange(true, { trigger: 'trigger-element-focus' }),
          });
        }
        triggerNode.props.onFocus?.(...args);
      },
      onBlur: (...args: any) => {
        if (trigger === 'focus') {
          callFuncWithDelay({
            delay: appearDelay,
            callback: () =>
              onVisibleChange(false, { trigger: 'trigger-element-blur' }),
          });
        }
        triggerNode.props.onBlur?.(...args);
      },
      onContextMenu: (e: MouseEvent) => {
        if (trigger === 'context-menu') {
          e.preventDefault();
          callFuncWithDelay({
            delay: appearDelay,
            callback: () =>
              onVisibleChange(true, { e, trigger: 'context-menu' }),
          });
        }
        triggerNode.props.onContextMenu?.(e);
      },
      onKeyDown: (e: KeyboardEvent) => {
        if (e?.key === ESC_KEY) {
          callFuncWithDelay({
            delay: exitDelay,
            callback: () =>
              onVisibleChange(false, { e, trigger: 'keydown-esc' }),
          });
        }
        triggerNode.props.onKeyDown?.(e);
      },
    };
    // 如果支持 ref 透传，composeRefs 返回一个函数，当组件挂载时，执行函数，triggerRef 和 tiggerNode 指向触发元素的dom
    if (supportRef(triggerNode)) {
      triggerProps.ref = composeRefs(
        triggerRef,
        getNodeRef(triggerNode as any),
      );
    } else {
      // 标记 trigger 元素
      triggerProps['data-popup'] = triggerDataKey.current;
    }

    return triggerProps;
  }

  // 整理 trigger 元素
  function getTriggerNode(children: React.ReactNode) {
    const triggerNode =
      isValidElement(children) && !isFragment(children)
        ? children
        : React.createElement('span', { children });

    return React.cloneElement(triggerNode, getTriggerProps(triggerNode));
  }

  // ref 透传失败时使用 dom 查找
  const getTriggerDom = useCallback(() => {
    if (typeof document === 'undefined') return {};
    return document.querySelector(`[data-popup="${triggerDataKey.current}"]`);
  }, []);

  return {
    getTriggerNode,
    getPopupProps,
    getTriggerDom,
  };
}
