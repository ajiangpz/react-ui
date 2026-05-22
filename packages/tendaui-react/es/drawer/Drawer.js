import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useRef, useEffect, useState, useCallback, useMemo, useLayoutEffect, forwardRef, isValidElement, useImperativeHandle } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconClose } from '@tendaui/icons';
import classNames from 'classnames';
import { isEqualWith, isString, isObject, isFunction, isUndefined } from 'lodash-es';
import { p as parseTNode } from '../_chunks/dep-aX8qrQpB.js';
import { Button } from '../button/index.js';
import Portal from '../common/Portal.js';
import { u as useSetState, a as useAttach } from '../_chunks/dep-TZtijX-L.js';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { u as useDefaultProps } from '../_chunks/dep-DGvfel3I.js';
import { u as useGlobalIcon } from '../_chunks/dep-sSDUpJwy.js';
import { getSizeDraggable, calcMoveSize } from './utils/index.js';
import { u as useLocaleReceiver } from '../_chunks/dep-BGP3l2nd.js';
import '../_chunks/dep-D-UKOauR.js';
import '../button/Button.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../_chunks/dep-DRwijJcv.js';
import '../loading/Gradient.js';
import '../_chunks/dep-DHWwZ2Nj.js';
import '../_chunks/dep-PPA-yoAy.js';
import '../_chunks/dep-DbVHGoUC.js';
import '../loading/style/css.js';
import '../_chunks/dep-D6YxJv-F.js';
import '../button/style/css.js';
import 'react-dom';
import '../_chunks/dep-BRbJGDI9.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import '../config-provider/index.js';
import '../config-provider/ConfigProvider.js';

function useDeepEffect(effect, deps) {
  var isInitial = useRef(true);
  var prevDeps = useRef(deps);
  useEffect(function () {
    var isSame = isEqualWith(prevDeps.current, deps, function (value1, value2) {
      if (typeof value1 === "function" && typeof value2 === "function") {
        return value1.toString() === value2.toString();
      }
      return void 0;
    });
    if (isInitial.current || !isSame) {
      effect();
    }
    isInitial.current = false;
    prevDeps.current = deps;
  }, [effect, deps]);
}

var drawerDefaultProps = {
  closeOnEscKeydown: void 0,
  closeOnOverlayClick: void 0,
  closeBtn: true,
  destroyOnClose: false,
  footer: true,
  header: true,
  lazy: true,
  mode: "overlay",
  placement: "right",
  preventScrollThrough: true,
  showInAttachedElement: false,
  showOverlay: true,
  size: "medium",
  sizeDraggable: false,
  visible: false
};

var useDrag = function useDrag(placement, sizeDraggable, onSizeDragEnd) {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    dragSizeValue = _useState2[0],
    changeDragSizeValue = _useState2[1];
  var dragSizeRef = useRef(0);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSizeDragging = _useState4[0],
    toggleSizeDragging = _useState4[1];
  var handleMousemove = useCallback(function (e) {
    if (sizeDraggable === false) return;
    var x = e.x,
      y = e.y;
    var maxHeight = document.documentElement.clientHeight;
    var maxWidth = document.documentElement.clientWidth;
    var offsetHeight = 8;
    var offsetWidth = 8;
    var max = placement === "left" || placement === "right" ? maxWidth : maxHeight;
    var min = placement === "left" || placement === "right" ? offsetWidth : offsetHeight;
    var _getSizeDraggable = getSizeDraggable(sizeDraggable, {
        max: max,
        min: min
      }),
      limitMax = _getSizeDraggable.max,
      limitMin = _getSizeDraggable.min;
    var moveSize = calcMoveSize(placement, {
      x: x,
      y: y,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      max: limitMax,
      min: limitMin
    });
    if (typeof moveSize === "undefined") return;
    changeDragSizeValue("".concat(moveSize, "px"));
    dragSizeRef.current = moveSize;
  }, [placement, sizeDraggable]);
  var draggableLineStyles = useMemo(function () {
    var isHorizontal = ["right", "left"].includes(placement);
    var oppositeMap = {
      left: "right",
      right: "left",
      top: "bottom",
      bottom: "top"
    };
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      zIndex: 1,
      position: "absolute",
      background: "transparent"
    }, oppositeMap[placement], 0), "width", isHorizontal ? "16px" : "100%"), "height", isHorizontal ? "100%" : "16px"), "cursor", isHorizontal ? "col-resize" : "row-resize");
  }, [placement]);
  var handleMouseup = useCallback(function (e) {
    document.removeEventListener("mouseup", handleMouseup, true);
    document.removeEventListener("mousemove", handleMousemove, true);
    onSizeDragEnd === null || onSizeDragEnd === void 0 || onSizeDragEnd({
      e: e,
      // 此处不要使用 dragSizeValue，useState 的更新是异步的，在鼠标拖拽的同步操作中取不到最新的值
      size: dragSizeRef.current
    });
    toggleSizeDragging(false);
  }, [handleMousemove, onSizeDragEnd]);
  var enableDrag = useCallback(function () {
    document.addEventListener("mouseup", handleMouseup, true);
    document.addEventListener("mousemove", handleMousemove, true);
    toggleSizeDragging(true);
  }, [handleMousemove, handleMouseup]);
  var draggingStyles = isSizeDragging ? {
    userSelect: "none"
  } : {};
  return {
    dragSizeValue: dragSizeValue,
    enableDrag: enableDrag,
    draggableLineStyles: draggableLineStyles,
    draggingStyles: draggingStyles
  };
};

