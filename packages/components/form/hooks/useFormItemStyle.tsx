import React, { useMemo } from "react";
import classNames from "classnames";
import useConfig from "../../hooks/useConfig";
import parseTNode from "../../utils/parseTNode";
import { ValidateStatus } from "../const";

export default function useFormItemStyle(props) {
  const { classPrefix, direction } = useConfig();

  const {
    className,
    help,
    tips,
    snakeName,
    status,
    successBorder,
    errorList,
    successList,
    layout,
    verifyStatus,
    label,
    labelWidth,
    labelAlign,
    requiredMark,
    requiredMarkPosition,
    showErrorMessage,
    innerRules
  } = props;

  // 传入 status 时受控
  const renderStatus = status || verifyStatus;

  // help 文本
  const helpNode = help && <div className={`${classPrefix}-input__help`}>{parseTNode(help)}</div>;

  // 判断是否有星号
  const needRequiredMark =
    requiredMark || (requiredMark ?? innerRules.filter((rule: { required?: boolean }) => rule.required).length > 0);

  // 提示文本
  const extraNode = useMemo(() => {
    let extra = tips ? (
      <div className={`${classPrefix}-input__extra`} title={tips}>
        {tips}
      </div>
    ) : null;

    if (showErrorMessage && errorList?.[0]?.message) {
      extra = (
        <div className={`${classPrefix}-input__extra`} title={errorList[0].message}>
          {errorList[0].message}
        </div>
      );
    } else if (successList.length) {
      extra = (
        <div className={`${classPrefix}-input__extra`} title={successList[0].message}>
          {successList[0].message}
        </div>
      );
    }

    return extra;
  }, [showErrorMessage, errorList, successList, tips, classPrefix]);

  // snake 在dom上显示的名字改成下划线拼接
  const formSnakeName = snakeName.split(",").join("_");

  const formItemClass = classNames(`${classPrefix}-form__item`, className, {
    [`${classPrefix}-form-item__${formSnakeName}`]: formSnakeName,
    [`${classPrefix}-form__item-with-help`]: helpNode,
    [`${classPrefix}-form__item-with-extra`]: extraNode
  });
  // todo form item label 也需要 RTL 处理
  const isRtl = direction === "rtl";
  const resolvedLabelAlign = isRtl
    ? labelAlign === "left"
      ? "right"
      : labelAlign === "right"
        ? "left"
        : labelAlign
    : labelAlign;

  const formItemLabelClass = classNames(`${classPrefix}-form__label`, {
    [`${classPrefix}-form__label--required`]: needRequiredMark,
    [`${classPrefix}-form__label--required-right`]: needRequiredMark && requiredMarkPosition === "right",
    [`${classPrefix}-form__label--top`]: resolvedLabelAlign === "top" || !labelWidth,
    [`${classPrefix}-form__label--left`]: resolvedLabelAlign === "left" && labelWidth,
    [`${classPrefix}-form__label--right`]: resolvedLabelAlign === "right" && labelWidth
  });

  const contentClass = () => {
    const controlCls = `${classPrefix}-form__controls`;
    if (!showErrorMessage) return controlCls;

    const isSuccess = renderStatus === ValidateStatus.SUCCESS;
    if (isSuccess) {
      return classNames(controlCls, `${classPrefix}-is-success`, {
        [`${classPrefix}-form--success-border`]: successBorder
      });
    }

    return classNames(controlCls, {
      [`${classPrefix}-is-warning`]: renderStatus === "warning",
      [`${classPrefix}-is-error`]: ["fail", "error"].includes(renderStatus),
      [`${classPrefix}-form--has-error`]:
        renderStatus === ValidateStatus.ERROR || renderStatus === ValidateStatus.WARNING
    });
  };

  let labelStyle = {};
  let contentStyle = {};
  if (label && labelWidth && resolvedLabelAlign !== "top") {
    if (typeof labelWidth === "number") {
      labelStyle = { width: `${labelWidth}px` };
      contentStyle = { marginInlineStart: layout !== "inline" ? `${labelWidth}px` : "" };
    } else {
      labelStyle = { width: labelWidth };
      contentStyle = { marginInlineStart: layout !== "inline" ? labelWidth : "" };
    }
  }
  if (isRtl && label && labelWidth && resolvedLabelAlign !== "top") {
    labelStyle = { ...labelStyle, float: "right" };
  }

  return {
    formItemClass,
    formItemLabelClass,
    contentClass,
    labelStyle,
    contentStyle,
    helpNode,
    extraNode
  };
}
