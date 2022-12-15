import React from 'react';
import { Loader } from './index';

export default {
  title: 'Shared Components/Loader',
  component: Loader,
};

const Template = () => <Loader loading />;

export const Plain = Template.bind({});
