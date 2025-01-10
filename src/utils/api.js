export const baseURL = "https://newsapi.org/v2";
export const apiKey = "7966bae814444ba9ab1daf995c48eaa8";

const handleServerResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
};

export function fetchNews(query) {
  const url = `${baseURL}/everything?q=${encodeURIComponent(
    query
  )}&apiKey=${apiKey}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      throw error;
    });
}
