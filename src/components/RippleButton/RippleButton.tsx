// components/RippleButton.tsx
import React, { useRef } from "react";
import { button } from "../Button/Button";
import { type VariantProps } from "tailwind-variants";

export interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  loading?: boolean;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(
  (
    {
      className,
      children,
      variant,
      colorScheme,
      size,
      block,
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${
        event.clientX - button.getBoundingClientRect().left - radius
      }px`;
      circle.style.top = `${
        event.clientY - button.getBoundingClientRect().top - radius
      }px`;
      circle.className = "ripple";

      const ripple = button.getElementsByClassName("ripple")[0];
      if (ripple) ripple.remove();

      button.appendChild(circle);
    };

    return (
      <button
        ref={ref || buttonRef}
        className={button({
          variant,
          colorScheme,
          size,
          block,
          loading,
          className
        }) + "  overflow-hidden"}
        disabled={disabled || loading}
        onClick={e => {
          if (!disabled) {
            createRipple(e);
            props.onClick?.(e);
          }
        }}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-5 h-5 animate-spin text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5 0 0 5 0 12h4z"
              />
            </svg>
          </span>
        )}
        <span className={loading ? "invisible" : undefined}>{children}</span>
      </button>
    );
  }
);
