import React, { useMemo } from 'react';
import { isObject, isFunction } from 'lodash-es';
import useControlled from '@/hooks/useControlled';
import { TdSelectInputProps } from '../type';
import { TdPopupProps, PopupVisibleChangeContext } from '@/popup';

export type overlayStyleProps = Pick<
  TdSelectInputProps,
  | 'popupProps'
  | 'autoWidth'
  | 'readonly'
  | 'onPopupVisibleChange'
  | 'disabled'
  | 'allowInput'
  | 'popupVisible'
  | 'defaultPopupVisible'
>;

const MAX_POPUP_WIDTH = 1000;

export default function useOverlayInnerStyle(
  props: overlayStyleProps,
  extra?: {
    afterHidePopups?: (ctx: PopupVisibleChangeContext) => void;
  },
) {
  const {
    popupProps,
    autoWidth,
    readonly,
    disabled,
    onPopupVisibleChange,
    allowInput,
  } = props;
  const [innerPopupVisible, setInnerPopupVisible] = useControlled(
    props,
    'popupVisible',
    onPopupVisibleChange,
  );
  const matchWidthFunc = (
    triggerElement: HTMLElement,
    popupElement: HTMLElement,
  ) => {
    if (!triggerElement || !popupElement) {
      return;
    }

    const prevDisplay = popupElement.style.display;
    popupElement.style.display = '';
    const overlayScrollWidth =
      popupElement.offsetWidth - popupElement.scrollWidth;
    const width =
      popupElement.offsetWidth - overlayScrollWidth > triggerElement.offsetWidth
        ? popupElement.scrollWidth
        : triggerElement.offsetWidth - overlayScrollWidth;
    if (prevDisplay === 'none') {
      // eslint-disable-next-line no-param-reassign
      popupElement.style.display = 'none';
    }
    let otherOverlayInnerStyle: React.CSSProperties = {};
    if (
      popupProps &&
      typeof popupProps.overlayInnerStyle === 'object' &&
      !popupProps.overlayInnerStyle.width
    ) {
      otherOverlayInnerStyle = popupProps.overlayInnerStyle;
    }
    return {
      width: `${Math.min(width, MAX_POPUP_WIDTH)}px`,
      ...otherOverlayInnerStyle,
    };
  };

  const onInnerPopupVisibleChange = (
    visible: boolean,
    context: PopupVisibleChangeContext,
  ) => {
    if (disabled || readonly) {
      return;
    }
    // 如果点击触发元素（输入框）且为可输入状态，则继续显示下拉框
    const newVisible =
      context.trigger === 'trigger-element-click' && allowInput
        ? true
        : visible;
    if (props.popupVisible !== newVisible) {
      setInnerPopupVisible(newVisible, context);
      if (!newVisible) {
        extra?.afterHidePopup?.(context);
      }
    }
  };
  const tOverlayInnerStyle = useMemo(() => {
    let result: TdPopupProps['overlayInnerStyle'] = {};
    const overlayInnerStyle = popupProps?.overlayInnerStyle || {};
    if (
      isFunction(overlayInnerStyle) ||
      (isObject(overlayInnerStyle) && overlayInnerStyle.width)
    ) {
      result = overlayInnerStyle;
    } else if (!autoWidth) {
      result = matchWidthFunc;
    }
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoWidth, popupProps?.overlayInnerStyle]);

  return {
    tOverlayInnerStyle,
    innerPopupVisible,
    onInnerPopupVisibleChange,
  };
}
