import { ComponentMeta, ComponentStory } from '@storybook/react';
import Time, { ITime } from './Time';
import { mockTimeProps } from './Time.mocks';

export default {
  title: 'templates/Time',
  component: Time,
  argTypes: {},
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockTimeProps.base,
} as ITime;
