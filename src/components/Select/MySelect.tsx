'use client';
import React from 'react';
import { createPortal } from 'react-dom';
// Props 类型定义
interface MySelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const MySelect = React.forwardRef<HTMLDivElement, MySelectProps>(
  ({ options, placeholder, onChange }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    return (
      <div className="relative" ref={ref}>
        <button
          className="border-input text-foreground flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value || placeholder}
        </button>
        {isOpen &&
          createPortal(
            <ul className="border-input bg-background mt-2 rounded-md border px-2 py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                    setValue(option.value);
                  }}
                  className="cursor-pointer hover:bg-gray-200"
                >
                  {option.label}
                </li>
              ))}
            </ul>,
            document.body,
          )}
      </div>
    );
  },
);

export default MySelect;
MySelect.displayName = 'MySelect';
