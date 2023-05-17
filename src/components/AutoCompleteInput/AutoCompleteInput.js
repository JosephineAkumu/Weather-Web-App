import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AutoCompleteInput.css';

const AutoCompleteInput = ({handleInputChange,data,value,handleSelect}) => {

  const [suggestions, setSuggestions] = useState([]);


  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const filteredSuggestions =
      inputLength === 0
        ? []
        : data.filter(
            (item) =>
              item.toLowerCase().slice(0, inputLength) === inputValue
          );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="relative w-full" data-testid="AutoCompleteInput">
      <input
      
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyUp={() => getSuggestions(value)}
        className="py-2 px-4 w-full border  rounded-l-full dark:bg-[#1C3B62] dark:text-white"
        placeholder="Search City or country"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1C3B62]  divide-y-2 rounded divide-slate-200 dark:divide-slate-200 shadow-lg">
          {suggestions.map((item) => (
            <li
              key={item}
              className="py-2 px-4 cursor-pointer dark:hover:bg-[#1C3B62] text-left dark:text-white"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AutoCompleteInput.propTypes = {};

AutoCompleteInput.defaultProps = {};

export default AutoCompleteInput;
