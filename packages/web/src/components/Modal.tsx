import * as React from "react";

interface ModalProps {
  active: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, active }) => {
  if (!active) return null;
  return <div className="Modal">{children}</div>;
};

export default Modal;
