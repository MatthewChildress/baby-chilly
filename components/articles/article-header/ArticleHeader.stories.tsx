import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleHeader, { IArticleHeader } from './ArticleHeader';
import { mockArticleHeaderProps } from './ArticleHeader.mocks';

export default {
  title: 'templates/ArticleHeader',
  component: ArticleHeader,
  argTypes: {},
} as ComponentMeta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = (args) => (
  <ArticleHeader {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleHeaderProps.base,
} as IArticleHeader;
