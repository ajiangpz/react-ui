import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DcgYxvIK.js';
import React, { useMemo, useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { C as CSSTransition } from '../_chunks/dep-DTNqJ2we.js';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import { i as isUndefined } from '../_chunks/dep-uPo9oRq0.js';
import Portal from '../common/Portal.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import { d as dialogDefaultProps, D as DialogCard } from '../_chunks/dep-CDPvR3ml.js';
import { _ as _typeof } from '../_chunks/dep-D-UKOauR.js';
import { _ as _toConsumableArray } from '../_chunks/dep-CgyDw_YI.js';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-0EpSXuwN.js';
import '../_chunks/dep-0Agal8xo.js';
import '../_chunks/dep-DFvx9dpR.js';
import 'react-dom';
import '../config-provider/ConfigContext.js';
import '../_chunks/dep-LgDsOUkE.js';
import '../button/index.js';
import '../button/Button.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../loading/Gradient.js';
import '../_chunks/dep-CCwJVofP.js';
import '../_chunks/dep-BlRTpQ02.js';
import '../_chunks/dep-D9QqIBS0.js';
import '../loading/style/css.js';
import '../_chunks/dep-CVM4W9uS.js';
import '../button/style/css.js';
import '../_chunks/dep-BIZNqCbw.js';

var defaultAttach = 'body';
/**
 * useAttach
 *
 * 挂载节点 优先级:
 *
 * props attach -> globalConfig.attach.component -> globalConfig.attach -> default = 'body'
 */
var useAttach = function useAttach(name, attach) {
  var globalConfig = useConfig();
  var attachVal = useMemo(function () {
    var _globalConfig$attach;
    return attach || (globalConfig === null || globalConfig === void 0 || (_globalConfig$attach = globalConfig.attach) === null || _globalConfig$attach === void 0 ? void 0 : _globalConfig$attach[name]) || (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.attach) || defaultAttach;
  }, [name, attach, globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.attach]);
  return attachVal;
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var isFunction = function isFunction(arg) {
  return typeof arg === 'function';
};

/**
 * 管理 object 类型 state 的 Hooks，用法与 class 组件的 this.setState 基本一致。
 * @param initialState
 * @returns [state, setMergeState]
 */
var useSetState = function useSetState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var setMergeState = useCallback(function (patch) {
    setState(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), isFunction(patch) ? patch(prevState) : patch);
    });
  }, []);
  return [state, setMergeState];
};

/**
 * 鼠标相对当前元素的坐标
 */

