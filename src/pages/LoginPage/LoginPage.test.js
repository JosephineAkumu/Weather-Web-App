import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';

describe('<LoginPage />', () => {
  test('it should mount', () => {

    const Page = () => {
      return (

        <BrowserRouter>
         <LoginPage />
        </BrowserRouter>


      )
    }


    render(<Page />);
    
    const loginPage = screen.getByTestId('LoginPage');

    expect(loginPage).toBeInTheDocument();
  });
});