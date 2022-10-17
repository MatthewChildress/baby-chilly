import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleAlert, { IArticleAlert } from './ArticleAlert';
import { mockArticleAlertProps } from './ArticleAlert.mocks';

export default {
  title: 'templates/ArticleAlert',
  component: ArticleAlert,
  argTypes: {},
} as ComponentMeta<typeof ArticleAlert>;

const Template: ComponentStory<typeof ArticleAlert> = (args) => (
  <ArticleAlert {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockArticleAlertProps.base,
} as IArticleAlert;
