"use client";
import React, { useMemo } from "react";
import { collapse } from "@growthops/ext-ts";

const baseClasses = "w-full outline-none block";

const variantClasses = {
  primary: "rounded-lg shadow-sm",
  secondary: "rounded-[10px] placeholder:font-light",
};

const sizeClasses = {
  primary: "px-4 py-2",
  secondary: "py-3 px-3",
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

const Input = ({
  type = "text",
  variant = "primary",
  size = "primary",
  placeholder,
  className,
  eventAction,
  name,
  value,
}) => {
  const classes = useClasses(variant, size, className);
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={classes.root}
      onChange={eventAction}
      placeholder={placeholder}
    />
  );
};

export default Input;
