import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _typeof } from './dep-D-UKOauR.js';
import React from 'react';
import { isFunction } from 'lodash-es';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function parseTNode(renderNode, renderParams, defaultNode) {
  var node = null;
  if (typeof renderNode === "function") {
    node = renderNode(renderParams);
  } else if (renderNode === true) {
    node = defaultNode;
  } else if (renderNode !== null) {
    node = renderNode !== null && renderNode !== void 0 ? renderNode : defaultNode;
  }
  return node;
}
function parseContentTNode(tnode, props) {
  if (isFunction(tnode)) return tnode(props);
  if (!tnode || ["string", "number", "boolean"].includes(_typeof(tnode))) return tnode;
  try {
    return /*#__PURE__*/React.cloneElement(tnode, _objectSpread({}, props));
  } catch (_unused) {
    console.warn("parseContentTNode", "".concat(tnode, " is not a valid ReactNode"));
    return null;
  }
}

export { parseContentTNode as a, parseTNode as p };
//# sourceMappingURL=dep-aX8qrQpB.js.map
