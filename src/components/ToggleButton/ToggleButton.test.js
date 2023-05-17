import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleButton from './ToggleButton';

describe('<ToggleButton />', () => {
  test('it should mount', () => {
    render(<ToggleButton />);
    
    const toggleButton = screen.getByTestId('ToggleButton');

    expect(toggleButton).toBeInTheDocument();
  });
});