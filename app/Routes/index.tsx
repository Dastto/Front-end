import Button from "~/Components/Commans/UiParts/Button";
import { EmojiNormal } from "iconsax-reactjs";

const index = () => {
  return (
    <>
      <div className={"flex justify-center items-center gap-4 flex-col"}>
        <div className={"flex gap-5 items-center"}>
          <Button variant={"blue"} size={"small"}>
            بزن بریم
            <EmojiNormal size={12} />
          </Button>
          <Button variant={"blue"} size={"medium"}>
            بزن بریم
            <EmojiNormal size={15} />
          </Button>
          <Button variant={"blue"} size={"large"}>
            بزن بریم
            <EmojiNormal size={24} />
          </Button>
        </div>
        <div className={"flex gap-5 items-center"}>
          <Button variant={"black"} size={"small"}>
            بزن بریم
            <EmojiNormal size={12} strokeLinecap={"round"} />
          </Button>
          <Button variant={"black"} size={"medium"}>
            بزن بریم
            <EmojiNormal size={15} />
          </Button>
          <Button variant={"black"} size={"large"}>
            بزن بریم
            <EmojiNormal size={24} />
          </Button>
        </div>
        <div className={"flex gap-5 items-center"}>
          <Button variant={"white"} size={"small"}>
            بزن بریم
            <EmojiNormal size={12} />
          </Button>
          <Button variant={"white"} size={"medium"}>
            بزن بریم
            <EmojiNormal size={15} />
          </Button>
          <Button variant={"white"} size={"large"}>
            بزن بریم
            <EmojiNormal size={24} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
