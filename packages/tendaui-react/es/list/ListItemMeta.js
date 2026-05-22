import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'dayjs';

var ListItemMeta = /*#__PURE__*/forwardRef(function (props, ref) {
  var title = props.title,
    image = props.image,
    description = props.description,
    className = props.className,
    style = props.style;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var renderAvatar = function renderAvatar() {
    if (image && typeof image === "string") {
      return /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-list-item__meta-avatar")
      }, /* @__PURE__ */React.createElement("img", {
        src: image,
        alt: ""
      }));
    }
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-list-item__meta-avatar")
    }, image);
  };
  return /* @__PURE__ */React.createElement("div", {
    ref: ref,
    className: classNames("".concat(classPrefix, "-list-item__meta"), className),
    style: style
  }, image && renderAvatar(), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-list-item__meta-content")
  }, /* @__PURE__ */React.createElement("h3", {
    className: "".concat(classPrefix, "-list-item__meta-title")
  }, title), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-list-item__meta-description")
  }, typeof description === "string" ? /* @__PURE__ */React.createElement("p", null, description) : description)));
});
ListItemMeta.displayName = "ListItemMeta";

export { ListItemMeta as default };
//# sourceMappingURL=ListItemMeta.js.map
