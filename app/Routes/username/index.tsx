import type { Route } from "../+types";
import Template from "~/Components/Template";
import { useParams } from "react-router";
import Container from "~/Components/Commans/UiParts/Container";

export async function loader({ params }: Route.LoaderArgs) {
  console.log(params.username);
  return await fetch("https://jsonplaceholder.typicode.com/todos/1");
}

const index = ({ loaderData }: Route.ComponentProps) => {
  const params = useParams();
  console.log(loaderData, params.username);

  return (
    <>
      <Container className={"!w-[calc(100%-140px)]"}>
        <Template />
      </Container>
    </>
  );
};

export default index;
