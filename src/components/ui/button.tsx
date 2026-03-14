import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer",
          {
            "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm":
              variant === "default",
            "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-muted)]":
              variant === "secondary",
            "border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:border-[var(--color-primary)]/30 text-[var(--color-foreground)]":
              variant === "outline",
            "hover:bg-[var(--color-primary)]/8 text-[var(--color-foreground)] hover:text-[var(--color-primary)]":
              variant === "ghost",
            "underline-offset-4 hover:underline text-[var(--color-primary)]":
              variant === "link",
            "h-10 py-2 px-4": size === "default",
            "h-9 px-3 rounded-lg": size === "sm",
            "h-12 px-8 rounded-2xl text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
