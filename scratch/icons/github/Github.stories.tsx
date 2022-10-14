import { ComponentMeta, ComponentStory } from '@storybook/react';
import Github, { IGithub } from './Github';
import { mockGithubProps } from './Github.mocks';

export default {
  title: 'templates/Github',
  component: Github,
  argTypes: {},
} as ComponentMeta<typeof Github>;

const Template: ComponentStory<typeof Github> = (args) => <Github {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockGithubProps.base,
} as IGithub;