var useMouseEvent = function useMouseEvent(elementRef, options) {
  var _options$enabled = options.enabled,
    enabled = _options$enabled === void 0 ? true : _options$enabled,
    _options$enableTouch = options.enableTouch,
    enableTouch = _options$enableTouch === void 0 ? true : _options$enableTouch;
  var isMovingRef = useRef(false);
  var normalizeEvent = function normalizeEvent(e) {
    if (!enableTouch) {
      return e;
    }
    if ('touches' in e && e.touches.length > 0) {
      return e.touches[0];
    }
    if ('changedTouches' in e && e.changedTouches.length > 0) {
      return e.changedTouches[0];
    }
    if ('clientX' in e && 'clientY' in e) {
      return e;
    }
    return undefined;
  };
  var getCoordinate = function getCoordinate(event) {
    var _elementRef$current;
    var rect = elementRef === null || elementRef === void 0 || (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.getBoundingClientRect();
    if (!rect) {
      return {
        x: 0,
        y: 0
      };
    }
    var clientX = event.clientX,
      clientY = event.clientY;
    var left = clientX - rect.left;
    var top = clientY - rect.top;
    return {
      x: Math.min(Math.max(0, left), rect.width),
      y: Math.min(Math.max(0, top), rect.height)
    };
  };
  var emitMouseChange = function emitMouseChange(e, handler) {
    if (!handler) return;
    var event = normalizeEvent(e);
    if (event !== undefined) {
      var coordinate = getCoordinate(event);
      handler(event, {
        coordinate: coordinate
      });
    }
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isMovingRef.current) return;
    e.preventDefault();
    emitMouseChange(e, options.onMove);
  };
  var _handleMouseUp = function handleMouseUp(e) {
    if (!isMovingRef.current) return;
    isMovingRef.current = false;
    emitMouseChange(e, options.onUp);
    document.removeEventListener('mouseup', _handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('touchend', _handleMouseUp);
    document.removeEventListener('touchmove', handleMouseMove);
  };
  var handleMouseDown = function handleMouseDown(e) {
    isMovingRef.current = true;
    emitMouseChange(e, options.onDown);
    document.addEventListener('mouseup', _handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    if (!enableTouch) return;
    document.addEventListener('touchend', _handleMouseUp);
    document.addEventListener('touchmove', handleMouseMove, {
      passive: false
    });
  };
  var handleMouseEnter = function handleMouseEnter(e) {
    emitMouseChange(e, options.onEnter);
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    emitMouseChange(e, options.onLeave);
  };
  useEffect(function () {
    var el = elementRef.current;
    if (!el || !enabled) return;

    // 基本上只要开启了鼠标事件，就会用到这三个
    // 有的组件虽然只需要 mousemove 的回调结果，但也需要 mousedown 和 mouseup 来控制状态
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseup', _handleMouseUp);
    // 下面这两个一般是为了处理 hover 状态，可选性监听
    options.onEnter && el.addEventListener('mouseenter', handleMouseEnter);
    options.onLeave && el.addEventListener('mouseleave', handleMouseLeave);
    if (!enableTouch) return;
    el.addEventListener('touchstart', handleMouseDown, {
      passive: false
    });
    el.addEventListener('touchend', _handleMouseUp);
    return function () {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseenter', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseup', _handleMouseUp);
      el.removeEventListener('touchstart', handleMouseDown);
      el.removeEventListener('touchend', _handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current, options, enabled]);
  return {
    isMoving: isMovingRef.current
  };
};

var useDialogDrag = function useDialogDrag(props) {
  var dialogCardRef = props.dialogCardRef,
    canDraggable = props.canDraggable;
  var validWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var screenHeight = validWindow ? window.innerHeight || document.documentElement.clientHeight : undefined;
  var screenWidth = validWindow ? window.innerWidth || document.documentElement.clientWidth : undefined;
  var dragOffset = useRef({
    x: 0,
    y: 0
  });
  useMouseEvent(dialogCardRef, {
    enabled: canDraggable,
    onDown: function onDown(e) {
      if (!validWindow || screenWidth === undefined || screenHeight === undefined || !dialogCardRef.current) return;
      var _dialogCardRef$curren = dialogCardRef.current,
        offsetLeft = _dialogCardRef$curren.offsetLeft,
        offsetTop = _dialogCardRef$curren.offsetTop,
        offsetWidth = _dialogCardRef$curren.offsetWidth,
        offsetHeight = _dialogCardRef$curren.offsetHeight,
        style = _dialogCardRef$curren.style;
      if (offsetWidth > screenWidth || offsetHeight > screenHeight) return;
      style.cursor = 'move';
      dragOffset.current = {
        x: e.clientX - offsetLeft,
        y: e.clientY - offsetTop
      };
    },
    onMove: function onMove(e) {
      if (!validWindow || screenWidth === undefined || screenHeight === undefined || !dialogCardRef.current) return;
      var _dialogCardRef$curren2 = dialogCardRef.current,
        offsetWidth = _dialogCardRef$curren2.offsetWidth,
        offsetHeight = _dialogCardRef$curren2.offsetHeight,
        style = _dialogCardRef$curren2.style;
      var diffX = e.clientX - dragOffset.current.x;
      var diffY = e.clientY - dragOffset.current.y;
      // 拖拽上左边界限制
      if (diffX < 0) diffX = 0;
      if (diffY < 0) diffY = 0;
      if (screenWidth - offsetWidth - diffX < 0) diffX = screenWidth - offsetWidth;
      if (screenHeight - offsetHeight - diffY < 0) diffY = screenHeight - offsetHeight;
      style.position = 'absolute';
      style.left = "".concat(diffX, "px");
      style.top = "".concat(diffY, "px");
    },
    onUp: function onUp() {
      if (dialogCardRef.current) dialogCardRef.current.style.cursor = 'default';
    }
  });
};

var dialogSet = new Set();
var useDialogEsc = function useDialogEsc(visible, dialog) {
  useEffect(function () {
    if (visible) {
      // 将 dialog 添加至 Set 对象
      if (dialog !== null && dialog !== void 0 && dialog.current) {
        var _dialog$current;
        dialogSet.add(dialog);
        dialog === null || dialog === void 0 || (_dialog$current = dialog.current) === null || _dialog$current === void 0 || _dialog$current.focus();
      }
    } else if (dialogSet.has(dialog)) {
      var _dialogList;
      // 将 dialog 从 Set 对象删除
      dialogSet["delete"](dialog);
      var dialogList = _toConsumableArray(dialogSet);
      // 将 Set 对象中最后一个 dialog 设置为 focus
      (_dialogList = dialogList[dialogList.length - 1]) === null || _dialogList === void 0 || (_dialogList = _dialogList.current) === null || _dialogList === void 0 || _dialogList.focus();
    }
    return function () {
      // 从 Set 对象删除无效的 dialog
      dialogSet.forEach(function (item) {
        if ((item === null || item === void 0 ? void 0 : item.current) === null) {
          dialogSet["delete"](item);
        }
      });
    };
  }, [visible, dialog]);
};

function useDialogPosition(visible, dialogCardRef) {
  var mousePosRef = useRef(null);
  var getClickPosition = function getClickPosition(e) {
    if (mousePosRef) {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      setTimeout(function () {
        mousePosRef.current = null;
      }, 100);
    }
  };
  useIsomorphicLayoutEffect(function () {
    document.addEventListener('click', getClickPosition, true);
    return function () {
      document.removeEventListener('click', getClickPosition, true);
    };
  }, []);
  useEffect(function () {
    if (!visible) return;
    // 动画渲染初始位置
    if (mousePosRef.current && dialogCardRef.current) {
      // eslint-disable-next-line
      dialogCardRef.current.style.transformOrigin = "".concat(mousePosRef.current.x - dialogCardRef.current.offsetLeft, "px ").concat(mousePosRef.current.y - dialogCardRef.current.offsetTop, "px");
    }
  }, [visible, dialogCardRef]);
}

/**
 * @description: Calculate scroll bar width
 * @param container  Container used to calculate scrollbar width
 * @default container: document.body
 */
function getScrollbarWidth() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  if (container === document.body) {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return container.offsetWidth - container.clientWidth;
}

var key = 1;
function useDialogLockStyle(_ref) {
  var preventScrollThrough = _ref.preventScrollThrough,
    visible = _ref.visible,
    mode = _ref.mode,
    showInAttachedElement = _ref.showInAttachedElement;
  var lockStyleRef = useRef(null);
  var timerRef = useRef(null);
  var clearStyleFunc = useCallback(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(function () {
      var _lockStyleRef$current, _lockStyleRef$current2;
      (_lockStyleRef$current = lockStyleRef.current) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current = _lockStyleRef$current.parentNode) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current2 = _lockStyleRef$current.removeChild) === null || _lockStyleRef$current2 === void 0 || _lockStyleRef$current2.call(_lockStyleRef$current, lockStyleRef.current);
    }, 150);
  }, []);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === 'undefined' || !visible) return;
    if (!lockStyleRef.current) {
      lockStyleRef.current = document.createElement('style');
    }
    var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    var scrollbarWidth = hasScrollBar ? getScrollbarWidth() : 0;
    lockStyleRef.current.dataset.id = "td_dialog_".concat(+new Date(), "_").concat(key += 1);
    lockStyleRef.current.innerHTML = "\n      html body {\n        overflow-y: hidden;\n        width: calc(100% - ".concat(scrollbarWidth, "px);\n      }\n    ");
    return clearStyleFunc;
  }, [visible, clearStyleFunc]);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === 'undefined') return;
    if (mode !== 'modal' || !preventScrollThrough || showInAttachedElement) return;
    if (visible) {
      if (lockStyleRef.current) document.head.appendChild(lockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [preventScrollThrough, visible, mode, showInAttachedElement, clearStyleFunc]);
}

