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

const TextArea = ({
  variant = "primary",
  size = "primary",
  placeholder,
  className,
  eventAction,
  name,
  rows,
  cols,
  value,
}) => {
  const classes = useClasses(variant, size, className);
  return (
    <textarea
      name={name}
      className={classes.root}
      value={value}
      onChange={eventAction}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    ></textarea>
  );
};

export default TextArea;
