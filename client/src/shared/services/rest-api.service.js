const BASE_URL = "http://localhost:8000"

export const get = async (url, options = null) => {
  return fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
