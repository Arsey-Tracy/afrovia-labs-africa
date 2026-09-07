import * as React from "react"
import { cn } from "@/lib/utils"

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
  children?: React.ReactNode
}

const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ asChild = false, children, className, ...props }, ref) => {
    if (asChild) {
      const child = React.Children.only(children)

      if (!React.isValidElement(child)) {
        return null
      }

      const childProps = child.props as {
        className?: string
      }

      return React.cloneElement(
        child as React.ReactElement<Record<string, unknown>>,
        {
          ...props,
          ...childProps,
          ref,
          className: cn(
            className ?? "",
            childProps.className ?? ""
          ),
        }
      )
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={className}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Slot.displayName = "Slot"

export { Slot }
export type { SlotProps }
