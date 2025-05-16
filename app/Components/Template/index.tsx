import Profile from "~/Components/Template/Profile";
import Widgets from "~/Components/Template/Widgets";

const Template = () => {
  return (
    <>
      <main className="h-screen flex justify-between">
        <Widgets />
        <Profile />
      </main>
    </>
  );
};

export default Template;
