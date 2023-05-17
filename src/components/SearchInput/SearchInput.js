import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';
import { Input, Dropdown, initTE } from "tw-elements";
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';


const SearchInput = ({ value, onSearch,data }) => {


  const [search,setSearch] = useState()

  const handeSearchInputChange = (e) => {
    setSearch(e.target.value)
  }


  const handleSelect = (item) =>{
    setSearch(item)
  }



  return (

    <div className='flex flex-col relative' data-testid='SearchInput'  >


      <div className="flex items-center justify-center" >
        <div className="flex border-2 border-primary rounded-full w-full"  >
          <AutoCompleteInput handleInputChange={handeSearchInputChange} data={data} value={search} handleSelect={handleSelect}></AutoCompleteInput>
          {/* <input type="text" class="px-4 py-2 w-full dark:bg-[#1C3B62] dark:text-white rounded-l-full" onChange={handeSearchInputChange} placeholder="Search for a city or country"></input> */}
          <button className="flex items-center justify-center px-4 border-l" onClick={() => {
            onSearch(search)
            setSearch("")
          }}>
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )



  return (
    <div className='flex items-center gap-2 w-full'>
      <div class="relative w-fu mb-3 flex-1" data-te-input-wrapper-init>
        <input
          type="text"

          className="peer bg-[#F1F1F1] dark:bg-[#1C3B62] py-2 min-h-[50px] text-lg block  w-full rounded-full border-0  px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput1"

          placeholder="Example label" />
        <label
          for="exampleFormControlInput1"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-3 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Search for a city or country
        </label>
      </div>
      <div className='Search flex  h-full items-center justify-center cursor-pointer'  >
        <img className=' w-6 h-6' src='/search.png'></img>
      </div>
    </div>

  );
}

SearchInput.propTypes = {};

SearchInput.defaultProps = {};

export default SearchInput;
