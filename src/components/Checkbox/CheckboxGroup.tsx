"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./Checkbox";

export interface CheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  label?: string;
  description?: string;
  error?: string;
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      options,
      value = [],
      onChange,
      className,
      orientation = "vertical",
      disabled = false,
      label,
      description,
      error,
      ...props
    },
    ref
  ) => {
    const handleChange = (optionValue: string, checked: boolean) => {
      if (!onChange) return;

      const newValue = checked
        ? [...value, optionValue]
        : value.filter(v => v !== optionValue);

      onChange(newValue);
    };

    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        role="group"
        aria-labelledby={label ? "checkbox-group-label" : undefined}
        aria-describedby={
          description ? "checkbox-group-description" : undefined
        }
        {...props}
      >
        {label && (
          <div
            id="checkbox-group-label"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </div>
        )}
        {description && (
          <div
            id="checkbox-group-description"
            className="text-sm text-muted-foreground"
          >
            {description}
          </div>
        )}
        <div
          className={cn(
            "space-y-2",
            orientation === "horizontal" && "flex space-x-4 space-y-0"
          )}
        >
          {options.map(option => (
            <div
              key={option.value}
              className={cn(
                "flex items-center ",
                "transition-opacity duration-200",
                (disabled || option.disabled) && "opacity-50 cursor-not-allowed"
              )}
            >
              <Checkbox
                id={option.value}
                checked={value.includes(option.value)}
                onCheckedChange={checked =>
                  handleChange(option.value, checked as boolean)
                }
                disabled={disabled || option.disabled}
              >
                <label
                  htmlFor={option.value}
                  className={cn(
                    "text-sm font-medium leading-none",
                    "transition-colors duration-200",
                    "cursor-pointer",
                    (disabled || option.disabled) &&
                      "cursor-not-allowed hover:text-inherit"
                  )}
                >
                  {option.label}
                </label>
              </Checkbox>
            </div>
          ))}
        </div>
        {error && <div className="text-sm text-destructive ">{error}</div>}
      </div>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