function parseValueToPx(value) {
  if (typeof value === 'number') return "".concat(value, "px");
  return value;
}

var _excluded = ["children"],
  _excluded2 = ["className", "dialogClassName", "style", "width", "mode", "zIndex", "visible", "attach", "onBeforeOpen", "onBeforeClose", "onOpened", "onCancel", "onConfirm", "onClose", "onClosed", "isPlugin", "draggable", "onOverlayClick", "onEscKeydown", "closeOnEscKeydown", "confirmOnEnter", "showOverlay", "showInAttachedElement", "closeOnOverlayClick", "destroyOnClose", "preventScrollThrough", "onCloseBtnClick", "forceRender", "lazy"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Dialog = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, dialogDefaultProps);
  var children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var wrapRef = useRef(null);
  var maskRef = useRef(null);
  var contentClickRef = useRef(false);
  var dialogCardRef = useRef(null);
  var dialogPosition = useRef(null);
  var portalRef = useRef(null);
  var _useSetState = useSetState(_objectSpread({
      isPlugin: false
    }, restProps)),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  // const [local] = useLocaleReceiver('dialog');

  var className = state.className,
    dialogClassName = state.dialogClassName,
    style = state.style,
    width = state.width,
    mode = state.mode,
    zIndex = state.zIndex,
    visible = state.visible,
    attach = state.attach,
    onBeforeOpen = state.onBeforeOpen,
    onBeforeClose = state.onBeforeClose,
    onOpened = state.onOpened,
    onCancel = state.onCancel,
    onConfirm = state.onConfirm,
    onClose = state.onClose,
    onClosed = state.onClosed,
    isPlugin = state.isPlugin,
    draggable = state.draggable,
    onOverlayClick = state.onOverlayClick,
    onEscKeydown = state.onEscKeydown,
    closeOnEscKeydown = state.closeOnEscKeydown,
    confirmOnEnter = state.confirmOnEnter,
    showOverlay = state.showOverlay,
    showInAttachedElement = state.showInAttachedElement,
    closeOnOverlayClick = state.closeOnOverlayClick,
    destroyOnClose = state.destroyOnClose,
    preventScrollThrough = state.preventScrollThrough,
    onCloseBtnClick = state.onCloseBtnClick,
    forceRender = state.forceRender,
    lazy = state.lazy,
    restState = _objectWithoutProperties(state, _excluded2);
  var dialogAttach = useAttach('dialog', attach);
  useDialogLockStyle({
    preventScrollThrough: preventScrollThrough,
    visible: visible,
    mode: mode,
    showInAttachedElement: showInAttachedElement
  });
  useDialogEsc(visible, wrapRef);
  useDialogPosition(visible, dialogCardRef);
  useDialogDrag({
    dialogCardRef: dialogCardRef,
    canDraggable: draggable && mode === 'modeless'
  });
  useEffect(function () {
    if (isPlugin) {
      return;
    }
    // 插件式调用不会更新props, 只有组件式调用才会更新props
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), props);
    });
  }, [props, setState, isPlugin]);
  useImperativeHandle(ref, function () {
    return {
      show: function show() {
        setState({
          visible: true
        });
      },
      hide: function hide() {
        setState({
          visible: false
        });
      },
      setConfirmLoading: function setConfirmLoading(loading) {
        setState({
          confirmLoading: loading
        });
      },
      destroy: function destroy() {
        setState({
          visible: false,
          destroyOnClose: true
        });
      },
      update: function update(newOptions) {
        setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), newOptions);
        });
      }
    };
  });

  // @ts-ignore 兼容旧版本 2.0 移除
  if (props.mode === 'normal') {
    console.error('Dialog', 'mode="normal" is not supported, please use DialogCard.');
    return /*#__PURE__*/React.createElement(DialogCard, props);
  }
  var onMaskClick = function onMaskClick(e) {
    if (showOverlay && closeOnOverlayClick) {
      // 判断点击事件初次点击是否为内容区域
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (e.target === dialogPosition.current) {
        onOverlayClick === null || onOverlayClick === void 0 || onOverlayClick({
          e: e
        });
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: 'overlay'
        });
      }
    }
  };
  var handleCancel = function handleCancel(_ref) {
    var e = _ref.e;
    onCancel === null || onCancel === void 0 || onCancel({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: 'cancel'
    });
  };
  var handleClose = function handleClose(_ref2) {
    var e = _ref2.e;
    onCloseBtnClick === null || onCloseBtnClick === void 0 || onCloseBtnClick({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: 'close-btn'
    });
  };
  var handleKeyDown = function handleKeyDown(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if (e.key === 'Escape') {
      e.stopPropagation();
      onEscKeydown === null || onEscKeydown === void 0 || onEscKeydown({
        e: e
      });
      if (closeOnEscKeydown) {
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: 'esc'
        });
      }
    } else if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      // 回车键触发点击确认事件
      e.stopPropagation();
      confirmOnEnter && (onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
        e: e
      }));
    }
  };
  var onAnimateLeave = function onAnimateLeave() {
    onClosed === null || onClosed === void 0 || onClosed();
    if (!wrapRef.current) return;
    wrapRef.current.style.display = 'none';
  };
  var onAnimateStart = function onAnimateStart() {
    if (!wrapRef.current) return;
    onBeforeOpen === null || onBeforeOpen === void 0 || onBeforeOpen();
    wrapRef.current.style.display = 'block';
  };
  var onInnerAnimateStart = function onInnerAnimateStart() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = 'block';
  };
  var onInnerAnimateLeave = function onInnerAnimateLeave() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = 'none';
  };
  var renderMask = function renderMask() {
    if (mode !== 'modal') return null;
    return showOverlay ? /*#__PURE__*/React.createElement(CSSTransition, {
      "in": visible,
      appear: true,
      timeout: 300,
      classNames: "".concat(componentCls, "-fade"),
      mountOnEnter: true,
      unmountOnExit: true,
      nodeRef: maskRef
    }, /*#__PURE__*/React.createElement("div", {
      ref: maskRef,
      className: "".concat(componentCls, "__mask")
    })) : null;
  };
  return /*#__PURE__*/React.createElement(CSSTransition, {
    "in": visible,
    appear: true,
    timeout: 300,
    mountOnEnter: isUndefined(forceRender) ? lazy : !forceRender,
    unmountOnExit: destroyOnClose,
    nodeRef: portalRef,
    onEnter: onAnimateStart,
    onEntered: onOpened,
    onExit: function onExit() {
      return onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose();
    },
    onExited: onAnimateLeave
  }, /*#__PURE__*/React.createElement(Portal, {
    attach: dialogAttach,
    ref: portalRef
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    className: classNames(className, "".concat(componentCls, "__ctx"), "".concat(componentCls, "__").concat(mode), _defineProperty(_defineProperty({}, "".concat(componentCls, "__ctx--fixed"), !showInAttachedElement), "".concat(componentCls, "__ctx--absolute"), showInAttachedElement)),
    style: {
      zIndex: zIndex,
      display: 'none'
    },
    onKeyDown: handleKeyDown,
    tabIndex: 0
  }, renderMask(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(componentCls, "__wrap")
  }, /*#__PURE__*/React.createElement("div", {
    ref: dialogPosition,
    className: classNames("".concat(componentCls, "__position"), _defineProperty(_defineProperty({}, "".concat(componentCls, "--top"), !!props.top || props.placement === 'top'), "".concat(componentCls, "--center"), props.placement === 'center' && !props.top)),
    style: {
      paddingTop: parseValueToPx(props.top)
    },
    onClick: onMaskClick
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    "in": visible,
    appear: true,
    timeout: 300,
    classNames: "".concat(componentCls, "-zoom"),
    nodeRef: dialogCardRef,
    onEnter: onInnerAnimateStart,
    onExited: onInnerAnimateLeave
  }, /*#__PURE__*/React.createElement(DialogCard, _extends({
    ref: dialogCardRef
  }, restState, {
    className: dialogClassName,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: parseValueToPx(width || (style === null || style === void 0 ? void 0 : style.width))
    }),
    onConfirm: onConfirm,
    onCancel: handleCancel,
    onCloseBtnClick: handleClose
  }), children)))))));
});
Dialog.displayName = 'Dialog';

export { Dialog as default };
//# sourceMappingURL=Dialog.js.map
