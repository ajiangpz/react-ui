import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _typeof } from './dep-D-UKOauR.js';
import React from 'react';
import { d as isFunction } from './dep-uPo9oRq0.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// 解析 TNode 数据结构
function parseTNode(renderNode, renderParams, defaultNode) {
  var node = null;
  if (typeof renderNode === 'function') {
    node = renderNode(renderParams);
  } else if (renderNode === true) {
    node = defaultNode;
  } else if (renderNode !== null) {
    node = renderNode !== null && renderNode !== void 0 ? renderNode : defaultNode;
  }
  return node;
}

/**
 * 解析各种数据类型的 TNode
 * 函数类型：content={(props) => <Icon></Icon>}
 * 组件类型：content={<Button>click me</Button>} 这种方式可以避免函数重复渲染，对应的 props 已经注入
 * 字符类型
 */
function parseContentTNode(tnode, props) {
  if (isFunction(tnode)) return tnode(props);
  if (!tnode || ['string', 'number', 'boolean'].includes(_typeof(tnode))) return tnode;
  try {
    return /*#__PURE__*/React.cloneElement(tnode, _objectSpread({}, props));
  } catch (e) {
    console.warn('parseContentTNode', "".concat(tnode, " is not a valid ReactNode"));
    return null;
  }
}

export { parseTNode as p };
//# sourceMappingURL=dep-CVM4W9uS.js.map
