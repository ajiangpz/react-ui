import { _ as _defineProperty } from '../../../../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../../../../_chunks/dep-CzLhKWCf.js';
import React, { useState } from 'react';
import '../../../utils/color-picker/index.js';
import { Select } from '../../../../select/index.js';
import FormatInputs from './inputs.js';
import { a as getColorFormatOptions } from '../../../../_chunks/dep-CMQtlHHc.js';
import '../../../../_chunks/dep-D-UKOauR.js';
import '../../../../_chunks/dep-D1aIcw94.js';
import '../../../../_chunks/dep-Chz4ZJCb.js';
import '../../../../_chunks/dep-zOZQ0R9g.js';
import 'lodash-es';
import '../../../../_chunks/dep-CgyDw_YI.js';
import '../../../../select/Select.js';
import '../../../../_chunks/dep-DN7d1SzH.js';
import 'classnames';
import '../../../../_chunks/dep-DHWwZ2Nj.js';
import '../../../../_chunks/dep-CCaTIa7l.js';
import '../../../../_chunks/dep-u7AyxuYF.js';
import '../../../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../../../_chunks/dep-Do9UdkhS.js';
import 'hoist-non-react-statics';
import '../../../../_chunks/dep-GP5EdKxc.js';
import '../../../../_chunks/dep-DhCjmfsm.js';
import '../../../../_chunks/dep-DGvfel3I.js';
import '../../../../select/Option.js';
import '../../../../_chunks/dep-PPA-yoAy.js';
import '../../../../_chunks/dep-Dlppf0JU.js';
import '../../../../_chunks/dep-U1T8CQY9.js';
import '../../../../common/FakeArrow.js';
import '../../../../loading/index.js';
import '../../../../loading/Loading.js';
import '../../../../_chunks/dep-DRwijJcv.js';
import '../../../../common/Portal.js';
import 'react-dom';
import '../../../../_chunks/dep-BRbJGDI9.js';
import '../../../../loading/Gradient.js';
import '../../../../_chunks/dep-DbVHGoUC.js';
import '../../../../loading/style/css.js';
import '../../../../select-input/index.js';
import '../../../../select-input/SelectInput.js';
import '../../../../select-input/hook/useSingle.js';
import '../../../../input/index.js';
import '../../../../input/Input.js';
import '@tendaui/icons';
import '../../../../_chunks/dep-D6YxJv-F.js';
import '../../../../_chunks/dep-BGP3l2nd.js';
import '../../../../config-provider/index.js';
import '../../../../config-provider/ConfigProvider.js';
import '../../../../input/InputGroup.js';
import '../../../../input/style/css.js';
import '../../../../select-input/hook/useMultiple.js';
import '../../../../tag-input/index.js';
import '../../../../tag-input/TagInput.js';
import '../../../../tag-input/hooks/useTagList.js';
import '../../../../tag/index.js';
import '../../../../tag/Tag.js';
import '../../../../_chunks/dep-sSDUpJwy.js';
import '../../../../tag/style/css.js';
import '../../../../hooks/useDragSorter.js';
import '../../../../tag-input/style/css.js';
import '../../../../popup/index.js';
import '../../../../popup/Popup.js';
import '../../../../portal/Portal.js';
import '../../../../_chunks/dep-B2D1svZy.js';
import 'react-is';
import '../../../../_chunks/dep-C1XcmShP.js';
import '../../../../_chunks/dep-Ccktr_jk.js';
import '@popperjs/core';
import 'react-fast-compare';
import 'react-transition-group';
import '../../../../popup/style/css.js';
import '../../../../select-input/style/css.js';
import '../../../../_chunks/dep-aX8qrQpB.js';
import '../../../../select/style/css.js';
import '../../../../input-number/index.js';
import '../../../../input-number/InputNumber.js';
import '../../../../button/index.js';
import '../../../../button/Button.js';
import '../../../../button/style/css.js';
import '../../../../input-number/useInputNumber.js';
import '../../../../utils/log/index.js';
import '../../../../_chunks/dep-C4qhHlmM.js';
import '../../../../input-number/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormatPanel = function FormatPanel(props) {
  var enableAlpha = props.enableAlpha,
    baseClassName = props.baseClassName,
    format = props.format,
    selectInputProps = props.selectInputProps;
  var _useState = useState(format),
    _useState2 = _slicedToArray(_useState, 2),
    formatMode = _useState2[0],
    setFormatMode = _useState2[1];
  var handleModeChange = function handleModeChange(v) {
    setFormatMode(v);
  };
  return /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__format")
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__format--item")
  }, /* @__PURE__ */React.createElement(Select, {
    size: "small",
    className: "".concat(baseClassName, "__format-mode-select"),
    popupProps: _objectSpread({
      overlayClassName: "".concat(baseClassName, "__select-options")
    }, selectInputProps === null || selectInputProps === void 0 ? void 0 : selectInputProps.popupProps),
    autoWidth: true,
    value: formatMode,
    onChange: handleModeChange
  }, getColorFormatOptions(enableAlpha).map(function (item) {
    return /* @__PURE__ */React.createElement(Select.Option, {
      key: item,
      value: item,
      label: item,
      style: {
        fontSize: "12px"
      }
    });
  }))), /* @__PURE__ */React.createElement("div", {
    className: "".concat(baseClassName, "__format--item")
  }, /* @__PURE__ */React.createElement(FormatInputs, _objectSpread(_objectSpread({}, props), {}, {
    format: formatMode
  }))));
};
var FormatPanel$1 = /*#__PURE__*/React.memo(FormatPanel);

export { FormatPanel$1 as default };
//# sourceMappingURL=index.js.map
