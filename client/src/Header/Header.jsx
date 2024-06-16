import React from 'react'
import logo from '../Assets/Logos/logo-no-background.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    

  return (
    <>
    <nav className='navbar'>
            <img src={logo} alt='logo'></img>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/newfundraiser'>Start Fundraiser</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
        </ul>
    </nav>
        <h2>Fundraising Made Simple</h2>
    
    </>
  )
}

export default Header
