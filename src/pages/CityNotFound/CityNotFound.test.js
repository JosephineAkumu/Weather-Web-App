import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CityNotFound from './CityNotFound';
import { BrowserRouter } from 'react-router-dom';

describe('<CityNotFound />', () => {

  const Page = () => {
    return (

      <BrowserRouter>
       <CityNotFound />
      </BrowserRouter>


    )
  }


  test('it should mount', () => {
    render(<Page />);
    
    const cityNotFound = screen.getByTestId('CityNotFound');

    expect(cityNotFound).toBeInTheDocument();
  });
});