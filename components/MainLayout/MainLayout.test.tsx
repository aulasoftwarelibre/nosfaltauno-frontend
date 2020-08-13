import React from 'react';
import { render } from '@testing-library/react';
import { MainLayout } from './MainLayout';

describe('MainLayout component', () => {
  const defaultProps = {
    children: <div>A children</div>
  };

  it('shows a navbar on the top of the screen', () => {
    const { getByTestId } = render(<MainLayout {...defaultProps} />);

    getByTestId('layout-navbar');
  });

  it('renders the children passed from props', () => {
    const { getByText } = render(<MainLayout {...defaultProps} />);

    getByText('A children');
  });
});