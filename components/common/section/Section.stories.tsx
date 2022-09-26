import { ComponentMeta, ComponentStory } from '@storybook/react';
import Section, { ISection } from './Section';
import { mockSectionProps } from './Section.mocks';

export default {
  title: 'templates/Section',
  component: Section,
  argTypes: {},
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSectionProps.base,
} as ISection;
