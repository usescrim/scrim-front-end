import React from "react";

type ModalType = {
  open: false | true;
  onClose?: Function;
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ children, open, onClose, className }: ModalType) => {
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen z-50 bg-[#000000CC] ${
        open ? "block" : "hidden"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Modal;
