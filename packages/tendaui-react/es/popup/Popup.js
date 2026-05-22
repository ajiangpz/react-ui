import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { debounce, isFunction } from 'lodash-es';
import React, { useState, useEffect, isValidElement, useRef, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import Portal from '../portal/Portal.js';
import { u as useControlled } from '../_chunks/dep-CCaTIa7l.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { u as useMutationObservable } from '../_chunks/dep-B2D1svZy.js';
import { g as getWindowSize } from '../_chunks/dep-DRwijJcv.js';
import { isMemo, ForwardRef, isFragment as isFragment$1 } from 'react-is';
import { c as composeRefs } from '../_chunks/dep-C1XcmShP.js';
import { o as on, a as off } from '../_chunks/dep-Ccktr_jk.js';
import classNames from 'classnames';
import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { flushSync } from 'react-dom';
import { createPopper } from '@popperjs/core';
import isEqual from 'react-fast-compare';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-BRbJGDI9.js';
import { CSSTransition } from 'react-transition-group';
import { g as getCssVarsValue } from '../_chunks/dep-DbVHGoUC.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';

function getRefDom$1(domRef) {
  if (domRef.current && _typeof(domRef.current) === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}

function useWindowSize() {
  var _useState = useState(getWindowSize),
    _useState2 = _slicedToArray(_useState, 2),
    size = _useState2[0],
    setSize = _useState2[1];
  useEffect(function () {
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
  if (!object || _typeof(object) !== "object") return false;
  var obj = object;
  return (
    // React Element type
    (obj.$$typeof === REACT_ELEMENT_TYPE_18 || obj.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    obj.type === REACT_FRAGMENT_TYPE
  );
}

var supportRef = function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && Object.prototype.propertyIsEnumerable.call(nodeOrComponent.props, "ref")) {
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
  return /*#__PURE__*/isValidElement(node) && !isFragment(node);
}
var supportNodeRef = function supportNodeRef(node) {
  return isReactElement(node) && supportRef(node);
};
var getNodeRef = function getNodeRef(node) {
  if (node && isReactElement(node)) {
    var ele = node;
    return Object.prototype.propertyIsEnumerable.call(ele.props, "ref") ? ele.props.ref : ele.ref;
  }
  return null;
};

var ESC_KEY = "Escape";
function useTrigger(_ref) {
  var content = _ref.content,
    disabled = _ref.disabled,
    trigger = _ref.trigger,
    visible = _ref.visible,
    onVisibleChange = _ref.onVisibleChange,
    triggerRef = _ref.triggerRef,
    delay = _ref.delay;
  var hasPopupMouseDown = useRef(false);
  var mouseDownTimer = useRef(0);
  var visibleTimer = useRef(null);
  var triggerDataKey = useRef("");
  var leaveFlag = useRef(false);
  useEffect(function () {
    if (!triggerDataKey.current) {
      triggerDataKey.current = "t-popup--".concat(Math.random().toFixed(10));
    }
  }, []);
  var shouldToggle = useMemo(function () {
    if (disabled) return false;
    return !disabled && content === 0 ? true : content;
  }, [disabled, content]);
  var _useMemo = useMemo(function () {
      if (Array.isArray(delay)) return delay;
      return [delay, delay];
    }, [delay]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    _useMemo2$ = _useMemo2[0],
    appearDelay = _useMemo2$ === void 0 ? 0 : _useMemo2$,
    _useMemo2$2 = _useMemo2[1],
    exitDelay = _useMemo2$2 === void 0 ? 0 : _useMemo2$2;
  function callFuncWithDelay(_ref2) {
    var delay2 = _ref2.delay,
      callback = _ref2.callback;
    if (delay2) {
      clearTimeout(visibleTimer.current);
      visibleTimer.current = setTimeout(callback, delay2);
    } else {
      callback();
    }
  }
  useEffect(function () {
    if (!shouldToggle) return;
    var handleDocumentClick = function handleDocumentClick(e) {
      var _getRefDom, _getRefDom$contains;
      if ((_getRefDom = getRefDom(triggerRef)) !== null && _getRefDom !== void 0 && (_getRefDom$contains = _getRefDom.contains) !== null && _getRefDom$contains !== void 0 && _getRefDom$contains.call(_getRefDom, e.target) || hasPopupMouseDown.current) {
        return;
      }
      if (visible) {
        onVisibleChange(false, {
          trigger: "document"
        });
      }
    };
    on(document, "mousedown", handleDocumentClick);
    on(document, "touchend", handleDocumentClick);
    return function () {
      off(document, "mousedown", handleDocumentClick);
      off(document, "touchend", handleDocumentClick);
    };
  }, [shouldToggle, visible, onVisibleChange, triggerRef]);
  function getPopupProps() {
    if (!shouldToggle) return {};
    return {
      onMouseEnter: function onMouseEnter(e) {
        console.log("popup mouse enter");
        if (trigger === "hover" && !leaveFlag.current) {
          clearTimeout(visibleTimer.current);
          onVisibleChange(true, {
            e: e,
            trigger: "trigger-element-hover"
          });
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        console.log("popup mouse leave");
        if (trigger === "hover") {
          leaveFlag.current = true;
          clearTimeout(visibleTimer.current);
          onVisibleChange(false, {
            e: e,
            trigger: "trigger-element-hover"
          });
        }
      },
      onMouseDown: function onMouseDown() {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(function () {
          hasPopupMouseDown.current = false;
        });
      },
      // 触摸结束时,和mouseDown 类似
      onTouchEnd: function onTouchEnd() {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(function () {
          hasPopupMouseDown.current = false;
        });
      }
    };
  }
  function getTriggerProps(triggerNode) {
    if (!shouldToggle) return {};
    var triggerProps = {
      className: visible ? classNames(triggerNode.props.className, "t-popup-open") : triggerNode.props.className,
      onMouseDown: function onMouseDown(e) {
        var _triggerNode$props$on, _triggerNode$props;
        if (trigger === "mousedown") {
          callFuncWithDelay({
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e,
                trigger: "trigger-element-mousedown"
              });
            }
          });
        }
        (_triggerNode$props$on = (_triggerNode$props = triggerNode.props).onMouseDown) === null || _triggerNode$props$on === void 0 || _triggerNode$props$on.call(_triggerNode$props, e);
      },
      onClick: function onClick(e) {
        var _triggerNode$props$on2, _triggerNode$props2;
        if (trigger === "click") {
          callFuncWithDelay({
            // appearDelay 和 exitDelay 分别表示点击时的延迟显示和隐藏
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e,
                trigger: "trigger-element-click"
              });
            }
          });
        }
        (_triggerNode$props$on2 = (_triggerNode$props2 = triggerNode.props).onClick) === null || _triggerNode$props$on2 === void 0 || _triggerNode$props$on2.call(_triggerNode$props2, e);
      },
      onTouchStart: function onTouchStart(e) {
        var _triggerNode$props$on3, _triggerNode$props3;
        if (trigger === "hover" || trigger === "mousedown") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on3 = (_triggerNode$props3 = triggerNode.props).onTouchStart) === null || _triggerNode$props$on3 === void 0 || _triggerNode$props$on3.call(_triggerNode$props3, e);
      },
      onMouseEnter: function onMouseEnter(e) {
        var _triggerNode$props$on4, _triggerNode$props4;
        if (trigger === "hover") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on4 = (_triggerNode$props4 = triggerNode.props).onMouseEnter) === null || _triggerNode$props$on4 === void 0 || _triggerNode$props$on4.call(_triggerNode$props4, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        var _triggerNode$props$on5, _triggerNode$props5;
        if (trigger === "hover") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: exitDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on5 = (_triggerNode$props5 = triggerNode.props).onMouseLeave) === null || _triggerNode$props$on5 === void 0 || _triggerNode$props$on5.call(_triggerNode$props5, e);
      },
      onFocus: function onFocus(e) {
        var _triggerNode$props$on6, _triggerNode$props6;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: "trigger-element-focus"
              });
            }
          });
        }
        (_triggerNode$props$on6 = (_triggerNode$props6 = triggerNode.props).onFocus) === null || _triggerNode$props$on6 === void 0 || _triggerNode$props$on6.call(_triggerNode$props6, e);
      },
      onBlur: function onBlur(e) {
        var _triggerNode$props$on7, _triggerNode$props7;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e,
                trigger: "trigger-element-blur"
              });
            }
          });
        }
        (_triggerNode$props$on7 = (_triggerNode$props7 = triggerNode.props).onBlur) === null || _triggerNode$props$on7 === void 0 || _triggerNode$props$on7.call(_triggerNode$props7, e);
      },
      onContextMenu: function onContextMenu(e) {
        var _triggerNode$props$on8, _triggerNode$props8;
        if (trigger === "context-menu") {
          e.preventDefault();
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: "context-menu"
              });
            }
          });
        }
        (_triggerNode$props$on8 = (_triggerNode$props8 = triggerNode.props).onContextMenu) === null || _triggerNode$props$on8 === void 0 || _triggerNode$props$on8.call(_triggerNode$props8, e);
      },
      onKeyDown: function onKeyDown(e) {
        var _triggerNode$props$on9, _triggerNode$props9;
        if ((e === null || e === void 0 ? void 0 : e.key) === ESC_KEY) {
          callFuncWithDelay({
            delay: exitDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e,
                trigger: "keydown-esc"
              });
            }
          });
        }
        (_triggerNode$props$on9 = (_triggerNode$props9 = triggerNode.props).onKeyDown) === null || _triggerNode$props$on9 === void 0 || _triggerNode$props$on9.call(_triggerNode$props9, e);
      }
    };
    if (supportRef(triggerNode)) {
      triggerProps.ref = composeRefs(triggerRef, getNodeRef(triggerNode));
    } else {
      triggerProps["data-popup"] = triggerDataKey.current;
    }
    return triggerProps;
  }
  function getTriggerNode(children) {
    var triggerNode = /*#__PURE__*/isValidElement(children) && !isFragment$1(children) ? children : /*#__PURE__*/React.createElement("span", {}, children);
    return /*#__PURE__*/React.cloneElement(triggerNode, getTriggerProps(triggerNode));
  }
  var getTriggerDom = useCallback(function () {
    if (typeof document === "undefined") return {};
    return document.querySelector("[data-popup=\"".concat(triggerDataKey.current, "\"]"));
  }, []);
  return {
    getTriggerNode: getTriggerNode,
    getPopupProps: getPopupProps,
    getTriggerDom: getTriggerDom
  };
}

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
  var prevOptions = useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _useState = useState({
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
  var updateStateModifier = useMemo(function () {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn(_ref3) {
        var state2 = _ref3.state;
        var elements = Object.keys(state2.elements);
        flushSync(function () {
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
  var popperOptions = useMemo(function () {
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
    setTimeout(function () {
      if (!isEqual(prevOptions.current, newOptions)) {
        prevOptions.current = newOptions;
      }
    }, 0);
    return newOptions;
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = useRef(null);
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
  var getPopperInstance = function getPopperInstance() {
    return popperInstanceRef.current;
  };
  return {
    get state() {
      var instance = getPopperInstance();
      return instance ? instance.state : void 0;
    },
    styles: state.styles,
    attributes: state.attributes,
    get update() {
      var instance = getPopperInstance();
      return instance ? instance.update : null;
    },
    get forceUpdate() {
      var instance = getPopperInstance();
      return instance ? instance.forceUpdate : null;
    }
  };
};

var popupDefaultProps = {
  destroyOnClose: false,
  hideEmptyPopup: false,
  placement: "top",
  showArrow: false,
  trigger: "hover"
};

var _excluded = ["placement"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Popup = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var _popperOptions$modifi;
  var props = useDefaultProps(originalProps, popupDefaultProps);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    direction = _useConfig.direction;
  var trigger = props.trigger,
    content = props.content,
    placement = props.placement,
    showArrow = props.showArrow,
    destroyOnClose = props.destroyOnClose,
    overlayClassName = props.overlayClassName,
    overlayInnerClassName = props.overlayInnerClassName,
    overlayStyle = props.overlayStyle,
    overlayInnerStyle = props.overlayInnerStyle,
    triggerElement = props.triggerElement,
    _props$children = props.children,
    children = _props$children === void 0 ? triggerElement : _props$children,
    disabled = props.disabled,
    zIndex = props.zIndex,
    onScroll = props.onScroll,
    onScrollToBottom = props.onScrollToBottom,
    delay = props.delay,
    hideEmptyPopup = props.hideEmptyPopup,
    updateScrollTop = props.updateScrollTop;
  var _useWindowSize = useWindowSize(),
    windowHeight = _useWindowSize.height,
    windowWidth = _useWindowSize.width;
  var handleVisibleChange = function handleVisibleChange(visible2, context) {
    var _props$onVisibleChang;
    (_props$onVisibleChang = props.onVisibleChange) === null || _props$onVisibleChang === void 0 || _props$onVisibleChang.call(props, visible2, context);
  };
  var _useControlled = useControlled(props, "visible", handleVisibleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    visible = _useControlled2[0],
    onVisibleChangeInternal = _useControlled2[1];
  var onVisibleChangeForTrigger = function onVisibleChangeForTrigger(visible2, context) {
    var popupContext = {
      e: context.e,
      trigger: context.trigger
    };
    onVisibleChangeInternal(visible2, popupContext);
  };
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    popupElement = _useState2[0],
    setPopupElement = _useState2[1];
  var triggerRef = useRef(null);
  var popupRef = useRef(null);
  var portalRef = useRef(null);
  var contentRef = useRef(null);
  var popperRef = useRef(null);
  var DEFAULT_TRANSITION_TIMEOUT = 180;
  useEffect(function () {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(function () {
        return setPopupElement(null);
      });
    }
  }, [content, hideEmptyPopup]);
  var showOverlay = useMemo(function () {
    if (hideEmptyPopup && !content) return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);
  var popperPlacement = useMemo(function () {
    if (!placement) return placement;
    var normalized = placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
    if (direction !== "rtl") return normalized;
    var parts = normalized.split("-");
    var mirrored = parts.map(function (part) {
      if (part === "left") return "right";
      if (part === "right") return "left";
      if (part === "start") return "end";
      if (part === "end") return "start";
      return part;
    }).join("-");
    return mirrored;
  }, [placement, direction]);
  var _useTrigger = useTrigger({
      triggerRef: triggerRef,
      content: content,
      disabled: disabled,
      trigger: trigger,
      visible: visible,
      delay: delay,
      onVisibleChange: onVisibleChangeForTrigger
    }),
    getTriggerNode = _useTrigger.getTriggerNode,
    getPopupProps = _useTrigger.getPopupProps,
    getTriggerDom = _useTrigger.getTriggerDom;
  var popperOptions = props.popperOptions;
  var _ref = popperOptions || {},
    _ignored = _ref.placement,
    restPopperOptions = _objectWithoutProperties(_ref, _excluded);
  void _ignored;
  popperRef.current = usePopper(getRefDom$1(triggerRef), popupElement, _objectSpread({
    placement: popperPlacement
  }, restPopperOptions));
  var hasArrowModifier = popperOptions === null || popperOptions === void 0 || (_popperOptions$modifi = popperOptions.modifiers) === null || _popperOptions$modifi === void 0 ? void 0 : _popperOptions$modifi.some(function (modifier) {
    return modifier.name === "arrow";
  });
  var _popperRef$current = popperRef.current,
    styles = _popperRef$current.styles,
    attributes = _popperRef$current.attributes;
  var triggerNode = isFunction(children) ? getTriggerNode(children({
    visible: visible
  })) : getTriggerNode(children);
  var updateTimeRef = useRef(null);
  useMutationObservable(getRefDom$1(triggerRef), function () {
    var triggerDom = getRefDom$1(triggerRef);
    var isDisplayNone = triggerDom ? getCssVarsValue("display", triggerDom) === "none" : true;
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(function () {
        var _popperRef$current2, _popperRef$current2$u;
        return (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 || (_popperRef$current2$u = _popperRef$current2.update) === null || _popperRef$current2$u === void 0 ? void 0 : _popperRef$current2$u.call(_popperRef$current2);
      }, 0);
    }
  });
  useEffect(function () {
    return function () {
      return clearTimeout(updateTimeRef.current);
    };
  }, []);
  useEffect(function () {
    if (visible) {
      requestAnimationFrame(function () {
        var _popperRef$current3, _popperRef$current3$u;
        return (_popperRef$current3 = popperRef.current) === null || _popperRef$current3 === void 0 || (_popperRef$current3$u = _popperRef$current3.update) === null || _popperRef$current3$u === void 0 ? void 0 : _popperRef$current3$u.call(_popperRef$current3);
      });
    }
  }, [visible, content, windowHeight, windowWidth]);
  useEffect(function () {
    if (!triggerRef.current) triggerRef.current = getTriggerDom();
    if (visible) {
      updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(contentRef.current);
    }
  }, [visible, updateScrollTop, getTriggerDom]);
  function handleExited() {
    if (!destroyOnClose && popupElement) {
      popupElement.style.display = "none";
    }
  }
  function handleEnter() {
    if (!destroyOnClose && popupElement) {
      popupElement.style.display = "block";
    }
  }
  function handleScroll(e) {
    onScroll === null || onScroll === void 0 || onScroll({
      e: e
    });
    var debounceOnScrollBottom = debounce(function (e2) {
      return onScrollToBottom === null || onScrollToBottom === void 0 ? void 0 : onScrollToBottom({
        e: e2
      });
    }, 100);
    var _e$target = e.target,
      scrollTop = _e$target.scrollTop,
      clientHeight = _e$target.clientHeight,
      scrollHeight = _e$target.scrollHeight;
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      debounceOnScrollBottom(e);
    }
  }
  function getOverlayStyle(overlayStyle2) {
    var triggerDom = getRefDom$1(triggerRef);
    if (triggerDom && popupRef.current && typeof overlayStyle2 === "function") {
      return _objectSpread({}, overlayStyle2(triggerDom, popupRef.current));
    }
    return _objectSpread({}, overlayStyle2);
  }
  var overlay = showOverlay && /* @__PURE__ */React.createElement(CSSTransition, {
    appear: true,
    "in": visible,
    timeout: DEFAULT_TRANSITION_TIMEOUT,
    nodeRef: portalRef,
    unmountOnExit: destroyOnClose,
    onEnter: handleEnter,
    onExited: handleExited,
    classNames: "".concat(classPrefix, "-portal")
  }, /* @__PURE__ */React.createElement(Portal, {
    triggerNode: getRefDom$1(triggerRef),
    attach: "body",
    ref: portalRef
  }, /* @__PURE__ */React.createElement(CSSTransition, {
    appear: true,
    timeout: 0,
    "in": visible,
    nodeRef: popupRef,
    classNames: "".concat(classPrefix, "-popup")
  }, /* @__PURE__ */React.createElement("div", _objectSpread(_objectSpread({
    ref: function ref(node) {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    style: _objectSpread(_objectSpread({}, styles.popper), {}, {
      zIndex: zIndex
    }, getOverlayStyle(overlayStyle)),
    className: classNames("".concat(classPrefix, "-popup"), overlayClassName, "")
  }, attributes.popper), getPopupProps()), /* @__PURE__ */React.createElement("div", {
    ref: contentRef,
    className: classNames("".concat(classPrefix, "-popup__content"), _defineProperty({}, "".concat(classPrefix, "-popup__content--arrow"), showArrow), overlayInnerClassName),
    style: getOverlayStyle(overlayInnerStyle),
    onScroll: handleScroll
  }, content, showArrow && /* @__PURE__ */React.createElement("div", _objectSpread({
    style: styles.arrow,
    className: "".concat(classPrefix, "-popup__arrow")
  }, hasArrowModifier && {
    "data-popper-arrow": ""
  })))))));
  useImperativeHandle(ref, function () {
    return {
      getPopper: function getPopper() {
        return popperRef.current;
      },
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      },
      getPortalElement: function getPortalElement() {
        return portalRef.current;
      },
      getPopupContentElement: function getPopupContentElement() {
        return contentRef.current;
      },
      setVisible: function setVisible(visible2) {
        return onVisibleChangeInternal(visible2, {
          trigger: "document"
        });
      }
    };
  });
  return /* @__PURE__ */React.createElement(React.Fragment, null, triggerNode, overlay);
});
Popup.displayName = "Popup";

export { Popup as default };
//# sourceMappingURL=Popup.js.map
