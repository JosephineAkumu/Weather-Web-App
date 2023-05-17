import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBox from './CheckBox';

describe('<CheckBox />', () => {
  test('it should mount', () => {
    render(<CheckBox />);
    
    const checkBox = screen.getByTestId('CheckBox');

    expect(checkBox).toBeInTheDocument();
  });
});