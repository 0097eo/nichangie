import React, {useState} from 'react'
import logo from '../Assets/Logos/logo-no-background.png'
import './Header.css'

const Header = () => {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

  return (
    <>
    <nav className='navbar'>
            <img src={logo} alt='logo'></img>
        <ul>
            <li>Start Fundraiser</li>
            <li>About us</li>
        </ul>
    </nav>
        <h2>Fundraising Made Simple</h2>
    <div className='searchbar'>
        <input type='text'
         placeholder='find a fundraiser'
         value={searchInput}
         onChange={handleChange}
        ></input>
    </div>
    </>
  )
}

export default Header
