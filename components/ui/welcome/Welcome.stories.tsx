import { ComponentMeta, ComponentStory } from '@storybook/react';
import Welcome, { IWelcome } from './Welcome';
import { mockWelcomeProps } from './Welcome.mocks';

export default {
  title: 'templates/Welcome',
  component: Welcome,
  argTypes: {},
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => (
  <Welcome {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockWelcomeProps.base,
} as IWelcome;
