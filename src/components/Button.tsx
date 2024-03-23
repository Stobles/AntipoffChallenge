import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background font-semibold text-primary-foreground hover:bg-background/90",
        outline: "border border-input bg-transparent",
        "outline-invert":
          "border border-foreground bg-transparent text-primary-foreground",
        ghost: "bg-accent/50 font-semibold text-primary hover:bg-accent p-1",
      },
      size: {
        default: "w-fit h-10 px-4",
        full: "w-full h-10 py-3 px-2",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? <LoaderCircle className="h-4 w-4" /> : children}
      </button>
    );
  }
);
