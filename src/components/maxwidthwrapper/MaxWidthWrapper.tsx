import React, { ReactNode } from "react";
import style from "./maxwidth.module.scss";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn(style.first, className)}>{children}</div>;
};

export default MaxWidthWrapper;
