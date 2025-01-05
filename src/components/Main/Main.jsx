import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="main-page">
      <div className="main-page__container">
        <h1 className="main-page__title">What is going on in the world?</h1>
        <p className="main-page__description">
          Find the latest news on any topic and save them in your personal
          account.{" "}
        </p>
        <form className="main-page__input-container" id="search-form">
          <input
            placeholder="Enter topic"
            className="main-page__input"
            type="text"
          />
          <button type="submit" className="main-page__button">
            Search
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
