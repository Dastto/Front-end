import type { Route } from "./+types";

export async function loader({ params }: Route.LoaderArgs) {
  return await fetch("https://jsonplaceholder.typicode.com/posts/");
}

const index = ({ loaderData }: Route.ComponentProps) => {
  return <>{loaderData[0].body}</>;
};

export default index;
