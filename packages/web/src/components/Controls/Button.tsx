import * as React from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  primary?: boolean;
  label: string;
  disabled?: boolean;
  type: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  primary = false,
  type = "button",
  disabled = false,
  label,
  ...props
}) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      className={["button", `button--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
