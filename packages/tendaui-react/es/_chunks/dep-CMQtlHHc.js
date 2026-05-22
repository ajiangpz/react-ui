import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { A as ALPHA_FORMAT_MAP, F as FORMATS, k as COLOR_FORMAT_INPUTS } from './dep-D1aIcw94.js';

var initColorFormat = function initColorFormat(format, enableAlpha) {
  if (enableAlpha && format in ALPHA_FORMAT_MAP) {
    return format in ALPHA_FORMAT_MAP ? ALPHA_FORMAT_MAP[format] : format;
  }
  return format;
};
var getColorFormatMap = function getColorFormatMap(color, type) {
  if (type === "encode") {
    return {
      HSV: color.getHsva(),
      HSVA: color.getHsva(),
      HSL: color.getHsla(),
      HSLA: color.getHsla(),
      RGB: color.getRgba(),
      RGBA: color.getRgba(),
      CMYK: color.getCmyk(),
      CSS: {
        css: color.css
      },
      HEX: {
        hex: color.hex
      },
      HEX8: {
        hex: color.hex8
        // 为了减少转换 hex8 的 key 也对应 hex
      }
    };
  }
  return color.getFormatsColorMap();
};
var getColorFormatOptions = function getColorFormatOptions(enableAlpha) {
  return enableAlpha ? FORMATS.map(function (item) {
    return item in ALPHA_FORMAT_MAP ? ALPHA_FORMAT_MAP[item] : item;
  }) : FORMATS;
};
var getColorFormatInputs = function getColorFormatInputs() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "RGB";
  var enableAlpha = arguments.length > 1 ? arguments[1] : undefined;
  var finalFormat;
  if (enableAlpha) {
    finalFormat = Object.keys(ALPHA_FORMAT_MAP).find(function (key) {
      return key in ALPHA_FORMAT_MAP && ALPHA_FORMAT_MAP[key] === format;
    }) || format;
  } else {
    finalFormat = format;
  }
  if (!COLOR_FORMAT_INPUTS[finalFormat]) return [];
  var configs = _toConsumableArray(COLOR_FORMAT_INPUTS[finalFormat]);
  if (enableAlpha && format !== "CMYK") {
    configs.push({
      type: "inputNumber",
      key: "a",
      min: 0,
      max: 100,
      format: function format(value) {
        return "".concat(value, "%");
      },
      flex: 1.15
    });
  }
  return configs;
};

export { getColorFormatOptions as a, getColorFormatInputs as b, getColorFormatMap as g, initColorFormat as i };
//# sourceMappingURL=dep-CMQtlHHc.js.map
