import Left from "~/Components/Landing/Sides/Left";
import Right from "~/Components/Landing/Sides/Right";

const Landing = () => {
  return (
    <>
      <main className="flex justify-between w-full pt-5">
        <div className="basis-[59%]">
          <Right />
        </div>
        <div className="basis-[41%]">
          <Left />
        </div>
      </main>
    </>
  );
};

export default Landing;
