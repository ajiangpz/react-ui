import React from 'react';
import '../../utils/color-picker/index.js';
import { Radio } from '../../../radio/index.js';
import { i as COLOR_MODES } from '../../../_chunks/dep-D1aIcw94.js';
import '../../../_chunks/dep-Chz4ZJCb.js';
import '../../../_chunks/dep-Cwish4GD.js';
import '../../../_chunks/dep-D-UKOauR.js';
import '../../../_chunks/dep-CMQtlHHc.js';
import '../../../_chunks/dep-CgyDw_YI.js';
import '../../../_chunks/dep-CzLhKWCf.js';
import '../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../_chunks/dep-C0K5Xywv.js';
import '../../../_chunks/dep-Do9UdkhS.js';
import 'hoist-non-react-statics';
import '../../../common/Check.js';
import '../../../_chunks/dep-DN7d1SzH.js';
import 'classnames';
import '../../../_chunks/dep-DHWwZ2Nj.js';
import '../../../_chunks/dep-u7AyxuYF.js';
import '../../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../../_chunks/dep-CCaTIa7l.js';
import '../../../_chunks/dep-DGvfel3I.js';
import '../../../radio/RadioGroup.js';
import '../../../_chunks/dep-C4qhHlmM.js';
import '../../../_chunks/dep-B2D1svZy.js';
import '../../../_chunks/dep-Ccktr_jk.js';
import '../../../_chunks/dep-DRwijJcv.js';
import '../../../radio/style/css.js';

var Header = function Header(props) {
  var _props$baseClassName = props.baseClassName,
    baseClassName = _props$baseClassName === void 0 ? "" : _props$baseClassName,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? "monochrome" : _props$mode,
    colorModes = props.colorModes,
    onModeChange = props.onModeChange;
  var isSingleMode = (colorModes === null || colorModes === void 0 ? void 0 : colorModes.length) === 1;
  if (isSingleMode) {
    return null;
  }
  return /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__head")
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__mode")
  }, /* @__PURE__ */React.createElement(Radio.Group, {
    variant: "default-filled",
    size: "small",
    value: mode,
    onChange: onModeChange
  }, Object.keys(COLOR_MODES).map(function (key) {
    return /* @__PURE__ */React.createElement(Radio.Button, {
      key: key,
      value: key
    }, COLOR_MODES[key]);
  }))));
};
var header = /*#__PURE__*/React.memo(Header);

export { header as default };
//# sourceMappingURL=header.js.map
