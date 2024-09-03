export const get = async (url, options = null) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
