import React from 'react'
import '../styles/navbar.scss'
import NavbarSearch from './Navbar/NavbarSearch'

const Navbar = () => {
    return (
      <header>
        <nav className='nav'>
          <h2 className='nav-logo'>
            <i className='fas fa-shopping-cart nav-img'></i> Test
          </h2>
          <input type='checkbox' className='nav-toggle' />
          <div className='nav-menu'>
            <div className='nav-menu-responsive'>
              <NavbarSearch />
            </div>
            <a href='/' className='nav-link' id='open'>
              Sign Up
            </a>
            <a href='/' className='nav-link-2' id='open-2'>
              <i className='fas fa-shopping-basket nav-link-2-icon'></i>
              <span className='nav-link-2-icon-notif'>3</span>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar
