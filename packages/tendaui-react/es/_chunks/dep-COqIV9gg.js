import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { _ as _typeof } from './dep-D-UKOauR.js';
import { g as getDefaultExportFromCjs, _ as _asyncToGenerator, a as _regeneratorRuntime } from './dep-DZ_0EvBk.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';
import React, { useEffect, forwardRef, useState, useRef, useMemo, useImperativeHandle } from 'react';
import { IconClose, IconCheckCircleStroked } from 'tendaui-react-icons';
import { isEmpty, isNumber, unset, get, flattenDeep, isEqual, set, isString, isObject, isFunction, merge as merge$1 } from 'lodash-es';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { u as useDefaultProps } from './dep-5jl2j2BI.js';
import { u as useGlobalIcon } from './dep-BIZNqCbw.js';
import { u as useFormItemStyle, V as ValidateStatus } from './dep-DN28Mx6T.js';
import { useFormContext, useFormListContext } from '../form/FormContext.js';
import { g as getCharacterLength } from './dep-DiKH-oTP.js';
import { H as HOOK_MARK } from './dep-DB-U1pIn.js';
import { C as Checkbox, a as CheckboxGroup } from './dep-ghu6pHtY.js';
import TagInput from '../tag-input/TagInput.js';
import { calcFieldValue } from '../form/utils/index.js';

var formDefaultProps = {
  colon: false,
  disabled: undefined,
  id: undefined,
  labelAlign: 'right',
  labelWidth: '100px',
  layout: 'vertical',
  preventSubmitDefault: true,
  requiredMark: undefined,
  resetType: 'empty',
  showErrorMessage: true,
  statusIcon: undefined,
  submitWithWarningMessage: false,
  supportNumberKey: true
};
var formItemDefaultProps = {
  label: '',
  requiredMark: undefined,
  shouldUpdate: false,
  showErrorMessage: undefined,
  statusIcon: undefined,
  successBorder: false
};

var isDate$1 = {exports: {}};

var merge = {exports: {}};

var merge_1 = merge.exports;

var hasRequiredMerge;

function requireMerge () {
	if (hasRequiredMerge) return merge.exports;
	hasRequiredMerge = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = merge;
		function merge() {
		  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		  var defaults = arguments.length > 1 ? arguments[1] : undefined;
		  for (var key in defaults) {
		    if (typeof obj[key] === 'undefined') {
		      obj[key] = defaults[key];
		    }
		  }
		  return obj;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (merge, merge.exports));
	return merge.exports;
}

var isDate_1 = isDate$1.exports;

var hasRequiredIsDate;

function requireIsDate () {
	if (hasRequiredIsDate) return isDate$1.exports;
	hasRequiredIsDate = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isDate;
		var _merge = _interopRequireDefault(/*@__PURE__*/ requireMerge());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
		function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
		function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
		function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
		function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
		function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
		function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
		var default_date_options = {
		  format: 'YYYY/MM/DD',
		  delimiters: ['/', '-'],
		  strictMode: false
		};
		function isValidFormat(format) {
		  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
		}
		function zip(date, format) {
		  var zippedArr = [],
		    len = Math.max(date.length, format.length);
		  for (var i = 0; i < len; i++) {
		    zippedArr.push([date[i], format[i]]);
		  }
		  return zippedArr;
		}
		function isDate(input, options) {
		  if (typeof options === 'string') {
		    // Allow backward compatibility for old format isDate(input [, format])
		    options = (0, _merge.default)({
		      format: options
		    }, default_date_options);
		  } else {
		    options = (0, _merge.default)(options, default_date_options);
		  }
		  if (typeof input === 'string' && isValidFormat(options.format)) {
		    if (options.strictMode && input.length !== options.format.length) return false;
		    var formatDelimiter = options.delimiters.find(function (delimiter) {
		      return options.format.indexOf(delimiter) !== -1;
		    });
		    var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function (delimiter) {
		      return input.indexOf(delimiter) !== -1;
		    });
		    var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
		    var dateObj = {};
		    var _iterator = _createForOfIteratorHelper(dateAndFormat),
		      _step;
		    try {
		      for (_iterator.s(); !(_step = _iterator.n()).done;) {
		        var _step$value = _slicedToArray(_step.value, 2),
		          dateWord = _step$value[0],
		          formatWord = _step$value[1];
		        if (!dateWord || !formatWord || dateWord.length !== formatWord.length) {
		          return false;
		        }
		        dateObj[formatWord.charAt(0)] = dateWord;
		      }
		    } catch (err) {
		      _iterator.e(err);
		    } finally {
		      _iterator.f();
		    }
		    var fullYear = dateObj.y;

		    // Check if the year starts with a hyphen
		    if (fullYear.startsWith('-')) {
		      return false; // Hyphen before year is not allowed
		    }
		    if (dateObj.y.length === 2) {
		      var parsedYear = parseInt(dateObj.y, 10);
		      if (isNaN(parsedYear)) {
		        return false;
		      }
		      var currentYearLastTwoDigits = new Date().getFullYear() % 100;
		      if (parsedYear < currentYearLastTwoDigits) {
		        fullYear = "20".concat(dateObj.y);
		      } else {
		        fullYear = "19".concat(dateObj.y);
		      }
		    }
		    var month = dateObj.m;
		    if (dateObj.m.length === 1) {
		      month = "0".concat(dateObj.m);
		    }
		    var day = dateObj.d;
		    if (dateObj.d.length === 1) {
		      day = "0".concat(dateObj.d);
		    }
		    return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
		  }
		  if (!options.strictMode) {
		    return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
		  }
		  return false;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isDate$1, isDate$1.exports));
	return isDate$1.exports;
}

var isDateExports = requireIsDate();
var isDate = /*@__PURE__*/getDefaultExportFromCjs(isDateExports);

var isEmail$1 = {exports: {}};

var assertString = {exports: {}};

var assertString_1 = assertString.exports;

var hasRequiredAssertString;

function requireAssertString () {
	if (hasRequiredAssertString) return assertString.exports;
	hasRequiredAssertString = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = assertString;
		function assertString(input) {
		  if (input === undefined || input === null) throw new TypeError("Expected a string but received a ".concat(input));
		  if (input.constructor.name !== 'String') throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (assertString, assertString.exports));
	return assertString.exports;
}

var checkHost = {exports: {}};

var checkHost_1 = checkHost.exports;

var hasRequiredCheckHost;

function requireCheckHost () {
	if (hasRequiredCheckHost) return checkHost.exports;
	hasRequiredCheckHost = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = checkHost;
		function isRegExp(obj) {
		  return Object.prototype.toString.call(obj) === '[object RegExp]';
		}
		function checkHost(host, matches) {
		  for (var i = 0; i < matches.length; i++) {
		    var match = matches[i];
		    if (host === match || isRegExp(match) && match.test(host)) {
		      return true;
		    }
		  }
		  return false;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (checkHost, checkHost.exports));
	return checkHost.exports;
}

