import React from 'react';
import Header from './index'
import data from '../../data/header.json'

export default {
  title: 'Component/Nav',
  component: Header
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: data.title,
  company: data.company,
  resume: data.resume
};

