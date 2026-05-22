import React from 'react';
import classNames from 'classnames';
import { IconPlus, IconDelete } from '@tendaui/icons';
import { C as Color } from '../../../_chunks/dep-D1aIcw94.js';
import { u as useGlobalIcon } from '../../../_chunks/dep-sSDUpJwy.js';
import { u as useCommonClassName } from '../../../_chunks/dep-C4qhHlmM.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-Cwish4GD.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../_chunks/dep-u7AyxuYF.js';
import '../../../_chunks/dep-zVwpnryi.js';
import 'dayjs';

var Swatches = function Swatches(props) {
  var baseClassName = props.baseClassName,
    _props$colors = props.colors,
    colors = _props$colors === void 0 ? [] : _props$colors,
    _props$editable = props.editable,
    editable = _props$editable === void 0 ? false : _props$editable,
    title = props.title,
    onChange = props.onChange,
    disabled = props.disabled,
    onSetColor = props.onSetColor,
    handleAddColor = props.handleAddColor;
  var _useGlobalIcon = useGlobalIcon({
      DeleteIcon: IconDelete,
      AddIcon: IconPlus
    }),
    DeleteIcon = _useGlobalIcon.DeleteIcon,
    AddIcon = _useGlobalIcon.AddIcon;
  var swatchesClass = "".concat(baseClassName, "__swatches");
  var _useCommonClassName = useCommonClassName(),
    statusClassNames = _useCommonClassName.STATUS;
  var isEqualCurrentColor = function isEqualCurrentColor(color) {
    return Color.compare(color, props.color.css);
  };
  var selectedColorIndex = function selectedColorIndex() {
    return colors.findIndex(function (color) {
      return isEqualCurrentColor(color);
    });
  };
  var handleRemoveColor = function handleRemoveColor() {
    var selectedIndex = selectedColorIndex();
    if (selectedIndex > -1) {
      var newColors = colors.filter(function (_, index) {
        return index !== selectedIndex;
      });
      onChange === null || onChange === void 0 || onChange(newColors);
    }
  };
  var handleClick = function handleClick(color) {
    return onSetColor === null || onSetColor === void 0 ? void 0 : onSetColor(color);
  };
  return /* @__PURE__ */React.createElement("div", {
    className: swatchesClass
  }, title ? /* @__PURE__ */React.createElement("h3", {
    className: "".concat(swatchesClass, "--title")
  }, /* @__PURE__ */React.createElement("span", null, title), editable && /* @__PURE__ */React.createElement("div", {
    className: "".concat(swatchesClass, "--actions")
  }, /* @__PURE__ */React.createElement("span", {
    role: "button",
    className: "".concat(baseClassName, "__icon"),
    onClick: function onClick() {
      return handleAddColor === null || handleAddColor === void 0 ? void 0 : handleAddColor();
    }
  }, /* @__PURE__ */React.createElement(AddIcon, null)), colors.length > 0 ? /* @__PURE__ */React.createElement("span", {
    role: "button",
    className: "".concat(baseClassName, "__icon"),
    onClick: function onClick() {
      return handleRemoveColor();
    }
  }, /* @__PURE__ */React.createElement(DeleteIcon, null)) : null)) : null, /* @__PURE__ */React.createElement("ul", {
    className: classNames("".concat(swatchesClass, "--items"), "narrow-scrollbar")
  }, colors.map(function (color) {
    return /* @__PURE__ */React.createElement("li", {
      className: classNames("".concat(swatchesClass, "--item"), isEqualCurrentColor(color) && editable ? statusClassNames.active : ""),
      key: color,
      onClick: function onClick() {
        if (disabled) {
          return;
        }
        handleClick(color);
      }
    }, /* @__PURE__ */React.createElement("div", {
      className: classNames("".concat(swatchesClass, "--item__color"), "".concat(baseClassName, "--bg-alpha"))
    }, /* @__PURE__ */React.createElement("span", {
      className: "".concat(swatchesClass, "--item__inner"),
      style: {
        background: color
      }
    })));
  })));
};
var SwatchesPanel = /*#__PURE__*/React.memo(Swatches);

export { SwatchesPanel as default };
//# sourceMappingURL=swatches.js.map