var isByteLength = {exports: {}};

var isByteLength_1 = isByteLength.exports;

var hasRequiredIsByteLength;

function requireIsByteLength () {
	if (hasRequiredIsByteLength) return isByteLength.exports;
	hasRequiredIsByteLength = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isByteLength;
		var _assertString = _interopRequireDefault(/*@__PURE__*/ requireAssertString());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
		/* eslint-disable prefer-rest-params */
		function isByteLength(str, options) {
		  (0, _assertString.default)(str);
		  var min;
		  var max;
		  if (_typeof(options) === 'object') {
		    min = options.min || 0;
		    max = options.max;
		  } else {
		    // backwards compatibility: isByteLength(str, min [, max])
		    min = arguments[1];
		    max = arguments[2];
		  }
		  var len = encodeURI(str).split(/%..|./).length - 1;
		  return len >= min && (typeof max === 'undefined' || len <= max);
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isByteLength, isByteLength.exports));
	return isByteLength.exports;
}

var isFQDN = {exports: {}};

var isFQDN_1 = isFQDN.exports;

var hasRequiredIsFQDN;

function requireIsFQDN () {
	if (hasRequiredIsFQDN) return isFQDN.exports;
	hasRequiredIsFQDN = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isFQDN;
		var _assertString = _interopRequireDefault(/*@__PURE__*/ requireAssertString());
		var _merge = _interopRequireDefault(/*@__PURE__*/ requireMerge());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		var default_fqdn_options = {
		  require_tld: true,
		  allow_underscores: false,
		  allow_trailing_dot: false,
		  allow_numeric_tld: false,
		  allow_wildcard: false,
		  ignore_max_length: false
		};
		function isFQDN(str, options) {
		  (0, _assertString.default)(str);
		  options = (0, _merge.default)(options, default_fqdn_options);

		  /* Remove the optional trailing dot before checking validity */
		  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
		    str = str.substring(0, str.length - 1);
		  }

		  /* Remove the optional wildcard before checking validity */
		  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
		    str = str.substring(2);
		  }
		  var parts = str.split('.');
		  var tld = parts[parts.length - 1];
		  if (options.require_tld) {
		    // disallow fqdns without tld
		    if (parts.length < 2) {
		      return false;
		    }
		    if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
		      return false;
		    }

		    // disallow spaces
		    if (/\s/.test(tld)) {
		      return false;
		    }
		  }

		  // reject numeric TLDs
		  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
		    return false;
		  }
		  return parts.every(function (part) {
		    if (part.length > 63 && !options.ignore_max_length) {
		      return false;
		    }
		    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
		      return false;
		    }

		    // disallow full-width chars
		    if (/[\uff01-\uff5e]/.test(part)) {
		      return false;
		    }

		    // disallow parts starting or ending with hyphen
		    if (/^-|-$/.test(part)) {
		      return false;
		    }
		    if (!options.allow_underscores && /_/.test(part)) {
		      return false;
		    }
		    return true;
		  });
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isFQDN, isFQDN.exports));
	return isFQDN.exports;
}

var isIP = {exports: {}};

var isIP_1 = isIP.exports;

var hasRequiredIsIP;

function requireIsIP () {
	if (hasRequiredIsIP) return isIP.exports;
	hasRequiredIsIP = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isIP;
		var _assertString = _interopRequireDefault(/*@__PURE__*/ requireAssertString());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
		/**
		11.3.  Examples

		   The following addresses

		             fe80::1234 (on the 1st link of the node)
		             ff02::5678 (on the 5th link of the node)
		             ff08::9abc (on the 10th organization of the node)

		   would be represented as follows:

		             fe80::1234%1
		             ff02::5678%5
		             ff08::9abc%10

		   (Here we assume a natural translation from a zone index to the
		   <zone_id> part, where the Nth zone of any scope is translated into
		   "N".)

		   If we use interface names as <zone_id>, those addresses could also be
		   represented as follows:

		            fe80::1234%ne0
		            ff02::5678%pvc1.3
		            ff08::9abc%interface10

		   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
		   to the 5th link, and "interface10" belongs to the 10th organization.
		 * * */
		var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
		var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
		var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
		var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
		var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z.]{1,})?$');
		function isIP(ipAddress) {
		  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		  (0, _assertString.default)(ipAddress);

		  // accessing 'arguments' for backwards compatibility: isIP(ipAddress [, version])
		  // eslint-disable-next-line prefer-rest-params
		  var version = (_typeof(options) === 'object' ? options.version : arguments[1]) || '';
		  if (!version) {
		    return isIP(ipAddress, {
		      version: 4
		    }) || isIP(ipAddress, {
		      version: 6
		    });
		  }
		  if (version.toString() === '4') {
		    return IPv4AddressRegExp.test(ipAddress);
		  }
		  if (version.toString() === '6') {
		    return IPv6AddressRegExp.test(ipAddress);
		  }
		  return false;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isIP, isIP.exports));
	return isIP.exports;
}

var isEmail_1 = isEmail$1.exports;

var hasRequiredIsEmail;

