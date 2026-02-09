import * as React from "react";
import { MoveLeft, MoveRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/app/components/lib/utils";
import { ButtonProps, buttonVariants } from "@/app/components/ui/button";

/* ---------------- Pagination Root ---------------- */
const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

/* ---------------- Pagination Content ---------------- */
const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

/* ---------------- Pagination Item ---------------- */
const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

/* ---------------- Pagination Link ---------------- */
type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  children,
  ...props
}: PaginationLinkProps) => {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
PaginationLink.displayName = "PaginationLink";

/* ---------------- Pagination Previous ---------------- */
const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 flex items-center", className)}
    {...props}
  >
    <MoveLeft className="h-4 w-4 align-middle" />
    <span className="align-middle">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

/* ---------------- Pagination Next ---------------- */
const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 flex items-center", className)}
    {...props}
  >
    <span className="align-middle">Next</span>
    <MoveRight className="h-4 w-4 align-middle" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

/* ---------------- Pagination Ellipsis ---------------- */
const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

/* ---------------- Exports ---------------- */
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};