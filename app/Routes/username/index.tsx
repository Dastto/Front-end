import type { Route } from "../+types";
import Template from "~/Components/Template";
import { useParams } from "react-router";
import ActionBar from "~/Components/Template/ActionBar";

export async function loader({ params }: Route.LoaderArgs) {
  console.log(params.username);
  return await fetch("https://jsonplaceholder.typicode.com/todos/10");
}

const index = ({ loaderData }: Route.ComponentProps) => {
  const params = useParams();
  console.log(loaderData, params.username);

  return (
    <>
      <Template />
      <ActionBar />
    </>
  );
};

export default index;
