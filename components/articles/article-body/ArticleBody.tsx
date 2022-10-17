export interface IArticleBody {
  sampleTextProp?: string;
  content: any;
}

const ArticleBody: React.FC<IArticleBody> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticleBody;
