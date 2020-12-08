import React from 'react'

const NavbarSearch = () => {
    return (
      <form action='' className='nav-search'>
        <input
          type='search'
          placeholder='Search Store...'
          className='nav-search-input'
        />
        <button className='nav-search-button'>
          <span className='span ti-search'></span>
        </button>
      </form>
    );
}

export default NavbarSearch
