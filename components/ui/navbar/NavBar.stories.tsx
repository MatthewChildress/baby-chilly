import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar, { INavBar } from './NavBar';
import { mockNavBarProps } from './NavBar.mocks';

export default {
  title: 'templates/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockNavBarProps.base,
} as INavBar;
