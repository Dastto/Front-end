import { EmojiNormal } from "iconsax-reactjs";
import Button from "~/Components/Commans/UiParts/Button";

const Right = () => {
  return (
    <>
      <h1 className={"text-5xl font-semibold leading-[80px] mt-[100px]"}>
        <span>لینک ساختن،</span>
        <br />
        <span>ولی خوشگل‌تر، راحت‌تر،</span>
        <br />
        <span>دستو‌وارتر.</span>
      </h1>
      <p className={"text-[#C5C5CF] text-[18px] mt-2"}>
        دستو یه لینک می‌سازه که حرف می‌زنه.
      </p>
      <Button variant={"black"} size={"large"} className={"mt-6"}>
        <EmojiNormal size={24} />
        <span>لینک میخوام</span>
      </Button>
    </>
  );
};

export default Right;
