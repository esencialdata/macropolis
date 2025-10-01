import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-brand-teal text-white hover:bg-brand-teal/90",
        secondary: "bg-white text-brand-teal border border-brand-teal hover:bg-brand-light/60",
        ghost: "bg-transparent text-brand-teal hover:bg-brand-light/60"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-4",
        lg: "h-14 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface PrimaryButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props} />;
  }
);
PrimaryButton.displayName = "PrimaryButton";

export function LinkButton(props: PrimaryButtonProps & { href: string }) {
  const { href, ...rest } = props;
  return (
    <PrimaryButton asChild {...rest}>
      <Link href={href} prefetch={false}>
        {props.children}
      </Link>
    </PrimaryButton>
  );
}
