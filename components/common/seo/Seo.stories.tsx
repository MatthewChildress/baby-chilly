import { ComponentMeta, ComponentStory } from '@storybook/react';
import Seo, { ISeo } from './Seo';
import { mockSeoProps } from './Seo.mocks';

export default {
  title: 'templates/Seo',
  component: Seo,
  argTypes: {},
} as ComponentMeta<typeof Seo>;

const Template: ComponentStory<typeof Seo> = (args) => <Seo {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSeoProps.base,
} as ISeo;
