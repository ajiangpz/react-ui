import { _ as _defineProperty } from '../../../../_chunks/dep-Cwish4GD.js';
import React, { useRef, useCallback, useEffect } from 'react';
import { throttle } from 'lodash-es';
import '../../../utils/color-picker/index.js';
import { Input } from '../../../../input/index.js';
import { InputNumber } from '../../../../input-number/index.js';
import { g as getColorFormatMap, b as getColorFormatInputs } from '../../../../_chunks/dep-CMQtlHHc.js';
import { C as Color } from '../../../../_chunks/dep-D1aIcw94.js';
import '../../../../_chunks/dep-D-UKOauR.js';
import '../../../../_chunks/dep-Chz4ZJCb.js';
import '../../../../_chunks/dep-CzLhKWCf.js';
import '../../../../_chunks/dep-zOZQ0R9g.js';
import '../../../../_chunks/dep-CgyDw_YI.js';
import '../../../../input/Input.js';
import '../../../../_chunks/dep-DN7d1SzH.js';
import 'classnames';
import '@tendaui/icons';
import '../../../../_chunks/dep-BRbJGDI9.js';
import '../../../../_chunks/dep-DRwijJcv.js';
import '../../../../_chunks/dep-CCaTIa7l.js';
import '../../../../_chunks/dep-D6YxJv-F.js';
import '../../../../_chunks/dep-DGvfel3I.js';
import '../../../../_chunks/dep-u7AyxuYF.js';
import '../../../../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../../../../_chunks/dep-BGP3l2nd.js';
import '../../../../config-provider/index.js';
import '../../../../config-provider/ConfigProvider.js';
import '../../../../input/InputGroup.js';
import '../../../../input/style/css.js';
import '../../../../input-number/InputNumber.js';
import '../../../../button/index.js';
import '../../../../button/Button.js';
import '../../../../loading/index.js';
import '../../../../loading/Loading.js';
import '../../../../common/Portal.js';
import 'react-dom';
import '../../../../loading/Gradient.js';
import '../../../../_chunks/dep-DHWwZ2Nj.js';
import '../../../../_chunks/dep-PPA-yoAy.js';
import '../../../../_chunks/dep-DbVHGoUC.js';
import '../../../../loading/style/css.js';
import '../../../../button/style/css.js';
import '../../../../input-number/useInputNumber.js';
import '../../../../utils/log/index.js';
import '../../../../_chunks/dep-C4qhHlmM.js';
import '../../../../_chunks/dep-sSDUpJwy.js';
import '../../../../input-number/style/css.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormatInputs = function FormatInputs(props) {
  var format = props.format,
    enableAlpha = props.enableAlpha,
    inputProps = props.inputProps,
    disabled = props.disabled,
    onInputChange = props.onInputChange,
    color = props.color;
  var modelValueRef = useRef({});
  var lastModelValue = useRef({});
  var inputKey = useRef(0);
  var updateModelValue = useCallback(function () {
    var value = getColorFormatMap(color, "encode")[format];
    if (!value || typeof value === "string") return;
    var valueObj = value;
    if (enableAlpha && "a" in valueObj) {
      valueObj.a = Math.round(color.alpha * 100);
    }
    var changedFormatValue = {};
    Object.keys(valueObj).forEach(function (key) {
      if (valueObj[key] !== modelValueRef.current[key]) {
        changedFormatValue[key] = valueObj[key];
      }
      lastModelValue.current[key] = valueObj[key];
    });
    if (Object.keys(changedFormatValue).length > 0) {
      modelValueRef.current = valueObj;
    }
  }, [color, enableAlpha, format]);
  var handleInputChange = function handleInputChange(key, v, max) {
    inputKey.current = performance.now();
    if (v.toString().trim() === "") {
      var lastValue = lastModelValue.current[key];
      color.update(lastValue);
      onInputChange();
      return;
    }
    if (!v || v === lastModelValue.current[key] || Number(v) < 0 || Number(v) > max) return;
    lastModelValue.current[key] = v;
    var newFormatValue = _objectSpread(_objectSpread({}, modelValueRef.current), {}, _defineProperty({}, key, v));
    modelValueRef.current = newFormatValue;
    if (key === "a") {
      color.alpha = v / 100;
    } else if (key === "hex" || key === "css") {
      color.update(v);
    } else {
      color.update(Color.object2color(newFormatValue, format));
    }
    onInputChange();
  };
  updateModelValue();
  useEffect(function () {
    var throttleUpdate = throttle(updateModelValue, 100);
    throttleUpdate();
    return function () {
      return throttleUpdate.cancel();
    };
  }, [color.saturation, color.hue, color.value, color.alpha, format, updateModelValue]);
  return /* @__PURE__ */React.createElement("div", {
    className: "input-group"
  }, getColorFormatInputs(format, enableAlpha).map(function (config) {
    var currentValue = modelValueRef.current[config.key];
    var commonProps = _objectSpread(_objectSpread({}, inputProps), {}, {
      disabled: disabled,
      title: currentValue,
      align: "center",
      size: "small",
      onBlur: function onBlur(v) {
        return handleInputChange(config.key, v, config.max);
      },
      onEnter: function onEnter(v) {
        return handleInputChange(config.key, v, config.max);
      }
    });
    return /* @__PURE__ */React.createElement("div", {
      className: "input-group__item",
      key: config.key,
      style: {
        flex: config.flex || 1
      }
    }, config.type === "input" ? /* @__PURE__ */React.createElement(Input, _objectSpread(_objectSpread({}, commonProps), {}, {
      defaultValue: currentValue,
      key: "".concat(inputKey.current, "-").concat(currentValue),
      maxlength: format === "HEX" ? 9 : void 0
    })) : /* @__PURE__ */React.createElement(InputNumber, _objectSpread(_objectSpread({}, commonProps), {}, {
      min: config.min,
      max: config.max,
      format: config.format,
      step: 1,
      value: currentValue,
      onChange: function onChange(v) {
        return handleInputChange(config.key, v !== null && v !== void 0 ? v : config.min, config.max);
      },
      theme: "normal"
    })));
  }));
};
var FormatInputs$1 = /*#__PURE__*/React.memo(FormatInputs);

export { FormatInputs$1 as default };
//# sourceMappingURL=inputs.js.map
