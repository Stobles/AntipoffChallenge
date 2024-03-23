import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
  children: ReactNode;
};

export const Modal = ({
  isVisible,
  toggleVisibility,
  children,
}: Readonly<ModalProps>): JSX.Element | null => {
  const modal: JSX.Element = (
    <>
      <div
        className="fixed flex items-center justify-center w-full h-full top-0 left-0 bg-black/10"
        onClick={toggleVisibility}
      ></div>
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-foreground rounded-md min-w-[400px] shadow-popover p-2"
        aria-modal
        aria-label="Modal Details"
        role="dialog"
      >
        {children}
      </div>
    </>
  );

  return isVisible ? createPortal(modal, document.body) : null;
};
