import React, { useEffect, useState } from "react";
import Modal from "~/Components/Commans/UiParts/Modal";

interface MusicModalPropsTypes {
  show: boolean;
  onClose: () => void;
}

const MusicModal: React.FC<MusicModalPropsTypes> = ({ show, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <Modal
        show={isOpen}
        onClose={handleClose}
        className={"!w-[700px]"}
        title={"موزیک خود را انتخاب کنید!"}
      >
        <div className="mt-7 rounded-[20px] bg-white p-6 shadow-[0px_0px_1px_rgba(0,0,0,0.2),0px_2px_3px_rgba(0,0,0,0.04)]"></div>
      </Modal>
    </>
  );
};

export default MusicModal;
