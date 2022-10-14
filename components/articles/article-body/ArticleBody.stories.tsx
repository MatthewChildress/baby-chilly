import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleBody, { IArticleBody } from './ArticleBody';
import { mockArticleBodyProps } from './ArticleBody.mocks';

export default {
  title: 'templates/ArticleBody',
  component: ArticleBody,
  argTypes: {},
} as ComponentMeta<typeof ArticleBody>;

const Template: ComponentStory<typeof ArticleBody> = (args) => (
  <ArticleBody {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleBodyProps.base,
} as IArticleBody;
