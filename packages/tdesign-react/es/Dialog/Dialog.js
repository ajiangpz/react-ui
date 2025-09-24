import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { isUndefined } from 'lodash-es';
import Portal from '../common/Portal.js';
import { u as useMouseEvent, g as getScrollbarWidth, a as useSetState, b as useAttach } from '../_chunks/dep-DJQi-lRj.js';
import { u as useConfig } from '../_chunks/dep-CaeblIEM.js';
import { u as useDefaultProps } from '../_chunks/dep-e4v9VeEm.js';
import { d as dialogDefaultProps, D as DialogCard } from '../_chunks/dep-CdS-KBHO.js';
import _typeof from '@babel/runtime/helpers/typeof';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-6TeJvJOF.js';
import '../_chunks/dep-DU45RdGB.js';
import '../config-provider/ConfigContext.js';
import 'tdesign-icons-react';
import '../_chunks/dep-CWE5nGYy.js';
import '../loading/index.js';
import '../loading/Loading.js';
import '../loading/Gradient.js';
import '../_chunks/dep-C4qiDhnV.js';
import '../_chunks/dep-py6q5XhT.js';
import '../_chunks/dep-2sN3YgeE.js';
import './style/css.js';
import '../_chunks/dep-DWZDJ_hQ.js';
import '../_chunks/dep-Dp0dxPtr.js';

var useDialogDrag = function useDialogDrag(props) {
  var dialogCardRef = props.dialogCardRef,
    canDraggable = props.canDraggable;
  var validWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
  var screenHeight = validWindow ? window.innerHeight || document.documentElement.clientHeight : void 0;
  var screenWidth = validWindow ? window.innerWidth || document.documentElement.clientWidth : void 0;
  var dragOffset = reactExports.useRef({
    x: 0,
    y: 0
  });
  useMouseEvent(dialogCardRef, {
    enabled: canDraggable,
    onDown: function onDown(e) {
      if (!validWindow || screenWidth === void 0 || screenHeight === void 0 || !dialogCardRef.current) return;
      var _dialogCardRef$curren = dialogCardRef.current,
        offsetLeft = _dialogCardRef$curren.offsetLeft,
        offsetTop = _dialogCardRef$curren.offsetTop,
        offsetWidth = _dialogCardRef$curren.offsetWidth,
        offsetHeight = _dialogCardRef$curren.offsetHeight,
        style = _dialogCardRef$curren.style;
      if (offsetWidth > screenWidth || offsetHeight > screenHeight) return;
      style.cursor = "move";
      dragOffset.current = {
        x: e.clientX - offsetLeft,
        y: e.clientY - offsetTop
      };
    },
    onMove: function onMove(e) {
      if (!validWindow || screenWidth === void 0 || screenHeight === void 0 || !dialogCardRef.current) return;
      var _dialogCardRef$curren2 = dialogCardRef.current,
        offsetWidth = _dialogCardRef$curren2.offsetWidth,
        offsetHeight = _dialogCardRef$curren2.offsetHeight,
        style = _dialogCardRef$curren2.style;
      var diffX = e.clientX - dragOffset.current.x;
      var diffY = e.clientY - dragOffset.current.y;
      if (diffX < 0) diffX = 0;
      if (diffY < 0) diffY = 0;
      if (screenWidth - offsetWidth - diffX < 0) diffX = screenWidth - offsetWidth;
      if (screenHeight - offsetHeight - diffY < 0) diffY = screenHeight - offsetHeight;
      style.position = "absolute";
      style.left = "".concat(diffX, "px");
      style.top = "".concat(diffY, "px");
    },
    onUp: function onUp() {
      if (dialogCardRef.current) dialogCardRef.current.style.cursor = "default";
    }
  });
};

var dialogSet = /* @__PURE__ */new Set();
var useDialogEsc = function useDialogEsc(visible, dialog) {
  reactExports.useEffect(function () {
    if (visible) {
      if (dialog !== null && dialog !== void 0 && dialog.current) {
        var _dialog$current;
        dialogSet.add(dialog);
        dialog === null || dialog === void 0 || (_dialog$current = dialog.current) === null || _dialog$current === void 0 || _dialog$current.focus();
      }
    } else if (dialogSet.has(dialog)) {
      var _dialogList;
      dialogSet["delete"](dialog);
      var dialogList = _toConsumableArray(dialogSet);
      (_dialogList = dialogList[dialogList.length - 1]) === null || _dialogList === void 0 || (_dialogList = _dialogList.current) === null || _dialogList === void 0 || _dialogList.focus();
    }
    return function () {
      dialogSet.forEach(function (item) {
        if ((item === null || item === void 0 ? void 0 : item.current) === null) {
          dialogSet["delete"](item);
        }
      });
    };
  }, [visible, dialog]);
};