function requireIsEmail () {
	if (hasRequiredIsEmail) return isEmail$1.exports;
	hasRequiredIsEmail = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isEmail;
		var _assertString = _interopRequireDefault(/*@__PURE__*/ requireAssertString());
		var _checkHost = _interopRequireDefault(/*@__PURE__*/ requireCheckHost());
		var _isByteLength = _interopRequireDefault(/*@__PURE__*/ requireIsByteLength());
		var _isFQDN = _interopRequireDefault(/*@__PURE__*/ requireIsFQDN());
		var _isIP = _interopRequireDefault(/*@__PURE__*/ requireIsIP());
		var _merge = _interopRequireDefault(/*@__PURE__*/ requireMerge());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		var default_email_options = {
		  allow_display_name: false,
		  allow_underscores: false,
		  require_display_name: false,
		  allow_utf8_local_part: true,
		  require_tld: true,
		  blacklisted_chars: '',
		  ignore_max_length: false,
		  host_blacklist: [],
		  host_whitelist: []
		};

		/* eslint-disable max-len */
		/* eslint-disable no-control-regex */
		var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
		var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
		var gmailUserPart = /^[a-z\d]+$/;
		var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
		var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
		var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
		var defaultMaxEmailLength = 254;
		/* eslint-enable max-len */
		/* eslint-enable no-control-regex */

		/**
		 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
		 * @param {String} display_name
		 */
		function validateDisplayName(display_name) {
		  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
		  // display name with only spaces is not valid
		  if (!display_name_without_quotes.trim()) {
		    return false;
		  }

		  // check whether display name contains illegal character
		  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
		  if (contains_illegal) {
		    // if contains illegal characters,
		    // must to be enclosed in double-quotes, otherwise it's not a valid display name
		    if (display_name_without_quotes === display_name) {
		      return false;
		    }

		    // the quotes in display name must start with character symbol \
		    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
		    if (!all_start_with_back_slash) {
		      return false;
		    }
		  }
		  return true;
		}
		function isEmail(str, options) {
		  (0, _assertString.default)(str);
		  options = (0, _merge.default)(options, default_email_options);
		  if (options.require_display_name || options.allow_display_name) {
		    var display_email = str.match(splitNameAddress);
		    if (display_email) {
		      var display_name = display_email[1];

		      // Remove display name and angle brackets to get email address
		      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
		      str = str.replace(display_name, '').replace(/(^<|>$)/g, '');

		      // sometimes need to trim the last space to get the display name
		      // because there may be a space between display name and email address
		      // eg. myname <address@gmail.com>
		      // the display name is `myname` instead of `myname `, so need to trim the last space
		      if (display_name.endsWith(' ')) {
		        display_name = display_name.slice(0, -1);
		      }
		      if (!validateDisplayName(display_name)) {
		        return false;
		      }
		    } else if (options.require_display_name) {
		      return false;
		    }
		  }
		  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
		    return false;
		  }
		  var parts = str.split('@');
		  var domain = parts.pop();
		  var lower_domain = domain.toLowerCase();
		  if (options.host_blacklist.length > 0 && (0, _checkHost.default)(lower_domain, options.host_blacklist)) {
		    return false;
		  }
		  if (options.host_whitelist.length > 0 && !(0, _checkHost.default)(lower_domain, options.host_whitelist)) {
		    return false;
		  }
		  var user = parts.join('@');
		  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
		    /*
		    Previously we removed dots for gmail addresses before validating.
		    This was removed because it allows `multiple..dots@gmail.com`
		    to be reported as valid, but it is not.
		    Gmail only normalizes single dots, removing them from here is pointless,
		    should be done in normalizeEmail
		    */
		    user = user.toLowerCase();

		    // Removing sub-address from username before gmail validation
		    var username = user.split('+')[0];

		    // Dots are not included in gmail length restriction
		    if (!(0, _isByteLength.default)(username.replace(/\./g, ''), {
		      min: 6,
		      max: 30
		    })) {
		      return false;
		    }
		    var _user_parts = username.split('.');
		    for (var i = 0; i < _user_parts.length; i++) {
		      if (!gmailUserPart.test(_user_parts[i])) {
		        return false;
		      }
		    }
		  }
		  if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
		    max: 64
		  }) || !(0, _isByteLength.default)(domain, {
		    max: 254
		  }))) {
		    return false;
		  }
		  if (!(0, _isFQDN.default)(domain, {
		    require_tld: options.require_tld,
		    ignore_max_length: options.ignore_max_length,
		    allow_underscores: options.allow_underscores
		  })) {
		    if (!options.allow_ip_domain) {
		      return false;
		    }
		    if (!(0, _isIP.default)(domain)) {
		      if (!domain.startsWith('[') || !domain.endsWith(']')) {
		        return false;
		      }
		      var noBracketdomain = domain.slice(1, -1);
		      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
		        return false;
		      }
		    }
		  }
		  if (options.blacklisted_chars) {
		    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
		  }
		  if (user[0] === '"' && user[user.length - 1] === '"') {
		    user = user.slice(1, user.length - 1);
		    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
		  }
		  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
		  var user_parts = user.split('.');
		  for (var _i = 0; _i < user_parts.length; _i++) {
		    if (!pattern.test(user_parts[_i])) {
		      return false;
		    }
		  }
		  return true;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isEmail$1, isEmail$1.exports));
	return isEmail$1.exports;
}

var isEmailExports = requireIsEmail();
var isEmail = /*@__PURE__*/getDefaultExportFromCjs(isEmailExports);

var isURL$1 = {exports: {}};

var includesString$1 = {exports: {}};

var includesString = includesString$1.exports;

var hasRequiredIncludesString;

function requireIncludesString () {
	if (hasRequiredIncludesString) return includesString$1.exports;
	hasRequiredIncludesString = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = void 0;
		var includes = function includes(str, val) {
		  return str.indexOf(val) !== -1;
		};
		var _default = exports.default = includes;
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (includesString$1, includesString$1.exports));
	return includesString$1.exports;
}

var isURL_1 = isURL$1.exports;

var hasRequiredIsURL;

