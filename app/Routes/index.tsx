import Landing from "~/Components/Landing";
import Container from "~/Components/Commans/UiParts/Container";
import { useEffect } from "react";
import GET from "~/Services/Axios/Methods/GET";
import POST from "~/Services/Axios/Methods/POST";
import logo from "~/Components/Commans/Header/Logo";

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
