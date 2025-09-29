import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { forwardRef, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { c as canUseDocument, u as useIsomorphicLayoutEffect } from '../_chunks/dep-CKiAytca.js';
import 'lodash-es';

// 获取挂载的 HTML 节点

function getAttach(attach, triggerNode) {
  if (!canUseDocument) return null;
  var el = null;
  if (typeof attach === 'string') {
    el = document.querySelector(attach);
  }
  if (typeof attach === 'function') {
    el = attach(triggerNode);
  }
  if (_typeof(attach) === 'object' && attach instanceof window.HTMLElement) {
    el = attach;
  }

  // fix el in iframe
  if (el && el.nodeType === 1) return el;
  return document.body;
}
var Portal = /*#__PURE__*/forwardRef(function (props, ref) {
  var attach = props.attach,
    children = props.children,
    triggerNode = props.triggerNode;
  var container = useMemo(function () {
    var div = document.createElement('div');
    div.className = 'portal-container bg-primary';
    return div;
  }, []);
  // 兼容 SSR 环境
  useIsomorphicLayoutEffect(function () {
    var _parentElement$append;
    var parentElement = getAttach(attach, triggerNode);
    parentElement === null || parentElement === void 0 || (_parentElement$append = parentElement.appendChild) === null || _parentElement$append === void 0 || _parentElement$append.call(parentElement, container);
    // Clean up the container when the component unmounts
    return function () {
      var _parentElement$remove;
      parentElement === null || parentElement === void 0 || (_parentElement$remove = parentElement.removeChild) === null || _parentElement$remove === void 0 || _parentElement$remove.call(parentElement, container);
    };
  }, [container, attach, triggerNode]);
  // 自定义暴露给父组件的ref是container
  useImperativeHandle(ref, function () {
    return container;
  });
  return canUseDocument ? /*#__PURE__*/createPortal(children, container) : null;
});
Portal.displayName = 'Portal';

export { Portal as default, getAttach };
//# sourceMappingURL=Portal.js.map
