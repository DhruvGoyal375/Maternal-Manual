import React, { useState } from 'react'
import { Button } from './Button'
import  { Link }  from 'react-router-dom'
import './Navbar.css'
import Logo from "../images/Group 1 (1).png"

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={Logo} className="mainLogo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <b>HOME</b>
              </Link>
              
            </li>

            <li
              className='nav-item'
            >
              <Link
                to='/trimester1'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <b>TRIMESTER I</b>
              </Link>
            </li>

            <li
              className='nav-item'
            >
              <Link
                to='/trimester2'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <b>TRIMESTER II</b>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trimester3'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <b>TRIMESTER III</b>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <b>ABOUT US</b>
              </Link>
            </li>
            <li className='nav-item-signup'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SIGN P
              </Link>
            </li>
          </ul>
          <Button />
        </nav>
      </>
    );
  }
  
  export default Navbar;