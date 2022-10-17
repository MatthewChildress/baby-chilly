import ArticlePreview from '../article-preview/ArticlePreview';

export interface IMoreArticles {
  sampleTextProp?: string;
  articles?: any;
}

const MoreArticles: React.FC<IMoreArticles> = ({ articles }) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {articles.map((article: any) => (
          <ArticlePreview
            key={article.attributes.slug}
            title={article.attributes.title}
            image={article.attributes.image}
            dateString={article.attributes.dateString}
            author={article.attributes.author}
            slug={article.attributes.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreArticles;
