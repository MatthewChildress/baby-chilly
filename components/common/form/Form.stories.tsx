import { ComponentMeta, ComponentStory } from '@storybook/react';
import Form, { IForm } from './Form';
import { mockFormProps } from './Form.mocks';

export default {
  title: 'templates/Form',
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFormProps.base,
} as IForm;
