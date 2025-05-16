import Container from "~/Components/Commans/UiParts/Container";
import Authentication from "~/Components/Authentication";
import useAuth from "~/Hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const index = () => {
  const { login, user, pending } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pending && login()) {
      navigate("/");
    }
  }, [pending]);

  return (
    <>
      {!pending && (
        <Container>
          <Authentication />
        </Container>
      )}
    </>
  );
};

export default index;
