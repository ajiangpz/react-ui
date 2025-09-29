import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { c as canUseDocument } from '../_chunks/dep-CKiAytca.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import Portal from '../common/Portal.js';
import GradientLoading from './Gradient.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import { a as addClass, r as removeClass } from '../_chunks/dep-BrowiCr7.js';
import '../_chunks/dep-D-UKOauR.js';
import 'lodash-es';
import '../config-provider/ConfigContext.js';
import 'react-dom';
import '../_chunks/dep-DiKH-oTP.js';
import '../_chunks/dep-DN7d1SzH.js';
import '../_chunks/dep-BlRTpQ02.js';

var loadingDefaultProps = {
  delay: 0,
  fullscreen: false,
  indicator: true,
  inheritColor: false,
  loading: true,
  preventScrollThrough: true,
  showOverlay: true,
  size: 'medium'
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Loading = function Loading(props) {
  var _useDefaultProps = useDefaultProps(props, loadingDefaultProps),
    attach = _useDefaultProps.attach,
    indicator = _useDefaultProps.indicator,
    text = _useDefaultProps.text,
    loading = _useDefaultProps.loading,
    size = _useDefaultProps.size,
    delay = _useDefaultProps.delay,
    fullscreen = _useDefaultProps.fullscreen,
    preventScrollThrough = _useDefaultProps.preventScrollThrough,
    showOverlay = _useDefaultProps.showOverlay,
    content = _useDefaultProps.content,
    children = _useDefaultProps.children,
    inheritColor = _useDefaultProps.inheritColor,
    zIndex = _useDefaultProps.zIndex,
    className = _useDefaultProps.className,
    style = _useDefaultProps.style;
  var _useState = useState(function () {
      return delay ? false : loading;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    showLoading = _useState2[0],
    setShowLoading = _useState2[1];
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var name = "".concat(classPrefix, "-loading");
  var centerClass = "".concat(classPrefix, "-loading--center");
  var inheritColorClass = "".concat(classPrefix, "-loading--inherit-color");
  var fullClass = "".concat(classPrefix, "-loading--full");
  var fullscreenClass = "".concat(classPrefix, "-loading__fullscreen");
  var lockClass = "".concat(classPrefix, "-loading--lock");
  var overlayClass = "".concat(classPrefix, "-loading__overlay");
  var relativeClass = "".concat(classPrefix, "-loading__parent");
  var textClass = "".concat(classPrefix, "-loading__text");
  useEffect(function () {
    var timer;
    if (delay && loading) {
      timer = setTimeout(function () {
        setShowLoading(loading);
      }, delay);
    } else {
      setShowLoading(loading);
    }
    return function () {
      clearTimeout(timer);
    };
  }, [delay, loading]);
  var calcStyles = useMemo(function () {
    var styles = {};
    if (zIndex !== undefined) {
      styles.zIndex = zIndex;
    }
    if (!['small', 'medium', 'large'].includes(size)) {
      styles.fontSize = size;
    }
    return styles;
  }, [size, zIndex]);
  var sizeMap = {
    large: "".concat(classPrefix, "-size-l"),
    small: "".concat(classPrefix, "-size-s"),
    medium: "".concat(classPrefix, "-size-m")
  };
  var baseClasses = classNames(centerClass, sizeMap[size], _defineProperty({}, inheritColorClass, inheritColor), className);
  useEffect(function () {
    if (preventScrollThrough && fullscreen && canUseDocument && loading) {
      addClass(document.body, lockClass);
    }
    return function () {
      removeClass(document.body, lockClass);
    };
  }, [loading, preventScrollThrough, fullscreen, lockClass]);
  var commonContent = function commonContent() {
    var renderIndicator = /*#__PURE__*/React.createElement(GradientLoading, null);
    if (indicator && typeof indicator !== 'boolean') {
      renderIndicator = indicator;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, indicator ? renderIndicator : null, text ? /*#__PURE__*/React.createElement("div", {
      className: textClass
    }, text) : null);
  };
  if (fullscreen) {
    return loading ? /*#__PURE__*/React.createElement("div", {
      className: classNames(name, fullscreenClass, centerClass, overlayClass),
      style: _objectSpread(_objectSpread({}, calcStyles), style)
    }, /*#__PURE__*/React.createElement("div", {
      className: baseClasses
    }, commonContent())) : null;
  }
  if (content || children) {
    return /*#__PURE__*/React.createElement("div", {
      className: relativeClass,
      style: style
    }, content || children, showLoading ? /*#__PURE__*/React.createElement("div", {
      className: classNames(name, baseClasses, fullClass, _defineProperty({}, overlayClass, showOverlay)),
      style: calcStyles
    }, commonContent()) : null);
  }
  if (attach) {
    return /*#__PURE__*/React.createElement(Portal, {
      attach: attach
    }, loading ? /*#__PURE__*/React.createElement("div", {
      className: classNames(name, baseClasses, fullClass, _defineProperty({}, overlayClass, showOverlay)),
      style: _objectSpread(_objectSpread({}, calcStyles), style)
    }, commonContent()) : null);
  }
  return loading ? /*#__PURE__*/React.createElement("div", {
    className: classNames(name, baseClasses),
    style: _objectSpread(_objectSpread({}, calcStyles), style)
  }, commonContent()) : null;
};
Loading.displayName = 'Loading';

export { Loading as default };
//# sourceMappingURL=Loading.js.map