function requireIsURL () {
	if (hasRequiredIsURL) return isURL$1.exports;
	hasRequiredIsURL = 1;
	(function (module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = isURL;
		var _assertString = _interopRequireDefault(/*@__PURE__*/ requireAssertString());
		var _checkHost = _interopRequireDefault(/*@__PURE__*/ requireCheckHost());
		var _includesString = _interopRequireDefault(/*@__PURE__*/ requireIncludesString());
		var _isFQDN = _interopRequireDefault(/*@__PURE__*/ requireIsFQDN());
		var _isIP = _interopRequireDefault(/*@__PURE__*/ requireIsIP());
		var _merge = _interopRequireDefault(/*@__PURE__*/ requireMerge());
		function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
		function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
		function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
		function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
		function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
		function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
		function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
		/*
		options for isURL method

		protocols - valid protocols can be modified with this option.
		require_tld - If set to false isURL will not check if the URL's host includes a top-level domain.
		require_protocol - if set to true isURL will return false if protocol is not present in the URL.
		require_host - if set to false isURL will not check if host is present in the URL.
		require_port - if set to true isURL will check if port is present in the URL.
		require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option.
		allow_underscores - if set to true, the validator will allow underscores in the URL.
		host_whitelist - if set to an array of strings or regexp, and the domain matches none of the strings
		                 defined in it, the validation fails.
		host_blacklist - if set to an array of strings or regexp, and the domain matches any of the strings
		                 defined in it, the validation fails.
		allow_trailing_dot - if set to true, the validator will allow the domain to end with
		                     a `.` character.
		allow_protocol_relative_urls - if set to true protocol relative URLs will be allowed.
		allow_fragments - if set to false isURL will return false if fragments are present.
		allow_query_components - if set to false isURL will return false if query components are present.
		disallow_auth - if set to true, the validator will fail if the URL contains an authentication
		                component, e.g. `http://username:password@example.com`
		validate_length - if set to false isURL will skip string length validation. `max_allowed_length`
		                  will be ignored if this is set as `false`.
		max_allowed_length - if set, isURL will not allow URLs longer than the specified value (default is
		                     2084 that IE maximum URL length).

		*/

		var default_url_options = {
		  protocols: ['http', 'https', 'ftp'],
		  require_tld: true,
		  require_protocol: false,
		  require_host: true,
		  require_port: false,
		  require_valid_protocol: true,
		  allow_underscores: false,
		  allow_trailing_dot: false,
		  allow_protocol_relative_urls: false,
		  allow_fragments: true,
		  allow_query_components: true,
		  validate_length: true,
		  max_allowed_length: 2084
		};
		var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
		function isURL(url, options) {
		  (0, _assertString.default)(url);
		  if (!url || /[\s<>]/.test(url)) {
		    return false;
		  }
		  if (url.indexOf('mailto:') === 0) {
		    return false;
		  }
		  options = (0, _merge.default)(options, default_url_options);
		  if (options.validate_length && url.length > options.max_allowed_length) {
		    return false;
		  }
		  if (!options.allow_fragments && (0, _includesString.default)(url, '#')) {
		    return false;
		  }
		  if (!options.allow_query_components && ((0, _includesString.default)(url, '?') || (0, _includesString.default)(url, '&'))) {
		    return false;
		  }
		  var protocol, auth, host, hostname, port, port_str, split, ipv6;
		  split = url.split('#');
		  url = split.shift();
		  split = url.split('?');
		  url = split.shift();
		  split = url.split('://');
		  if (split.length > 1) {
		    protocol = split.shift().toLowerCase();
		    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
		      return false;
		    }
		  } else if (options.require_protocol) {
		    return false;
		  } else if (url.slice(0, 2) === '//') {
		    if (!options.allow_protocol_relative_urls) {
		      return false;
		    }
		    split[0] = url.slice(2);
		  }
		  url = split.join('://');
		  if (url === '') {
		    return false;
		  }
		  split = url.split('/');
		  url = split.shift();
		  if (url === '' && !options.require_host) {
		    return true;
		  }
		  split = url.split('@');
		  if (split.length > 1) {
		    if (options.disallow_auth) {
		      return false;
		    }
		    if (split[0] === '') {
		      return false;
		    }
		    auth = split.shift();
		    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
		      return false;
		    }
		    var _auth$split = auth.split(':'),
		      _auth$split2 = _slicedToArray(_auth$split, 2),
		      user = _auth$split2[0],
		      password = _auth$split2[1];
		    if (user === '' && password === '') {
		      return false;
		    }
		  }
		  hostname = split.join('@');
		  port_str = null;
		  ipv6 = null;
		  var ipv6_match = hostname.match(wrapped_ipv6);
		  if (ipv6_match) {
		    host = '';
		    ipv6 = ipv6_match[1];
		    port_str = ipv6_match[2] || null;
		  } else {
		    split = hostname.split(':');
		    host = split.shift();
		    if (split.length) {
		      port_str = split.join(':');
		    }
		  }
		  if (port_str !== null && port_str.length > 0) {
		    port = parseInt(port_str, 10);
		    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
		      return false;
		    }
		  } else if (options.require_port) {
		    return false;
		  }
		  if (options.host_whitelist) {
		    return (0, _checkHost.default)(host, options.host_whitelist);
		  }
		  if (host === '' && !options.require_host) {
		    return true;
		  }
		  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
		    return false;
		  }
		  host = host || ipv6;
		  if (options.host_blacklist && (0, _checkHost.default)(host, options.host_blacklist)) {
		    return false;
		  }
		  return true;
		}
		module.exports = exports.default;
		module.exports.default = exports.default; 
	} (isURL$1, isURL$1.exports));
	return isURL$1.exports;
}

var isURLExports = requireIsURL();
var isURL = /*@__PURE__*/getDefaultExportFromCjs(isURLExports);

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// `{} / [] / '' / undefined / null` 等内容被认为是空； 0 和 false 被认为是正常数据，部分数据的值就是 0 或者 false
function isValueEmpty(val) {
  var type = Object.prototype.toString.call(val);
  var typeMap = {
    Date: '[object Date]'
  };
  if (type === typeMap.Date) {
    return false;
  }
  return _typeof(val) === 'object' ? isEmpty(val) : ['', undefined, null].includes(val);
}

// 比较值大小
var compareValue = function compareValue(val, num, isMax) {
  var compare = function compare(a, b) {
    return isMax ? a <= b : a >= b;
  };
  if (isNumber(val)) return compare(val, num);
  if (Array.isArray(val)) return compare(val.length, num);
  return compare(getCharacterLength(val), num);
};
var VALIDATE_MAP = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: function required(val) {
    return !isValueEmpty(val);
  },
  whitespace: function whitespace(val) {
    return !(/^\s+$/.test(val) || val === '');
  },
  "boolean": function boolean(val) {
    return typeof val === 'boolean';
  },
  max: function max(val, num) {
    return compareValue(val, num, true);
  },
  min: function min(val, num) {
    return compareValue(val, num, false);
  },
  len: function len(val, num) {
    return getCharacterLength(val) === num;
  },
  number: function number(val) {
    return isNumber(val);
  },
  "enum": function _enum(val, strs) {
    return strs.includes(val);
  },
  idcard: function idcard(val) {
    return /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val);
  },
  telnumber: function telnumber(val) {
    return /^1[3-9]\d{9}$/.test(val);
  },
  pattern: function pattern(val, regexp) {
    return regexp.test(val);
  },
  // 自定义校验规则，可能是异步校验
  validator: function validator(val, validate) {
    return validate(val);
  }
};
/**
 * 校验某一条数据的某一条规则，一种校验规则不满足则不再进行校验。
 * @param value 值
 * @param rule 校验规则
 * @returns 两种校验结果，一种是内置校验规则的校验结果，二种是自定义校验规则（validator）的校验结果
 */
function validateOneRule(_x, _x2) {
  return _validateOneRule.apply(this, arguments);
}

// 单个数据进行全规则校验，校验成功也可能会有 message
function _validateOneRule() {
  _validateOneRule = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(value, rule) {
    var validateResult, keys, vOptions, vValidateFun, i, key, validateRule;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          validateResult = {
            result: true
          };
          keys = Object.keys(rule);
          i = 0;
        case 1:
          if (!(i < keys.length)) {
            _context.next = 4;
            break;
          }
          key = keys[i]; // 非必填选项，值为空，非自定义规则：无需校验，直接返回 true
          if (!(!rule.required && isValueEmpty(value) && !rule.validator)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 2:
          validateRule = VALIDATE_MAP[key]; // 找到一个校验规则，则无需再找，因为参数只允许对一个规则进行校验
          if (!(validateRule && ![undefined, null].includes(rule[key]))) {
            _context.next = 3;
            break;
          }
          // rule 值为 true 则表示没有校验参数，只是对值进行默认规则校验
          vOptions = rule[key] === true ? undefined : rule[key];
          vValidateFun = validateRule;
          return _context.abrupt("continue", 4);
        case 3:
          i++;
          _context.next = 1;
          break;
        case 4:
          if (!vValidateFun) {
            _context.next = 7;
            break;
          }
          _context.next = 5;
          return vValidateFun(value, vOptions);
        case 5:
          validateResult = _context.sent;
          if (!(typeof validateResult === 'boolean')) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", _objectSpread$1(_objectSpread$1({}, rule), {}, {
            result: validateResult
          }));
        case 6:
          if (!(_typeof(validateResult) === 'object')) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 7:
          return _context.abrupt("return", validateResult);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _validateOneRule.apply(this, arguments);
}
function validate(_x3, _x4) {
  return _validate.apply(this, arguments);
}

