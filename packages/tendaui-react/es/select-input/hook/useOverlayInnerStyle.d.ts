import React from 'react';
import { TdSelectInputProps } from '../type';
import { PopupVisibleChangeContext } from '../../popup';
export type overlayStyleProps = Pick<TdSelectInputProps, 'popupProps' | 'autoWidth' | 'readonly' | 'onPopupVisibleChange' | 'disabled' | 'allowInput' | 'popupVisible' | 'defaultPopupVisible'>;
export default function useOverlayInnerStyle(props: overlayStyleProps, extra?: {
    afterHidePopups?: (ctx: PopupVisibleChangeContext) => void;
}): {
    tOverlayInnerStyle: React.CSSProperties | ((triggerElement: HTMLElement, popupElement: HTMLElement) => import("../../common").Styles);
    innerPopupVisible: boolean;
    onInnerPopupVisibleChange: (visible: boolean, context: PopupVisibleChangeContext) => void;
};
