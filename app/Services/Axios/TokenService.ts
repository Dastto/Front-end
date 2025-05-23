const ACCESS_TOKEN = "dasttoTikToken";

export const getAccessToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

export const setAccessToken = (token: string) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};
