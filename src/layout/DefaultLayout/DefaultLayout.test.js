import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DefaultLayout from './DefaultLayout';

describe('<DefaultLayout />', () => {
  test('it should mount', () => {
    render(<DefaultLayout />);
    
    const defaultLayout = screen.getByTestId('DefaultLayout');

    expect(defaultLayout).toBeInTheDocument();
  });
});