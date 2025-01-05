import NewsCard from "./NewsCard";

function NewsCardList({ articles }) {
  return (
    <section className="news-card-list">
      {articles.length ? (
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      ) : (
        <p className="news-card-list__empty">No results found</p>
      )}
    </section>
  );
}

export default NewsCardList;
