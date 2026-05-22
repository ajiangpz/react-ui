import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { forwardRef, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { c as canUseDocument } from '../_chunks/dep-DRwijJcv.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-BRbJGDI9.js';
import 'lodash-es';
import '../_chunks/dep-zVwpnryi.js';
import '../_chunks/dep-Cwish4GD.js';
import 'dayjs';

function getAttach(attach, triggerNode) {
  if (!canUseDocument) return null;
  var el;
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
var Portal = /*#__PURE__*/forwardRef(function (props, ref) {
  var attach = props.attach,
    children = props.children,
    triggerNode = props.triggerNode;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var container = useMemo(function () {
    if (!canUseDocument) return null;
    var el = document.createElement("div");
    el.className = "".concat(classPrefix, "-portal-wrapper");
    return el;
  }, [classPrefix]);
  useIsomorphicLayoutEffect(function () {
    var _parentElement$append;
    var parentElement = getAttach(attach, triggerNode);
    parentElement === null || parentElement === void 0 || (_parentElement$append = parentElement.appendChild) === null || _parentElement$append === void 0 || _parentElement$append.call(parentElement, container);
    return function () {
      var _parentElement$remove;
      parentElement === null || parentElement === void 0 || (_parentElement$remove = parentElement.removeChild) === null || _parentElement$remove === void 0 || _parentElement$remove.call(parentElement, container);
    };
  }, [container, attach, triggerNode]);
  useImperativeHandle(ref, function () {
    return container;
  });
  return canUseDocument ? /*#__PURE__*/createPortal(children, container) : null;
});
Portal.displayName = "Portal";

export { Portal as default, getAttach };
//# sourceMappingURL=Portal.js.map
