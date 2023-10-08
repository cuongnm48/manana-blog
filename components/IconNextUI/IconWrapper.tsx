import React from "react";
import { cn } from "@nextui-org/react";

type IconWrapperType = {
  children?: any;
  className?: string;
};

export const IconWrapper = ({ children, className }: IconWrapperType) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);
