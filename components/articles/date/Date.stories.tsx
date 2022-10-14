import { ComponentMeta, ComponentStory } from '@storybook/react';
import Date, { IDate } from './Date';
import { mockDateProps } from './Date.mocks';

export default {
  title: 'templates/Date',
  component: Date,
  argTypes: {},
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => <Date {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDateProps.base,
} as IDate;
