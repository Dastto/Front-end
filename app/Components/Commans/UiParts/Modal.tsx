import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

interface ModalPropsTypes {
  show: boolean;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalPropsTypes> = ({
  children,
  show,
  className,
  onClose,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <>
      <AnimatePresence>
        {/*Overlay*/}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "inline-block" }}
            exit={{ opacity: 0, display: "none" }}
            className={
              "top-0 right-0 fixed w-full h-[100vh] bg-black/30 z-[1001]"
            }
            onClick={handleClose}
            key={"overlay"}
          />
        )}
        {/*Modal*/}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            className={`!max-w-[90%] z-[1002] overflow-hidden !rounded-[44px] !bg-[#F9F9F9] !px-6 !py-6 xl:!pt-8 fixed top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 shadow-modal w-screen ${className}`}
            key={"modal"}
          >
            <div className={"flex items-center justify-between"}>
              <h1 className={"text-xl font-semibold"}>{title}</h1>
              <div
                onClick={handleClose}
                className={
                  "size-8 rounded-full bg-black/[0.02] cursor-pointer flex justify-center items-center hover:bg-black/[0.04] active:bg-black/[0.06]"
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.36569 2.23431C3.05327 1.9219 2.54673 1.9219 2.23431 2.23431C1.9219 2.54673 1.9219 3.05327 2.23431 3.36569L6.06274 7.19411L2.23431 11.0225C1.9219 11.335 1.9219 11.8415 2.23431 12.1539C2.54673 12.4663 3.05327 12.4663 3.36569 12.1539L7.19411 8.32548L11.0225 12.1539C11.335 12.4663 11.8415 12.4663 12.1539 12.1539C12.4663 11.8415 12.4663 11.335 12.1539 11.0225L8.32548 7.19411L12.1539 3.36569C12.4663 3.05327 12.4663 2.54673 12.1539 2.23431C11.8415 1.9219 11.335 1.92189 11.0225 2.23431L7.19411 6.06274L3.36569 2.23431Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
