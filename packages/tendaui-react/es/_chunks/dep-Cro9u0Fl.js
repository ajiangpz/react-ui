import { g as getDefaultExportFromCjs } from './dep-0Agal8xo.js';

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var classnames = classnames$1.exports;

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames$1.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {
			'use strict';

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if ('object' !== 'undefined' && module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
				// register as 'classnames', consistent with npm package name
				undefined('classnames', [], function () {
					return classNames;
				});
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames$1));
	return classnames$1.exports;
}

var classnamesExports = requireClassnames();
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

export { classNames as c };
//# sourceMappingURL=dep-Cro9u0Fl.js.map
