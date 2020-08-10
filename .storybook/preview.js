import { addDecorator } from '@storybook/react';
import { Provider as BumbagProvider } from 'bumbag';
import React from 'react';

const BumbagProviderDecorator = (storyFn) => (
  <BumbagProvider>{storyFn()}</BumbagProvider>
);

addDecorator(BumbagProviderDecorator);
