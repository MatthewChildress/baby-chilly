import { IHeroArticle } from './HeroArticle';

const base: IHeroArticle = {
  sampleTextProp: 'Hello World!',
  title: '',
  image: {
    url: undefined
  },
  dateString: undefined,
  author: undefined,
  slug: ''
};

export const mockHeroArticleProps = {
  base,
};