/**
 * Replace with template.
 * `${name} is wrong` + { name: 'password' } = password is wrong
 */
function _validate() {
  _validate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(value, rules) {
    var all, r;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          all = rules.map(function (rule) {
            return validateOneRule(value, rule);
          });
          _context2.next = 1;
          return Promise.all(all);
        case 1:
          r = _context2.sent;
          return _context2.abrupt("return", r);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _validate.apply(this, arguments);
}
function parseMessage(template, options) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return options[key];
  });
}

// FormItem 子组件受控 key
var ctrlKeyMap = new Map();
ctrlKeyMap.set(Checkbox, 'checked');
// ctrlKeyMap.set(CheckTag, 'checked');
// ctrlKeyMap.set(Upload, 'files');

// FormItem 默认数据类型
var initialDataMap = new Map();
[
// Tree,
// Upload,
// Transfer,
TagInput,
// RangeInput,
CheckboxGroup
// DateRangePicker,
// TimeRangePicker,
].forEach(function (component) {
  initialDataMap.set(component, []);
});
[Checkbox].forEach(function (component) {
  initialDataMap.set(component, false);
});
function useFormItemInitialData(name) {
  var hadReadFloatingFormData = false;
  var _useFormContext = useFormContext(),
    floatingFormDataRef = _useFormContext.floatingFormDataRef,
    formContextInitialData = _useFormContext.initialData;
  var _useFormListContext = useFormListContext(),
    formListName = _useFormListContext.name,
    formListInitialData = _useFormListContext.initialData;

  // 组件渲染后删除对应游离值
  useEffect(function () {
    if (hadReadFloatingFormData) {
      var nameList = formListName ? [formListName, name].flat() : name;
      unset(floatingFormDataRef.current, nameList);
    }
  }, [hadReadFloatingFormData, floatingFormDataRef, formListName, name]);

  // 整理初始值 优先级：Form.initialData < FormList.initialData < FormItem.initialData < floatFormData
  function getDefaultInitialData(_ref) {
    var children = _ref.children,
      initialData = _ref.initialData;
    if (name && floatingFormDataRef !== null && floatingFormDataRef !== void 0 && floatingFormDataRef.current && !isEmpty(floatingFormDataRef.current)) {
      var nameList = formListName ? [formListName, name].flat() : name;
      var defaultInitialData = get(floatingFormDataRef.current, nameList);
      if (typeof defaultInitialData !== 'undefined') {
        hadReadFloatingFormData = true;
        return defaultInitialData;
      }
    }
    if (typeof initialData !== 'undefined') {
      return initialData;
    }
    if (name && formListInitialData.length) {
      var _defaultInitialData = get(formListInitialData, name);
      if (typeof _defaultInitialData !== 'undefined') return _defaultInitialData;
    }
    if (name && formContextInitialData) {
      var _defaultInitialData2 = get(formContextInitialData, name);
      if (typeof _defaultInitialData2 !== 'undefined') return _defaultInitialData2;
    }
    if (typeof children !== 'function') {
      var childList = React.Children.toArray(children);
      var lastChild = childList[childList.length - 1];
      if (lastChild && /*#__PURE__*/React.isValidElement(lastChild)) {
        var _lastChild$props;
        // @ts-ignore
        var isMultiple = lastChild === null || lastChild === void 0 || (_lastChild$props = lastChild.props) === null || _lastChild$props === void 0 ? void 0 : _lastChild$props.multiple;
        return isMultiple ? [] : initialDataMap.get(lastChild.type);
      }
    }
  }
  return {
    getDefaultInitialData: getDefaultInitialData
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormItem = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  // const [locale, t] = useLocaleReceiver('form');
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    globalFormConfig = _useConfig.form;
  var _useGlobalIcon = useGlobalIcon({
      CheckCircleFilledIcon: IconCheckCircleStroked,
      CloseCircleFilledIcon: IconClose,
      ErrorCircleFilledIcon: IconClose
    }),
    CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
    CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon,
    ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
  var _useFormContext = useFormContext(),
    form = _useFormContext.form,
    colon = _useFormContext.colon,
    layout = _useFormContext.layout,
    requiredMarkFromContext = _useFormContext.requiredMark,
    requiredMarkPosition = _useFormContext.requiredMarkPosition,
    labelAlignFromContext = _useFormContext.labelAlign,
    labelWidthFromContext = _useFormContext.labelWidth,
    showErrorMessageFromContext = _useFormContext.showErrorMessage,
    disabledFromContext = _useFormContext.disabled,
    resetTypeFromContext = _useFormContext.resetType,
    rulesFromContext = _useFormContext.rules,
    statusIconFromContext = _useFormContext.statusIcon,
    errorMessage = _useFormContext.errorMessage,
    formMapRef = _useFormContext.formMapRef,
    onFormItemValueChange = _useFormContext.onFormItemValueChange;
  var _useFormListContext = useFormListContext(),
    formListName = _useFormListContext.name,
    formListRules = _useFormListContext.rules,
    formListMapRef = _useFormListContext.formListMapRef,
    formOfFormList = _useFormListContext.form;
  var props = useDefaultProps(originalProps, formItemDefaultProps);
  var children = props.children,
    style = props.style,
    label = props.label,
    name = props.name,
    status = props.status,
    tips = props.tips,
    help = props.help,
    valueFormat = props.valueFormat,
    initialData = props.initialData,
    className = props.className,
    shouldUpdate = props.shouldUpdate,
    successBorder = props.successBorder,
    _props$statusIcon = props.statusIcon,
    statusIcon = _props$statusIcon === void 0 ? statusIconFromContext : _props$statusIcon,
    _props$rules = props.rules,
    innerRules = _props$rules === void 0 ? getInnerRules(name, rulesFromContext, formListName, formListRules) : _props$rules,
    _props$labelWidth = props.labelWidth,
    labelWidth = _props$labelWidth === void 0 ? labelWidthFromContext : _props$labelWidth,
    _props$labelAlign = props.labelAlign,
    labelAlign = _props$labelAlign === void 0 ? labelAlignFromContext : _props$labelAlign,
    _props$requiredMark = props.requiredMark,
    requiredMark = _props$requiredMark === void 0 ? requiredMarkFromContext : _props$requiredMark;
  var _useFormItemInitialDa = useFormItemInitialData(name),
    getDefaultInitialData = _useFormItemInitialDa.getDefaultInitialData;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1]; // custom render state
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    freeShowErrorMessage = _useState4[0],
    setFreeShowErrorMessage = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    errorList = _useState6[0],
    setErrorList = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    successList = _useState8[0],
    setSuccessList = _useState8[1];
  var _useState9 = useState('validating'),
    _useState0 = _slicedToArray(_useState9, 2),
    verifyStatus = _useState0[0],
    setVerifyStatus = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    resetValidating = _useState10[0],
    setResetValidating = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    needResetField = _useState12[0],
    setNeedResetField = _useState12[1];
  var _useState13 = useState(function () {
      var fieldName = flattenDeep([formListName, name]);
      var storeValue = get(form === null || form === void 0 ? void 0 : form.store, fieldName);
      // if (!storeValue && formListName) return; // TODO 针对新增空的动态表单情况，避免回填默认值
      return storeValue !== null && storeValue !== void 0 ? storeValue : getDefaultInitialData({
        children: children,
        initialData: initialData
      });
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    formValue = _useState14[0],
    setFormValue = _useState14[1];
  var formItemRef = useRef(null); // 当前 formItem 实例
  var innerFormItemsRef = useRef([]);
  var shouldEmitChangeRef = useRef(false); // onChange 冒泡开关
  var isUpdatedRef = useRef(false); // 校验开关
  var shouldValidate = useRef(false); // 校验开关
  var valueRef = useRef(formValue); // 当前最新值
  var errorListMapRef = useRef(new Map());
  var isSameForm = useMemo(function () {
    return isEqual(form, formOfFormList);
  }, [form, formOfFormList]); // 用于处理 Form 嵌套的情况
  var snakeName = [].concat(isSameForm ? formListName : undefined, name).filter(function (item) {
    return item !== undefined;
  }).toString(); // 转化 name

  var errorMessages = useMemo(function () {
    return errorMessage !== null && errorMessage !== void 0 ? errorMessage : globalFormConfig.errorMessage;
  }, [errorMessage, globalFormConfig]);
  var showErrorMessage = useMemo(function () {
    if (typeof freeShowErrorMessage === 'boolean') return freeShowErrorMessage;
    if (typeof props.showErrorMessage === 'boolean') return props.showErrorMessage;
    return showErrorMessageFromContext;
  }, [freeShowErrorMessage, props.showErrorMessage, showErrorMessageFromContext]);
  var _useFormItemStyle = useFormItemStyle({
      className: className,
      help: help,
      tips: tips,
      snakeName: snakeName,
      status: status,
      successBorder: successBorder,
      errorList: errorList,
      successList: successList,
      layout: layout,
      verifyStatus: verifyStatus,
      label: label,
      labelWidth: labelWidth,
      labelAlign: labelAlign,
      requiredMark: requiredMark,
      requiredMarkPosition: requiredMarkPosition,
      showErrorMessage: showErrorMessage,
      innerRules: innerRules
    }),
    formItemClass = _useFormItemStyle.formItemClass,
    formItemLabelClass = _useFormItemStyle.formItemLabelClass,
    contentClass = _useFormItemStyle.contentClass,
    labelStyle = _useFormItemStyle.labelStyle,
    contentStyle = _useFormItemStyle.contentStyle,
    helpNode = _useFormItemStyle.helpNode,
    extraNode = _useFormItemStyle.extraNode;

  // 更新 form 表单字段
  var updateFormValue = function updateFormValue(newVal) {
    var _form$getInternalHook, _form$getFieldsValue;
    var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var shouldEmitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _ref = (form === null || form === void 0 || (_form$getInternalHook = form.getInternalHooks) === null || _form$getInternalHook === void 0 ? void 0 : _form$getInternalHook.call(form, HOOK_MARK)) || {},
      setPrevStore = _ref.setPrevStore;
    setPrevStore === null || setPrevStore === void 0 || setPrevStore(form === null || form === void 0 || (_form$getFieldsValue = form.getFieldsValue) === null || _form$getFieldsValue === void 0 ? void 0 : _form$getFieldsValue.call(form, true));
    shouldEmitChangeRef.current = shouldEmitChange;
    isUpdatedRef.current = true;
    shouldValidate.current = validate;
    valueRef.current = newVal;
    var fieldName = [].concat(name);
    var fieldValue = formValue;
    if (formListName) {
      fieldName = [].concat(formListName, name);
      fieldValue = get(form === null || form === void 0 ? void 0 : form.store, fieldName);
    }
    fieldName = fieldName.filter(function (item) {
      return item !== undefined;
    });
    if (!fieldName) return;
    if (isEqual(fieldValue, newVal)) return;
    set(form === null || form === void 0 ? void 0 : form.store, fieldName, newVal);
    setFormValue(newVal);
  };

  // 初始化 rules，最终以 formItem 上优先级最高
  function getInnerRules(name, formRules, formListName, formListRules) {
    if (Array.isArray(name)) {
      return get(formRules === null || formRules === void 0 ? void 0 : formRules[formListName], name) || get(formListRules, name) || get(formRules, name.join('.')) || [];
    }
    return (formRules === null || formRules === void 0 ? void 0 : formRules[name]) || formListRules || [];
  }
  var renderSuffixIcon = function renderSuffixIcon() {
    if (statusIcon === false) return null;
    var resultIcon = function resultIcon(iconSlot) {
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(classPrefix, "-form__status")
      }, iconSlot);
    };
    var getDefaultIcon = function getDefaultIcon() {
      var iconMap = {
        success: /*#__PURE__*/React.createElement(CheckCircleFilledIcon, {
          size: "25px"
        }),
        error: /*#__PURE__*/React.createElement(CloseCircleFilledIcon, {
          size: "25px"
        }),
        warning: /*#__PURE__*/React.createElement(ErrorCircleFilledIcon, {
          size: "25px"
        })
      };
      if (verifyStatus === ValidateStatus.SUCCESS) {
        return resultIcon(iconMap[verifyStatus]);
      }
      if (errorList && errorList[0]) {
        var type = errorList[0].type || 'error';
        return resultIcon(iconMap[type]);
      }
      return null;
    };
    if (/*#__PURE__*/React.isValidElement(statusIcon)) {
      // @ts-ignore
      return resultIcon(/*#__PURE__*/React.cloneElement(statusIcon, _objectSpread({
        style: {
          color: 'unset'
        }
      }, statusIcon.props)));
    }
    if (statusIcon === true) {
      return getDefaultIcon();
    }
    return null;
  };
  function analysisValidateResult(_x) {
    return _analysisValidateResult.apply(this, arguments);
  }
  function _analysisValidateResult() {
    _analysisValidateResult = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(trigger) {
      var _result$rules;
      var result;
      return _regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            result = {
              successList: [],
              errorList: [],
              rules: [],
              resultList: [],
              allowSetValue: false
            };
            result.rules = trigger === 'all' ? innerRules : innerRules.filter(function (item) {
              return (item.trigger || 'change') === trigger;
            });
            if ((_result$rules = result.rules) !== null && _result$rules !== void 0 && _result$rules.length) {
              _context.next = 1;
              break;
            }
            setResetValidating(false);
            return _context.abrupt("return", result);
          case 1:
            result.allowSetValue = true;
            _context.next = 2;
            return validate(formValue, result.rules);
          case 2:
            result.resultList = _context.sent;
            result.errorList = result.resultList.filter(function (item) {
              return item.result !== true;
            }).map(function (item) {
              Object.keys(item).forEach(function (key) {
                if (!item.message && errorMessages[key]) {
                  // eslint-disable-next-line
                  item.message = parseMessage(errorMessages[key], {
                    validate: item[key],
                    name: isString(label) ? label : String(name)
                  });
                }
              });
              return item;
            });
            // 仅有自定义校验方法才会存在 successList
            result.successList = result.resultList.filter(function (item) {
              return item.result === true && item.message && item.type === 'success';
            });
            return _context.abrupt("return", result);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _analysisValidateResult.apply(this, arguments);
  }
  function validate$1() {
    return _validate.apply(this, arguments);
  }
  function _validate() {
    _validate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var trigger,
        showErrorMessage,
        _yield$analysisValida,
        innerSuccessList,
        innerErrorList,
        validateRules,
        resultList,
        allowSetValue,
        cacheErrorList,
        _status,
        _innerErrorList$,
        _cacheErrorList$,
        _args2 = arguments;
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            trigger = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'all';
            showErrorMessage = _args2.length > 1 ? _args2[1] : undefined;
            if (!innerFormItemsRef.current.length) {
              _context2.next = 1;
              break;
            }
            return _context2.abrupt("return", innerFormItemsRef.current.map(function (innerFormItem) {
              return innerFormItem === null || innerFormItem === void 0 ? void 0 : innerFormItem.validate(trigger, showErrorMessage);
            }));
          case 1:
            setResetValidating(true);
            // undefined | boolean
            setFreeShowErrorMessage(showErrorMessage);
            _context2.next = 2;
            return analysisValidateResult(trigger);
          case 2:
            _yield$analysisValida = _context2.sent;
            innerSuccessList = _yield$analysisValida.successList;
            innerErrorList = _yield$analysisValida.errorList;
            validateRules = _yield$analysisValida.rules;
            resultList = _yield$analysisValida.resultList;
            allowSetValue = _yield$analysisValida.allowSetValue;
            // 缓存不同 trigger 下的错误信息 all 包含了所有场景需过滤
            if (innerErrorList.length && trigger !== 'all') {
              errorListMapRef.current.set(trigger, innerErrorList);
            } else {
              errorListMapRef.current["delete"](trigger);
            }

            // all 校验无错误信息时清空所有错误缓存
            if (!innerErrorList.length && trigger === 'all') {
              errorListMapRef.current.clear();
            }
            cacheErrorList = _toConsumableArray(errorListMapRef.current.values()).flat();
            if (allowSetValue) {
              setSuccessList(innerSuccessList);
              setErrorList(cacheErrorList.length ? cacheErrorList : innerErrorList);
            }
            // 根据校验结果设置校验状态
            if (validateRules.length) {
              _status = ValidateStatus.SUCCESS;
              if (innerErrorList.length || cacheErrorList.length) {
                _status = (innerErrorList === null || innerErrorList === void 0 || (_innerErrorList$ = innerErrorList[0]) === null || _innerErrorList$ === void 0 ? void 0 : _innerErrorList$.type) || (cacheErrorList === null || cacheErrorList === void 0 || (_cacheErrorList$ = cacheErrorList[0]) === null || _cacheErrorList$ === void 0 ? void 0 : _cacheErrorList$.type) || ValidateStatus.ERROR;
              }
              setVerifyStatus(_status);
            } else {
              setVerifyStatus(ValidateStatus.VALIDATING);
            }
            // 重置处理
            if (needResetField) {
              resetHandler();
            }
            setResetValidating(false);
            return _context2.abrupt("return", _defineProperty({}, snakeName, innerErrorList.length === 0 ? true : resultList));
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _validate.apply(this, arguments);
  }
  function validateOnly() {
    return _validateOnly.apply(this, arguments);
  } // blur 下触发校验
  function _validateOnly() {
    _validateOnly = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var trigger,
        _yield$analysisValida2,
        innerErrorList,
        resultList,
        _args3 = arguments;
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            trigger = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'all';
            _context3.next = 1;
            return analysisValidateResult(trigger);
          case 1:
            _yield$analysisValida2 = _context3.sent;
            innerErrorList = _yield$analysisValida2.errorList;
            resultList = _yield$analysisValida2.resultList;
            return _context3.abrupt("return", _defineProperty({}, snakeName, innerErrorList.length === 0 ? true : resultList));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _validateOnly.apply(this, arguments);
  }
  function handleItemBlur() {
    var filterRules = innerRules.filter(function (item) {
      return item.trigger === 'blur';
    });
    filterRules.length && validate$1('blur');
  }
  function getResetValue(resetType) {
    if (resetType === 'initial') {
      return getDefaultInitialData({
        children: children,
        initialData: initialData
      });
    }
    var emptyValue;
    if (Array.isArray(formValue)) {
      emptyValue = [];
    } else if (isObject(formValue)) {
      emptyValue = {};
    } else if (isString(formValue)) {
      emptyValue = '';
    }
    return emptyValue;
  }
  function resetField(type) {
    if (typeof name === 'undefined') return;
    var resetType = type || resetTypeFromContext;
    var resetValue = getResetValue(resetType);
    // reset 不校验
    updateFormValue(resetValue, false);
    if (resetValidating) {
      setNeedResetField(true);
    } else {
      resetHandler();
    }
  }
  function resetHandler() {
    setNeedResetField(false);
    setErrorList([]);
    setSuccessList([]);
    setVerifyStatus(ValidateStatus.VALIDATING);
  }
  function setField(field) {
    var value = field.value,
      status = field.status,
      validateMessage = field.validateMessage;
    if (typeof status !== 'undefined') {
      setErrorList(validateMessage ? [validateMessage] : []);
      setSuccessList(validateMessage ? [validateMessage] : []);
      setNeedResetField(false);
      setVerifyStatus(status);
    }
    if (typeof value !== 'undefined') {
      // 手动设置 status 则不需要校验 交给用户判断
      updateFormValue(value, typeof status === 'undefined' ? true : false, true);
    }
  }
  function setValidateMessage(validateMessage) {
    var _validateMessage$;
    if (!validateMessage || !Array.isArray(validateMessage)) return;
    if (validateMessage.length === 0) {
      setErrorList([]);
      setVerifyStatus(ValidateStatus.SUCCESS);
      return;
    }
    setErrorList(validateMessage);
    var status = (validateMessage === null || validateMessage === void 0 || (_validateMessage$ = validateMessage[0]) === null || _validateMessage$ === void 0 ? void 0 : _validateMessage$.type) || ValidateStatus.ERROR;
    setVerifyStatus(status);
  }
  function getValidateMessage() {
    return errorList;
  }
  useEffect(function () {
    var _form$getInternalHook2;
    // 注册自定义更新回调
    if (!shouldUpdate || !form) return;
    var _ref2 = (form === null || form === void 0 || (_form$getInternalHook2 = form.getInternalHooks) === null || _form$getInternalHook2 === void 0 ? void 0 : _form$getInternalHook2.call(form, HOOK_MARK)) || {},
      getPrevStore = _ref2.getPrevStore,
      registerWatch = _ref2.registerWatch;
    var cancelRegister = registerWatch === null || registerWatch === void 0 ? void 0 : registerWatch(function () {
      var _form$getFieldsValue2;
      var currStore = (form === null || form === void 0 || (_form$getFieldsValue2 = form.getFieldsValue) === null || _form$getFieldsValue2 === void 0 ? void 0 : _form$getFieldsValue2.call(form, true)) || {};
      var updateFlag = shouldUpdate;
      if (isFunction(shouldUpdate)) updateFlag = shouldUpdate(getPrevStore === null || getPrevStore === void 0 ? void 0 : getPrevStore(), currStore);
      if (updateFlag) forceUpdate({});
    });
    return cancelRegister;
  }, [shouldUpdate, form]);
  useEffect(function () {
    // 记录填写 name 属性 formItem
    if (typeof name === 'undefined') return;

    // formList 下特殊处理
    if (formListName && isSameForm) {
      formListMapRef.current.set(name, formItemRef);
      return function () {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        formListMapRef.current["delete"](name);
        unset(form === null || form === void 0 ? void 0 : form.store, name);
      };
    }
    if (!formMapRef) return;
    formMapRef.current.set(name, formItemRef);
    return function () {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      formMapRef.current["delete"](name);
      unset(form === null || form === void 0 ? void 0 : form.store, name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snakeName, formListName]);
  useEffect(function () {
    var _form$getInternalHook3, _form$getInternalHook4;
    // value 变化通知 watch 事件
    form === null || form === void 0 || (_form$getInternalHook3 = form.getInternalHooks) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook3 = _form$getInternalHook3.call(form, HOOK_MARK)) === null || _form$getInternalHook3 === void 0 || (_form$getInternalHook4 = _form$getInternalHook3.notifyWatch) === null || _form$getInternalHook4 === void 0 || _form$getInternalHook4.call(_form$getInternalHook3, name);

    // 控制是否需要校验
    if (!shouldValidate.current) return;

    // value change event
    if (typeof name !== 'undefined' && shouldEmitChangeRef.current) {
      if (formListName && isSameForm) {
        // 整理 formItem 的值
        var formListValue = merge$1([], calcFieldValue(name, formValue));
        // 整理 formList 的值
        var fieldValue = calcFieldValue(formListName, formListValue);
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, fieldValue));
      } else {
        var _fieldValue = calcFieldValue(name, formValue);
        onFormItemValueChange === null || onFormItemValueChange === void 0 || onFormItemValueChange(_objectSpread({}, _fieldValue));
      }
    }
    var filterRules = innerRules.filter(function (item) {
      return (item.trigger || 'change') === 'change';
    });
    filterRules.length && validate$1('change');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue, snakeName]);

  // 暴露 ref 实例方法
  var instance = {
    name: name,
    value: formValue,
    isUpdated: isUpdatedRef.current,
    getValue: function getValue() {
      return valueRef.current;
    },
    setValue: function setValue(newVal) {
      return updateFormValue(newVal, true, true);
    },
    setField: setField,
    validate: validate$1,
    validateOnly: validateOnly,
    resetField: resetField,
    setValidateMessage: setValidateMessage,
    getValidateMessage: getValidateMessage,
    resetValidate: resetHandler
  };
  useImperativeHandle(ref, function () {
    return instance;
  });
  useImperativeHandle(formItemRef, function () {
    return instance;
  });

  // 传入 form 实例支持自定义渲染
  if (isFunction(children)) return children(form);
  return /*#__PURE__*/React.createElement("div", {
    className: formItemClass,
    style: style
  }, label && /*#__PURE__*/React.createElement("div", {
    className: formItemLabelClass,
    style: labelStyle
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props === null || props === void 0 ? void 0 : props["for"]
  }, label), colon || '：'), /*#__PURE__*/React.createElement("div", {
    className: contentClass(),
    style: contentStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-form__controls-content")
  }, React.Children.map(children, function (child, index) {
    if (!child) return null;
    var ctrlKey = 'value';
    if (/*#__PURE__*/React.isValidElement(child)) {
      if (child.type === FormItem) {
        return /*#__PURE__*/React.cloneElement(child, {
          // @ts-ignore
          ref: function ref(el) {
            if (!el) return;
            innerFormItemsRef.current[index] = el;
          }
        });
      }
      if (_typeof(child.type) === 'object') {
        ctrlKey = ctrlKeyMap.get(child.type) || 'value';
      }
      var childProps = child.props;
      return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({
        disabled: disabledFromContext
      }, childProps), {}, _defineProperty(_defineProperty(_defineProperty({}, ctrlKey, formValue), "onChange", function onChange(value) {
        var _childProps$onChange, _childProps$onChange$;
        var newValue = valueFormat ? valueFormat(value) : value;
        updateFormValue(newValue, true, true);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        childProps === null || childProps === void 0 || (_childProps$onChange = childProps.onChange) === null || _childProps$onChange === void 0 || (_childProps$onChange$ = _childProps$onChange.call) === null || _childProps$onChange$ === void 0 || _childProps$onChange$.call.apply(_childProps$onChange$, [_childProps$onChange, null, value].concat(args));
      }), "onBlur", function onBlur(value) {
        var _childProps$onBlur, _childProps$onBlur$ca;
        handleItemBlur();
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        childProps === null || childProps === void 0 || (_childProps$onBlur = childProps.onBlur) === null || _childProps$onBlur === void 0 || (_childProps$onBlur$ca = _childProps$onBlur.call) === null || _childProps$onBlur$ca === void 0 || _childProps$onBlur$ca.call.apply(_childProps$onBlur$ca, [_childProps$onBlur, null, value].concat(args));
      })));
    }
    return child;
  }), renderSuffixIcon()), helpNode, extraNode));
});
FormItem.displayName = 'FormItem';

export { FormItem as F, formDefaultProps as f };
//# sourceMappingURL=dep-COqIV9gg.js.map
