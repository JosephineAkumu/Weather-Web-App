import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataView from './DataView';

describe('<DataView />', () => {
  test('it should mount', () => {
    render(<DataView />);
    
    const dataView = screen.getByTestId('DataView');

    expect(dataView).toBeInTheDocument();
  });
});