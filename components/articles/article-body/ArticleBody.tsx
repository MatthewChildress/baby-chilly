export interface IArticleBody {
  sampleTextProp?: string;
}

const ArticleBody: React.FC<IArticleBody> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default ArticleBody;
