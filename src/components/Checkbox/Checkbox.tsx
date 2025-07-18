"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  children?: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, children, ...props }, ref) => {
  const id = React.useId();

  return (
    <div className="flex items-center space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          
          "peer h-4 w-4 shrink-0 rounded-sm border border-input",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "hover:border-primary transition-all duration-300",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-current animate-scale-in-center"
          )}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            "select-none", // 防止文本被选中
            "cursor-pointer" // 显示点击手势
          )}
        >
          {children}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
