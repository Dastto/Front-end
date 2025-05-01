import Left from "~/Components/Landing/Sides/Left";
import Right from "~/Components/Landing/Sides/Right";

const Landing = () => {
  return (
    <div className="h-screen">
      <main className="flex justify-between w-full pt-5 h-full">
        <div className="flex-1/2">
          <Left />
        </div>
        <div className="flex-1/2">
          <Right />
        </div>
      </main>
    </div>
  );
};

export default Landing;
