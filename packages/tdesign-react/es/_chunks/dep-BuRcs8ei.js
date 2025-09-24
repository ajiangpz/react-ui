import _typeof from '@babel/runtime/helpers/typeof';
import { r as reactExports } from './dep-C52Ear6B.js';
import { isEqual, debounce } from 'lodash-es';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { a as getWindowSize, c as canUseDocument, u as useIsomorphicLayoutEffect } from './dep-6TeJvJOF.js';
import { isMemo, ForwardRef } from 'react-is';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { r as reactDomExports } from './dep-DU45RdGB.js';
import { createPopper } from '@popperjs/core';
import isEqual$1 from 'react-fast-compare';

function getRefDom$1(domRef) {
  if (domRef.current && _typeof(domRef.current) === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}

var useLatest = function useLatest(value) {
  var ref = reactExports.useRef(value);
  ref.current = value;
  return ref;
};

var DEFAULT_OPTIONS = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;
  var optionsRef = reactExports.useRef(null);
  var signalRef = reactExports.useRef(0);
  var callbackRef = useLatest(cb);
  if (!isEqual(options, optionsRef.current)) {
    signalRef.current += 1;
  }
  optionsRef.current = options;
  reactExports.useEffect(function () {
    if (!targetEl || !(targetEl !== null && targetEl !== void 0 && targetEl.nodeType)) return;
    var observer = null;
    try {
      if (optionsRef.current !== null) {
        var _optionsRef$current = optionsRef.current,
          debounceTime = _optionsRef$current.debounceTime,
          config = _optionsRef$current.config;
        var mutationCallback = function mutationCallback() {
          callbackRef.current.apply(callbackRef, arguments);
        };
        observer = new MutationObserver(debounceTime > 0 ? debounce(mutationCallback, debounceTime) : mutationCallback);
        observer.observe(targetEl, config);
      }
    } catch (e) {
      console.error(e);
    }
    return function () {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [targetEl, signalRef.current]);
}

function useWindowSize() {
  var _useState = reactExports.useState(getWindowSize),
    _useState2 = _slicedToArray(_useState, 2),
    size = _useState2[0],
    setSize = _useState2[1];
  reactExports.useEffect(function () {
    function handleResize() {
      setSize(getWindowSize());
    }
    var debounceResize = debounce(handleResize, 400);
    window.addEventListener("resize", debounceResize);
    return function () {
      window.removeEventListener("resize", debounceResize);
      debounceResize.cancel();
    };
  }, []);
  return size;
}

var REACT_ELEMENT_TYPE_18 = Symbol["for"]("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol["for"]("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment");
function isFragment(object) {
  return (
    // Base object type
    object && _typeof(object) === "object" && (
    // React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    object.type === REACT_FRAGMENT_TYPE
  );
}

var supportRef = function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && nodeOrComponent.props.propertyIsEnumerable("ref")) {
    return true;
  }
  var type = isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== ForwardRef) {
    return false;
  }
  return true;
};
function getRefDom(domRef) {
  if (domRef.current && _typeof(domRef.current) === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}
function isReactElement(node) {
  return /*#__PURE__*/reactExports.isValidElement(node) && !isFragment(node);
}
var supportNodeRef = function supportNodeRef(node) {
  return isReactElement(node) && supportRef(node);
};
var getNodeRef = function getNodeRef(node) {
  if (node && isReactElement(node)) {
    var ele = node;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};

var on = function () {
  if (canUseDocument && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent("on".concat(event), handler);
    }
  };
}();
var off = function () {
  if (canUseDocument && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent("on".concat(event), handler);
    }
  };
}();

var EMPTY_MODIFIERS = [];
var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    acc[key] = value;
    return acc;
  }, {});
};
var usePopper = function usePopper(referenceElement, popperElement) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var prevOptions = reactExports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _useState = reactExports.useState({
      styles: {
        popper: {
          position: optionsWithDefaults.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var updateStateModifier = reactExports.useMemo(function () {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn(_ref3) {
        var state2 = _ref3.state;
        var elements = Object.keys(state2.elements);
        reactDomExports.flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = reactExports.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(_toConsumableArray(optionsWithDefaults.modifiers), [updateStateModifier, {
        name: "applyStyles",
        enabled: false,
        phase: "write"
      }])
    };
    if (isEqual$1(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    }
    prevOptions.current = newOptions;
    return newOptions;
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = reactExports.useRef(null);
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : void 0,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

export { off as a, getNodeRef as b, usePopper as c, getRefDom$1 as d, useMutationObservable as e, getRefDom as g, on as o, supportRef as s, useWindowSize as u };
//# sourceMappingURL=dep-BuRcs8ei.js.map
