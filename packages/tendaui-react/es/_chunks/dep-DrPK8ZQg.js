import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import React, { forwardRef, useState, useRef, useEffect, useCallback, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { IconClose } from '@tendaui/icons';
import { u as useDefaultProps } from './dep-DGvfel3I.js';
import { u as useControlled } from './dep-CCaTIa7l.js';
import { u as useConfig } from './dep-u7AyxuYF.js';
import '../ip-input/style/css.js';

var ipInputDefaultProps = {
  allowIPv6: false,
  allowCIDR: false,
  readOnly: false,
  showClear: false,
  autoFocus: false,
  showSegmentSeparators: true,
  defaultValue: ""
};

function isValidIPv4Segment(segment) {
  var allowLeadingZeros = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!segment || segment.trim() === "") return false;
  if (!allowLeadingZeros && segment.length > 1 && segment[0] === "0") {
    return false;
  }
  var num = parseInt(segment, 10);
  return !isNaN(num) && num >= 0 && num <= 255 && num.toString() === segment;
}
function isValidIPv4(ip) {
  var allowLeadingZeros = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!ip || typeof ip !== "string") return false;
  var segments = ip.split(".");
  if (segments.length !== 4) return false;
  return segments.every(function (seg) {
    return isValidIPv4Segment(seg, allowLeadingZeros);
  });
}
function isValidCIDRMask(mask) {
  var isIPv6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!mask || typeof mask !== "string") return false;
  var num = parseInt(mask, 10);
  if (isNaN(num)) return false;
  var max = isIPv6 ? 128 : 32;
  return num >= 0 && num <= max;
}
function isValidIPv6(ip) {
  if (!ip || typeof ip !== "string") return false;
  var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  return ipv6Regex.test(ip);
}
function extractIPFromText(text) {
  if (!text || typeof text !== "string") return null;
  var ipv4Regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?:\/(\d{1,2}))?/;
  var ipv4Match = text.match(ipv4Regex);
  if (ipv4Match) {
    var ip = ipv4Match[1];
    var cidr = ipv4Match[2];
    if (isValidIPv4(ip, true)) {
      return {
        ip: ip,
        cidr: cidr
      };
    }
  }
  var ipv6Regex = /([0-9a-fA-F:]+(?::[0-9a-fA-F:]+)*|::)(?:\/(\d{1,3}))?/;
  var ipv6Match = text.match(ipv6Regex);
  if (ipv6Match) {
    var _ip = ipv6Match[1];
    var _cidr = ipv6Match[2];
    if (isValidIPv6(_ip)) {
      return {
        ip: _ip,
        cidr: _cidr
      };
    }
  }
  return null;
}
function parseIPv4ToSegments(ip) {
  if (!ip) return ["", "", "", ""];
  var segments = ip.split(".");
  return [segments[0] || "", segments[1] || "", segments[2] || "", segments[3] || ""];
}
function segmentsToIPv4(segments) {
  if (segments.every(function (seg) {
    return !seg || seg.trim() === "";
  })) {
    return "";
  }
  return segments.join(".");
}

