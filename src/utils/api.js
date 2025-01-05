export const baseURL = "https://newsapi.org/v2";
export const apiKey = "7966bae814444ba9ab1daf995c48eaa8";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const fetchNews = async (query) => {
  const url = `${baseURL}/everything?q=${encodeURIComponent(
    query
  )}&apiKey=${apiKey}`;
  try {
    const res = await fetch(url);
    return handleServerResponse(res);
  } catch (err) {
    console.error("Error fetching news:", err);
    throw err;
  }
};
