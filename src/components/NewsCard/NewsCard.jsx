import React from "react";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source.name}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card__link"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
