import React, {useState} from 'react'
import './Header.css'
import punkLogo from '../assets/header/neuralogov2.png';
import searchIcon from   '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {

    const[open,setOpen] = useState(false);



    return (
        <div className="header" >
            <nav>
                <div className="logo">
                <img src={punkLogo} className='punkLogo' alt="" />
                </div>
                <ul className="nav-links" style={{transform: open? "translateX(0px)": ""}}>
                        <li>
                                <a>Tutorials</a>
                        </li>
                        <li>
                                <a>Healthcare AI</a>
                        </li>
                        <li>
                                <a>Covid 19</a>
                        </li>
                        <li>
                                <a>Crypto & NFTS</a>
                        </li>
                </ul>
                <i onClick={()=> setOpen(!open)} className="fas fa-bars burger"></i>


            </nav>

   

        {/* <div className="headerActions">
         <div className="themeSwitchContainer">
             <img src={themeSwitchIcon}/>
         </div>
        </div> */}

        {/* <div className="loginButton">
            GET IN
        </div> */}

        </div>
         
    )
}

export default Header
