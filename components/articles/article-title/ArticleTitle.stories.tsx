import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleTitle, { IArticleTitle } from './ArticleTitle';
import { mockArticleTitleProps } from './ArticleTitle.mocks';

export default {
  title: 'templates/ArticleTitle',
  component: ArticleTitle,
  argTypes: {},
} as ComponentMeta<typeof ArticleTitle>;

const Template: ComponentStory<typeof ArticleTitle> = (args) => (
  <ArticleTitle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleTitleProps.base,
} as IArticleTitle;
