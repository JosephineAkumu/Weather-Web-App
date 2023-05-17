import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupPage from './SignupPage';
import { BrowserRouter } from 'react-router-dom';

describe('<SignupPage />', () => {
  test('it should mount', () => {

    const Page = () => {
      return (

        <BrowserRouter>
         <SignupPage />
        </BrowserRouter>


      )
    }
    render(<Page></Page>);


    
    const signupPage = screen.getByTestId('SignupPage');

    expect(signupPage).toBeInTheDocument();
  });
});