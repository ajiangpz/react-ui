import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { isEqual, debounce, isFunction } from 'lodash-es';
import React, { useRef, useEffect, useState, isValidElement, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import Portal from '../portal/Portal.js';
import { u as useControlled } from '../_chunks/dep-D2IWH4e_.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import { a as getWindowSize, c as canUseDocument, u as useIsomorphicLayoutEffect } from '../_chunks/dep-CKiAytca.js';
import { isMemo, ForwardRef, isFragment as isFragment$1 } from 'react-is';
import { c as composeRefs } from '../_chunks/dep-BggCUGKG.js';
import classNames from 'classnames';
import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { flushSync } from 'react-dom';
import { createPopper } from '@popperjs/core';
import isEqual$1 from 'react-fast-compare';
import { CSSTransition } from 'react-transition-group';
import { g as getCssVarsValue } from '../_chunks/dep-BrowiCr7.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import '../config-provider/ConfigContext.js';

function getRefDom$1(domRef) {
  if (domRef.current && _typeof(domRef.current) === 'object' && 'currentElement' in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}

var useLatest = function useLatest(value) {
  var ref = useRef(value);
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
  var optionsRef = useRef(null);
  var signalRef = useRef(0);
  var callbackRef = useLatest(cb);
  if (!isEqual(options, optionsRef.current)) {
    signalRef.current += 1;
  }
  optionsRef.current = options;
  useEffect(function () {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetEl, signalRef.current]);
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
    window.addEventListener('resize', debounceResize);
    return function () {
      window.removeEventListener('resize', debounceResize);
      debounceResize.cancel();
    };
  }, []);
  return size;
}

// Source from:
// https://github.com/react-component/util/blob/master/src/React/isFragment.ts

var REACT_ELEMENT_TYPE_18 = Symbol["for"]('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol["for"]('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol["for"]('react.fragment');

/**
 * Compatible with React 18 or 19 to check if node is a Fragment.
 */
function isFragment(object) {
  return (
    // Base object type
    object && _typeof(object) === 'object' && (
    // React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    object.type === REACT_FRAGMENT_TYPE
  );
}

// 判断是否支持 ref 透传
var supportRef = function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }

  // React 19 no need `forwardRef` anymore. So just pass if is a React element.
  // eslint-disable-next-line no-prototype-builtins
  if (isReactElement(nodeOrComponent) && nodeOrComponent.props.propertyIsEnumerable('ref')) {
    return true;
  }
  var type = isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== ForwardRef) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== ForwardRef) {
    return false;
  }
  return true;
};

