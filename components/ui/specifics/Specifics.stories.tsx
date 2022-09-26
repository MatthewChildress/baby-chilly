import { ComponentMeta, ComponentStory } from '@storybook/react';
import Specifics, { ISpecifics } from './Specifics';
import { mockSpecificsProps } from './Specifics.mocks';

export default {
  title: 'templates/Specifics',
  component: Specifics,
  argTypes: {},
} as ComponentMeta<typeof Specifics>;

const Template: ComponentStory<typeof Specifics> = (args) => (
  <Specifics {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSpecificsProps.base,
} as ISpecifics;
