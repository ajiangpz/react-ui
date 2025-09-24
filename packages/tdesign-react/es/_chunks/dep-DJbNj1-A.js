import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { r as reactExports, R as React } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import useSingle from '../select-input/hook/useSingle.js';
import useMultiple from '../select-input/hook/useMultiple.js';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isFunction, debounce, isObject } from 'lodash-es';
import { g as getRefDom, o as on, a as off, s as supportRef, b as getNodeRef, u as useWindowSize, c as usePopper, d as getRefDom$1, e as useMutationObservable } from './dep-BuRcs8ei.js';
import Portal from '../portal/Portal.js';
import { u as useControlled } from './dep-Dqh5DYAh.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';
import { isFragment } from 'react-is';
import { c as composeRefs } from './dep-C1XcmShP.js';
import { CSSTransition } from 'react-transition-group';
import { g as getCssVarsValue } from './dep-2sN3YgeE.js';
import { u as useConfig } from './dep-CaeblIEM.js';
import './style/css.js';
import _typeof from '@babel/runtime/helpers/typeof';

var ESC_KEY = "Escape";
function useTrigger(_ref) {
  var content = _ref.content,
    disabled = _ref.disabled,
    trigger = _ref.trigger,
    visible = _ref.visible,
    onVisibleChange = _ref.onVisibleChange,
    triggerRef = _ref.triggerRef,
    delay = _ref.delay;
  var hasPopupMouseDown = reactExports.useRef(false);
  var mouseDownTimer = reactExports.useRef(0);
  var visibleTimer = reactExports.useRef(null);
  var triggerDataKey = reactExports.useRef("t-popup--".concat(Math.random().toFixed(10)));
  var leaveFlag = reactExports.useRef(false);
  var shouldToggle = reactExports.useMemo(function () {
    if (disabled) return false;
    return !disabled && content === 0 ? true : content;
  }, [disabled, content]);
  var _useMemo = reactExports.useMemo(function () {
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
  reactExports.useEffect(function () {
    if (!shouldToggle) return;
    var handleDocumentClick = function handleDocumentClick(e) {
      var _getRefDom, _getRefDom$contains;
      if ((_getRefDom = getRefDom(triggerRef)) !== null && _getRefDom !== void 0 && (_getRefDom$contains = _getRefDom.contains) !== null && _getRefDom$contains !== void 0 && _getRefDom$contains.call(_getRefDom, e.target) || hasPopupMouseDown.current) {
        return;
      }
      visible && onVisibleChange(false, {
        e: e,
        trigger: "document"
      });
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
      onFocus: function onFocus() {
        var _triggerNode$props$on6, _triggerNode$props6;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                trigger: "trigger-element-focus"
              });
            }
          });
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_triggerNode$props$on6 = (_triggerNode$props6 = triggerNode.props).onFocus) === null || _triggerNode$props$on6 === void 0 || _triggerNode$props$on6.call.apply(_triggerNode$props$on6, [_triggerNode$props6].concat(args));
      },
      onBlur: function onBlur() {
        var _triggerNode$props$on7, _triggerNode$props7;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                trigger: "trigger-element-blur"
              });
            }
          });
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_triggerNode$props$on7 = (_triggerNode$props7 = triggerNode.props).onBlur) === null || _triggerNode$props$on7 === void 0 || _triggerNode$props$on7.call.apply(_triggerNode$props$on7, [_triggerNode$props7].concat(args));
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
    var triggerNode = /*#__PURE__*/reactExports.isValidElement(children) && !isFragment(children) ? children : /*#__PURE__*/React.createElement("span", {
      children: children
    });
    return /*#__PURE__*/React.cloneElement(triggerNode, getTriggerProps(triggerNode));
  }
  var getTriggerDom = reactExports.useCallback(function () {
    if (typeof document === "undefined") return {};
    return document.querySelector("[data-popup=\"".concat(triggerDataKey.current, "\"]"));
  }, []);
  return {
    getTriggerNode: getTriggerNode,
    getPopupProps: getPopupProps,
    getTriggerDom: getTriggerDom
  };
}

