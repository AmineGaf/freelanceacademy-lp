import { cn } from "@libs/utils";
import React, { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  className?: string;
  noDown?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className, noDown, onClick }: ICard) => {
  return (
    <div
      className={cn(
        "rounded-3xl border-solid border-transparent [&_div]:rounded-[inherit] [&_img]:rounded-[inherit]",
        className,
        noDown ? "" : " after:shadow-card-border-down"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
