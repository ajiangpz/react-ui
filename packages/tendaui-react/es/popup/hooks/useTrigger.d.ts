import React from 'react';
import { TNode } from '../../common';
interface UseTriggerProps {
    content: TNode;
    disabled?: boolean;
    trigger: 'hover' | 'click' | 'mousedown' | 'focus' | 'context-menu' | undefined;
    visible: boolean | undefined;
    onVisibleChange: (visible: boolean, context: any) => void;
    triggerRef: React.Ref<any>;
    delay?: number | [number, number] | number[];
}
export default function useTrigger({ content, disabled, trigger, visible, onVisibleChange, triggerRef, delay, }: UseTriggerProps): {
    getTriggerNode: (children: React.ReactNode) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    getPopupProps: () => any;
    getTriggerDom: () => {};
};
export {};
