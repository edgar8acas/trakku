import * as React from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary = false,
  label,
  ...props
}) => {
  const type = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, type].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