function useDialogPosition(visible, dialogCardRef) {
  var mousePosRef = reactExports.useRef(null);
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
    document.addEventListener("click", getClickPosition, true);
    return function () {
      document.removeEventListener("click", getClickPosition, true);
    };
  }, []);
  reactExports.useEffect(function () {
    if (!visible) return;
    if (mousePosRef.current && dialogCardRef.current) {
      dialogCardRef.current.style.transformOrigin = "".concat(mousePosRef.current.x - dialogCardRef.current.offsetLeft, "px ").concat(mousePosRef.current.y - dialogCardRef.current.offsetTop, "px");
    }
  }, [visible, dialogCardRef]);
}

var key = 1;
function useDialogLockStyle(_ref) {
  var preventScrollThrough = _ref.preventScrollThrough,
    visible = _ref.visible,
    mode = _ref.mode,
    showInAttachedElement = _ref.showInAttachedElement;
  var lockStyleRef = reactExports.useRef(null);
  var timerRef = reactExports.useRef(null);
  var clearStyleFunc = reactExports.useCallback(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(function () {
      var _lockStyleRef$current, _lockStyleRef$current2;
      (_lockStyleRef$current = lockStyleRef.current) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current = _lockStyleRef$current.parentNode) === null || _lockStyleRef$current === void 0 || (_lockStyleRef$current2 = _lockStyleRef$current.removeChild) === null || _lockStyleRef$current2 === void 0 || _lockStyleRef$current2.call(_lockStyleRef$current, lockStyleRef.current);
    }, 150);
  }, []);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === "undefined" || !visible) return;
    if (!lockStyleRef.current) {
      lockStyleRef.current = document.createElement("style");
    }
    var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    var scrollbarWidth = hasScrollBar ? getScrollbarWidth() : 0;
    lockStyleRef.current.dataset.id = "td_dialog_".concat(+ /* @__PURE__ */new Date(), "_").concat(key += 1);
    lockStyleRef.current.innerHTML = "\n      html body {\n        overflow-y: hidden;\n        width: calc(100% - ".concat(scrollbarWidth, "px);\n      }\n    ");
    return clearStyleFunc;
  }, [visible, clearStyleFunc]);
  useIsomorphicLayoutEffect(function () {
    if (typeof document === "undefined") return;
    if (mode !== "modal" || !preventScrollThrough || showInAttachedElement) return;
    if (visible) {
      if (lockStyleRef.current) document.head.appendChild(lockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [preventScrollThrough, visible, mode, showInAttachedElement, clearStyleFunc]);
}

function parseValueToPx(value) {
  if (typeof value === "number") return "".concat(value, "px");
  return value;
}

var _excluded = ["children"],
  _excluded2 = ["className", "dialogClassName", "style", "width", "mode", "zIndex", "visible", "attach", "onBeforeOpen", "onBeforeClose", "onOpened", "onCancel", "onConfirm", "onClose", "onClosed", "isPlugin", "draggable", "onOverlayClick", "onEscKeydown", "closeOnEscKeydown", "confirmOnEnter", "showOverlay", "showInAttachedElement", "closeOnOverlayClick", "destroyOnClose", "preventScrollThrough", "onCloseBtnClick", "forceRender", "lazy"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Dialog = /*#__PURE__*/reactExports.forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, dialogDefaultProps);
  var children = props.children,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var wrapRef = reactExports.useRef(null);
  var maskRef = reactExports.useRef(null);
  var contentClickRef = reactExports.useRef(false);
  var dialogCardRef = reactExports.useRef(null);
  var dialogPosition = reactExports.useRef(null);
  var portalRef = reactExports.useRef(null);
  var _useSetState = useSetState(_objectSpread({
      isPlugin: false
    }, restProps)),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
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
  var dialogAttach = useAttach("dialog", attach);
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
    canDraggable: draggable && mode === "modeless"
  });
  reactExports.useEffect(function () {
    if (isPlugin) {
      return;
    }
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), props);
    });
  }, [props, setState, isPlugin]);
  reactExports.useImperativeHandle(ref, function () {
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
  if (props.mode === "normal") {
    console.error("Dialog", 'mode="normal" is not supported, please use DialogCard.');
    return /* @__PURE__ */React.createElement(DialogCard, _objectSpread({}, props));
  }
  var onMaskClick = function onMaskClick(e) {
    if (showOverlay && closeOnOverlayClick) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (e.target === dialogPosition.current) {
        onOverlayClick === null || onOverlayClick === void 0 || onOverlayClick({
          e: e
        });
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: "overlay"
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
      trigger: "cancel"
    });
  };
  var handleClose = function handleClose(_ref2) {
    var e = _ref2.e;
    onCloseBtnClick === null || onCloseBtnClick === void 0 || onCloseBtnClick({
      e: e
    });
    onClose === null || onClose === void 0 || onClose({
      e: e,
      trigger: "close-btn"
    });
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onEscKeydown === null || onEscKeydown === void 0 || onEscKeydown({
        e: e
      });
      if (closeOnEscKeydown) {
        onClose === null || onClose === void 0 || onClose({
          e: e,
          trigger: "esc"
        });
      }
    } else if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.stopPropagation();
      confirmOnEnter && (onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
        e: e
      }));
    }
  };
  var onAnimateLeave = function onAnimateLeave() {
    onClosed === null || onClosed === void 0 || onClosed();
    if (!wrapRef.current) return;
    wrapRef.current.style.display = "none";
  };
  var onAnimateStart = function onAnimateStart() {
    if (!wrapRef.current) return;
    onBeforeOpen === null || onBeforeOpen === void 0 || onBeforeOpen();
    wrapRef.current.style.display = "block";
  };
  var onInnerAnimateStart = function onInnerAnimateStart() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = "block";
  };
  var onInnerAnimateLeave = function onInnerAnimateLeave() {
    if (!dialogCardRef.current) return;
    dialogCardRef.current.style.display = "none";
  };
  var renderMask = function renderMask() {
    if (mode !== "modal") return null;
    return showOverlay ? /* @__PURE__ */React.createElement(CSSTransition, {
      "in": visible,
      appear: true,
      timeout: 300,
      classNames: "".concat(componentCls, "-fade"),
      mountOnEnter: true,
      unmountOnExit: true,
      nodeRef: maskRef
    }, /* @__PURE__ */React.createElement("div", {
      ref: maskRef,
      className: "".concat(componentCls, "__mask")
    })) : null;
  };
  return /* @__PURE__ */React.createElement(CSSTransition, {
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
  }, /* @__PURE__ */React.createElement(Portal, {
    attach: dialogAttach,
    ref: portalRef
  }, /* @__PURE__ */React.createElement("div", {
    ref: wrapRef,
    className: classNames(className, "".concat(componentCls, "__ctx"), "".concat(componentCls, "__").concat(mode), _defineProperty(_defineProperty({}, "".concat(componentCls, "__ctx--fixed"), !showInAttachedElement), "".concat(componentCls, "__ctx--absolute"), showInAttachedElement)),
    style: {
      zIndex: zIndex,
      display: "none"
    },
    onKeyDown: handleKeyDown,
    tabIndex: 0
  }, renderMask(), /* @__PURE__ */React.createElement("div", {
    className: "".concat(componentCls, "__wrap")
  }, /* @__PURE__ */React.createElement("div", {
    ref: dialogPosition,
    className: classNames("".concat(componentCls, "__position"), _defineProperty(_defineProperty({}, "".concat(componentCls, "--top"), !!props.top || props.placement === "top"), "".concat(componentCls, "--center"), props.placement === "center" && !props.top)),
    style: {
      paddingTop: parseValueToPx(props.top)
    },
    onClick: onMaskClick
  }, /* @__PURE__ */React.createElement(CSSTransition, {
    "in": visible,
    appear: true,
    timeout: 300,
    classNames: "".concat(componentCls, "-zoom"),
    nodeRef: dialogCardRef,
    onEnter: onInnerAnimateStart,
    onExited: onInnerAnimateLeave
  }, /* @__PURE__ */React.createElement(DialogCard, _objectSpread(_objectSpread({
    ref: dialogCardRef
  }, restState), {}, {
    className: dialogClassName,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: parseValueToPx(width || (style === null || style === void 0 ? void 0 : style.width))
    }),
    onConfirm: onConfirm,
    onCancel: handleCancel,
    onCloseBtnClick: handleClose
  }), children)))))));
});
Dialog.displayName = "Dialog";

export { Dialog as default };
//# sourceMappingURL=Dialog.js.map
