import { isString } from 'lodash-es';

export const canUseDocument = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getWindowSize = (): { width: number; height: number } => {
  if (!canUseDocument) {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
};

export const getAttach = (node: any): HTMLElement | null => {
  const attachNode = typeof node === 'function' ? node() : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};
