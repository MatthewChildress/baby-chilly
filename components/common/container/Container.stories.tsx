import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container, { IContainer } from './Container';
import { mockContainerProps } from './Container.mocks';

export default {
  title: 'templates/Container',
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockContainerProps.base,
} as IContainer;
