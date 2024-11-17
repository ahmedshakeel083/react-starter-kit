import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-secondary disabled:bg-muted disabled:shadow-buttons-disabled",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "bg-primary text-white text-md font-semibold shadow-buttons hover:bg-primary-hover active:bg-primary-active",
        "primary-outline":
          "border-[1.5px] border-primary text-primary text-md font-semibold hover:bg-primary hover:text-white active:bg-primary-active shadow-buttons disabled:border-[#B4C0C7] disabled:text-[#B4C0C7] disabled:bg-background disabled:shadow-buttons-disabled",
        "primary-2lg-outline":
          "border-[1.5px] border-primary text-primary text-xs font-semibold flex items-center hover:bg-background hover:text-primary disabled:border-[#B4C0C7] disabled:text-[#B4C0C7] disabled:bg-background disabled:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        "2lg": "w-[150px] h-10 px-5 py-3 rounded-full",
        xl: "h-12 w-[284px] px-4 rounded-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
