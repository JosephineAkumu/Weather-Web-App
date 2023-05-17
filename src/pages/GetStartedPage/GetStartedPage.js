import React from 'react';
import PropTypes from 'prop-types';
import './GetStartedPage.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { Auth } from '../../components/Utils/Auth';

const GetStartedPage = () => {

  


  return (
    <div className="GetStartedPage flex w-full justify-center items-center" data-testid="GetStartedPage">
      <div className='Welcome Page px-6 py-8 flex flex-col gap-16 justify-center items-center dark:bg-secondary min-h-screen max-w-sm'>

        <Logo></Logo>

        <p className=' font-bold text-3xl text-secondary dark:text-white'>Discover the Weather
          in your city</p>

        <p className=' text-xl text-text-default dark:text-white'>
          Get to know your weather forecast
        </p>

        <Link to="/login"> 
        <Button text="Get Started " ></Button>
        </Link>

      </div>
    </div>
  );
}

GetStartedPage.propTypes = {};

GetStartedPage.defaultProps = {};

export default GetStartedPage;
