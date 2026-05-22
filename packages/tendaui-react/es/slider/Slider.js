import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useRef, useMemo } from 'react';
import classNames from 'classnames';
import { isNumber, isObject, isString, isFunction } from 'lodash-es';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import InputNumber from '../input-number/InputNumber.js';
import SliderHandleButton from './SliderHandleButton.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '@tendaui/icons';
import '../input/index.js';
import '../input/Input.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-D6YxJv-F.js';
import '../_chunks/dep-BGP3l2nd.js';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../button/index.js';
import '../button/Button.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../common/Portal.js';
import 'react-dom';
import '../loading/Gradient.js';
import '../_chunks/dep-DHWwZ2Nj.js';
import '../_chunks/dep-PPA-yoAy.js';
import '../_chunks/dep-DbVHGoUC.js';
import '../loading/style/css.js';
import '../button/style/css.js';
import '../input-number/useInputNumber.js';
import '../utils/log/index.js';
import '../_chunks/dep-C4qhHlmM.js';
import '../_chunks/dep-sSDUpJwy.js';
import '../_chunks/dep-BbeHB7S3.js';

var logSet = /* @__PURE__ */new Set();
var log = {
  warn: function warn(componentName, message) {
    console.warn("TDesign ".concat(componentName, " Warn: ").concat(message));
  },
  warnOnce: function warnOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Warn: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.warn(msgContent);
  },
  error: function error(componentName, message) {
    console.error("TDesign ".concat(componentName, " Error: ").concat(message));
  },
  errorOnce: function errorOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Error: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.error(msgContent);
  },
  info: function info(componentName, message) {
    console.info("TDesign ".concat(componentName, " Info: ").concat(message));
  }
};

