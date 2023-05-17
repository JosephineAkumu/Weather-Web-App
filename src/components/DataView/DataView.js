import React from 'react';
import PropTypes from 'prop-types';
import './DataView.css';

const DataView = ({icon,label="Temp",value=29.9}) => (
  <div className="DataView flex flex-col gap-2 justify-center items-center" data-testid="DataView">
    {icon}
    <p className=' text-text-default dark:text-white'>{label}</p>
    <p className='font-bold text-4xl text-primary'>{value}</p>
  </div>
);

DataView.propTypes = {};

DataView.defaultProps = {};

export default DataView;
