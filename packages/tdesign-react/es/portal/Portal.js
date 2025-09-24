import _typeof from '@babel/runtime/helpers/typeof';
import { r as reactExports } from '../_chunks/dep-C52Ear6B.js';
import { r as reactDomExports } from '../_chunks/dep-DU45RdGB.js';
import { c as canUseDocument, u as useIsomorphicLayoutEffect } from '../_chunks/dep-6TeJvJOF.js';
import 'lodash-es';

function getAttach(attach, triggerNode) {
  if (!canUseDocument) return null;
  var el = null;
  if (typeof attach === "string") {
    el = document.querySelector(attach);
  }
  if (typeof attach === "function") {
    el = attach(triggerNode);
  }
  if (_typeof(attach) === "object" && attach instanceof window.HTMLElement) {
    el = attach;
  }
  if (el && el.nodeType === 1) return el;
  return document.body;
}
var Portal = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var attach = props.attach,
    children = props.children,
    triggerNode = props.triggerNode;
  var container = reactExports.useMemo(function () {
    var div = document.createElement("div");
    div.className = "portal-container bg-primary";
    return div;
  }, []);
  useIsomorphicLayoutEffect(function () {
    var _parentElement$append;
    var parentElement = getAttach(attach, triggerNode);
    parentElement === null || parentElement === void 0 || (_parentElement$append = parentElement.appendChild) === null || _parentElement$append === void 0 || _parentElement$append.call(parentElement, container);
    return function () {
      var _parentElement$remove;
      parentElement === null || parentElement === void 0 || (_parentElement$remove = parentElement.removeChild) === null || _parentElement$remove === void 0 || _parentElement$remove.call(parentElement, container);
    };
  }, [container, attach, triggerNode]);
  reactExports.useImperativeHandle(ref, function () {
    return container;
  });
  return canUseDocument ? /*#__PURE__*/reactDomExports.createPortal(children, container) : null;
});
Portal.displayName = "Portal";

export { Portal as default, getAttach };
//# sourceMappingURL=Portal.js.map
