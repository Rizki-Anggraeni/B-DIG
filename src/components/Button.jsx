import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition";
  const variants = {
    primary: "bg-primary text-black hover:brightness-95",
    ghost:
      "bg-transparent border border-neutral-700 text-white hover:bg-white/5",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {children}
    </button>
  );
}
