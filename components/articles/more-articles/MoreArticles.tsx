export interface IMoreArticles {
  sampleTextProp?: string;
}

const MoreArticles: React.FC<IMoreArticles> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default MoreArticles;
