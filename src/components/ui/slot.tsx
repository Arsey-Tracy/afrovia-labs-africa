import * as React from "react"
import { cn } from "@/lib/utils"

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
  children: React.ReactNode
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ asChild, children, className, ...props }, ref) => {
    if (asChild) {
      const Child = React.Children.only(children) as React.ReactElement<{ className?: string }>
      const childProps = Child.props as { className?: string }

      const mergedProps = {
        ...props,
        ...childProps,
        ref,
        className: cn(className, childProps.className),
      }

      return React.cloneElement(Child, mergedProps)
    }

    return (
      <div ref={ref as React.Ref<HTMLDivElement>} className={className} {...props}>
        {children}
      </div>
    )
  }
)

Slot.displayName = "Slot"

export { Slot }
export type { SlotProps }
