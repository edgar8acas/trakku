import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { CSSTransition } from "react-transition-group";

type CloseFunction = () => void;
export interface ModalProps {
  active: boolean;
  onClose: CloseFunction;
  render?(close: CloseFunction): React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  active,
  onClose,
  render,
  title,
}) => {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // if (!active) return null;
  return (
    <CSSTransition in={active} timeout={300} classNames="Modal" unmountOnExit>
      <div className="Modal">
        <div className="Modal-wrapper">
          <div className="Modal-header">
            <h2>{title}</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="Modal-close-icon"
              onClick={onClose}
              size="lg"
            />
          </div>

          <div className="Modal-content">
            {children ? children : render ? render(onClose) : null}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
