import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className={"flex justify-center items-center gap-2"}>
        <h2 className={"text-3xl font-medium"}>Dastto</h2>
        <img
          src={"/Images/dastto-logo-1.svg"}
          alt={"Dastto"}
          className={"w-12"}
        />
      </Link>
    </>
  );
};

export default Logo;
