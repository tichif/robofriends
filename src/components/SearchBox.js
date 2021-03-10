import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-light-blue'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
        aria-label='Search Robots'
      />
    </div>
  );
};

export default SearchBox;