// 获取 ref 中的 dom 元素
function getRefDom(domRef) {
  if (domRef.current && _typeof(domRef.current) === 'object' && 'currentElement' in domRef.current) {
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

/**
 * In React 19. `ref` is not a property from node.
 * But a property from `props.ref`.
 * To check if `props.ref` exist or fallback to `ref`.
 */
var getNodeRef = function getNodeRef(node) {
  if (node && isReactElement(node)) {
    var ele = node;

    // Source from:
    // https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/getReactNodeRef/getReactNodeRef.ts
    // eslint-disable-next-line no-prototype-builtins
    return ele.props.propertyIsEnumerable('ref') ? ele.props.ref : ele.ref;
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

var ESC_KEY = 'Escape';
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
  var triggerDataKey = useRef("t-popup--".concat(Math.random().toFixed(10)));
  var leaveFlag = useRef(false); // 防止多次触发显隐

  // 禁用和无内容时不展示
  var shouldToggle = useMemo(function () {
    if (disabled) return false; // 禁用
    return !disabled && content === 0 ? true : content; // 无内容时
  }, [disabled, content]);

  // 解析 delay 数据类型
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
    var delay = _ref2.delay,
      callback = _ref2.callback;
    if (delay) {
      clearTimeout(visibleTimer.current);
      visibleTimer.current = setTimeout(callback, delay);
    } else {
      callback();
    }
  }

  // 点击 trigger overlay 以外的元素关闭
  useEffect(function () {
    if (!shouldToggle) return;
    var handleDocumentClick = function handleDocumentClick(e) {
      var _getRefDom, _getRefDom$contains;
      if ((_getRefDom = getRefDom(triggerRef)) !== null && _getRefDom !== void 0 && (_getRefDom$contains = _getRefDom.contains) !== null && _getRefDom$contains !== void 0 && _getRefDom$contains.call(_getRefDom, e.target) || hasPopupMouseDown.current) {
        return;
      }
      visible && onVisibleChange(false, {
        e: e,
        trigger: 'document'
      });
    };
    on(document, 'mousedown', handleDocumentClick);
    on(document, 'touchend', handleDocumentClick);

    // 清理事件监听
    return function () {
      off(document, 'mousedown', handleDocumentClick);
      off(document, 'touchend', handleDocumentClick);
    };
  }, [shouldToggle, visible, onVisibleChange, triggerRef]);

  // 弹出内容交互处理
  function getPopupProps() {
    if (!shouldToggle) return {};
    return {
      onMouseEnter: function onMouseEnter(e) {
        console.log('popup mouse enter');
        // leaveFlag表示是从 trigger 元素 hover 过来的，避免频繁显示隐藏
        if (trigger === 'hover' && !leaveFlag.current) {
          // 清除延迟显示定时器
          clearTimeout(visibleTimer.current);
          // 立即显示
          onVisibleChange(true, {
            e: e,
            trigger: 'trigger-element-hover'
          });
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        console.log('popup mouse leave');
        if (trigger === 'hover') {
          // 防止 鼠标移出后，马上移入 popup 元素，导致 popup 重新显示 特别是有延迟显示时 是一个防抖标志
          leaveFlag.current = true;

          // 清除延迟显示定时器
          clearTimeout(visibleTimer.current);
          // 立即隐藏
          onVisibleChange(false, {
            e: e,
            trigger: 'trigger-element-hover'
          });
        }
      },
      onMouseDown: function onMouseDown() {
        //  清除鼠标按下定时器
        clearTimeout(mouseDownTimer.current);
        // 鼠标按下时，触发 useEffect 中的 document click 事件，点击trigger和popup元素 不需要隐藏
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(function () {
          // 事件处理完毕后，重置标志
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

  // 整理 trigger props
  function getTriggerProps(triggerNode) {
    if (!shouldToggle) return {};
    var triggerProps = {
      className: visible ? classNames(triggerNode.props.className, "t-popup-open") : triggerNode.props.className,
      onMouseDown: function onMouseDown(e) {
        var _triggerNode$props$on, _triggerNode$props;
        if (trigger === 'mousedown') {
          callFuncWithDelay({
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e,
                trigger: 'trigger-element-mousedown'
              });
            }
          });
        }
        (_triggerNode$props$on = (_triggerNode$props = triggerNode.props).onMouseDown) === null || _triggerNode$props$on === void 0 || _triggerNode$props$on.call(_triggerNode$props, e);
      },
      onClick: function onClick(e) {
        var _triggerNode$props$on2, _triggerNode$props2;
        if (trigger === 'click') {
          callFuncWithDelay({
            // appearDelay 和 exitDelay 分别表示点击时的延迟显示和隐藏
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e,
                trigger: 'trigger-element-click'
              });
            }
          });
        }
        (_triggerNode$props$on2 = (_triggerNode$props2 = triggerNode.props).onClick) === null || _triggerNode$props$on2 === void 0 || _triggerNode$props$on2.call(_triggerNode$props2, e);
      },
      onTouchStart: function onTouchStart(e) {
        var _triggerNode$props$on3, _triggerNode$props3;
        if (trigger === 'hover' || trigger === 'mousedown') {
          // leaveFlag 表示是从 trigger 元素 hover 过来的，避免频繁显示隐藏
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: 'trigger-element-hover'
              });
            }
          });
        }
        (_triggerNode$props$on3 = (_triggerNode$props3 = triggerNode.props).onTouchStart) === null || _triggerNode$props$on3 === void 0 || _triggerNode$props$on3.call(_triggerNode$props3, e);
      },
      onMouseEnter: function onMouseEnter(e) {
        var _triggerNode$props$on4, _triggerNode$props4;
        if (trigger === 'hover') {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: 'trigger-element-hover'
              });
            }
          });
        }
        (_triggerNode$props$on4 = (_triggerNode$props4 = triggerNode.props).onMouseEnter) === null || _triggerNode$props$on4 === void 0 || _triggerNode$props$on4.call(_triggerNode$props4, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        var _triggerNode$props$on5, _triggerNode$props5;
        if (trigger === 'hover') {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: exitDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e,
                trigger: 'trigger-element-hover'
              });
            }
          });
        }
        (_triggerNode$props$on5 = (_triggerNode$props5 = triggerNode.props).onMouseLeave) === null || _triggerNode$props$on5 === void 0 || _triggerNode$props$on5.call(_triggerNode$props5, e);
      },
      onFocus: function onFocus() {
        var _triggerNode$props$on6, _triggerNode$props6;
        if (trigger === 'focus') {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                trigger: 'trigger-element-focus'
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
        if (trigger === 'focus') {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                trigger: 'trigger-element-blur'
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
        if (trigger === 'context-menu') {
          e.preventDefault();
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e,
                trigger: 'context-menu'
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
                trigger: 'keydown-esc'
              });
            }
          });
        }
        (_triggerNode$props$on9 = (_triggerNode$props9 = triggerNode.props).onKeyDown) === null || _triggerNode$props$on9 === void 0 || _triggerNode$props$on9.call(_triggerNode$props9, e);
      }
    };
    // 如果支持 ref 透传，composeRefs 返回一个函数，当组件挂载时，执行函数，triggerRef 和 tiggerNode 指向触发元素的dom
    if (supportRef(triggerNode)) {
      triggerProps.ref = composeRefs(triggerRef, getNodeRef(triggerNode));
    } else {
      // 标记 trigger 元素
      triggerProps['data-popup'] = triggerDataKey.current;
    }
    return triggerProps;
  }

  // 整理 trigger 元素
  function getTriggerNode(children) {
    var triggerNode = /*#__PURE__*/isValidElement(children) && !isFragment$1(children) ? children : /*#__PURE__*/React.createElement('span', {
      children: children
    });
    return /*#__PURE__*/React.cloneElement(triggerNode, getTriggerProps(triggerNode));
  }

  // ref 透传失败时使用 dom 查找
  var getTriggerDom = useCallback(function () {
    if (typeof document === 'undefined') return {};
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
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _useState = useState({
      styles: {
        popper: {
          position: optionsWithDefaults.strategy,
          left: '0',
          top: '0'
        },
        arrow: {
          position: 'absolute'
        }
      },
      attributes: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var updateStateModifier = useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref3) {
        var state = _ref3.state;
        var elements = Object.keys(state.elements);
        flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(_toConsumableArray(optionsWithDefaults.modifiers), [updateStateModifier, {
        name: 'applyStyles',
        enabled: false,
        phase: 'write'
      }])
    };
    if (isEqual$1(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    }
    prevOptions.current = newOptions;
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
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : undefined,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

var popupDefaultProps = {
  destroyOnClose: false,
  hideEmptyPopup: false,
  placement: 'top',
  showArrow: false,
  trigger: 'hover'
};

var _excluded = ["placement"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Popup = /*#__PURE__*/forwardRef(function (originalProps, ref) {
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

  // 全局配置
  var _useWindowSize = useWindowSize(),
    windowHeight = _useWindowSize.height,
    windowWidth = _useWindowSize.width;
  var _useControlled = useControlled(props, 'visible', props.onVisibleChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    visible = _useControlled2[0],
    onVisibleChange = _useControlled2[1];
  // 记录 popup 元素
  // 如果内容为 null 或 undefined，且 hideEmptyPopup 为 true，则不展示 popup
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    popupElement = _useState2[0],
    setPopupElement = _useState2[1];
  var triggerRef = useRef(null); // 记录 trigger 元素
  var popupRef = useRef(null); // popup dom 元素，css transition 需要用
  var portalRef = useRef(null); // portal dom 元素
  var contentRef = useRef(null); // 内容部分
  var popperRef = useRef(null); // 保存 popper 实例

  // 默认动画时长
  var DEFAULT_TRANSITION_TIMEOUT = 180;

  // 处理切换 panel 为 null 和正常内容动态切换的情况
  useEffect(function () {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(function () {
        return setPopupElement(null);
      });
    }
  }, [content, hideEmptyPopup]);

  // 判断展示浮层
  var showOverlay = useMemo(function () {
    if (hideEmptyPopup && !content) return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);

  // 转化 placement
  var popperPlacement = useMemo(function () {
    return placement && placement.replace(/-(left|top)$/, '-start').replace(/-(right|bottom)$/, '-end');
  }, [placement]);
  // 获取 triggerNode
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
  // 传入popperjs 配置选项
  var popperOptions = props.popperOptions;
  var _ref = popperOptions || {},
    _ignored = _ref.placement,
    restPopperOptions = _objectWithoutProperties(_ref, _excluded);

  // popperRef 表示 popper 实例
  popperRef.current = usePopper(getRefDom$1(triggerRef), popupElement, _objectSpread({
    placement: popperPlacement
  }, restPopperOptions));

  // arrow modifier 用于显示箭头
  var hasArrowModifier = popperOptions === null || popperOptions === void 0 || (_popperOptions$modifi = popperOptions.modifiers) === null || _popperOptions$modifi === void 0 ? void 0 : _popperOptions$modifi.some(function (modifier) {
    return modifier.name === 'arrow';
  });
  var _popperRef$current = popperRef.current,
    styles = _popperRef$current.styles,
    attributes = _popperRef$current.attributes;
  // 获取 triggerNode
  // 如果 children 是函数，则调用函数获取 triggerNode
  // getTriggerNode 设置触发元素的事件
  var triggerNode = isFunction(children) ? getTriggerNode(children({
    visible: visible
  })) : getTriggerNode(children);
  var updateTimeRef = useRef(null);
  // 监听 trigger 节点或内容变化动态更新 popup 定位
  useMutationObservable(getRefDom$1(triggerRef), function () {
    var isDisplayNone = getCssVarsValue('display', getRefDom$1(triggerRef)) === 'none';
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(function () {
        var _popperRef$current2, _popperRef$current2$u;
        return (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 || (_popperRef$current2$u = _popperRef$current2.update) === null || _popperRef$current2$u === void 0 ? void 0 : _popperRef$current2$u.call(_popperRef$current2);
      }, 0);
    }
  });
  // 清理定时器
  useEffect(function () {
    return function () {
      return clearTimeout(updateTimeRef.current);
    };
  }, []);

  // 窗口尺寸变化时调整位置
  useEffect(function () {
    if (visible) {
      requestAnimationFrame(function () {
        var _popperRef$current3, _popperRef$current3$u;
        return (_popperRef$current3 = popperRef.current) === null || _popperRef$current3 === void 0 || (_popperRef$current3$u = _popperRef$current3.update) === null || _popperRef$current3$u === void 0 ? void 0 : _popperRef$current3$u.call(_popperRef$current3);
      });
    }
  }, [visible, content, windowHeight, windowWidth]);

  // 下拉展开时更新内部滚动条
  useEffect(function () {
    if (!triggerRef.current) triggerRef.current = getTriggerDom();
    if (visible) {
      updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(contentRef.current);
    }
  }, [visible, updateScrollTop, getTriggerDom]);
  function handleExited() {
    !destroyOnClose && popupElement && (popupElement.style.display = 'none');
  }
  function handleEnter() {
    !destroyOnClose && popupElement && (popupElement.style.display = 'block');
  }
  function handleScroll(e) {
    onScroll === null || onScroll === void 0 || onScroll({
      e: e
    });

    // 防止多次触发添加截流
    var debounceOnScrollBottom = debounce(function (e) {
      return onScrollToBottom === null || onScrollToBottom === void 0 ? void 0 : onScrollToBottom({
        e: e
      });
    }, 100);
    var _ref2 = e.target,
      scrollTop = _ref2.scrollTop,
      clientHeight = _ref2.clientHeight,
      scrollHeight = _ref2.scrollHeight;
    // windows 下滚动会出现小数，所以这里取整
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      // touch bottom
      debounceOnScrollBottom(e);
    }
  }

  // 整理浮层样式
  function getOverlayStyle(overlayStyle) {
    if (getRefDom$1(triggerRef) && popupRef.current && typeof overlayStyle === 'function') {
      return _objectSpread({}, overlayStyle(getRefDom$1(triggerRef), popupRef.current));
    }
    return _objectSpread({}, overlayStyle);
  }
  var overlay = showOverlay && /*#__PURE__*/React.createElement(CSSTransition, {
    appear: true,
    "in": visible,
    timeout: DEFAULT_TRANSITION_TIMEOUT,
    nodeRef: portalRef,
    unmountOnExit: destroyOnClose,
    onEnter: handleEnter,
    onExited: handleExited,
    classNames: "".concat(classPrefix, "-portal")
  }, /*#__PURE__*/React.createElement(Portal, {
    triggerNode: getRefDom$1(triggerRef),
    attach: "body",
    ref: portalRef
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    appear: true,
    timeout: 0,
    "in": visible,
    nodeRef: popupRef,
    classNames: "".concat(classPrefix, "-popup")
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: function ref(node) {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    style: _objectSpread(_objectSpread({}, styles.popper), {}, {
      zIndex: zIndex
    }, getOverlayStyle(overlayStyle)),
    className: classNames("".concat(classPrefix, "-popup"), overlayClassName, '')
  }, attributes.popper, getPopupProps()), /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: classNames("".concat(classPrefix, "-popup__content"), _defineProperty({}, "".concat(classPrefix, "-popup__content--arrow"), showArrow), overlayInnerClassName),
    style: getOverlayStyle(overlayInnerStyle),
    onScroll: handleScroll
  }, content, showArrow && /*#__PURE__*/React.createElement("div", _extends({
    style: styles.arrow,
    className: "".concat(classPrefix, "-popup__arrow")
  }, hasArrowModifier && {
    'data-popper-arrow': ''
  })))))));
  // 使用 useImperativeHandle 暴露给父组件
  // 这样父组件可以通过 ref 获取 popper 实例、popup 元素
  // portal 元素和内容区域元素
  // 以及设置 popup 的显示隐藏状态
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
      setVisible: function setVisible(visible) {
        return onVisibleChange(visible, {
          trigger: 'document'
        });
      }
    };
  });
  // 这里使用 React.Fragment 包裹 triggerNode 和 overlay，确保返回一个单一的父节点
  // 这样可以避免在渲染时出现多个根节点的错误
  return /*#__PURE__*/React.createElement(React.Fragment, null, triggerNode, overlay);
});
Popup.displayName = 'Popup';

export { Popup as default };
//# sourceMappingURL=Popup.js.map
