import ShareLink from "~/Components/Template/ShareLink";
import Divider from "~/Components/Commans/UiParts/Divider";

const ActionBar = () => {
  return (
    <>
      <div
        className={
          "min-h-14 rounded-[20px] flex items-center gap-4 bg-white/80 backdrop-blur-[14px] p-3 shadow-action fixed bottom-10 right-1/2 translate-x-1/2"
        }
      >
        <ShareLink />
        <Divider className={"!h-5 rounded-full"} />
      </div>
    </>
  );
};

export default ActionBar;
