import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
   <img className='dark:hidden' src='/icon.png'></img>
   <img className='hidden dark:block' src='/icon-dark.png'></img>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
