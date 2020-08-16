import React from 'react';
import { Navbar } from './Navbar';
import { render } from '@testing-library/react';

describe('Navbar component', () => {
  it('shows a logo, a notification zone and a profile avatar', () => {
    const { getByTestId } = render(<Navbar />);

    getByTestId('navbar-logo');
    getByTestId('navbar-notifications');
    getByTestId('navbar-user-profile');
  });
});