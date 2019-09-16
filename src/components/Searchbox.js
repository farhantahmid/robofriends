import React from 'react';

const Searchbox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--dark-blue bg-light-blue'
        type='search'
        placeholder='type to search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;