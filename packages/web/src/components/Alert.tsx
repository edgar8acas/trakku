import * as React from "react";

export interface AlertProps {
  title?: string;
  message?: string;
  type?: "error" | "warning" | "info" | "success" | "default";
  className?: string;
}
export const Alert: React.FC<AlertProps> = ({ message, type = "default" }) => {
  const mode = `alert--${type}`;
  return (
    <div className={["alert", mode].join(" ")}>
      <p>{message}</p>
    </div>
  );
};

//TODO: Floating alert
export const FloatingAlert: React.FC<AlertProps> = (props) => {
  return <Alert {...props} className="alert--floating"></Alert>;
};
