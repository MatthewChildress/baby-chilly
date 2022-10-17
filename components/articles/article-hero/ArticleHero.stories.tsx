import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleHero, { IArticleHero } from './ArticleHero';
import { mockArticleHeroProps } from './ArticleHero.mocks';

export default {
  title: 'templates/ArticleHero',
  component: ArticleHero,
  argTypes: {},
} as ComponentMeta<typeof ArticleHero>;

const Template: ComponentStory<typeof ArticleHero> = (args) => (
  <ArticleHero {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleHeroProps.base,
} as IArticleHero;
