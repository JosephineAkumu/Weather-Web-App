import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GetStartedPage from './GetStartedPage';
import { BrowserRouter } from 'react-router-dom';

describe('<GetStartedPage />', () => {
  test('it should mount', () => {

    const Page = () => {
      return (

        <BrowserRouter>
         <GetStartedPage />
        </BrowserRouter>


      )
    }
    render(<Page />);
    
    const getStartedPage = screen.getByTestId('GetStartedPage');

    expect(getStartedPage).toBeInTheDocument();
  });
});