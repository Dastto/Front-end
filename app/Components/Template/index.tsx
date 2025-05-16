import Profile from "~/Components/Template/Profile";
import Widgets from "~/Components/Template/Widgets";

const Template = () => {
  return (
    <>
      <main className="h-screen flex justify-end">
        <Profile />
        <Widgets />
      </main>
    </>
  );
};

export default Template;
