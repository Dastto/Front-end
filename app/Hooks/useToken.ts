import { useEffect, useState } from "react";

const useToken = () => {
  const [acsToken, setAcsToken] = useState<string | null>(null);

  useEffect(() => {
    setAcsToken(sessionStorage.getItem("access_token"));
  }, []);

  const setAccessToken = (token: string) => {
    sessionStorage.setItem("access_token", token);
    setAcsToken(token);
  };

  const getAccessToken = () => acsToken;

  return { getAccessToken, setAccessToken };
};

export default useToken;
