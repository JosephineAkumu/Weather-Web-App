import React from 'react';
import PropTypes from 'prop-types';
import { Input, initTE } from "tw-elements";

const FormInput = ({label="text",type,onChange,value}) => {
  initTE({ Input });
  
  
  return(
  <div class="relative w-fu mb-3" data-te-input-wrapper-init data-testid='Input'>
    <input
      type={type}
      onChange={onChange}
      className="peer bg-[#F1F1F1] dark:bg-[#1C3B62] py-2 min-h-[50px] text-lg block  w-full rounded border-0  px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleFormControlInput1"
      value={value}
      placeholder="Example label" />
    <label
      for="exampleFormControlInput1"
      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >{label}
    </label>
  </div>
);
}

FormInput.propTypes = {};

FormInput.defaultProps = {};

export default FormInput;
