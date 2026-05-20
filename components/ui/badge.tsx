import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border font-medium w-fit shrink-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary-soft text-primary-strong border-primary-soft",
        secondary:
          "bg-muted text-muted-foreground border-border",
        outline:
          "bg-background text-muted-foreground border-border",
        dark: "bg-secondary text-secondary-foreground border-secondary",
        success: "bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]",
        warning: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        glass:
          "bg-white/8 text-white border-white/14 backdrop-blur",
      },
      size: {
        sm: "px-2 h-5 text-[11px]",
        default: "px-2.5 h-6 text-[11.5px]",
        lg: "px-3 h-7 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { badgeVariants };