function fillZero(length) {
  return new Array(length).fill(0).join("");
}
function isInputNumber(num) {
  if (!num) return true;
  if (isNumber(num)) return !Number.isNaN(num);
  var r = /^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(num);
  if (!r) return false;
  var eCount = 0;
  var negativeCount = 0;
  var dotCount = 0;
  for (var i = 0, len = num.length; i < len; i++) {
    if (num[i] === ".") {
      dotCount += 1;
      if (dotCount > 1) return false;
    }
    if (/(e|E)+/.test(num[i])) {
      eCount += 1;
      if (eCount > 1) return false;
    }
    if (num[i] === "-") {
      negativeCount += 1;
      if (negativeCount > 2) return false;
    }
  }
  return true;
}
function removeInvalidZero(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (num.indexOf(".") !== -1) {
    log.error("InputNumber", "num is not a integer number.");
    return num;
  }
  if (!num || num === "0" && decimal) return "";
  if (num === "0") return num;
  return (decimal ? num.replace(/0+$/, "") : num.replace(/^0+/, "")) || "0";
}
function largeIntNumberAdd(num1, num2) {
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var number1 = removeInvalidZero(num1, decimal);
  var number2 = removeInvalidZero(num2, decimal);
  var isFirstLarger = number1.length > number2.length;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len = decimal ? minNumber.length : maxNumber.length;
  for (var i = len - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) + (Number(minNumber[minIndex]) || 0) + (step[i] || 0);
    if (count >= 10) {
      step[i - 1] = 1;
    }
    newNumber.unshift(String(count % 10));
  }
  if (step[-1]) {
    newNumber.unshift("1");
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
  }
  return newNumber.join("");
}
function largePositiveNumberAdd(num1, num2) {
  var _num1$split = num1.split("."),
    _num1$split2 = _slicedToArray(_num1$split, 2),
    _num1$split2$ = _num1$split2[0],
    intNumber1 = _num1$split2$ === void 0 ? "0" : _num1$split2$,
    _num1$split2$2 = _num1$split2[1],
    decimalNumber1 = _num1$split2$2 === void 0 ? "0" : _num1$split2$2;
  var _num2$split = num2.split("."),
    _num2$split2 = _slicedToArray(_num2$split, 2),
    _num2$split2$ = _num2$split2[0],
    intNumber2 = _num2$split2$ === void 0 ? "0" : _num2$split2$,
    _num2$split2$2 = _num2$split2[1],
    decimalNumber2 = _num2$split2$2 === void 0 ? "0" : _num2$split2$2;
  var integerSum = largeIntNumberAdd(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0") return integerSum;
  var newDecimalNumber1 = removeInvalidZero(decimalNumber1, true);
  var newDecimalNumber2 = removeInvalidZero(decimalNumber2, true);
  var decimalNumberSum = largeIntNumberAdd(newDecimalNumber1, newDecimalNumber2, true);
  var decimalLength = decimalNumberSum.length;
  if (decimalLength > newDecimalNumber1.length && decimalLength > newDecimalNumber2.length) {
    return [removeInvalidZero(largeIntNumberAdd(integerSum, "1")), removeInvalidZero(decimalNumberSum.slice(1), true)].filter(function (v) {
      return v;
    }).join(".");
  }
  return [removeInvalidZero(integerSum), removeInvalidZero(decimalNumberSum, true)].filter(function (v) {
    return v;
  }).join(".");
}
function compareLargeIntegerNumber(num1, num2) {
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  if (number1.length === number2.length) {
    for (var i = 0, len = number1.length; i < len; i++) {
      if (number1[i] > number2[i]) return 1;
      if (number1[i] < number2[i]) return -1;
    }
    return 0;
  }
  return number1.length > number2.length ? 1 : -1;
}
function compareLargeDecimalNumber(num1, num2) {
  var number1 = num1 && num1 !== "0" ? num1.replace(/0+$/, "") : "0";
  var number2 = num2 && num2 !== "0" ? num2.replace(/0+$/, "") : "0";
  var maxLength = Math.max(number1.length, number2.length);
  for (var i = 0, len = maxLength; i < len; i++) {
    if ((number1[i] || 0) > (number2[i] || 0)) return 1;
    if ((number1[i] || 0) < (number2[i] || 0)) return -1;
  }
  return 0;
}
function formatENumber(num) {
  var _num$split = num.split("e"),
    _num$split2 = _slicedToArray(_num$split, 2),
    num1 = _num$split2[0],
    num2 = _num$split2[1];
  if (!num2) return num;
  var _num$split3 = num.split("."),
    _num$split4 = _slicedToArray(_num$split3, 2),
    integer = _num$split4[0],
    _num$split4$ = _num$split4[1],
    initDecimal = _num$split4$ === void 0 ? "" : _num$split4$;
  var zeroCount = Number(num2);
  var _initDecimal$split = initDecimal.split("e"),
    _initDecimal$split2 = _slicedToArray(_initDecimal$split, 1),
    decimal = _initDecimal$split2[0];
  if (zeroCount > decimal.length) {
    var multipleZero = fillZero(zeroCount - decimal.length);
    return num1.replace(/(^0+|\.)/g, "") + multipleZero;
  }
  var n1 = integer.replace(/^0+/, "") + decimal.slice(0, zeroCount);
  var d2 = decimal.slice(zeroCount);
  return d2 ? [n1, d2].join(".") : n1;
}
function compareLargeNumber(num1, num2) {
  var _formatENumber$split = formatENumber(num1).split("."),
    _formatENumber$split2 = _slicedToArray(_formatENumber$split, 2),
    integer1 = _formatENumber$split2[0],
    decimal1 = _formatENumber$split2[1];
  var _formatENumber$split3 = formatENumber(num2).split("."),
    _formatENumber$split4 = _slicedToArray(_formatENumber$split3, 2),
    integer2 = _formatENumber$split4[0],
    decimal2 = _formatENumber$split4[1];
  var result = compareLargeIntegerNumber(integer1.replace("-", ""), integer2.replace("-", ""));
  var integer1IsNegative = integer1.includes("-");
  var integer2IsNegative = integer2.includes("-");
  if (integer1IsNegative && !integer2IsNegative) return -1;
  if (!integer1IsNegative && integer2IsNegative) return 1;
  if (integer1IsNegative && integer2IsNegative) {
    if (result === 0) return 0;
    return result > 0 ? -1 : 1;
  }
  if (result === 0) {
    return compareLargeDecimalNumber(decimal1, decimal2);
  }
  return result;
}
function isInfinity(num) {
  return [-Infinity, Infinity].includes(Number(num));
}
function isSafeNumber(num) {
  return Number(num) < Number.MAX_SAFE_INTEGER && Number(num) > Number.MIN_SAFE_INTEGER;
}
function compareNumber(num1, num2, largeNumber) {
  var isSafeNumberCompare = isSafeNumber(num1) && isSafeNumber(num2) && !largeNumber;
  var isInfinityCompare = isInfinity(num1) || isInfinity(num2);
  if (isSafeNumberCompare || isInfinityCompare) {
    if (Number(num1) === Number(num2)) return 0;
    return Number(num1) > Number(num2) ? 1 : -1;
  }
  return compareLargeNumber(String(num1), String(num2));
}
function largeIntegerNumberSubtract(num1, num2, p) {
  if (num1 === num2) return "0";
  var _ref = p || {},
    decimal = _ref.decimal,
    stayZero = _ref.stayZero;
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  var isFirstLarger = compareLargeIntegerNumber(number1, number2) > 0;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len = decimal ? minNumber.length : maxNumber.length;
  for (var i = len - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) - (Number(minNumber[minIndex]) || 0) - (step[i] || 0);
    if (count < 0) {
      step[i - 1] = 1;
      count += 10;
    }
    newNumber.unshift(String(count));
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
  }
  var finalNumber = newNumber.join("");
  if (!stayZero) {
    finalNumber = finalNumber.replace(/^0+/, "");
  }
  return removeInvalidZero(isFirstLarger ? finalNumber : "-".concat(finalNumber));
}
function largePositiveNumberSubtract(num1, num2) {
  if (num1 === num2) return "0";
  var isFirstLarger = compareNumber(num1, num2, true) > 0;
  var maxNumber = isFirstLarger ? num1 : num2;
  var minNumber = isFirstLarger ? num2 : num1;
  var _maxNumber$split = maxNumber.split("."),
    _maxNumber$split2 = _slicedToArray(_maxNumber$split, 2),
    intNumber1 = _maxNumber$split2[0],
    _maxNumber$split2$ = _maxNumber$split2[1],
    decimalNumber1 = _maxNumber$split2$ === void 0 ? "0" : _maxNumber$split2$;
  var _minNumber$split = minNumber.split("."),
    _minNumber$split2 = _slicedToArray(_minNumber$split, 2),
    intNumber2 = _minNumber$split2[0],
    _minNumber$split2$ = _minNumber$split2[1],
    decimalNumber2 = _minNumber$split2$ === void 0 ? "0" : _minNumber$split2$;
  var integerNumber = largeIntegerNumberSubtract(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0") {
    return isFirstLarger ? integerNumber : "-".concat(integerNumber);
  }
  var decimalNumber = "";
  var addOneNumber = decimalNumber1;
  if (decimalNumber1.length < decimalNumber2.length) {
    addOneNumber = "".concat(decimalNumber1).concat(fillZero(decimalNumber2.length - decimalNumber1.length));
  }
  if (compareLargeDecimalNumber(addOneNumber, decimalNumber2) >= 0) {
    decimalNumber = largeIntegerNumberSubtract(addOneNumber, decimalNumber2, {
      decimal: true
    });
  } else {
    if (decimalNumber1.length < decimalNumber2.length || decimalNumber1 === "0") {
      decimalNumber = largeIntegerNumberSubtract("1".concat(addOneNumber), decimalNumber2, {
        stayZero: true
      });
      decimalNumber = fillZero(decimalNumber2.length - decimalNumber.length) + decimalNumber;
    } else {
      decimalNumber = largeIntegerNumberSubtract(decimalNumber1, decimalNumber2, {
        decimal: true
      });
    }
    integerNumber = largeIntegerNumberSubtract(integerNumber, "1");
  }
  var finalNumber = decimalNumber ? [integerNumber, decimalNumber].join(".") : integerNumber;
  return isFirstLarger ? finalNumber : "-".concat(finalNumber);
}
function largeNumberSubtract(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    var r = largePositiveNumberAdd(num1.slice(1), num2);
    return "-".concat(r);
  }
  if (isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num2.slice(1), num1.slice(1));
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberAdd(num1, num2.slice(1));
  }
  return largePositiveNumberSubtract(num1, num2);
}
function largeNumberAdd(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    return largePositiveNumberSubtract(num2, num1.slice(1));
  }
  if (isFirstNegative && isSecondNegative) {
    var r = largePositiveNumberAdd(num2.slice(1), num1.slice(1));
    return "-".concat(r);
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num1, num2.slice(1));
  }
  return largePositiveNumberAdd(num1, num2);
}
function formatDecimal(num, places) {
  var enableRound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (enableRound) {
    return num.toFixed(places);
  }
  var _num$toString$split = num.toString().split("."),
    _num$toString$split2 = _slicedToArray(_num$toString$split, 2),
    integer = _num$toString$split2[0],
    decimal = _num$toString$split2[1];
  if (places === 0) {
    return integer;
  }
  if (decimal) {
    var decimalNumber = decimal.slice(0, places);
    if (decimal.length < places) {
      decimalNumber += fillZero(places - decimal.length);
    }
    return [integer, decimalNumber].join(".");
  }
  return [integer, fillZero(places)].join(".");
}
function decimalPlacesToFixedNum(num, decimalPlaces) {
  if (isObject(decimalPlaces)) {
    var _decimalPlaces$enable;
    return formatDecimal(num, decimalPlaces.places, (_decimalPlaces$enable = decimalPlaces.enableRound) !== null && _decimalPlaces$enable !== void 0 ? _decimalPlaces$enable : true);
  }
  return formatDecimal(num, decimalPlaces, true);
}
function largeNumberToFixed(number) {
  var _decimalPlaces$enable2;
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (Number.isNaN(Number(number))) return "";
  if (!largeNumber) {
    return decimalPlacesToFixedNum(Number(number), decimalPlaces);
  }
  var places = isObject(decimalPlaces) ? decimalPlaces.places : decimalPlaces;
  var enableRound = isObject(decimalPlaces) ? (_decimalPlaces$enable2 = decimalPlaces.enableRound) !== null && _decimalPlaces$enable2 !== void 0 ? _decimalPlaces$enable2 : true : true;
  if (!isString(number)) return String(number);
  var _number$split = number.split("."),
    _number$split2 = _slicedToArray(_number$split, 2),
    num1 = _number$split2[0],
    num2 = _number$split2[1];
  if (!num2) {
    return places > 0 && enableRound ? [number, fillZero(places)].join(".") : number;
  }
  if (places === 0) {
    return enableRound && Number(num2[0]) >= 5 ? largePositiveNumberAdd(num1, "1") : num1;
  }
  var decimalNumber = num2.slice(0, places);
  if (num2.length < places) {
    decimalNumber += fillZero(places - num2.length);
  } else if (enableRound) {
    var _decimalNumber$match;
    var leadZeroNum = (_decimalNumber$match = decimalNumber.match(/^0+/)) === null || _decimalNumber$match === void 0 ? void 0 : _decimalNumber$match[0].length;
    var leadNineNum = decimalNumber.match(/^9+/);
    var needAdded = Number(num2[places]) >= 5;
    decimalNumber = needAdded ? largePositiveNumberAdd(decimalNumber, "1") : decimalNumber;
    if (leadZeroNum && needAdded && leadZeroNum + decimalNumber.length >= places) {
      decimalNumber = "".concat(fillZero(places - decimalNumber.length)).concat(decimalNumber);
    }
    if (leadNineNum && decimalNumber.length > places) {
      num1 = (Number(num1) + 1).toString();
      decimalNumber = fillZero(places);
    }
  }
  return [num1, decimalNumber].join(".");
}

