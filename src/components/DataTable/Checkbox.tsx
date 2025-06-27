import React, { forwardRef, useEffect, useRef } from 'react';
import type { CheckboxProps } from './types';
import clsx from 'clsx';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, indeterminate, disabled, onChange, className, title, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange?.(e.target.checked);
    };

    return (
      <label
        className={clsx(
          'inline-flex items-center',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          className
        )}
        title={title}
      >
        <input
          type="checkbox"
          ref={(node) => {
            // 同时支持 ref 和 innerRef
            innerRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          className={clsx(
            'form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out',
            'border-gray-300 rounded',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          )}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
      </label>
    );
  }
); 