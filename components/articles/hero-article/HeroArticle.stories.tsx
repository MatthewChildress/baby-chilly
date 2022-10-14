import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroArticle, { IHeroArticle } from './HeroArticle';
import { mockHeroArticleProps } from './HeroArticle.mocks';

export default {
  title: 'templates/HeroArticle',
  component: HeroArticle,
  argTypes: {},
} as ComponentMeta<typeof HeroArticle>;

const Template: ComponentStory<typeof HeroArticle> = (args) => (
  <HeroArticle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHeroArticleProps.base,
} as IHeroArticle;
