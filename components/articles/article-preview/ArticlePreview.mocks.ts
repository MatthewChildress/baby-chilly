import { IArticlePreview } from './ArticlePreview';

const base: IArticlePreview = {
  sampleTextProp: 'Hello World!',
  title: '',
  image: undefined,
  dateString: undefined,
  author: undefined,
  slug: ''
};

export const mockArticlePreviewProps = {
  base,
};
