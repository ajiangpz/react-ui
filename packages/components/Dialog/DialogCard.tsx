import React, { forwardRef, isValidElement } from 'react';
import classNames from 'classnames';
import { isString, isObject, isFunction } from 'lodash-es';
import {
    X as TdCloseIcon,
    Info as TdInfoCircleFilledIcon,
    BadgeCheck as TdCheckCircleFilledIcon,
} from 'lucide-react';
import Button, { ButtonProps } from '../button';
import { TdDialogCardProps } from './type';
import { StyledProps, TNode } from '../common';
import parseTNode from '../utils/parseTNode';
import useConfig from '../hooks/useConfig';
import useGlobalIcon from '../hooks/useGlobalIcon';
// import { useLocaleReceiver } from '../locale/LocalReceiver';
import { dialogCardDefaultProps } from './defaultProps';
import useDefaultProps from '../hooks/useDefaultProps';

export interface DialogCardProps extends TdDialogCardProps, StyledProps, React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const renderDialogButton = (btn: DialogCardProps['cancelBtn'], defaultProps: ButtonProps) => {
    let result = null;

    if (isString(btn)) {
        result = <Button {...defaultProps}>{btn as TNode}</Button>;
    } else if (isValidElement(btn)) {
        result = btn;
    } else if (isObject(btn)) {
        result = <Button {...defaultProps} {...(btn as {})} />;
    } else if (isFunction(btn)) {
        result = (btn as Function)();
    }

    return result;
};

const DialogCard = forwardRef<HTMLDivElement, DialogCardProps>((props, ref) => {
    const { classPrefix } = useConfig();
    const componentCls = `${classPrefix}-dialog`;
    const { CloseIcon, InfoCircleFilledIcon, CheckCircleFilledIcon } = useGlobalIcon({
        CloseIcon: TdCloseIcon,
        InfoCircleFilledIcon: TdInfoCircleFilledIcon,
        CheckCircleFilledIcon: TdCheckCircleFilledIcon,
    });
    // const [local, t] = useLocaleReceiver('dialog');
    // const confirmText = t(local.confirm);
    // const cancelText = t(local.cancel);
    const confirmText = '确认';
    const cancelText = '取消';
    const {
        theme,
        header,
        closeBtn,
        footer,
        body,
        children,
        className,
        onCancel,
        onConfirm,
        onCloseBtnClick,
        cancelBtn = cancelText,
        confirmBtn = confirmText,
        confirmLoading,
        ...otherProps
    } = useDefaultProps<DialogCardProps>(props, dialogCardDefaultProps);

    const renderHeaderContent = () => {
        const iconMap = {
            info: <InfoCircleFilledIcon className={`${classPrefix}-is-info`} />,
            warning: <InfoCircleFilledIcon className={`${classPrefix}-is-warning`} />,
            // error is going to deprecated
            error: <InfoCircleFilledIcon className={`${classPrefix}-is-error`} />,
            danger: <InfoCircleFilledIcon className={`${classPrefix}-is-error`} />,
            success: <CheckCircleFilledIcon className={`${classPrefix}-is-success`} />,
        };

        return (
            <div className={`${componentCls}__header-content`}>
                {iconMap[theme]}
                {header}
            </div>
        );
    };

    const renderCloseBtn = () => {
        if (!closeBtn) {
            return null;
        }

        const closeIcon = () => (closeBtn === true ? <CloseIcon /> : closeBtn);

        return (
            <span
                className={`${componentCls}__close`}
                style={{
                    marginLeft: 'auto',
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => onCloseBtnClick?.({ e })}
            >
                {closeIcon() as React.ReactNode}
            </span>
        );
    };

    const renderHeader = () => (
        <div className={classNames(`${componentCls}__header`)}>
            {renderHeaderContent()}
            {renderCloseBtn()}
        </div>
    );

    const renderFooter = () => {
        const defaultFooter = () => {
            const renderCancelBtn = renderDialogButton(cancelBtn, {
                variant: 'outline',
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => onCancel?.({ e }),
                className: classNames(`${componentCls}__cancel`, (cancelBtn as any)?.props?.className),
            });
            const renderConfirmBtn = renderDialogButton(confirmBtn, {
                theme: 'primary',
                loading: confirmLoading,
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => onConfirm?.({ e }),
                className: classNames(`${componentCls}__confirm`, (confirmBtn as any)?.className),
            });

            return (
                <>
                    {renderCancelBtn}
                    {renderConfirmBtn}
                </>
            );
        };

        return <div className={`${componentCls}__footer`}>{parseTNode(footer, null, defaultFooter())}</div>;
    };
    return (
        <div ref={ref} {...otherProps} className={classNames(componentCls, `${componentCls}--default`, className)}>
            {!!header && renderHeader()}
            <div className={`${componentCls}__body`}>{(body || children) as React.ReactNode}</div>
            {!!footer && renderFooter()}
        </div>
    );
});

DialogCard.displayName = 'DialogCard';

export default DialogCard;
