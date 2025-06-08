import Container from "~/Components/Commans/UiParts/Container";
import Music from "~/Components/Music";
import type { Route } from "../+types";

// export async function loader() {
//   return await GET("/songs", {}, "pagination", false);
// }

const index = ({ loaderData }: Route.ComponentProps) => {
  // const { setData } = useMusic();
  //
  // useEffect(() => {
  //   setData(loaderData);
  // }, []);

  return (
    <>
      <Container>
        <Music />
      </Container>
    </>
  );
};

export default index;
