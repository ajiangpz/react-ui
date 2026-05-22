import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { isNumber, isObject, isString, isUndefined } from 'lodash-es';
import log from '../utils/log/index.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { u as useCommonClassName } from '../_chunks/dep-C4qhHlmM.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

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

function canAddNumber(num, max) {
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber && isString(num)) {
    return compareNumber(num, max, largeNumber) < 0;
  }
  return num < max;
}
function canReduceNumber(num, min) {
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber && isString(num)) {
    return compareNumber(num, min, largeNumber) > 0;
  }
  return num > min;
}
function putInRangeNumber(val, params) {
  if (val === "") return void 0;
  var max = params.max,
    min = params.min,
    lastValue = params.lastValue,
    largeNumber = params.largeNumber;
  if (!isInputNumber(val)) return lastValue;
  if (largeNumber && (isString(max) || max === Infinity) && (isString(min) || min === -Infinity)) {
    if (compareNumber(max, val, largeNumber) < 0) return max;
    if (compareNumber(min, val, largeNumber) > 0) return min;
    return val;
  }
  return Math.max(Number(min), Math.min(Number(max), Number(val)));
}
function positiveAdd(num1, num2) {
  var _num1$toString$split$, _num2$toString$split$;
  if (!num1 || !num2) return (num1 || 0) + (num2 || 0);
  var r1 = ((_num1$toString$split$ = num1.toString().split(".")[1]) === null || _num1$toString$split$ === void 0 ? void 0 : _num1$toString$split$.length) || 0;
  var r2 = ((_num2$toString$split$ = num2.toString().split(".")[1]) === null || _num2$toString$split$ === void 0 ? void 0 : _num2$toString$split$.length) || 0;
  if (!r1 && !r2) return num1 + num2;
  var newNumber1 = num1;
  var newNumber2 = num2;
  var diff = Math.abs(r1 - r2);
  var digit = Math.pow(10, Math.max(r1, r2));
  if (diff > 0) {
    var cm = Math.pow(10, diff);
    if (r1 > r2) {
      newNumber1 = Number(num1.toString().replace(".", ""));
      newNumber2 = Number(num2.toString().replace(".", "")) * cm;
    } else {
      newNumber1 = Number(num1.toString().replace(".", "")) * cm;
      newNumber2 = Number(num2.toString().replace(".", ""));
    }
  } else {
    newNumber1 = Number(num1.toString().replace(".", ""));
    newNumber2 = Number(num2.toString().replace(".", ""));
  }
  return (newNumber1 + newNumber2) / digit;
}
function positiveSubtract(num1, num2) {
  var _num1$toString$split$2, _num2$toString$split$2;
  if (!num1 || !num2) return (num1 || 0) - (num2 || 0);
  var r1 = ((_num1$toString$split$2 = num1.toString().split(".")[1]) === null || _num1$toString$split$2 === void 0 ? void 0 : _num1$toString$split$2.length) || 0;
  var r2 = ((_num2$toString$split$2 = num2.toString().split(".")[1]) === null || _num2$toString$split$2 === void 0 ? void 0 : _num2$toString$split$2.length) || 0;
  var digit = Math.pow(10, Math.max(r1, r2));
  var n = r1 >= r2 ? r1 : r2;
  return Number(((num1 * digit - num2 * digit) / digit).toFixed(n));
}
function add(num1, num2) {
  if (num1 < 0 && num2 > 0) return positiveSubtract(num2, Math.abs(num1));
  if (num1 < 0 && num2 < 0) return positiveAdd(Math.abs(num1), Math.abs(num2)) * -1;
  if (num1 > 0 && num2 < 0) return positiveSubtract(num1, Math.abs(num2));
  return positiveAdd(num1, num2);
}
function subtract(num1, num2) {
  if (num1 < 0 && num2 > 0) return positiveAdd(Math.abs(num1), num2) * -1;
  if (num1 < 0 && num2 < 0) return positiveSubtract(Math.abs(num2), Math.abs(num1));
  if (num1 > 0 && num2 < 0) return positiveAdd(num1, Math.abs(num2));
  return positiveSubtract(num1, num2);
}
function getStepValue(p) {
  var op = p.op,
    step = p.step,
    lastValue = p.lastValue,
    max = p.max,
    min = p.min,
    largeNumber = p.largeNumber;
  if (Number(step) <= 0) {
    log.error("InputNumber", "step must be larger than 0.");
    return lastValue;
  }
  var tStep = isNumber(step) ? String(step) : step;
  var newVal;
  if (op === "add") {
    if (largeNumber && isString(lastValue)) {
      newVal = largeNumberAdd(String(lastValue), String(tStep));
    } else {
      newVal = add(Number(lastValue || 0), Number(step));
    }
  } else if (op === "reduce") {
    if (largeNumber && isString(lastValue)) {
      newVal = largeNumberSubtract(String(lastValue), String(tStep));
    } else {
      newVal = subtract(Number(lastValue || 0), Number(step));
    }
  }
  if (isUndefined(lastValue)) {
    newVal = putInRangeNumber(newVal, {
      max: max,
      min: min,
      lastValue: lastValue,
      largeNumber: largeNumber
    });
  }
  return largeNumber ? newVal : Number(newVal);
}
function getMaxOrMinValidateResult(p) {
  var largeNumber = p.largeNumber,
    value = p.value,
    max = p.max,
    min = p.min;
  if (isUndefined(value) || isUndefined(largeNumber)) return void 0;
  if (largeNumber && isNumber(value)) {
    log.warn("InputNumber", "largeNumber value must be a string.");
  }
  var error;
  if (compareNumber(value, max, largeNumber) > 0) {
    error = "exceed-maximum";
  } else if (compareNumber(value, min, largeNumber) < 0) {
    error = "below-minimum";
  } else {
    error = void 0;
  }
  return error;
}
var specialCode$1 = ["-", ".", "e", "E", "+"];
function canInputNumber(number, largeNumber) {
  var _number$match, _number$match2;
  if (["", null, void 0].includes(number)) return true;
  if (number.slice(0, 2) === "00") return false;
  if (number.match(/\s/g)) return false;
  if (((_number$match = number.match(/\./g)) === null || _number$match === void 0 ? void 0 : _number$match.length) > 1) return false;
  if (((_number$match2 = number.match(/e/g)) === null || _number$match2 === void 0 ? void 0 : _number$match2.length) > 1) return false;
  var tmpNumber = number.slice(1);
  var tmpMatched = tmpNumber.match(/(\+|-)/g);
  if (tmpMatched && (!/e(\+|-)/i.test(tmpNumber) || tmpMatched.length > 1)) return false;
  var isNumber2 = largeNumber && isInputNumber(number) || !Number.isNaN(Number(number));
  if (!isNumber2 && !specialCode$1.includes(number.slice(-1))) return false;
  if (/e/i.test(number) && (!/\de/i.test(number) || /e\./.test(number))) return false;
  return true;
}
function canSetValue(number, lastNumber) {
  return parseFloat(number) !== lastNumber && !Number.isNaN(Number(number));
}
function formatUnCompleteNumber(number) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (["", null, void 0].includes(number) || !/\d+/.test(number)) return void 0;
  var decimalPlaces = extra.decimalPlaces,
    largeNumber = extra.largeNumber,
    isToFixed = extra.isToFixed;
  var newNumber = number.replace(/[.|+|\-|e]$/, "");
  if (largeNumber) {
    newNumber = formatENumber(newNumber);
  }
  if (decimalPlaces !== void 0) {
    newNumber = largeNumberToFixed(newNumber, decimalPlaces, largeNumber);
  }
  if (largeNumber) return newNumber;
  return isToFixed ? newNumber : parseFloat(newNumber);
}
function formatThousandths(number) {
  var thousandthsRegExp = /^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;
  if (thousandthsRegExp.test(number)) return number.replace(/,/g, "");
  return number;
}

