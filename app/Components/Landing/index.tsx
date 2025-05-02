import Left from "~/Components/Landing/Sides/Left";
import Right from "~/Components/Landing/Sides/Right";

const Landing = () => {
  return (
    <>
      <main className="flex justify-between w-full pt-5">
        <div className="flex-1/2">
          <Right />
        </div>
        <div className="flex-1/2">
          <Left />
        </div>
      </main>
    </>
  );
};

export default Landing;
