import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from   '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>

        
        <div className="headerItems">
            <p>Tutorials</p>
            <p>Healthcare AI</p>
            <p>Covid-19</p>
            <p>Crypto & NFTS</p>
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
