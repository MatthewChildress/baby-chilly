import { ComponentMeta, ComponentStory } from '@storybook/react';
import MoreArticles, { IMoreArticles } from './MoreArticles';
import { mockMoreArticlesProps } from './MoreArticles.mocks';

export default {
  title: 'templates/MoreArticles',
  component: MoreArticles,
  argTypes: {},
} as ComponentMeta<typeof MoreArticles>;

const Template: ComponentStory<typeof MoreArticles> = (args) => (
  <MoreArticles {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMoreArticlesProps.base,
} as IMoreArticles;
