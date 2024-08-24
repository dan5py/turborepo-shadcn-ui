import { cn } from "@repo/ui/lib/utils";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface ItemMenuLandingProps extends LinkProps {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

interface MenuLandingProps {
  className?: string;
  items: ItemMenuLandingProps[];
}

const MenuLanding = (props: MenuLandingProps) => {
  const { className, items } = props;

  return (
    <div
      className={cn(
        "flex items-center justify-between h-16 px-4 text-gray-400 text-sm gap-8",
        className,
      )}
    >
      {items.map(({ label, startIcon, endIcon, href, ...resItemProps }) => (
        <Link key={label} href={href} {...resItemProps}>
          <div className="flex items-center gap-1">
            {startIcon}
            <span>{label}</span>
            {endIcon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuLanding;
