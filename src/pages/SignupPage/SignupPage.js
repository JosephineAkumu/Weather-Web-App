import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignupPage.css';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import CheckBox from '../../components/CheckBox/CheckBox';
import Button from '../../components/Button/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FormInput from '../../components/Input/FormInput';
import Logo from '../../components/Logo/Logo';
import { Auth } from '../../components/Utils/Auth';


const SignupPage = () =>{ 
  Auth()
  const auth = getAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/homepage")

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error)
      // ..
    });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  return(
  <DefaultLayout>
    <div className='flex flex-col gap-10 w-full min-h-screen justify-center items-center' data-testid='SignupPage'>

      <Logo></Logo>

      <p className=' text-2xl text-text-default dark:text-white'>Create Account</p>

      <form className='w-full flex flex-col gap-4' onSubmit={handleSignUp}>

        <FormInput label='email' onChange={handleEmail} type="email"></FormInput>

        <FormInput label='Password' handlePassword onChange={handlePassword} type="password"></FormInput>

        <FormInput label='Password Confirmation' type="password"></FormInput>

       
          <Button text="sign up" type='submit'></Button>

          <Link to="/login">

          <p className='text-text-default text-left dark:text-white'>Aready have an account<span className='font-bold text-primary ml-4 text-lg dark:text-white'>Back Home</span></p>
          </Link>
        <p className='text-red-500'>{errorMessage}</p>
      </form>

    </div>
  </DefaultLayout>
);
}
SignupPage.propTypes = {};

SignupPage.defaultProps = {};

export default SignupPage;