var key = 1;
var useLockStyle = function useLockStyle(props) {
  var visible = props.visible;
  var drawerLockStyleRef = useRef(null);
  var timerRef = useRef(null);
  var clearStyleFunc = useCallback(function () {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function () {
      var _styleElement$parentN, _styleElement$parentN2;
      var styleElement = drawerLockStyleRef.current;
      styleElement === null || styleElement === void 0 || (_styleElement$parentN = styleElement.parentNode) === null || _styleElement$parentN === void 0 || (_styleElement$parentN2 = _styleElement$parentN.removeChild) === null || _styleElement$parentN2 === void 0 || _styleElement$parentN2.call(_styleElement$parentN, styleElement);
    }, 150);
  }, []);
  useLayoutEffect(function () {
    if (typeof document === "undefined" || !visible) return;
    if (!drawerLockStyleRef.current) {
      drawerLockStyleRef.current = document.createElement("style");
    }
    drawerLockStyleRef.current.dataset.id = "td_drawer_".concat(+ /* @__PURE__ */new Date(), "_").concat(key++);
    drawerLockStyleRef.current.innerHTML = "\n      html body {\n        overflow-y: hidden;\n      }\n    ";
  }, [visible]);
  useLayoutEffect(function () {
    if (typeof document === "undefined") return;
    if (visible) {
      if (drawerLockStyleRef.current) document.head.appendChild(drawerLockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [visible, clearStyleFunc]);
};

var _excluded = ["body", "children", "header", "footer"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CloseTriggerType = {
  CLICK_OVERLAY: "overlay",
  CLICK_CLOSE_BTN: "close-btn",
  CLICK_CANCEL_BTN: "cancel",
  KEYDOWN_ESC: "esc"
};
var Drawer = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var _useLocaleReceiver = useLocaleReceiver("drawer"),
    _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2),
    local = _useLocaleReceiver2[0],
    t = _useLocaleReceiver2[1];
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: IconClose
    }),
    CloseIcon = _useGlobalIcon.CloseIcon;
  var confirmText = t(local.confirm);
  var cancelText = t(local.cancel);
  var props = useDefaultProps(originalProps, drawerDefaultProps);
  var body = props.body,
    children = props.children,
    header = props.header,
    footer = props.footer,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useSetState = useSetState(_objectSpread({
      isPlugin: false
    }, restProps)),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var className = state.className,
    style = state.style,
    visible = state.visible,
    attach = state.attach,
    showOverlay = state.showOverlay,
    propsSize = state.size,
    placement = state.placement,
    onBeforeOpen = state.onBeforeOpen,
    onBeforeClose = state.onBeforeClose,
    onCancel = state.onCancel,
    onConfirm = state.onConfirm,
    onClose = state.onClose,
    onCloseBtnClick = state.onCloseBtnClick,
    onOverlayClick = state.onOverlayClick,
    onEscKeydown = state.onEscKeydown,
    onSizeDragEnd = state.onSizeDragEnd,
    showInAttachedElement = state.showInAttachedElement,
    closeOnOverlayClick = state.closeOnOverlayClick,
    closeOnEscKeydown = state.closeOnEscKeydown,
    closeBtn = state.closeBtn,
    _state$cancelBtn = state.cancelBtn,
    cancelBtn = _state$cancelBtn === void 0 ? cancelText : _state$cancelBtn,
    _state$confirmBtn = state.confirmBtn,
    confirmBtn = _state$confirmBtn === void 0 ? confirmText : _state$confirmBtn,
    zIndex = state.zIndex,
    destroyOnClose = state.destroyOnClose,
    sizeDraggable = state.sizeDraggable,
    forceRender = state.forceRender,
    isPlugin = state.isPlugin,
    lazy = state.lazy;
  var size = propsSize;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    direction = _useConfig.direction;
  var drawerAttach = useAttach("drawer", attach);
  var maskRef = useRef(null);
  var containerRef = useRef(null);
  var drawerWrapperRef = useRef(null);
  var prefixCls = "".concat(classPrefix, "-drawer");
  var closeIcon = /*#__PURE__*/isValidElement(closeBtn) ? closeBtn : /* @__PURE__ */React.createElement(CloseIcon, null);
  var isRtl = direction === "rtl";
  var actualPlacement = useMemo(function () {
    if (!isRtl) return placement;
    if (placement === "left") return "right";
    if (placement === "right") return "left";
    return placement;
  }, [isRtl, placement]);
  var _useDrag = useDrag(actualPlacement, sizeDraggable, onSizeDragEnd),
    dragSizeValue = _useDrag.dragSizeValue,
    enableDrag = _useDrag.enableDrag,
    draggableLineStyles = _useDrag.draggableLineStyles,
    draggingStyles = _useDrag.draggingStyles;
  var _useState = useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    animationStart = _useState2[0],
    setAnimationStart = _useState2[1];
  var sizeValue = useMemo(function () {
    var sizeMap = {
      small: "300px",
      medium: "500px",
      large: "760px"
    };
    return dragSizeValue || sizeMap[size] || size;
  }, [dragSizeValue, size]);
  useLockStyle(_objectSpread(_objectSpread({}, state), {}, {
    sizeValue: sizeValue,
    drawerWrapper: drawerWrapperRef.current
  }));
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
      destroy: function destroy() {
        setState({
          visible: false,
          destroyOnClose: true
        });
      },
      update: function update(options) {
        setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), options);
        });
      }
    };
  });
  useEffect(function () {
    if (visible) {
      var _containerRef$current, _containerRef$current2;
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || (_containerRef$current2 = _containerRef$current.focus) === null || _containerRef$current2 === void 0 || _containerRef$current2.call(_containerRef$current);
    }
  }, [visible]);
  useDeepEffect(function () {
    if (isPlugin) return;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), props);
    });
  }, [props, setState]);
  function onMaskClick(e) {
    onOverlayClick === null || onOverlayClick === void 0 || onOverlayClick({
      e: e
    });
    closeOnOverlayClick && (onClose === null || onClose === void 0 ? void 0 : onClose({
      e: e,
      trigger: CloseTriggerType.CLICK_OVERLAY
    }));
  }
  function onClickCloseBtn(e) {
    onCloseBtnClick === null || onCloseBtnClick === void 0 || onCloseBtnClick({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: CloseTriggerType.CLICK_CLOSE_BTN
    });
  }
  function onKeyDownEsc(e) {
    if (e.key !== "Escape") return;
    onEscKeydown === null || onEscKeydown === void 0 || onEscKeydown({
      e: e
    });
    closeOnEscKeydown && (onClose === null || onClose === void 0 ? void 0 : onClose({
      e: e,
      trigger: CloseTriggerType.KEYDOWN_ESC
    }));
  }
  function onCancelClick(e) {
    onCancel === null || onCancel === void 0 || onCancel({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: CloseTriggerType.CLICK_CANCEL_BTN
    });
  }
  function onConfirmClick(e) {
    onConfirm === null || onConfirm === void 0 || onConfirm({
      e: e
    });
  }
  var contentWrapperStyle = useMemo(function () {
    return {
      transform: visible && animationStart ? "translateX(0)" : void 0,
      width: ["left", "right"].includes(actualPlacement) ? sizeValue : "",
      height: ["top", "bottom"].includes(actualPlacement) ? sizeValue : ""
    };
  }, [visible, actualPlacement, sizeValue, animationStart]);
  var renderDrawerButton = function renderDrawerButton(btn, defaultProps) {
    var result = null;
    if (isString(btn)) {
      result = /* @__PURE__ */React.createElement(Button, _objectSpread({}, defaultProps), btn);
    } else if (/*#__PURE__*/isValidElement(btn)) {
      result = btn;
    } else if (isObject(btn)) {
      result = /* @__PURE__ */React.createElement(Button, _objectSpread(_objectSpread({}, defaultProps), btn));
    } else if (isFunction(btn)) {
      result = btn();
    }
    return result;
  };
  var renderFooter = function renderFooter() {
    var defaultFooter = function defaultFooter() {
      var renderCancelBtn = renderDrawerButton(cancelBtn, {
        theme: "default",
        onClick: function onClick(e) {
          return onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick(e);
        },
        className: "".concat(prefixCls, "__cancel")
      });
      var renderConfirmBtn = renderDrawerButton(confirmBtn, {
        theme: "primary",
        onClick: function onClick(e) {
          return onConfirmClick === null || onConfirmClick === void 0 ? void 0 : onConfirmClick(e);
        },
        className: "".concat(prefixCls, "__confirm")
      });
      var footerStyle = {
        display: "flex",
        justifyContent: actualPlacement === "right" ? "flex-start" : "flex-end"
      };
      return /* @__PURE__ */React.createElement("div", {
        style: footerStyle
      }, actualPlacement === "right" ? /* @__PURE__ */React.createElement(React.Fragment, null, renderConfirmBtn, " ", renderCancelBtn) : /* @__PURE__ */React.createElement(React.Fragment, null, renderCancelBtn, " ", renderConfirmBtn));
    };
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(prefixCls, "__footer")
    }, parseTNode(footer, null, defaultFooter()));
  };
  var renderOverlay = showOverlay && /* @__PURE__ */React.createElement(CSSTransition, {
    "in": visible,
    timeout: 200,
    classNames: "".concat(prefixCls, "-fade"),
    nodeRef: maskRef
  }, /* @__PURE__ */React.createElement("div", {
    ref: maskRef,
    className: "".concat(prefixCls, "__mask"),
    onClick: onMaskClick
  }));
  var renderCloseBtn = closeBtn && /* @__PURE__ */React.createElement("div", {
    onClick: onClickCloseBtn,
    className: "".concat(prefixCls, "__close-btn")
  }, closeIcon);
  var renderHeader = header && /* @__PURE__ */React.createElement("div", {
    className: "".concat(prefixCls, "__header")
  }, header);
  var renderBody = /* @__PURE__ */React.createElement("div", {
    className: "".concat(prefixCls, "__body")
  }, body || children);
  return /* @__PURE__ */React.createElement(CSSTransition, {
    "in": visible,
    nodeRef: drawerWrapperRef,
    mountOnEnter: isUndefined(forceRender) ? lazy : !forceRender,
    unmountOnExit: destroyOnClose,
    timeout: {
      appear: 10,
      enter: 10,
      exit: 300
    },
    onEnter: function onEnter() {
      return onBeforeOpen === null || onBeforeOpen === void 0 ? void 0 : onBeforeOpen();
    },
    onEntered: function onEntered() {
      return setAnimationStart(true);
    },
    onExit: function onExit() {
      return onBeforeClose === null || onBeforeClose === void 0 ? void 0 : onBeforeClose();
    },
    onExited: function onExited() {
      return setAnimationStart(false);
    }
  }, /* @__PURE__ */React.createElement(Portal, {
    attach: drawerAttach,
    ref: drawerWrapperRef
  }, /* @__PURE__ */React.createElement("div", {
    ref: containerRef,
    className: classNames(prefixCls, className, "".concat(prefixCls, "--").concat(actualPlacement), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "--open"), visible), "".concat(prefixCls, "--attach"), showInAttachedElement), "".concat(prefixCls, "--without-mask"), !showOverlay)),
    style: _objectSpread({
      zIndex: zIndex
    }, style),
    tabIndex: -1,
    onKeyDown: onKeyDownEsc
  }, renderOverlay, /* @__PURE__ */React.createElement("div", {
    className: classNames("".concat(prefixCls, "__content-wrapper"), "".concat(prefixCls, "__content-wrapper--").concat(actualPlacement)),
    style: _objectSpread(_objectSpread({}, contentWrapperStyle), draggingStyles)
  }, renderCloseBtn, renderHeader, renderBody, !!footer && renderFooter(), sizeDraggable && /* @__PURE__ */React.createElement("div", {
    style: draggableLineStyles,
    onMouseDown: enableDrag
  })))));
});
Drawer.displayName = "Drawer";

export { CloseTriggerType, Drawer as default };
//# sourceMappingURL=Drawer.js.map
