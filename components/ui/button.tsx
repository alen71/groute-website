import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-secondary-foreground hover:bg-secondary-2",
        blue: "bg-primary text-primary-foreground hover:bg-primary-strong",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        soft: "bg-muted text-foreground border border-border hover:bg-card",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        glass:
          "border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15",
        link: "text-primary underline-offset-4 hover:underline px-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-[13.5px]",
        default: "h-11 px-5 text-[14.5px]",
        lg: "h-13 px-6 text-[15px]",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
