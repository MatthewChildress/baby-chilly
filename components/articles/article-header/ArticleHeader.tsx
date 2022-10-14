export interface IArticleHeader {
  sampleTextProp?: string;
}

const ArticleHeader: React.FC<IArticleHeader> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default ArticleHeader;