var specialCode = ["-", ".", "e", "E"];
function useInputNumber(props) {
  var _useCommonClassName = useCommonClassName(),
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useControlled = useControlled(props, "value", props.onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    tValue = _useControlled2[0],
    onChange = _useControlled2[1];
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    userInput = _useState2[0],
    setUserInput = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    isError = _useState4[0],
    setIsError = _useState4[1];
  var inputRef = useRef(null);
  var max = props.max,
    min = props.min,
    largeNumber = props.largeNumber,
    decimalPlaces = props.decimalPlaces,
    allowInputOverLimit = props.allowInputOverLimit,
    onValidate = props.onValidate;
  var disabledReduce = props.disabled || !canReduceNumber(tValue, props.min, props.largeNumber);
  var disabledAdd = props.disabled || !canAddNumber(tValue, props.max, props.largeNumber);
  var wrapClasses = classNames("".concat(classPrefix, "-input-number"), SIZE[props.size], _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, STATUS.disabled, props.disabled), "".concat(classPrefix, "-is-controls-right"), props.theme === "column"), "".concat(classPrefix, "-input-number--").concat(props.theme), props.theme), "".concat(classPrefix, "-input-number--auto-width"), props.autoWidth));
  var reduceClasses = classNames("".concat(classPrefix, "-input-number__decrease"), _defineProperty({}, STATUS.disabled, disabledReduce));
  var addClasses = classNames("".concat(classPrefix, "-input-number__increase"), _defineProperty({}, STATUS.disabled, disabledAdd));
  var getUserInput = function getUserInput(value) {
    var _inputRef$current$cur, _inputRef$current$cur2;
    if (!value && value !== 0) return "";
    var inputStr = value || value === 0 ? String(value) : "";
    if (!((_inputRef$current$cur = (_inputRef$current$cur2 = inputRef.current.currentElement).contains) !== null && _inputRef$current$cur !== void 0 && _inputRef$current$cur.call(_inputRef$current$cur2, document.activeElement))) {
      var num = formatUnCompleteNumber(inputStr, {
        decimalPlaces: decimalPlaces,
        largeNumber: largeNumber,
        isToFixed: true
      });
      inputStr = num || num === 0 ? String(num) : "";
      if (props.format) {
        inputStr = String(props.format(value, {
          fixedNumber: inputStr
        }));
      }
    }
    return inputStr;
  };
  useEffect(function () {
    var inputValue = [void 0, null].includes(tValue) ? "" : String(tValue);
    if (!largeNumber && !Number.isNaN(userInput)) {
      if (parseFloat(userInput) !== tValue) {
        setUserInput(getUserInput(inputValue));
      }
      var fixedNumber = Number(largeNumberToFixed(inputValue, decimalPlaces, largeNumber));
      if (decimalPlaces !== void 0 && ![void 0, null].includes(tValue) && Number(fixedNumber) !== Number(tValue)) {
        onChange(fixedNumber, {
          type: "props",
          e: void 0
        });
      }
    }
    if (largeNumber) {
      var tmpUserInput = getUserInput(inputValue);
      setUserInput(tmpUserInput);
      if (decimalPlaces !== void 0 && largeNumberToFixed(inputValue, decimalPlaces, largeNumber) !== tValue) {
        onChange(tmpUserInput, {
          type: "props",
          e: void 0
        });
      }
    }
  }, [tValue]);
  useEffect(function () {
    if ([void 0, "", null].includes(tValue)) return;
    var error = getMaxOrMinValidateResult({
      value: tValue,
      max: max,
      min: min,
      largeNumber: largeNumber
    });
    setIsError(error);
    onValidate === null || onValidate === void 0 || onValidate({
      error: error
    });
  }, [tValue, max, min, largeNumber, onValidate]);
  var handleStepValue = function handleStepValue(op) {
    var newValue = getStepValue({
      op: op,
      step: props.step,
      max: props.max,
      min: props.min,
      lastValue: tValue,
      largeNumber: props.largeNumber
    });
    var largeNumber2 = props.largeNumber,
      max2 = props.max,
      min2 = props.min;
    var overLimit = getMaxOrMinValidateResult({
      value: newValue,
      largeNumber: largeNumber2,
      max: max2,
      min: min2
    });
    return {
      overLimit: overLimit,
      newValue: newValue
    };
  };
  var handleReduce = function handleReduce(e) {
    if (disabledReduce || props.readonly) return;
    var r = handleStepValue("reduce");
    if (r.overLimit && !allowInputOverLimit) return;
    onChange(r.newValue, {
      type: "reduce",
      e: e
    });
  };
  var handleAdd = function handleAdd(e) {
    if (disabledAdd || props.readonly) return;
    var r = handleStepValue("add");
    if (r.overLimit && !allowInputOverLimit) return;
    onChange(r.newValue, {
      type: "add",
      e: e
    });
  };
  var onInnerInputChange = function onInnerInputChange(inputValue, _ref) {
    var e = _ref.e;
    var val = formatThousandths(inputValue);
    if (!canInputNumber(val, largeNumber)) return;
    setUserInput(val);
    if (largeNumber) {
      onChange(val, {
        type: "input",
        e: e
      });
      return;
    }
    if (canSetValue(String(val), Number(tValue))) {
      var newVal = val === "" ? void 0 : Number(val);
      onChange(newVal, {
        type: "input",
        e: e
      });
    }
  };
  var handleBlur = function handleBlur(value, ctx) {
    var _props$onBlur;
    if (!props.allowInputOverLimit && value !== void 0) {
      var r = getMaxOrMinValidateResult({
        value: tValue,
        largeNumber: largeNumber,
        max: max,
        min: min
      });
      if (r === "below-minimum") {
        onChange(min, {
          type: "blur",
          e: ctx.e
        });
        return;
      }
      if (r === "exceed-maximum") {
        onChange(max, {
          type: "blur",
          e: ctx.e
        });
        return;
      }
    }
    var newValue = formatUnCompleteNumber(value, {
      decimalPlaces: decimalPlaces,
      largeNumber: largeNumber
    });
    setUserInput(getUserInput(newValue));
    if (newValue !== tValue) {
      setUserInput(tValue);
      onChange(newValue, {
        type: "blur",
        e: ctx.e
      });
    }
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, newValue, ctx);
  };
  var handleFocus = function handleFocus(_, ctx) {
    var _props$onFocus;
    setUserInput(tValue);
    (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, tValue, ctx);
  };
  var handleKeydown = function handleKeydown(value, ctx) {
    var _props$onKeydown;
    var e = ctx.e;
    var keyEvent = {
      ArrowUp: handleAdd,
      ArrowDown: handleReduce
    };
    if (keyEvent[e.key] !== void 0) {
      keyEvent[e.key](e);
    }
    (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 || _props$onKeydown.call(props, value, ctx);
  };
  var handleKeyup = function handleKeyup(value, ctx) {
    var _props$onKeyup;
    (_props$onKeyup = props.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props, value, ctx);
  };
  var handleKeypress = function handleKeypress(value, ctx) {
    var _props$onKeypress;
    (_props$onKeypress = props.onKeypress) === null || _props$onKeypress === void 0 || _props$onKeypress.call(props, value, ctx);
  };
  var handleEnter = function handleEnter(value, ctx) {
    var _props$onEnter;
    setUserInput(getUserInput(value));
    var newValue = formatUnCompleteNumber(value, {
      decimalPlaces: props.decimalPlaces,
      largeNumber: props.largeNumber
    });
    if (newValue !== value && String(newValue) !== value) {
      onChange(newValue, {
        type: "enter",
        e: ctx.e
      });
    }
    (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, ctx);
  };
  var handleClear = function handleClear(_ref2) {
    var e = _ref2.e;
    onChange(void 0, {
      type: "clear",
      e: e
    });
    setUserInput("");
  };
  var focus = function focus() {
    inputRef.current.focus();
  };
  var blur = function blur() {
    inputRef.current.blur();
  };
  var listeners = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeydown: handleKeydown,
    onKeyup: handleKeyup,
    onKeypress: handleKeypress,
    onEnter: handleEnter,
    onClick: focus,
    onClear: handleClear
  };
  return {
    classPrefix: classPrefix,
    wrapClasses: wrapClasses,
    reduceClasses: reduceClasses,
    addClasses: addClasses,
    inputRef: inputRef,
    listeners: listeners,
    isError: isError,
    setIsError: setIsError,
    userInput: userInput,
    setUserInput: setUserInput,
    tValue: tValue,
    focus: focus,
    blur: blur,
    onChange: onChange,
    handleReduce: handleReduce,
    handleAdd: handleAdd,
    onInnerInputChange: onInnerInputChange
  };
}

export { useInputNumber as default, specialCode };
//# sourceMappingURL=useInputNumber.js.map
