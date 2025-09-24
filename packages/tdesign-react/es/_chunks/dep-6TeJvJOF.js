import { r as reactExports } from './dep-C52Ear6B.js';
import { isString } from 'lodash-es';

var canUseDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
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
  var attachNode = typeof node === "function" ? node() : node;
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

var useIsomorphicLayoutEffect = canUseDocument ? reactExports.useLayoutEffect : reactExports.useEffect;

export { getWindowSize as a, canUseDocument as c, getAttach as g, useIsomorphicLayoutEffect as u };
//# sourceMappingURL=dep-6TeJvJOF.js.map
