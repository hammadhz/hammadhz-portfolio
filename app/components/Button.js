"use client";
import { useMemo } from "react";
import { collapse } from "@growthops/ext-ts";

const baseClasses = "flex items-center justify-center";

const variantClasses = {
  primary: "bg-accent text-black text-lg",
  secondary: "bg-black text-white text-lg",
};

const sizeClasses = {
  lg: "py-2 px-4 rounded-lg w-full",
  md: "py-2 px-6 rounded-md",
};

const useClasses = (variant, size, className) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className ?? "",
      ]),
    }),
    [variant, size, className]
  );

const Button = ({
  label,
  variant = "primary",
  size = "lg",
  className,
  type,
}) => {
  const classes = useClasses(variant, size, className);
  return (
    <button className={classes.root} type={type}>
      {label}
    </button>
  );
};

export default Button;
