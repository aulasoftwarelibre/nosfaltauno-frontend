import { action } from '@storybook/addon-actions';
import { Button } from 'bumbag';
import * as React from 'react';

export default {
  title: "Button",
  component: Button,
};

export const Basic = () => <Button onClick={action("click")}>Click me!</Button>;
