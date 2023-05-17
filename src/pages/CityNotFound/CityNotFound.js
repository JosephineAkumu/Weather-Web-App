import React from 'react';
import PropTypes from 'prop-types';
import './CityNotFound.css';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import { Link } from 'react-router-dom';
import { Auth } from '../../components/Utils/Auth';

const CityNotFound = ({ text = "Not Found" }) => {

  


  return (
    <DefaultLayout>
    <div className="CityNotFound min-h-screen flex flex-col justify-center items-center gap-4" data-testid="CityNotFound">
      <img src='/404.png'></img>
      <p className='text-4xl font-bold dark:text-white text-text-default'>{text}</p>
      <Link to="/homepage">
      <div className=' flex flex-col justify-center items-center  gap-4 mt-4'>
        <p className='text text-primary font-bold text-2xl'>Home</p>
        <img src='/arrow_left.png'></img>
      </div>
      </Link>
    </div>
    </DefaultLayout>
  );
}
CityNotFound.propTypes = {};

CityNotFound.defaultProps = {};

export default CityNotFound;
