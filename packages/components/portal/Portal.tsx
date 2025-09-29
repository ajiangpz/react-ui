import React, { forwardRef, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { canUseDocument } from '../utils/dom';
import { AttachNode, AttachNodeReturnValue } from '../common';
import useIsomorphicLayoutEffect from '../hooks/useLayoutEffect';

export interface PortalProps {
  /**
   * 指定挂载的 HTML 节点, false 为挂载在 body
   */
  attach?: React.ReactElement | AttachNode | boolean;
  /**
   * 触发元素
   */
  triggerNode?: HTMLElement;
  children: React.ReactNode;
}
// 获取挂载的 HTML 节点

export function getAttach(
  attach: PortalProps['attach'],
  triggerNode?: HTMLElement,
): AttachNodeReturnValue {
  if (!canUseDocument) return null;

  let el: AttachNodeReturnValue = null;
  if (typeof attach === 'string') {
    el = document.querySelector(attach);
  }
  if (typeof attach === 'function') {
    el = attach(triggerNode);
  }
  if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
    el = attach;
  }

  // fix el in iframe
  if (el && el.nodeType === 1) return el;

  return document.body;
}

const Portal = forwardRef((props: PortalProps, ref) => {
  const { attach, children, triggerNode } = props;
  const container = useMemo(() => {
    const div = document.createElement('div');
    div.className = 'portal-container bg-primary';
    return div;
  }, []);
  // 兼容 SSR 环境
  useIsomorphicLayoutEffect(() => {
    const parentElement = getAttach(attach, triggerNode);
    parentElement?.appendChild?.(container);
    // Clean up the container when the component unmounts
    return () => {
      parentElement?.removeChild?.(container);
    };
  }, [container, attach, triggerNode]);
  // 自定义暴露给父组件的ref是container
  useImperativeHandle(ref, () => container);

  return canUseDocument ? createPortal(children, container) : null;
});

Portal.displayName = 'Portal';
export default Portal;