var popupDefaultProps = {
  destroyOnClose: false,
  hideEmptyPopup: false,
  placement: "top",
  showArrow: false,
  trigger: "hover"
};

var _excluded = ["placement"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Popup$1 = /*#__PURE__*/reactExports.forwardRef(function (originalProps, ref) {
  var _popperOptions$modifi;
  var props = useDefaultProps(originalProps, popupDefaultProps);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
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
  var _useControlled = useControlled(props, "visible", props.onVisibleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    visible = _useControlled2[0],
    onVisibleChange = _useControlled2[1];
  var _useState = reactExports.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    popupElement = _useState2[0],
    setPopupElement = _useState2[1];
  var triggerRef = reactExports.useRef(null);
  var popupRef = reactExports.useRef(null);
  var portalRef = reactExports.useRef(null);
  var contentRef = reactExports.useRef(null);
  var popperRef = reactExports.useRef(null);
  var DEFAULT_TRANSITION_TIMEOUT = 180;
  reactExports.useEffect(function () {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(function () {
        return setPopupElement(null);
      });
    }
  }, [content, hideEmptyPopup]);
  var showOverlay = reactExports.useMemo(function () {
    if (hideEmptyPopup && !content) return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);
  var popperPlacement = reactExports.useMemo(function () {
    return placement && placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
  }, [placement]);
  var _useTrigger = useTrigger({
      triggerRef: triggerRef,
      content: content,
      disabled: disabled,
      trigger: trigger,
      visible: visible,
      delay: delay,
      onVisibleChange: onVisibleChange
    }),
    getTriggerNode = _useTrigger.getTriggerNode,
    getPopupProps = _useTrigger.getPopupProps,
    getTriggerDom = _useTrigger.getTriggerDom;
  var popperOptions = props.popperOptions;
  var _ref = popperOptions || {},
    _ignored = _ref.placement,
    restPopperOptions = _objectWithoutProperties(_ref, _excluded);
  popperRef.current = usePopper(getRefDom$1(triggerRef), popupElement, _objectSpread$2({
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
  var updateTimeRef = reactExports.useRef(null);
  useMutationObservable(getRefDom$1(triggerRef), function () {
    var isDisplayNone = getCssVarsValue("display", getRefDom$1(triggerRef)) === "none";
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(function () {
        var _popperRef$current2, _popperRef$current2$u;
        return (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 || (_popperRef$current2$u = _popperRef$current2.update) === null || _popperRef$current2$u === void 0 ? void 0 : _popperRef$current2$u.call(_popperRef$current2);
      }, 0);
    }
  });
  reactExports.useEffect(function () {
    return function () {
      return clearTimeout(updateTimeRef.current);
    };
  }, []);
  reactExports.useEffect(function () {
    if (visible) {
      requestAnimationFrame(function () {
        var _popperRef$current3, _popperRef$current3$u;
        return (_popperRef$current3 = popperRef.current) === null || _popperRef$current3 === void 0 || (_popperRef$current3$u = _popperRef$current3.update) === null || _popperRef$current3$u === void 0 ? void 0 : _popperRef$current3$u.call(_popperRef$current3);
      });
    }
  }, [visible, content, windowHeight, windowWidth]);
  reactExports.useEffect(function () {
    if (!triggerRef.current) triggerRef.current = getTriggerDom();
    if (visible) {
      updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(contentRef.current);
    }
  }, [visible, updateScrollTop, getTriggerDom]);
  function handleExited() {
    !destroyOnClose && popupElement && (popupElement.style.display = "none");
  }
  function handleEnter() {
    !destroyOnClose && popupElement && (popupElement.style.display = "block");
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
    if (getRefDom$1(triggerRef) && popupRef.current && typeof overlayStyle2 === "function") {
      return _objectSpread$2({}, overlayStyle2(getRefDom$1(triggerRef), popupRef.current));
    }
    return _objectSpread$2({}, overlayStyle2);
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
  }, /* @__PURE__ */React.createElement("div", _objectSpread$2(_objectSpread$2({
    ref: function ref(node) {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    style: _objectSpread$2(_objectSpread$2({}, styles.popper), {}, {
      zIndex: zIndex
    }, getOverlayStyle(overlayStyle)),
    className: classNames("".concat(classPrefix, "-popup"), overlayClassName, "")
  }, attributes.popper), getPopupProps()), /* @__PURE__ */React.createElement("div", {
    ref: contentRef,
    className: classNames("".concat(classPrefix, "-popup__content"), _defineProperty({}, "".concat(classPrefix, "-popup__content--arrow"), showArrow), overlayInnerClassName),
    style: getOverlayStyle(overlayInnerStyle),
    onScroll: handleScroll
  }, content, showArrow && /* @__PURE__ */React.createElement("div", _objectSpread$2({
    style: styles.arrow,
    className: "".concat(classPrefix, "-popup__arrow")
  }, hasArrowModifier && {
    "data-popper-arrow": ""
  })))))));
  reactExports.useImperativeHandle(ref, function () {
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
        return onVisibleChange(visible2, {
          trigger: "document"
        });
      }
    };
  });
  return /* @__PURE__ */React.createElement(React.Fragment, null, triggerNode, overlay);
});
Popup$1.displayName = "Popup";

var Popup = Popup$1;

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MAX_POPUP_WIDTH = 1e3;
function useOverlayInnerStyle(props, extra) {
  var popupProps = props.popupProps,
    autoWidth = props.autoWidth,
    readonly = props.readonly,
    disabled = props.disabled,
    onPopupVisibleChange = props.onPopupVisibleChange,
    allowInput = props.allowInput;
  var _useControlled = useControlled(props, "popupVisible", onPopupVisibleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    innerPopupVisible = _useControlled2[0],
    setInnerPopupVisible = _useControlled2[1];
  var matchWidthFunc = function matchWidthFunc(triggerElement, popupElement) {
    if (!triggerElement || !popupElement) {
      return;
    }
    var prevDisplay = popupElement.style.display;
    popupElement.style.display = "";
    var overlayScrollWidth = popupElement.offsetWidth - popupElement.scrollWidth;
    var width = popupElement.offsetWidth - overlayScrollWidth > triggerElement.offsetWidth ? popupElement.scrollWidth : triggerElement.offsetWidth - overlayScrollWidth;
    if (prevDisplay === "none") {
      popupElement.style.display = "none";
    }
    var otherOverlayInnerStyle = {};
    if (popupProps && _typeof(popupProps.overlayInnerStyle) === "object" && !popupProps.overlayInnerStyle.width) {
      otherOverlayInnerStyle = popupProps.overlayInnerStyle;
    }
    return _objectSpread$1({
      width: "".concat(Math.min(width, MAX_POPUP_WIDTH), "px")
    }, otherOverlayInnerStyle);
  };
  var onInnerPopupVisibleChange = function onInnerPopupVisibleChange(visible, context) {
    if (disabled || readonly) {
      return;
    }
    var newVisible = context.trigger === "trigger-element-click" && allowInput ? true : visible;
    if (props.popupVisible !== newVisible) {
      setInnerPopupVisible(newVisible, context);
      if (!newVisible) {
        var _extra$afterHidePopup;
        extra === null || extra === void 0 || (_extra$afterHidePopup = extra.afterHidePopup) === null || _extra$afterHidePopup === void 0 || _extra$afterHidePopup.call(extra, context);
      }
    }
  };
  var tOverlayInnerStyle = reactExports.useMemo(function () {
    var result = {};
    var overlayInnerStyle = (popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle) || {};
    if (isFunction(overlayInnerStyle) || isObject(overlayInnerStyle) && overlayInnerStyle.width) {
      result = overlayInnerStyle;
    } else if (!autoWidth) {
      result = matchWidthFunc;
    }
    return result;
  }, [autoWidth, popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle]);
  return {
    tOverlayInnerStyle: tOverlayInnerStyle,
    innerPopupVisible: innerPopupVisible,
    onInnerPopupVisibleChange: onInnerPopupVisibleChange
  };
}

var selectInputDefaultProps = {
  allowInput: false,
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  loading: false,
  minCollapsedNum: 0,
  multiple: false,
  readonly: false,
  reserveKeyword: false,
  status: "default"
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SelectInput = /*#__PURE__*/React.forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, selectInputDefaultProps);
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  var selectInputRef = reactExports.useRef(null);
  var selectInputWrapRef = reactExports.useRef(null);
  var multiple = props.multiple,
    value = props.value,
    popupVisible = props.popupVisible,
    popupProps = props.popupProps,
    borderless = props.borderless,
    disabled = props.disabled;
  var _useSingle = useSingle(props),
    commonInputProps = _useSingle.commonInputProps,
    inputRef = _useSingle.inputRef,
    singleInputValue = _useSingle.singleInputValue,
    onInnerClear = _useSingle.onInnerClear,
    renderSelectSingle = _useSingle.renderSelectSingle;
  var _useMultiple = useMultiple(props),
    tagInputRef = _useMultiple.tagInputRef,
    multipleInputValue = _useMultiple.multipleInputValue,
    renderSelectMultiple = _useMultiple.renderSelectMultiple;
  var _useOverlayInnerStyle = useOverlayInnerStyle(props, {
      afterHidePopups: onInnerBlur
    }),
    tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
    innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
    onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
  var popupClasses = classNames([props.className, "".concat(prefix, "-select-input"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix, "-select-input--borderless"), borderless), "".concat(prefix, "-select-input--multiple"), multiple), "".concat(prefix, "-select-input--popup-visible"), popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible), "".concat(prefix, "-select-input--empty"), value instanceof Array ? !value.length : !value)]);
  reactExports.useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread(_objectSpread({}, selectInputRef.current || {}), inputRef.current || {}), tagInputRef.current || {});
  });
  var visibleProps = {
    visible: popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible
  };
  function onInnerBlur(ctx) {
    var _props$onBlur;
    var inputValue = props.multiple ? multipleInputValue : singleInputValue;
    var params = {
      e: ctx.e,
      inputValue: inputValue
    };
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, props.value, params);
  }
  var mainContent = /* @__PURE__ */React.createElement("div", {
    className: popupClasses,
    style: props.style
  }, /* @__PURE__ */React.createElement(Popup, _objectSpread(_objectSpread(_objectSpread({
    ref: selectInputRef,
    trigger: (popupProps === null || popupProps === void 0 ? void 0 : popupProps.trigger) || "click",
    placement: "bottom-left",
    content: props.panel,
    hideEmptyPopup: true,
    onVisibleChange: onInnerPopupVisibleChange,
    updateScrollTop: props.updateScrollTop
  }, visibleProps), popupProps), {}, {
    disabled: disabled,
    overlayInnerStyle: tOverlayInnerStyle
  }), multiple ? renderSelectMultiple({
    commonInputProps: commonInputProps,
    onInnerClear: onInnerClear,
    popupVisible: visibleProps.visible,
    allowInput: props.allowInput
  }) : renderSelectSingle(visibleProps.visible)));
  if (!props.tips) {
    return mainContent;
  }
  return /* @__PURE__ */React.createElement("div", {
    ref: selectInputWrapRef,
    className: "t-select-input__wrap"
  }, mainContent, props.tips && /* @__PURE__ */React.createElement("div", {
    className: "t-input__tips t-input__tips--".concat(props.status || "normal")
  }, props.tips));
});
SelectInput.displayName = "SelectInput";

export { Popup as P, SelectInput as S };
//# sourceMappingURL=dep-DJbNj1-A.js.map
