import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';

describe('<LoginForm />', () => {
  test('it should mount', () => {

    const Page = () => {
      return (

        <BrowserRouter>
         <LoginForm />
        </BrowserRouter>


      )
    }

    render(<Page />);
    
    const loginForm = screen.getByTestId('LoginForm');

    expect(loginForm).toBeInTheDocument();
  });
});