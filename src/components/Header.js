import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from   '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
            <div className=''>
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} />
            </div>
            <input className='searchInput' placeholder='Collection, Item or User...'/>
        </div>
        <div className="headerItems">
            <p>Education</p>
            <p>Etherium</p>
            <p>Covid19</p>
        </div>

        <div className="headerActions">
         <div className="themeSwitchContainer">
             <img src={themeSwitchIcon}/>
         </div>
        </div>

        <div className="loginButton">
            GET IN
        </div>

        </div>
         
    )
}

export default Header
