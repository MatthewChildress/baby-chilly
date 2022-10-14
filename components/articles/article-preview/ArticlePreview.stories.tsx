import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlePreview, { IArticlePreview } from './ArticlePreview';
import { mockArticlePreviewProps } from './ArticlePreview.mocks';

export default {
  title: 'templates/ArticlePreview',
  component: ArticlePreview,
  argTypes: {},
} as ComponentMeta<typeof ArticlePreview>;

const Template: ComponentStory<typeof ArticlePreview> = (args) => (
  <ArticlePreview {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticlePreviewProps.base,
} as IArticlePreview;
