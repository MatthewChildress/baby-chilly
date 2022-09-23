import { ComponentMeta, ComponentStory } from '@storybook/react';
import Links, { ILinks } from './Links';
import { mockLinksProps } from './Links.mocks';

export default {
  title: 'templates/Links',
  component: Links,
  argTypes: {},
} as ComponentMeta<typeof Links>;

const Template: ComponentStory<typeof Links> = (args) => <Links {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockLinksProps.base,
} as ILinks;
