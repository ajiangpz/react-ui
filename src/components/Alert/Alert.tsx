import * as React from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"

const alertVariants = tv({
  base: "relative w-full rounded-lg border",
  variants: {
    variant: {
      default: "bg-default text-foreground",
      destructive: "border-danger/50 text-danger dark:border-danger [&>svg]:text-danger",
      success: "border-success/50 bg-success/10 text-success dark:border-success [&>svg]:text-success",
      warning: "border-warning/50 bg-warning/10 text-warning dark:border-warning [&>svg]:text-warning",
      info: "border-info/50 bg-info/10 text-info dark:border-info [&>svg]:text-info",
    },
    size: {
      sm: "p-3 text-sm [&>svg]:h-4 [&>svg]:w-4 [&>svg]:left-3 [&>svg]:top-3 [&>svg~*]:pl-6",
      default: "p-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
      lg: "p-6 text-lg [&>svg]:h-6 [&>svg]:w-6 [&>svg]:left-6 [&>svg]:top-6 [&>svg~*]:pl-9",
    },
    hasIcon: {
      true: "[&>svg]:absolute [&>svg]:text-foreground [&>svg+div]:translate-y-[-3px]",
      false: "",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    hasIcon: false,
  },
  compoundVariants: [
    {
      variant: ["destructive", "success", "warning", "info"],
      className: "[&>svg]:text-current",
    },
  ],
})

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, size, hasIcon: !!icon }), className)}
      {...props}
    >
      {icon}
      {children}
    </div>
  )
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }