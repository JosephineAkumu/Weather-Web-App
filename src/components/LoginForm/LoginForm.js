import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button'
import './LoginForm.css';
import CheckBox from '../CheckBox/CheckBox';
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import FormInput from '../Input/FormInput';
import { Auth } from '../Utils/Auth';



const LoginForm = () => {

  Auth()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const auth = getAuth()
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider();

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        navigate("/homepage")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        alert(errorMessage)
        // ...
      });
  }


  const handleSignUp = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/homepage")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(error)
        // ..
      });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form className='w-full flex flex-col gap-8' onSubmit={handleSignUp} data-testid="LoginForm">
      <FormInput type="email" label='Email' onChange={handleEmail}></FormInput>

      <FormInput type="Password" label='Password' onChange={handlePassword}></FormInput>

      {/* <CheckBox label="Remember Me"></CheckBox> */}

      <Button type='submit' text='log in'></Button>
      <Link to="/signup" >
        <p className=' text-text-default dark:text-white self-start text-left'>Don't have an account<span className='text-lg font-bold text-primary ml-2'>Sign Up</span></p>
      </Link>


      <button type="button" onClick={googleAuth} class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-3 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>

      <p className=' text-red-500'>{errorMessage}</p>
    </form>
  );
}
LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
