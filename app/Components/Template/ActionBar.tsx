import ShareLinkButton from "~/Components/Template/Partials/ShareLinkButton";
import Divider from "~/Components/Commans/UiParts/Divider";
import Modal from "~/Components/Commans/UiParts/Modal";
import React, { useState } from "react";
import MusicAction from "~/Components/Widget/Music/MusicAction";
import DinoAction from "~/Components/Widget/Dino/DinoAction";

const ActionBar = () => {
  const [shareModal, setShareModal] = useState(false);
  return (
    <>
      <div
        className={
          "min-h-14 rounded-[20px] flex items-center gap-4 bg-white/80 backdrop-blur-[14px] p-3 shadow-action fixed bottom-10 right-1/2 translate-x-1/2"
        }
      >
        <ShareLinkButton onClick={() => setShareModal((prev) => !prev)} />
        <Divider className={"!h-5 rounded-full"} />
        <MusicAction />
        <DinoAction />
      </div>

      <Modal
        show={shareModal}
        onClose={() => setShareModal(false)}
        title={"لینک خود را به اشتراک بگذارید."}
      >
        <div className="mt-7 rounded-[20px] bg-white p-6 shadow-[0px_0px_1px_rgba(0,0,0,0.2),0px_2px_3px_rgba(0,0,0,0.04)] xl:min-h-[min(60vh,550px)]"></div>
      </Modal>
    </>
  );
};

export default ActionBar;
