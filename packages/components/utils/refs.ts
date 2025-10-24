// Source from:
// https://github.com/react-component/util/blob/master/src/ref.ts

import { isValidElement } from "react";
import { ForwardRef, isMemo } from "react-is";
import isFragment from "./isFragment";

// 判断是否支持 ref 透传
export const supportRef = (nodeOrComponent: unknown): boolean => {
  if (!nodeOrComponent) {
    return false;
  }

  // React 19 no need `forwardRef` anymore. So just pass if is a React element.

  if (
    isReactElement(nodeOrComponent as React.ReactNode) &&
    Object.prototype.propertyIsEnumerable.call((nodeOrComponent as React.ReactElement).props, "ref")
  ) {
    return true;
  }

  const type = isMemo(nodeOrComponent)
    ? (nodeOrComponent as { type: { type: unknown } }).type.type
    : (nodeOrComponent as { type: unknown }).type;

  // Function component node
  if (
    typeof type === "function" &&
    !(type as { prototype?: { render?: unknown } }).prototype?.render &&
    (type as { $$typeof?: symbol }).$$typeof !== ForwardRef
  ) {
    return false;
  }

  // Class component
  if (
    typeof nodeOrComponent === "function" &&
    !(nodeOrComponent as { prototype?: { render?: unknown } }).prototype?.render &&
    (nodeOrComponent as { $$typeof?: symbol }).$$typeof !== ForwardRef
  ) {
    return false;
  }
  return true;
};

// 获取 ref 中的 dom 元素
export function getRefDom<T = HTMLElement>(domRef: React.RefObject<T>) {
  if (domRef.current && typeof domRef.current === "object" && "currentElement" in domRef.current) {
    return (domRef.current as { currentElement: HTMLElement }).currentElement;
  }
  return domRef.current;
}

interface RefAttributes<T> extends React.Attributes {
  ref: React.Ref<T>;
}

function isReactElement(node: React.ReactNode) {
  return isValidElement(node) && !isFragment(node);
}

export const supportNodeRef = <T = HTMLElement>(node: React.ReactNode): node is React.ReactElement & RefAttributes<T> =>
  isReactElement(node) && supportRef(node);

/**
 * In React 19. `ref` is not a property from node.
 * But a property from `props.ref`.
 * To check if `props.ref` exist or fallback to `ref`.
 */
export const getNodeRef = <T = HTMLElement>(node: React.ReactNode): React.Ref<T> | null => {
  if (node && isReactElement(node)) {
    const ele = node as React.ReactElement & { ref?: React.Ref<T> };

    // Source from:
    // https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts

    return Object.prototype.propertyIsEnumerable.call(ele.props, "ref") ? ele.props.ref : ele.ref;
  }
  return null;
};
