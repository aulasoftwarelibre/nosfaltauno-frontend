import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { MainLayout } from './MainLayout';

export default {
  title: "MainLayout",
  component: MainLayout,
};

export const Basic = () => <MainLayout>Page</MainLayout>;
