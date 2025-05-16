import Landing from "~/Components/Landing";
import Container from "~/Components/Commans/UiParts/Container";
import { useEffect } from "react";
import POST from "~/Services/Axios/Methods/POST";

const index = () => {
  useEffect(() => {
    POST("/singers", {}).then((r) => console.log(r));
  }, []);
  return (
    <>
      <Container>
        <Landing />
      </Container>
    </>
  );
};

export default index;
