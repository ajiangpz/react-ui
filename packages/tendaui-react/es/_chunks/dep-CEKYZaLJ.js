import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import { u as useConfig } from './dep-u7AyxuYF.js';
import { p as parseTNode } from './dep-D6YxJv-F.js';

var ValidateStatus = /* @__PURE__ */function (ValidateStatus2) {
  ValidateStatus2["SUCCESS"] = "success";
  ValidateStatus2["WARNING"] = "warning";
  ValidateStatus2["ERROR"] = "error";
  ValidateStatus2["VALIDATING"] = "validating";
  return ValidateStatus2;
}(ValidateStatus || {});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useFormItemStyle(props) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix,
    direction = _useConfig.direction;
  var className = props.className,
    help = props.help,
    tips = props.tips,
    snakeName = props.snakeName,
    status = props.status,
    successBorder = props.successBorder,
    errorList = props.errorList,
    successList = props.successList,
    layout = props.layout,
    verifyStatus = props.verifyStatus,
    label = props.label,
    labelWidth = props.labelWidth,
    labelAlign = props.labelAlign,
    requiredMark = props.requiredMark,
    requiredMarkPosition = props.requiredMarkPosition,
    showErrorMessage = props.showErrorMessage,
    innerRules = props.innerRules;
  var renderStatus = status || verifyStatus;
  var helpNode = help && /* @__PURE__ */React.createElement("div", {
    className: "".concat(classPrefix, "-input__help")
  }, parseTNode(help));
  var needRequiredMark = requiredMark || (requiredMark !== null && requiredMark !== void 0 ? requiredMark : innerRules.filter(function (rule) {
    return rule.required;
  }).length > 0);
  var extraNode = useMemo(function () {
    var _errorList$;
    var extra = tips ? /* @__PURE__ */React.createElement("div", {
      className: "".concat(classPrefix, "-input__extra"),
      title: tips
    }, tips) : null;
    if (showErrorMessage && errorList !== null && errorList !== void 0 && (_errorList$ = errorList[0]) !== null && _errorList$ !== void 0 && _errorList$.message) {
      extra = /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-input__extra"),
        title: errorList[0].message
      }, errorList[0].message);
    } else if (successList.length) {
      extra = /* @__PURE__ */React.createElement("div", {
        className: "".concat(classPrefix, "-input__extra"),
        title: successList[0].message
      }, successList[0].message);
    }
    return extra;
  }, [showErrorMessage, errorList, successList, tips, classPrefix]);
  var formSnakeName = snakeName.split(",").join("_");
  var formItemClass = classNames("".concat(classPrefix, "-form__item"), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-form-item__").concat(formSnakeName), formSnakeName), "".concat(classPrefix, "-form__item-with-help"), helpNode), "".concat(classPrefix, "-form__item-with-extra"), extraNode));
  var isRtl = direction === "rtl";
  var resolvedLabelAlign = isRtl ? labelAlign === "left" ? "right" : labelAlign === "right" ? "left" : labelAlign : labelAlign;
  var formItemLabelClass = classNames("".concat(classPrefix, "-form__label"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-form__label--required"), needRequiredMark), "".concat(classPrefix, "-form__label--required-right"), needRequiredMark && requiredMarkPosition === "right"), "".concat(classPrefix, "-form__label--top"), resolvedLabelAlign === "top" || !labelWidth), "".concat(classPrefix, "-form__label--left"), resolvedLabelAlign === "left" && labelWidth), "".concat(classPrefix, "-form__label--right"), resolvedLabelAlign === "right" && labelWidth));
  var contentClass = function contentClass() {
    var controlCls = "".concat(classPrefix, "-form__controls");
    if (!showErrorMessage) return controlCls;
    var isSuccess = renderStatus === ValidateStatus.SUCCESS;
    if (isSuccess) {
      return classNames(controlCls, "".concat(classPrefix, "-is-success"), _defineProperty({}, "".concat(classPrefix, "-form--success-border"), successBorder));
    }
    return classNames(controlCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-warning"), renderStatus === "warning"), "".concat(classPrefix, "-is-error"), ["fail", "error"].includes(renderStatus)), "".concat(classPrefix, "-form--has-error"), renderStatus === ValidateStatus.ERROR || renderStatus === ValidateStatus.WARNING));
  };
  var labelStyle = {};
  var contentStyle = {};
  if (label && labelWidth && resolvedLabelAlign !== "top") {
    if (typeof labelWidth === "number") {
      labelStyle = {
        width: "".concat(labelWidth, "px")
      };
      contentStyle = {
        marginInlineStart: layout !== "inline" ? "".concat(labelWidth, "px") : ""
      };
    } else {
      labelStyle = {
        width: labelWidth
      };
      contentStyle = {
        marginInlineStart: layout !== "inline" ? labelWidth : ""
      };
    }
  }
  if (isRtl && label && labelWidth && resolvedLabelAlign !== "top") {
    labelStyle = _objectSpread(_objectSpread({}, labelStyle), {}, {
      "float": "right"
    });
  }
  return {
    formItemClass: formItemClass,
    formItemLabelClass: formItemLabelClass,
    contentClass: contentClass,
    labelStyle: labelStyle,
    contentStyle: contentStyle,
    helpNode: helpNode,
    extraNode: extraNode
  };
}

export { ValidateStatus as V, useFormItemStyle as u };
//# sourceMappingURL=dep-CEKYZaLJ.js.map