var numberToPercent = function numberToPercent(number) {
  return "".concat(number * 100, "%");
};
function accAdd(num1, num2) {
  var precision1 = (num1.toString().split(".")[1] || "").length;
  var precision2 = (num2.toString().split(".")[1] || "").length;
  var scale = Math.pow(10, Math.max(precision1, precision2));
  var sum = Math.round(num1 * scale) + Math.round(num2 * scale);
  return sum / scale;
}

var sliderDefaultProps = {
  inputNumberProps: false,
  label: true,
  layout: "horizontal",
  max: 100,
  min: 0,
  range: false,
  step: 1
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var LEFT_NODE = 0;
var RIGHT_NODE = 1;
var Slider = /*#__PURE__*/React.forwardRef(function (originalProps, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    direction = _useConfig.direction;
  var props = useDefaultProps(originalProps, sliderDefaultProps);
  var disabled = props.disabled,
    inputNumberProps = props.inputNumberProps,
    label = props.label,
    layout = props.layout,
    marks = props.marks,
    max = props.max,
    min = props.min,
    range = props.range,
    step = props.step,
    tooltipProps = props.tooltipProps,
    className = props.className,
    style = props.style,
    onChange = props.onChange;
  var sliderRef = useRef(null);
  var _useControlled = useControlled(props, "value", onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    internalOnChange = _useControlled2[1];
  var isVertical = layout === "vertical";
  var isRtl = direction === "rtl";
  var renderValue = Array.isArray(value) ? value : [min, Math.min(max, value)];
  var start = (renderValue[LEFT_NODE] - min) / (max - min);
  var width = (renderValue[RIGHT_NODE] - renderValue[LEFT_NODE]) / (max - min);
  var end = start + width;
  var precision = useMemo(function () {
    if (!Number.isInteger(step)) return step.toString().split(".")[1].length;
    return void 0;
  }, [step]);
  var dots = useMemo(function () {
    if (Array.isArray(marks)) {
      if (marks.some(function (mark) {
        return typeof mark !== "number";
      })) {
        console.warn('The props "marks" only support number!');
        return [];
      }
      return marks.map(function (mark) {
        return {
          value: mark,
          position: (mark - min) / (max - min),
          label: mark
        };
      });
    }
    if (marks && _typeof(marks) === "object") {
      var result = [];
      Object.keys(marks).forEach(function (key) {
        var numberKey = Number(key);
        if (typeof numberKey !== "number") {
          console.warn('The props "marks" key only support number!');
        } else {
          result.push({
            value: numberKey,
            label: marks[numberKey],
            position: (numberKey - min) / (max - min)
          });
        }
      });
      return result;
    }
    return [];
  }, [max, min, marks]);
  var allDots = useMemo(function () {
    var result = [];
    for (var i = min; i <= max; i = accAdd(i, step)) {
      result.push({
        value: i,
        position: (i - min) / (max - min)
      });
    }
    return result;
  }, [max, min, step]);
  var startDirection = isVertical ? "bottom" : isRtl ? "right" : "left";
  var stepDirection = isVertical ? "top" : isRtl ? "right" : "left";
  var sizeKey = isVertical ? "height" : "width";
  var renderDots = isVertical ? dots.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      position: 1 - item.position
    });
  }) : dots;
  var handleInputChange = function handleInputChange(newValue, nodeIndex) {
    var safeValue = Number(newValue.toFixed(32));
    var resultValue = Math.max(Math.min(max, safeValue), min);
    if (precision) resultValue = Number(largeNumberToFixed(String(resultValue), precision));
    if (nodeIndex === LEFT_NODE && value && safeValue > value[RIGHT_NODE]) resultValue = value[RIGHT_NODE];
    if (nodeIndex === RIGHT_NODE && value && safeValue < value[LEFT_NODE]) resultValue = value[LEFT_NODE];
    if (Array.isArray(value)) {
      var arrValue = value.slice();
      arrValue[nodeIndex] = resultValue;
      internalOnChange(arrValue);
    } else {
      internalOnChange(resultValue);
    }
  };
  var createInput = function createInput(nodeIndex) {
    var inputProps = _typeof(inputNumberProps) === "object" ? inputNumberProps : {};
    var currentValue = renderValue[nodeIndex];
    return /* @__PURE__ */React.createElement(InputNumber, _objectSpread({
      value: currentValue,
      onChange: function onChange(v) {
        if (typeof v !== "undefined") {
          handleInputChange(Number(v), nodeIndex);
        }
      },
      className: classNames("".concat(classPrefix, "-slider-input"), {
        "is-vertical": isVertical
      }),
      disabled: disabled,
      theme: "column",
      min: min,
      max: max
    }, inputProps));
  };
  var nearbyValueChange = function nearbyValueChange(value2) {
    var buttonBias = Math.abs(value2 - renderValue[LEFT_NODE]) > Math.abs(value2 - renderValue[RIGHT_NODE]) ? RIGHT_NODE : LEFT_NODE;
    handleInputChange(value2, buttonBias);
  };
  var setPosition = function setPosition(position, nodeIndex) {
    var index = 0;
    var minDistance = 1;
    for (var i = 0; i < allDots.length; i++) {
      var diff = Math.abs(allDots[i].position - position);
      if (minDistance > diff) {
        index = i;
        minDistance = diff;
      }
    }
    var value2 = allDots[index].value;
    if (nodeIndex === void 0 && range) {
      nearbyValueChange(value2);
    } else {
      handleInputChange(value2, nodeIndex);
    }
  };
  var onSliderChange = function onSliderChange(event, nodeIndex) {
    if (disabled || !sliderRef.current) return;
    var clientKey = isVertical ? "clientY" : "clientX";
    var sliderPositionInfo = sliderRef.current.getBoundingClientRect();
    var position = 0;
    if (isVertical) {
      var sliderOffset = sliderPositionInfo[startDirection];
      position = (event[clientKey] - sliderOffset) / sliderPositionInfo[sizeKey] * -1;
    } else if (isRtl) {
      position = (sliderPositionInfo.right - event[clientKey]) / sliderPositionInfo.width;
    } else {
      position = (event[clientKey] - sliderPositionInfo.left) / sliderPositionInfo.width;
    }
    setPosition(position, nodeIndex);
  };
  var handleClickMarks = function handleClickMarks(event, value2) {
    event.stopPropagation();
    nearbyValueChange(value2);
  };
  var createHandleButton = function createHandleButton(nodeIndex, style2) {
    var currentValue = renderValue[nodeIndex];
    var tipLabel = currentValue;
    if (isFunction(label)) {
      tipLabel = label({
        value: currentValue,
        position: nodeIndex === LEFT_NODE ? "start" : "end"
      });
    }
    if (isString(label)) {
      tipLabel = label.replace(/\$\{value\}/g, currentValue.toString());
    }
    if (isNumber(tipLabel) && precision) tipLabel = largeNumberToFixed(String(tipLabel), precision);
    return /* @__PURE__ */React.createElement(SliderHandleButton, {
      toolTipProps: _objectSpread({
        content: tipLabel
      }, tooltipProps),
      hideTips: label === false,
      classPrefix: classPrefix,
      style: style2,
      onChange: function onChange(e) {
        return onSliderChange(e, nodeIndex);
      }
    });
  };
  return /* @__PURE__ */React.createElement("div", {
    style: _objectSpread({}, style),
    className: classNames("".concat(classPrefix, "-slider__container"), {
      "is-vertical": isVertical
    }),
    ref: ref
  }, /* @__PURE__ */React.createElement("div", {
    ref: sliderRef,
    className: classNames("".concat(classPrefix, "-slider"), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-slider--vertical"), isVertical), "".concat(classPrefix, "-slider--with-input"), inputNumberProps)),
    onClick: onSliderChange
  }, /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-slider__rail"))
  }, /* @__PURE__ */React.createElement("div", {
    style: _defineProperty(_defineProperty({}, startDirection, numberToPercent(start)), sizeKey, numberToPercent(width)),
    className: classNames("".concat(classPrefix, "-slider__track"))
  }), range ? createHandleButton(LEFT_NODE, _defineProperty({}, startDirection, numberToPercent(start))) : null, createHandleButton(RIGHT_NODE, _defineProperty({}, startDirection, numberToPercent(end))), /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-slider__stops")
  }, renderDots.map(function (_ref) {
    var position = _ref.position,
      value2 = _ref.value;
    if (position === 0 || position === 1) {
      return null;
    }
    return /* @__PURE__ */React.createElement("div", {
      key: value2,
      style: _defineProperty({}, stepDirection, numberToPercent(position)),
      className: classNames("".concat(classPrefix, "-slider__stop"))
    });
  })), /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-slider__mark"))
  }, renderDots.map(function (_ref2) {
    var position = _ref2.position,
      value2 = _ref2.value,
      label2 = _ref2.label;
    return /* @__PURE__ */React.createElement("div", {
      key: value2,
      onClick: function onClick(event) {
        return handleClickMarks(event, value2);
      },
      style: _defineProperty({}, stepDirection, numberToPercent(position)),
      className: classNames("".concat(classPrefix, "-slider__mark-text"))
    }, label2);
  })))), inputNumberProps ? /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-slider__input-container"), {
      "is-vertical": isVertical
    })
  }, range && createInput(LEFT_NODE), range && /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-slider__center-line")
  }), createInput(RIGHT_NODE)) : null);
});
Slider.displayName = "Slider";

export { Slider as default };
//# sourceMappingURL=Slider.js.map
