import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormInput from './FormInput';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<FormInput />);
    
    const input = screen.getByTestId('Input');

    expect(input).toBeInTheDocument();
  });
});