import { ComponentMeta, ComponentStory } from '@storybook/react';
import Registry, { IRegistry } from './Registry';
import { mockRegistryProps } from './Registry.mocks';

export default {
  title: 'templates/Registry',
  component: Registry,
  argTypes: {},
} as ComponentMeta<typeof Registry>;

const Template: ComponentStory<typeof Registry> = (args) => (
  <Registry {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRegistryProps.base,
} as IRegistry;
