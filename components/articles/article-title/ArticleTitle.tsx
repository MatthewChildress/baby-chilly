export interface IArticleTitle {
  sampleTextProp?: string;
}

const ArticleTitle: React.FC<IArticleTitle> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default ArticleTitle;
