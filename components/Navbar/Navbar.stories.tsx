import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Navbar } from './Navbar';

export default {
  title: "Navbar",
  component: Navbar,
};

export const Basic = () => <Navbar />;
