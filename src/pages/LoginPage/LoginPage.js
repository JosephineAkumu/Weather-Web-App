import React from 'react';
import PropTypes from 'prop-types';
import './LoginPage.css';

import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import { Auth } from '../../components/Utils/Auth';

const LoginPage = () => {

  Auth()

  return (
    <DefaultLayout>
      <div className="LoginPage flex flex-col w-full justify-center items-center gap-10 min-h-screen " data-testid="LoginPage">
        <Logo></Logo>
        <p className='text-text-dafault text-2xl dark:text-white'>Log In</p>

        <p className='text-xl text-text-default dark:text-white'>Continue with Email and Password</p>

        <LoginForm></LoginForm>

      </div>
    </DefaultLayout>
  );
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
