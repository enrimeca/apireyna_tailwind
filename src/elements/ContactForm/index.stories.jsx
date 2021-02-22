import React from 'react';
import ContactForm from './index';

export default {
  title: 'Element/ContactForm',
  component: ContactForm
};

const Template = (args) => <ContactForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {}
