import React from 'react';
import ColorSlider from './slider.js';
import 'classnames';
import '../../utils/color-picker/index.js';
import '../../../_chunks/dep-D1aIcw94.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-Cwish4GD.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CgyDw_YI.js';
import '../../../_chunks/dep-BbeHB7S3.js';

var HueSlider = function HueSlider(props) {
  var color = props.color,
    baseClassName = props.baseClassName,
    disabled = props.disabled,
    onChange = props.onChange;
  return /* @__PURE__ */React.createElement(ColorSlider, {
    disabled: disabled,
    baseClassName: baseClassName,
    className: "".concat(baseClassName, "__hue"),
    color: color,
    value: color.hue,
    type: "hue",
    onChange: onChange
  });
};
var HueSlider$1 = /*#__PURE__*/React.memo(HueSlider);

export { HueSlider$1 as default };
//# sourceMappingURL=hue.js.map
