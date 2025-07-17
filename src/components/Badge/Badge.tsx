import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      success:
        "border-transparent bg-success text-success-foreground hover:bg-success/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      warning:
        "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
      danger:
        "border-transparent bg-danger text-danger-foreground hover:bg-danger/80",
      outline: "border border-default text-default hover:bg-default/10"
    },
    size: {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-3 py-1",
      lg: "text-base px-4 py-1.5"
    }
  },
  defaultVariants: {
    variant: "success",
    size: "md"
  }
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  count?: number;
}

function Badge({ className, variant, size, count, ...props }: BadgeProps) {
  if (typeof count === 'undefined') {
    return <div className={badgeVariants({ variant, size, className })} {...props} />;
  }

  return (
    <div className="relative inline-flex">
      {props.children}
      <div className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-danger text-danger-foreground text-xs px-1">
        {count}
      </div>
    </div>
  );
}

export { Badge, badgeVariants };
