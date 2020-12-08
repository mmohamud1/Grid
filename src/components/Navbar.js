import React, { useState } from 'react';
import '../styles/navbar.scss';
import NavbarSearch from './Navbar/NavbarSearch';
import Modal from 'react-modal';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          <div className='nav-link' onClick={() => setModalIsOpen(true)}>
            Sign Up
          </div>
          <a href='/' className='nav-link-2' id='open-2'>
            <i className='fas fa-shopping-basket nav-link-2-icon'></i>
            <span className='nav-link-2-icon-notif'>3</span>
          </a>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className='modal-1'
        ariaHideApp={false}
      >
        <button className='close-btn' onClick={() => setModalIsOpen(false)}>
          <i className='fa fa-times close-btn'></i>
        </button>
        <div className='modal-1-header'>
          <h3>Sign Up</h3>
        </div>
        <div className='modal-1-content'>
          <p>Register with us to get up to date information and results</p>
          <form className='modal-1-form'>
            <div>
              <label for='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter Name'
                className='form-input'
              />
            </div>
            <div>
              <label for='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                className='form-input'
              />
            </div>
            <div>
              <label for='password'>Password</label>
              <input
                type='password'
                id='Password'
                placeholder='Enter Password'
                className='form-input'
              />
            </div>
            <div>
              <label for='password2'>Confirm Password</label>
              <input
                type='password'
                id='password2'
                placeholder='Confirm password'
                className='form-input'
              />
            </div>
            <input type='submit' value='Submit' className='submit-btn' />
          </form>
        </div>
      </Modal>
    </header>
  );
};

export default Navbar;
