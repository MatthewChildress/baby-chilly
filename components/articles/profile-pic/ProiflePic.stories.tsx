import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePic, { IProfilePic } from './ProfilePic';
import { mockProfilePicProps } from './ProfilePic.mocks';

export default {
  title: 'templates/ProfilePic',
  component: ProfilePic,
  argTypes: {},
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => (
  <ProfilePic {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockProfilePicProps.base,
} as IProfilePic;
