import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import { _ as _objectWithoutProperties } from '../_chunks/dep-DN7d1SzH.js';
import React, { forwardRef, useRef } from 'react';
import classNames from 'classnames';
import { IconAlertTriangle, IconCheckCircleStroked, IconInfoCircle, IconClose } from 'tendaui-react-icons';
import { CSSTransition } from 'react-transition-group';
import { p as parseTNode } from '../_chunks/dep-_E1HIQZ7.js';
import { n as noop } from '../_chunks/dep-CVFMdElW.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { u as useGlobalIcon } from '../_chunks/dep-BIZNqCbw.js';
import { c as composeRefs } from '../_chunks/dep-BggCUGKG.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import '../_chunks/dep-Cwish4GD.js';
import '../_chunks/dep-D-UKOauR.js';
import 'lodash-es';
import '../config-provider/ConfigContext.js';

var alertDefaultProps = {
  closeBtn: false,
  maxLine: 0,
  theme: 'info'
};

var _excluded = ["message", "title", "operation", "theme", "icon", "closeBtn", "maxLine", "onClose", "className", "onClosed"];
var transitionTime = 200;
var Alert = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  // const [local, t] = useLocaleReceiver('alert');
  var _useGlobalIcon = useGlobalIcon({
      CloseIcon: IconClose,
      InfoCircleFilledIcon: IconInfoCircle,
      CheckCircleFilledIcon: IconCheckCircleStroked,
      ErrorCircleFilledIcon: IconAlertTriangle
    }),
    CloseIcon = _useGlobalIcon.CloseIcon,
    InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
    CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
    ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
  var _useDefaultProps = useDefaultProps(props, alertDefaultProps),
    message = _useDefaultProps.message,
    title = _useDefaultProps.title,
    operation = _useDefaultProps.operation,
    theme = _useDefaultProps.theme,
    icon = _useDefaultProps.icon,
    closeBtn = _useDefaultProps.closeBtn,
    maxLine = _useDefaultProps.maxLine,
    onClose = _useDefaultProps.onClose,
    className = _useDefaultProps.className,
    _useDefaultProps$onCl = _useDefaultProps.onClosed,
    onClosed = _useDefaultProps$onCl === void 0 ? noop : _useDefaultProps$onCl,
    alertProps = _objectWithoutProperties(_useDefaultProps, _excluded);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    closed = _React$useState2[0],
    setClosed = _React$useState2[1];
  var _React$useState3 = React.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    collapsed = _React$useState4[0],
    setCollapsed = _React$useState4[1];
  var nodeRef = useRef(null);
  var iconMap = {
    success: CheckCircleFilledIcon,
    info: InfoCircleFilledIcon,
    error: ErrorCircleFilledIcon,
    warning: ErrorCircleFilledIcon
  };
  var handleClose = function handleClose(e) {
    setClosed(true);
    onClose === null || onClose === void 0 || onClose({
      e: e
    });
  };
  var handleCollapse = function handleCollapse() {
    setCollapsed(function (collapsed) {
      return !collapsed;
    });
  };
  var renderIconNode = function renderIconNode() {
    if (/*#__PURE__*/React.isValidElement(icon)) return icon;
    return /*#__PURE__*/React.createElement(iconMap[theme], {
      className: 't-icon'
    });
  };
  var renderMessage = function renderMessage() {
    if (+maxLine > 0 && Array.isArray(message)) {
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(classPrefix, "-alert__description")
      }, message.map(function (item, index) {
        if (collapsed) {
          if (index < +maxLine) {
            return /*#__PURE__*/React.createElement("div", {
              key: index
            }, item);
          }
        } else {
          return /*#__PURE__*/React.createElement("div", {
            key: index
          }, item);
        }
        return true;
      }), +maxLine < message.length && /*#__PURE__*/React.createElement("div", {
        className: "".concat(classPrefix, "-alert__collapse"),
        onClick: handleCollapse
      }, collapsed ? '展开' : '收起'));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-alert__description")
    }, message);
  };

  // close 属性变更为 closeBtn，close废弃后可删除。（需兼容标签上直接写close和closeBtn的场景）
  var isUsingClose = Reflect.has(props, 'close');
  var closeNode = isUsingClose ? close : closeBtn;
  if (isUsingClose) {
    console.warn('TAlert', 'prop `close` is going to be deprecated, please use `closeBtn` instead.');
  }
  var renderClose = function renderClose() {
    if (closeNode === false) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-alert__close"),
      onClick: handleClose
    }, parseTNode(closeNode, undefined, /*#__PURE__*/React.createElement(CloseIcon, {
      className: "t-icon"
    })));
  };
  return /*#__PURE__*/React.createElement(CSSTransition, {
    "in": !closed,
    unmountOnExit: true,
    classNames: {
      exitActive: "".concat(classPrefix, "-alert--closing")
    },
    nodeRef: nodeRef,
    timeout: transitionTime,
    onExited: onClosed
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: composeRefs(ref, nodeRef),
    className: classNames("".concat(classPrefix, "-alert"), "".concat(classPrefix, "-alert--").concat(theme), className)
  }, alertProps), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-alert__icon")
  }, renderIconNode()), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-alert__content")
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-alert__title")
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-alert__message")
  }, renderMessage(), operation ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-alert__operation")
  }, parseTNode(operation)) : null)), renderClose()));
});
Alert.displayName = 'Alert';

export { Alert as default };
//# sourceMappingURL=Alert.js.map
