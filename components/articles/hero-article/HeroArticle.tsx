export interface IHeroArticle {
  sampleTextProp?: string;
}

const HeroArticle: React.FC<IHeroArticle> = ({ sampleTextProp }) => {
  return <>{sampleTextProp}</>;
};

export default HeroArticle;
