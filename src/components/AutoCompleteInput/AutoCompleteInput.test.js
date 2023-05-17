import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AutoCompleteInput from './AutoCompleteInput';

describe('<AutoCompleteInput />', () => {
  test('it should mount', () => {
    render(<AutoCompleteInput />);
    
    const autoCompleteInput = screen.getByTestId('AutoCompleteInput');

    expect(autoCompleteInput).toBeInTheDocument();
  });
});