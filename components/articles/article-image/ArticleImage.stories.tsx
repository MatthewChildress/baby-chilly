import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleImage, { IArticleImage } from './ArticleImage';
import { mockArticleImageProps } from './ArticleImage.mocks';

export default {
  title: 'templates/ArticleImage',
  component: ArticleImage,
  argTypes: {},
} as ComponentMeta<typeof ArticleImage>;

const Template: ComponentStory<typeof ArticleImage> = (args) => (
  <ArticleImage {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleImageProps.base,
} as IArticleImage;
