import NewsCard from "../NewsCard/NewsCard";

function NewsCardsList({ articles }) {
  console.log("Articles:", articles);
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

export default NewsCardsList;
