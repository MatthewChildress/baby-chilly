import { ComponentMeta, ComponentStory } from '@storybook/react';
import Place, { IPlace } from './Place';
import { mockPlaceProps } from './Place.mocks';

export default {
  title: 'templates/Place',
  component: Place,
  argTypes: {},
} as ComponentMeta<typeof Place>;

const Template: ComponentStory<typeof Place> = (args) => <Place {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPlaceProps.base,
} as IPlace;
