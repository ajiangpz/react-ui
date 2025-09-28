import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React, { useMemo } from 'react';
import { c as classNames } from './dep-Cro9u0Fl.js';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { p as parseTNode } from './dep-CVM4W9uS.js';

var ValidateStatus = /*#__PURE__*/function (ValidateStatus) {
  ValidateStatus["SUCCESS"] = "success";
  ValidateStatus["WARNING"] = "warning";
  ValidateStatus["ERROR"] = "error";
  ValidateStatus["VALIDATING"] = "validating";
  return ValidateStatus;
}({});

function useFormItemStyle(props) {
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
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

  // 传入 status 时受控
  var renderStatus = status || verifyStatus;

  // help 文本
  var helpNode = help && /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-input__help")
  }, parseTNode(help));

  // 判断是否有星号
  var needRequiredMark = requiredMark || (requiredMark !== null && requiredMark !== void 0 ? requiredMark : innerRules.filter(function (rule) {
    return rule.required;
  }).length > 0);

  // 提示文本
  var extraNode = useMemo(function () {
    var _errorList$;
    var extra = tips ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-input__extra"),
      title: tips
    }, tips) : null;
    if (showErrorMessage && errorList !== null && errorList !== void 0 && (_errorList$ = errorList[0]) !== null && _errorList$ !== void 0 && _errorList$.message) {
      extra = /*#__PURE__*/React.createElement("div", {
        className: "".concat(classPrefix, "-input__extra"),
        title: errorList[0].message
      }, errorList[0].message);
    } else if (successList.length) {
      extra = /*#__PURE__*/React.createElement("div", {
        className: "".concat(classPrefix, "-input__extra"),
        title: successList[0].message
      }, successList[0].message);
    }
    return extra;
  }, [showErrorMessage, errorList, successList, tips, classPrefix]);

  // snake 在dom上显示的名字改成下划线拼接
  var formSnakeName = snakeName.split(',').join('_');
  var formItemClass = classNames("".concat(classPrefix, "-form__item"), className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-form-item__").concat(formSnakeName), formSnakeName), "".concat(classPrefix, "-form__item-with-help"), helpNode), "".concat(classPrefix, "-form__item-with-extra"), extraNode));
  var formItemLabelClass = classNames("".concat(classPrefix, "-form__label"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-form__label--required"), needRequiredMark), "".concat(classPrefix, "-form__label--required-right"), needRequiredMark && requiredMarkPosition === 'right'), "".concat(classPrefix, "-form__label--top"), labelAlign === 'top' || !labelWidth), "".concat(classPrefix, "-form__label--left"), labelAlign === 'left' && labelWidth), "".concat(classPrefix, "-form__label--right"), labelAlign === 'right' && labelWidth));
  var contentClass = function contentClass() {
    var controlCls = "".concat(classPrefix, "-form__controls");
    if (!showErrorMessage) return controlCls;
    var isSuccess = renderStatus === ValidateStatus.SUCCESS;
    if (isSuccess) {
      return classNames(controlCls, "".concat(classPrefix, "-is-success"), _defineProperty({}, "".concat(classPrefix, "-form--success-border"), successBorder));
    }
    return classNames(controlCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-is-warning"), renderStatus === 'warning'), "".concat(classPrefix, "-is-error"), ['fail', 'error'].includes(renderStatus)), "".concat(classPrefix, "-form--has-error"), renderStatus === ValidateStatus.ERROR || renderStatus === ValidateStatus.WARNING));
  };
  var labelStyle = {};
  var contentStyle = {};
  if (label && labelWidth && labelAlign !== 'top') {
    if (typeof labelWidth === 'number') {
      labelStyle = {
        width: "".concat(labelWidth, "px")
      };
      contentStyle = {
        marginLeft: layout !== 'inline' ? "".concat(labelWidth, "px") : ''
      };
    } else {
      labelStyle = {
        width: labelWidth
      };
      contentStyle = {
        marginLeft: layout !== 'inline' ? labelWidth : ''
      };
    }
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
//# sourceMappingURL=dep-m9cbRu9t.js.map
