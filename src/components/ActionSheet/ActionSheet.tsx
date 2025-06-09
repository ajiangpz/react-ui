import React from 'react';
import { tv } from 'tailwind-variants';
import { Popup } from '../Popup/Popup';
import { Button } from '../Button/Button';

const actionSheet = tv({
  base: 'flex flex-col',
});

const actionItem = tv({
  base: 'h-12 flex items-center justify-center border-b border-gray-100 text-base dark:border-gray-800',
  variants: {
    type: {
      default: 'text-gray-900 dark:text-gray-100',
      destructive: 'text-red-500',
      cancel: 'text-gray-500',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export interface ActionSheetItem {
  key: string;
  text: string;
  type?: 'default' | 'destructive';
  onClick?: () => void;
}

export interface ActionSheetProps {
  visible: boolean;
  onClose?: () => void;
  actions: ActionSheetItem[];
  cancelText?: string;
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
  visible,
  onClose,
  actions,
  cancelText = '取消',
}) => {
  return (
    <Popup visible={visible} onClose={onClose} position="bottom">
      <div className={actionSheet()}>
        {actions.map((action) => (
          <Button
            key={action.key}
            variant="ghost"
            block
            className={actionItem({ type: action.type })}
            onClick={() => {
              action.onClick?.();
              onClose?.();
            }}
          >
            {action.text}
          </Button>
        ))}
        <Button
          variant="ghost"
          block
          className={actionItem({ type: 'cancel' })}
          onClick={onClose}
        >
          {cancelText}
        </Button>
      </div>
    </Popup>
  );
}; 