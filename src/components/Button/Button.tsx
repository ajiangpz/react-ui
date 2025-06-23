import { ButtonHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: [
    "relative inline-flex items-center justify-center gap-2",
    "font-medium transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
  ],
  variants: {
    variant: {
      solid: "",
      outline: "border-2",
      ghost: "bg-transparent hover:bg-gray-50",
      link: "bg-transparent underline-offset-4 hover:underline"
    },
    colorScheme: {
      default: "",
      primary: "",
      success: "",
      warning: "",
      danger: ""
    },
    size: {
      xs: "text-xs px-2 h-6 rounded",
      sm: "text-sm px-3 h-8 rounded-md",
      md: "text-base px-4 h-10 rounded-lg",
      lg: "text-lg px-6 h-12 rounded-lg"
    },
    block: {
      true: "w-full"
    },
    loading: {
      true: "cursor-wait"
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "default",
      class:
        "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500"
    },
    {
      variant: "solid",
      colorScheme: "primary",
      class:
        "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500"
    },

    {
      variant: "solid",
      colorScheme: "success",
      class:
        "bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-500"
    },
    {
      variant: "solid",
      colorScheme: "warning",
      class:
        "bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-500"
    },
    {
      variant: "solid",
      colorScheme: "danger",
      class:
        "bg-danger-500 text-white hover:bg-danger-600 focus-visible:ring-danger-500"
    },
    // Outline variants
    {
      variant: "outline",
      colorScheme: "default",
      class:
        "border-default-500 text-default-500 hover:bg-default-100 focus-visible:ring-default-500"
    },
    {
      variant: "outline",
      colorScheme: "primary",
      class:
        "border-primary-500 text-primary-500 hover:bg-primary-100/50 focus-visible:ring-primary-500"
    },

    {
      variant: "outline",
      colorScheme: "success",
      class:
        "border-success-500 text-success-500 hover:bg-success-100/50 focus-visible:ring-success-500"
    },
    {
      variant: "outline",
      colorScheme: "warning",
      class:
        "border-warning-500 text-warning-500 hover:bg-warning-100/50 focus-visible:ring-warning-500"
    },
    {
      variant: "outline",
      colorScheme: "danger",
      class:
        "border-danger-500 text-danger-500 hover:bg-danger-100/50 focus-visible:ring-danger-500"
    },
    // Ghost variants
    {
      variant: "ghost",
      colorScheme: "primary",
      class:
        "text-primary-500 hover:bg-primary-100/50 focus-visible:ring-primary-500"
    },
    {
      variant: "ghost",
      colorScheme: "default",
      class:
        "text-default-500 hover:bg-default-100/50 focus-visible:ring-default-500"
    },

    {
      variant: "ghost",
      colorScheme: "success",
      class:
        "text-success-500 hover:bg-success-100/50 focus-visible:ring-success-500"
    },
    {
      variant: "ghost",
      colorScheme: "warning",
      class:
        "text-warning-500 hover:bg-warning-100/50 focus-visible:ring-warning-500"
    },
    {
      variant: "ghost",
      colorScheme: "danger",
      class:
        "text-danger-500 hover:bg-danger-100/50 focus-visible:ring-danger-500"
    },
    // Link variants
    {
      variant: "link",
      colorScheme: "primary",
      class:
        "text-primary-500 hover:text-primary-600 focus-visible:ring-primary-500"
    },

    {
      variant: "link",
      colorScheme: "success",
      class:
        "text-success-500 hover:text-success-600 focus-visible:ring-success-500"
    },
    {
      variant: "link",
      colorScheme: "warning",
      class:
        "text-warning-500 hover:text-warning-600 focus-visible:ring-warning-500"
    },
    {
      variant: "link",
      colorScheme: "danger",
      class:
        "text-danger-500 hover:text-danger-600 focus-visible:ring-danger-500"
    }
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "primary",
    size: "md"
  }
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
      colorScheme,
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
          colorScheme,
          block,
          loading,
          className
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
