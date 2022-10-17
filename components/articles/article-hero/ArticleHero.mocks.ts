import { IArticleHero } from './ArticleHero';

const base: IArticleHero = {
  sampleTextProp: 'Hello World!',
  title: '',
  image: undefined,
  dateString: undefined,
  author: undefined,
  slug: ''
};

export const mockArticleHeroProps = {
  base,
};