var IPInput = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, ipInputDefaultProps);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var onChangeProp = props.onChange,
    onBlurProp = props.onBlur,
    onFocusProp = props.onFocus,
    _props$allowIPv = props.allowIPv6,
    allowIPv6 = _props$allowIPv === void 0 ? false : _props$allowIPv,
    _props$allowCIDR = props.allowCIDR,
    allowCIDR = _props$allowCIDR === void 0 ? false : _props$allowCIDR,
    placeholder = props.placeholder,
    disabled = props.disabled,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$showClear = props.showClear,
    showClear = _props$showClear === void 0 ? false : _props$showClear,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
    _props$showSegmentSep = props.showSegmentSeparators,
    showSegmentSeparators = _props$showSegmentSep === void 0 ? true : _props$showSegmentSep,
    formatter = props.formatter,
    id = props.id,
    name = props.name,
    ariaLabel = props.ariaLabel,
    segmentClassName = props.segmentClassName,
    inputStyle = props.inputStyle,
    separator = props.separator,
    tips = props.tips,
    className = props.className,
    style = props.style;
  var _useControlled = useControlled(props, "value", onChangeProp),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    value = _useControlled2[0],
    onChange = _useControlled2[1];
  var _useState = useState(function () {
      if (value) {
        var parsed = parseIPv4ToSegments(value.split("/")[0]);
        return parsed;
      }
      return ["", "", "", ""];
    }),
    _useState2 = _slicedToArray(_useState, 2),
    segments = _useState2[0],
    setSegments = _useState2[1];
  var _useState3 = useState(function () {
      if (value && value.includes("/")) {
        return value.split("/")[1] || "";
      }
      return "";
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cidrMask = _useState4[0],
    setCidrMask = _useState4[1];
  var _useState5 = useState(function () {
      if (value && allowIPv6 && value.includes(":")) {
        return value.split("/")[0];
      }
      return "";
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    ipv6Value = _useState6[0],
    setIpv6Value = _useState6[1];
  var segmentRefs = useRef([]);
  var cidrRef = useRef(null);
  var ipv6Ref = useRef(null);
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFocused = _useState8[0],
    setIsFocused = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isHover = _useState0[0],
    setIsHover = _useState0[1];
  var _useState1 = useState(-1),
    _useState10 = _slicedToArray(_useState1, 2),
    focusedSegmentIndex = _useState10[0],
    setFocusedSegmentIndex = _useState10[1];
  var isIPv6Mode = allowIPv6 && (ipv6Value || value && value.includes(":"));
  useEffect(function () {
    if (value !== void 0) {
      if (isIPv6Mode) {
        var ip = value.split("/")[0];
        setIpv6Value(ip);
        if (value.includes("/")) {
          setCidrMask(value.split("/")[1] || "");
        } else {
          setCidrMask("");
        }
      } else {
        var parsed = parseIPv4ToSegments(value.split("/")[0]);
        setSegments(parsed);
        if (value.includes("/")) {
          setCidrMask(value.split("/")[1] || "");
        } else {
          setCidrMask("");
        }
      }
    }
  }, [value, isIPv6Mode]);
  var getCurrentValue = useCallback(function () {
    if (isIPv6Mode) {
      if (cidrMask) {
        return "".concat(ipv6Value, "/").concat(cidrMask);
      }
      return ipv6Value;
    } else {
      var ip = segmentsToIPv4(segments);
      if (cidrMask) {
        return "".concat(ip, "/").concat(cidrMask);
      }
      return ip;
    }
  }, [isIPv6Mode, ipv6Value, segments, cidrMask]);
  var triggerChange = useCallback(function (newValue) {
    var formattedValue = formatter ? formatter(newValue) : newValue;
    onChange === null || onChange === void 0 || onChange(formattedValue);
  }, [formatter, onChange]);
  var handleSegmentChange = useCallback(function (index, newValue) {
    var numericValue = newValue.replace(/[^\d]/g, "");
    var finalValue = numericValue;
    if (numericValue.length > 3) {
      finalValue = numericValue.slice(0, 3);
    }
    var newSegments = _toConsumableArray(segments);
    newSegments[index] = finalValue;
    setSegments(newSegments);
    if (finalValue.length === 3 && index < 3) {
      var _segmentRefs$current;
      (_segmentRefs$current = segmentRefs.current[index + 1]) === null || _segmentRefs$current === void 0 || _segmentRefs$current.focus();
    }
    var ip = segmentsToIPv4(newSegments);
    var fullValue = cidrMask ? "".concat(ip, "/").concat(cidrMask) : ip;
    triggerChange(fullValue);
  }, [segments, cidrMask, triggerChange]);
  var handleSegmentKeyDown = useCallback(function (index, e) {
    var input = e.currentTarget;
    var value2 = input.value;
    var cursorPos = input.selectionStart || 0;
    if (e.key === "ArrowRight") {
      if (cursorPos === value2.length && index < 3) {
        var _segmentRefs$current2;
        e.preventDefault();
        (_segmentRefs$current2 = segmentRefs.current[index + 1]) === null || _segmentRefs$current2 === void 0 || _segmentRefs$current2.focus();
      }
    }
    if (e.key === "ArrowLeft") {
      if (cursorPos === 0 && index > 0) {
        var _segmentRefs$current3;
        e.preventDefault();
        (_segmentRefs$current3 = segmentRefs.current[index - 1]) === null || _segmentRefs$current3 === void 0 || _segmentRefs$current3.focus();
      }
    }
    if (e.key === "Backspace") {
      if (cursorPos === 0 && value2 === "" && index > 0) {
        e.preventDefault();
        var prevInput = segmentRefs.current[index - 1];
        if (prevInput) {
          prevInput.focus();
          prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
        }
      }
    }
    if ((e.key === "." || e.key === " ") && index < 3) {
      var _segmentRefs$current4;
      e.preventDefault();
      (_segmentRefs$current4 = segmentRefs.current[index + 1]) === null || _segmentRefs$current4 === void 0 || _segmentRefs$current4.focus();
    }
    if (e.key === "Delete" && cursorPos === value2.length && index < 3) {}
  }, []);
  var handleSegmentPaste = useCallback(function (e) {
    e.preventDefault();
    var pasteText = e.clipboardData.getData("text/plain");
    var extracted = extractIPFromText(pasteText);
    if (extracted) {
      if (extracted.ip.includes(":")) {
        if (allowIPv6) {
          setIpv6Value(extracted.ip);
          if (extracted.cidr) {
            setCidrMask(extracted.cidr);
          }
          var fullValue = extracted.cidr ? "".concat(extracted.ip, "/").concat(extracted.cidr) : extracted.ip;
          triggerChange(fullValue);
        }
      } else {
        var parsed = parseIPv4ToSegments(extracted.ip);
        setSegments(parsed);
        if (extracted.cidr && allowCIDR) {
          setCidrMask(extracted.cidr);
        }
        var _fullValue = extracted.cidr && allowCIDR ? "".concat(extracted.ip, "/").concat(extracted.cidr) : extracted.ip;
        triggerChange(_fullValue);
      }
    }
  }, [allowIPv6, allowCIDR, triggerChange]);
  var handleCIDRChange = useCallback(function (e) {
    var newMask = e.target.value.replace(/[^\d]/g, "");
    var maxLength = isIPv6Mode ? 3 : 2;
    var finalMask = newMask.slice(0, maxLength);
    setCidrMask(finalMask);
    var ip = isIPv6Mode ? ipv6Value : segmentsToIPv4(segments);
    var fullValue = finalMask ? "".concat(ip, "/").concat(finalMask) : ip;
    triggerChange(fullValue);
  }, [isIPv6Mode, ipv6Value, segments, triggerChange]);
  var handleIPv6Change = useCallback(function (e) {
    var newValue = e.target.value;
    setIpv6Value(newValue);
    var fullValue = cidrMask ? "".concat(newValue, "/").concat(cidrMask) : newValue;
    triggerChange(fullValue);
  }, [cidrMask, triggerChange]);
  var handleIPv6Paste = useCallback(function (e) {
    e.preventDefault();
    var pasteText = e.clipboardData.getData("text/plain");
    var extracted = extractIPFromText(pasteText);
    if (extracted) {
      setIpv6Value(extracted.ip);
      if (extracted.cidr && allowCIDR) {
        setCidrMask(extracted.cidr);
      }
      var fullValue = extracted.cidr && allowCIDR ? "".concat(extracted.ip, "/").concat(extracted.cidr) : extracted.ip;
      triggerChange(fullValue);
    }
  }, [allowCIDR, triggerChange]);
  var handleFocus = useCallback(function (index) {
    setIsFocused(true);
    if (index !== void 0) {
      setFocusedSegmentIndex(index);
    }
    onFocusProp === null || onFocusProp === void 0 || onFocusProp();
  }, [onFocusProp]);
  var handleBlur = useCallback(function () {
    setIsFocused(false);
    setFocusedSegmentIndex(-1);
    var currentValue = getCurrentValue();
    onBlurProp === null || onBlurProp === void 0 || onBlurProp(currentValue);
  }, [getCurrentValue, onBlurProp]);
  var handleClear = useCallback(function (e) {
    e.stopPropagation();
    if (disabled || readOnly) return;
    setSegments(["", "", "", ""]);
    setIpv6Value("");
    setCidrMask("");
    onChange === null || onChange === void 0 || onChange("");
  }, [disabled, readOnly, onChange]);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        if (isIPv6Mode) {
          var _ipv6Ref$current;
          (_ipv6Ref$current = ipv6Ref.current) === null || _ipv6Ref$current === void 0 || _ipv6Ref$current.focus();
        } else {
          var _segmentRefs$current$;
          (_segmentRefs$current$ = segmentRefs.current[0]) === null || _segmentRefs$current$ === void 0 || _segmentRefs$current$.focus();
        }
      },
      blur: function blur() {
        var _cidrRef$current;
        if (isIPv6Mode) {
          var _ipv6Ref$current2;
          (_ipv6Ref$current2 = ipv6Ref.current) === null || _ipv6Ref$current2 === void 0 || _ipv6Ref$current2.blur();
        } else {
          segmentRefs.current.forEach(function (ref2) {
            return ref2 === null || ref2 === void 0 ? void 0 : ref2.blur();
          });
        }
        (_cidrRef$current = cidrRef.current) === null || _cidrRef$current === void 0 || _cidrRef$current.blur();
      },
      clear: function clear() {
        setSegments(["", "", "", ""]);
        setIpv6Value("");
        setCidrMask("");
        onChange === null || onChange === void 0 || onChange("");
      },
      getValue: function getValue() {
        return getCurrentValue();
      }
    };
  });
  useEffect(function () {
    if (autoFocus && !disabled && !readOnly) {
      if (isIPv6Mode) {
        var _ipv6Ref$current3;
        (_ipv6Ref$current3 = ipv6Ref.current) === null || _ipv6Ref$current3 === void 0 || _ipv6Ref$current3.focus();
      } else {
        var _segmentRefs$current$2;
        (_segmentRefs$current$2 = segmentRefs.current[0]) === null || _segmentRefs$current$2 === void 0 || _segmentRefs$current$2.focus();
      }
    }
  }, [autoFocus, disabled, readOnly, isIPv6Mode]);
  var showClearButton = showClear && isHover && getCurrentValue() && !disabled && !readOnly;
  var displaySeparator = separator || (isIPv6Mode ? ":" : ".");
  var renderIPv4Input = function renderIPv4Input() {
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-ip-input__segments")
    }, segments.map(function (segment, index) {
      return /* @__PURE__ */React.createElement(React.Fragment, {
        key: index
      }, /* @__PURE__ */React.createElement("input", {
        ref: function ref(el) {
          segmentRefs.current[index] = el;
        },
        type: "text",
        inputMode: "numeric",
        pattern: "[0-9]*",
        maxLength: 3,
        value: segment,
        onChange: function onChange(e) {
          return handleSegmentChange(index, e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return handleSegmentKeyDown(index, e);
        },
        onPaste: handleSegmentPaste,
        onFocus: function onFocus() {
          return handleFocus(index);
        },
        onBlur: handleBlur,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: placeholder ? placeholder.split(".")[index] : void 0,
        className: classNames("".concat(classPrefix, "-ip-input__segment"), segmentClassName, _defineProperty({}, "".concat(classPrefix, "-ip-input__segment--focused"), focusedSegmentIndex === index)),
        style: inputStyle,
        id: index === 0 ? id : void 0,
        name: index === 0 ? name : void 0,
        "aria-label": ariaLabel ? "".concat(ariaLabel, " \u7B2C ").concat(index + 1, " \u6BB5") : "IP \u5730\u5740\u7B2C ".concat(index + 1, " \u6BB5")
      }), index < 3 && showSegmentSeparators && /* @__PURE__ */React.createElement("span", {
        className: "".concat(classPrefix, "-ip-input__separator")
      }, displaySeparator));
    }), allowCIDR && /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement("span", {
      className: "".concat(classPrefix, "-ip-input__separator")
    }, "/"), /* @__PURE__ */React.createElement("input", {
      ref: cidrRef,
      type: "text",
      inputMode: "numeric",
      pattern: "[0-9]*",
      maxLength: 2,
      value: cidrMask,
      onChange: handleCIDRChange,
      onFocus: function onFocus() {
        return handleFocus();
      },
      onBlur: handleBlur,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: "24",
      className: classNames("".concat(classPrefix, "-ip-input__cidr"), segmentClassName, _defineProperty({}, "".concat(classPrefix, "-ip-input__cidr--error"), cidrMask && !/^(0|[1-9]\d?|3[0-2])$/.test(cidrMask))),
      style: inputStyle,
      "aria-label": ariaLabel ? "".concat(ariaLabel, " \u63A9\u7801") : "CIDR \u63A9\u7801"
    })));
  };
  var renderIPv6Input = function renderIPv6Input() {
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-ip-input__ipv6-wrapper")
    }, /* @__PURE__ */React.createElement("input", {
      ref: ipv6Ref,
      type: "text",
      value: ipv6Value,
      onChange: handleIPv6Change,
      onPaste: handleIPv6Paste,
      onFocus: function onFocus() {
        return handleFocus();
      },
      onBlur: handleBlur,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: placeholder || "2001:db8::1",
      className: classNames("".concat(classPrefix, "-ip-input__ipv6"), segmentClassName),
      style: inputStyle,
      id: id,
      name: name,
      "aria-label": ariaLabel || "IPv6 \u5730\u5740"
    }), allowCIDR && /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement("span", {
      className: "".concat(classPrefix, "-ip-input__separator")
    }, "/"), /* @__PURE__ */React.createElement("input", {
      ref: cidrRef,
      type: "text",
      inputMode: "numeric",
      pattern: "[0-9]*",
      maxLength: 3,
      value: cidrMask,
      onChange: handleCIDRChange,
      onFocus: function onFocus() {
        return handleFocus();
      },
      onBlur: handleBlur,
      disabled: disabled,
      readOnly: readOnly,
      placeholder: "64",
      className: classNames("".concat(classPrefix, "-ip-input__cidr"), segmentClassName),
      style: inputStyle,
      "aria-label": ariaLabel ? "".concat(ariaLabel, " \u63A9\u7801") : "CIDR \u63A9\u7801"
    })));
  };
  return /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(classPrefix, "-ip-input"), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-readonly"), readOnly), "".concat(classPrefix, "-is-focused"), isFocused)),
    style: style,
    onMouseEnter: function onMouseEnter() {
      return setIsHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHover(false);
    }
  }, /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-ip-input__wrapper")
  }, isIPv6Mode ? renderIPv6Input() : renderIPv4Input(), showClearButton && /* @__PURE__ */React.createElement(IconClose, {
    className: "".concat(classPrefix, "-ip-input__clear ").concat(classPrefix, "-icon"),
    onClick: handleClear,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    }
  })), tips && /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-ip-input__tips")
  }, tips));
});
IPInput.displayName = "IPInput";

export { IPInput as I, isValidIPv4 as a, isValidCIDRMask as b, isValidIPv6 as c, extractIPFromText as e, isValidIPv4Segment as i, parseIPv4ToSegments as p, segmentsToIPv4 as s };
//# sourceMappingURL=dep-DrPK8ZQg.js.map
