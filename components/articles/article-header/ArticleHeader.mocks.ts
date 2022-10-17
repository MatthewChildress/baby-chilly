import { IArticleHeader } from './ArticleHeader';

const base: IArticleHeader = {
  sampleTextProp: 'Hello World!',
  title: '',
  image: undefined,
  date: undefined,
  author: undefined,
  slug: ''
};

export const mockArticleHeaderProps = {
  base,
};
