import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { R as React, r as reactExports } from './dep-C52Ear6B.js';
import classNames from 'classnames';
import { isString, isObject, isFunction } from 'lodash-es';
import { CheckCircleFilledIcon, InfoCircleFilledIcon, CloseIcon } from 'tdesign-icons-react';
import { B as Button } from './dep-CWE5nGYy.js';
import { p as parseTNode } from './dep-DWZDJ_hQ.js';
import { u as useConfig } from './dep-CaeblIEM.js';
import { u as useGlobalIcon } from './dep-Dp0dxPtr.js';
import { u as useDefaultProps } from './dep-e4v9VeEm.js';

var dialogCardDefaultProps = {
  closeBtn: true,
  footer: true,
  header: true,
  theme: "default"
};
var dialogDefaultProps = {
  closeOnEscKeydown: void 0,
  closeOnOverlayClick: void 0,
  destroyOnClose: false,
  draggable: false,
  mode: "modal",
  placement: "top",
  preventScrollThrough: true,
  showInAttachedElement: false,
  showOverlay: true,
  lazy: true
};

var _excluded = ["theme", "header", "closeBtn", "footer", "body", "children", "className", "onCancel", "onConfirm", "onCloseBtnClick", "cancelBtn", "confirmBtn", "confirmLoading"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var renderDialogButton = function renderDialogButton(btn, defaultProps) {
  var result = null;
  if (isString(btn)) {
    result = /* @__PURE__ */React.createElement(Button, _objectSpread({}, defaultProps), btn);
  } else if (/*#__PURE__*/reactExports.isValidElement(btn)) {
    result = btn;
  } else if (isObject(btn)) {
    result = /* @__PURE__ */React.createElement(Button, _objectSpread(_objectSpread({}, defaultProps), btn));
  } else if (isFunction(btn)) {
    result = btn();
  }
  return result;
};
var DialogCard = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: CloseIcon,
      InfoCircleFilledIcon: InfoCircleFilledIcon,
      CheckCircleFilledIcon: CheckCircleFilledIcon
    }),
    CloseIcon$1 = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon;
  var confirmText = "\u786E\u8BA4";
  var cancelText = "\u53D6\u6D88";
  var _useDefaultProps = useDefaultProps(props, dialogCardDefaultProps),
    theme = _useDefaultProps.theme,
    header = _useDefaultProps.header,
    closeBtn = _useDefaultProps.closeBtn,
    footer = _useDefaultProps.footer,
    body = _useDefaultProps.body,
    children = _useDefaultProps.children,
    className = _useDefaultProps.className,
    onCancel = _useDefaultProps.onCancel,
    onConfirm = _useDefaultProps.onConfirm,
    onCloseBtnClick = _useDefaultProps.onCloseBtnClick,
    _useDefaultProps$canc = _useDefaultProps.cancelBtn,
    cancelBtn = _useDefaultProps$canc === void 0 ? cancelText : _useDefaultProps$canc,
    _useDefaultProps$conf = _useDefaultProps.confirmBtn,
    confirmBtn = _useDefaultProps$conf === void 0 ? confirmText : _useDefaultProps$conf,
    confirmLoading = _useDefaultProps.confirmLoading,
    otherProps = _objectWithoutProperties(_useDefaultProps, _excluded);
  var renderHeaderContent = function renderHeaderContent() {
    var iconMap = {
      info: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-info")
      }),
      warning: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-warning")
      }),
      // error is going to deprecated
      error: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-error")
      }),
      danger: /* @__PURE__ */React.createElement(InfoCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-error")
      }),
      success: /* @__PURE__ */React.createElement(CheckCircleFilledIcon$1, {
        className: "".concat(classPrefix, "-is-success")
      })
    };
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(componentCls, "__header-content")
    }, iconMap[theme], header);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (!closeBtn) {
      return null;
    }
    var closeIcon = function closeIcon() {
      return closeBtn === true ? /* @__PURE__ */React.createElement(CloseIcon$1, null) : closeBtn;
    };
    return /* @__PURE__ */React.createElement("span", {
      className: "".concat(componentCls, "__close"),
      style: {
        marginLeft: "auto"
      },
      onClick: function onClick(e) {
        return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
          e: e
        });
      }
    }, closeIcon());
  };
  var renderHeader = function renderHeader() {
    return /* @__PURE__ */React.createElement("div", {
      className: classNames("".concat(componentCls, "__header"))
    }, renderHeaderContent(), renderCloseBtn());
  };
  var renderFooter = function renderFooter() {
    var defaultFooter = function defaultFooter() {
      var _cancelBtn$props;
      var renderCancelBtn = renderDialogButton(cancelBtn, {
        variant: "outline",
        onClick: function onClick(e) {
          return onCancel === null || onCancel === void 0 ? void 0 : onCancel({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__cancel"), cancelBtn === null || cancelBtn === void 0 || (_cancelBtn$props = cancelBtn.props) === null || _cancelBtn$props === void 0 ? void 0 : _cancelBtn$props.className)
      });
      var renderConfirmBtn = renderDialogButton(confirmBtn, {
        theme: "primary",
        loading: confirmLoading,
        onClick: function onClick(e) {
          return onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__confirm"), confirmBtn === null || confirmBtn === void 0 ? void 0 : confirmBtn.className)
      });
      return /* @__PURE__ */React.createElement(React.Fragment, null, renderCancelBtn, renderConfirmBtn);
    };
    return /* @__PURE__ */React.createElement("div", {
      className: "".concat(componentCls, "__footer")
    }, parseTNode(footer, null, defaultFooter()));
  };
  return /* @__PURE__ */React.createElement("div", _objectSpread(_objectSpread({
    ref: ref
  }, otherProps), {}, {
    className: classNames(componentCls, "".concat(componentCls, "--default"), className)
  }), !!header && renderHeader(), /* @__PURE__ */React.createElement("div", {
    className: "".concat(componentCls, "__body")
  }, body || children), !!footer && renderFooter());
});
DialogCard.displayName = "DialogCard";

export { DialogCard as D, dialogDefaultProps as d };
//# sourceMappingURL=dep-CdS-KBHO.js.map
