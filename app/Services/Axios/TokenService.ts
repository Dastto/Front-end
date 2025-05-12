export const getAccessToken = () => {
  return sessionStorage.getItem("access_token");
};

export const setAccessToken = (token: string) => {
  sessionStorage.setItem("access_token", token);
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem("refresh_token", token);
};
