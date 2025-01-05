import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">What’s going on in the world?</h1>
        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
