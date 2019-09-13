import React from 'react';
import './search.css';
const Search = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className='search'
        style={{ margin: 20 }}
        onChange={handleChange}
        type='search'
        name='q'
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
