import { useLayoutEffect, useEffect } from 'react';
import { a as isString } from './dep-uPo9oRq0.js';

var canUseDocument = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var getWindowSize = function getWindowSize() {
  if (!canUseDocument) {
    return {
      width: 0,
      height: 0
    };
  }
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
};
var getAttach = function getAttach(node) {
  var attachNode = typeof node === 'function' ? node() : node;
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

// 兼容 SSR 环境
// 在浏览器环境中使用 useLayoutEffect，否则使用 useEffect
var useIsomorphicLayoutEffect = canUseDocument ? useLayoutEffect : useEffect;

export { getWindowSize as a, canUseDocument as c, getAttach as g, useIsomorphicLayoutEffect as u };
//# sourceMappingURL=dep-0EpSXuwN.js.map
