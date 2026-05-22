import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'dayjs';

var ListItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    style = props.style,
    action = props.action,
    content = props.content;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var actionElement = action && /* @__PURE__ */React.createElement("ul", {
    className: "".concat(classPrefix, "-list-item__action")
  }, action);
  return /* @__PURE__ */React.createElement("li", {
    ref: ref,
    className: classNames("".concat(classPrefix, "-list-item"), className),
    style: style
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-list-item-main")
  }, children ? children : content, actionElement));
});
ListItem.displayName = "ListItem";

export { ListItem as default };
//# sourceMappingURL=ListItem.js.map
