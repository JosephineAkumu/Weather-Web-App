import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

describe('<HomePage />', () => {
  test('it should mount', () => {

    const Home = () => {
      return (

        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>


      )
    }


    render(<Home></Home>);

    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });
});