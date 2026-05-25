"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn("border-border border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        "group text-foreground hover:text-primary-strong focus-visible:text-primary-strong flex flex-1 items-start justify-between gap-6 py-5 text-left text-[17px] font-semibold transition-colors outline-none",
        className,
      )}
      {...props}
    >
      {children}
      <span className="border-border bg-background text-foreground group-data-[state=open]:border-secondary group-data-[state=open]:bg-secondary group-data-[state=open]:text-secondary-foreground flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors">
        <Plus
          className="size-3.5 group-data-[state=open]:hidden"
          strokeWidth={2.2}
        />
        <Minus
          className="hidden size-3.5 group-data-[state=open]:block"
          strokeWidth={2.2}
        />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className="text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-[15px] leading-relaxed"
    {...props}
  >
    <div className={cn("pr-12 pb-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
