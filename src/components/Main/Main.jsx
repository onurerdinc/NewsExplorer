import React, { useState } from "react";
import "./Main.css";
import { fetchNews } from "../../utils/api";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import Preloader from "../Preloader/Preloader";

function Main() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a valid topic.");
      return;
    }

    setLoading(true);
    setError("");

    fetchNews(query.trim())
      .then((response) => {
        if (response.articles && response.articles.length > 0) {
          setArticles(response.articles);
        } else {
          setError("No articles found for the given topic.");
          setArticles([]);
        }
      })
      .catch(() => {
        setError("Failed to fetch news. Please try again later.");
        setArticles([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="main-page">
      <div className="main-page__container">
        <h1 className="main-page__title">What is going on in the world?</h1>
        <p className="main-page__description">
          Find the latest news on any topic and save them in your personal
          account.{" "}
        </p>
        <form
          className="main-page__input-container"
          id="search-form"
          onSubmit={handleSearch}
        >
          {loading && <Preloader />}
          <input
            placeholder="Enter topic"
            className="main-page__input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="main-page__button">
            {loading ? "Searching" : "Search"}
          </button>
        </form>
        {error && <p className="main-page__error">{error}</p>}
        {!loading && !error && articles.length > 0 && (
          <NewsCardsList articles={articles} />
        )}
      </div>
    </main>
  );
}

export default Main;
