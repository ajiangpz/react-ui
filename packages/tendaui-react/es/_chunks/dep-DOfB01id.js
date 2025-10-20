import { _ as _objectWithoutProperties } from './dep-DN7d1SzH.js';
import { _ as _extends } from './dep-mO86zOh3.js';
import React, { isValidElement, forwardRef } from 'react';
import classNames from 'classnames';
import { isString, isObject, isFunction } from 'lodash-es';
import { IconCheckCircleStroked, IconInfoCircle, IconClose } from 'tendaui-react-icons';
import { Button } from '../button/index.js';
import { p as parseTNode } from './dep-_E1HIQZ7.js';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { u as useGlobalIcon } from './dep-BIZNqCbw.js';
import { u as useDefaultProps } from './dep-5jl2j2BI.js';

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

var dialogCardDefaultProps = {
  closeBtn: true,
  footer: true,
  header: true,
  theme: 'default'
};
var dialogDefaultProps = {
  closeOnEscKeydown: undefined,
  closeOnOverlayClick: undefined,
  destroyOnClose: false,
  draggable: false,
  mode: 'modal',
  placement: 'top',
  preventScrollThrough: true,
  showInAttachedElement: false,
  showOverlay: true,
  lazy: true
};

var _excluded = ["theme", "header", "closeBtn", "footer", "body", "children", "className", "onCancel", "onConfirm", "onCloseBtnClick", "cancelBtn", "confirmBtn", "confirmLoading"];
var renderDialogButton = function renderDialogButton(btn, defaultProps) {
  var result = null;
  if (isString(btn)) {
    result = /*#__PURE__*/React.createElement(Button, defaultProps, btn);
  } else if (/*#__PURE__*/isValidElement(btn)) {
    result = btn;
  } else if (isObject(btn)) {
    result = /*#__PURE__*/React.createElement(Button, _extends({}, defaultProps, btn));
  } else if (isFunction(btn)) {
    result = btn();
  }
  return result;
};
var DialogCard = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var componentCls = "".concat(classPrefix, "-dialog");
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: IconClose,
      InfoCircleFilledIcon: IconInfoCircle,
      CheckCircleFilledIcon: IconCheckCircleStroked
    }),
    CloseIcon = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon;
  // const [local, t] = useLocaleReceiver('dialog');
  // const confirmText = t(local.confirm);
  // const cancelText = t(local.cancel);
  var confirmText = '确认';
  var cancelText = '取消';
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
      info: /*#__PURE__*/React.createElement(InfoCircleFilledIcon, {
        className: "".concat(classPrefix, "-is-info")
      }),
      warning: /*#__PURE__*/React.createElement(InfoCircleFilledIcon, {
        className: "".concat(classPrefix, "-is-warning")
      }),
      // error is going to deprecated
      error: /*#__PURE__*/React.createElement(InfoCircleFilledIcon, {
        className: "".concat(classPrefix, "-is-error")
      }),
      danger: /*#__PURE__*/React.createElement(InfoCircleFilledIcon, {
        className: "".concat(classPrefix, "-is-error")
      }),
      success: /*#__PURE__*/React.createElement(CheckCircleFilledIcon, {
        className: "".concat(classPrefix, "-is-success")
      })
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(componentCls, "__header-content")
    }, iconMap[theme], header);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (!closeBtn) {
      return null;
    }
    var closeIcon = function closeIcon() {
      return closeBtn === true ? /*#__PURE__*/React.createElement(CloseIcon, null) : closeBtn;
    };
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(componentCls, "__close"),
      style: {
        marginLeft: 'auto'
      },
      onClick: function onClick(e) {
        return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
          e: e
        });
      }
    }, closeIcon());
  };
  var renderHeader = function renderHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(componentCls, "__header"))
    }, renderHeaderContent(), renderCloseBtn());
  };
  var renderFooter = function renderFooter() {
    var defaultFooter = function defaultFooter() {
      var _props;
      var renderCancelBtn = renderDialogButton(cancelBtn, {
        variant: 'outline',
        onClick: function onClick(e) {
          return onCancel === null || onCancel === void 0 ? void 0 : onCancel({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__cancel"), cancelBtn === null || cancelBtn === void 0 || (_props = cancelBtn.props) === null || _props === void 0 ? void 0 : _props.className)
      });
      var renderConfirmBtn = renderDialogButton(confirmBtn, {
        theme: 'primary',
        loading: confirmLoading,
        onClick: function onClick(e) {
          return onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm({
            e: e
          });
        },
        className: classNames("".concat(componentCls, "__confirm"), confirmBtn === null || confirmBtn === void 0 ? void 0 : confirmBtn.className)
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, renderCancelBtn, renderConfirmBtn);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(componentCls, "__footer")
    }, parseTNode(footer, null, defaultFooter()));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, otherProps, {
    className: classNames(componentCls, "".concat(componentCls, "--default"), className)
  }), !!header && renderHeader(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(componentCls, "__body")
  }, body || children), !!footer && renderFooter());
});
DialogCard.displayName = 'DialogCard';

export { DialogCard as D, dialogDefaultProps as d };
//# sourceMappingURL=dep-DOfB01id.js.map
