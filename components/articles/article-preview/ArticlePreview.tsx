export interface IArticlePreview {
  sampleTextProp?: string;
}

const ArticlePreview: React.FC<IArticlePreview> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default ArticlePreview;
