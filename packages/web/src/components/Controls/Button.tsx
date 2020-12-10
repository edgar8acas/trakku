import * as React from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  primary?: boolean;
  label?: string;
  disabled?: boolean;
  type?: string;
  isLink?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary = false,
  type = "button",
  isLink = false,
  label,
  ...props
}) => {
  const mode = primary ? "button--primary" : "button--secondary";
  const link = isLink ? "button--link" : null;
  return (
    <button
      className={["button", `button--${size}`, mode, link].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
