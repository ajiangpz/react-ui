import { ButtonHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: [
    "relative inline-flex items-center justify-center gap-2",
    "font-medium transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
  ],
  variants: {
    variant: {
      default: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      solid: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input  bg-background hover:bg-accent hover:text-accent-foreground ",
      ghost: "bg-transparent hover:bg-gray-50",
      link: "bg-transparent underline-offset-4 hover:underline",
    },

    size: {
      xs: "text-xs px-2 h-6 rounded",
      sm: "text-sm px-3 h-8 rounded-md",
      md: "text-base px-4 h-10 rounded-lg",
      lg: "text-lg px-6 h-12 rounded-lg",
    },
    block: {
      true: "w-full",
    },
    loading: {
      true: "cursor-wait",
    },
  },

  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {
  loading?: boolean;
}

export const FancyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block,
      loading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={button({
          variant,
          size,
          block,
          loading,
          className,
        })}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="h-[1em] w-[1em] animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span className={loading ? "invisible" : undefined}>{children}</span>
      </button>
    );
  }
);
