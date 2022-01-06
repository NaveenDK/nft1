import React, {useState} from 'react'
import './Header.scss'
import punkLogo from '../assets/header/neuralogov1.png';
import searchIcon from   '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'
import './Switcher.scss';

const Header = ({isDark,setIsDark}) => {

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
                <i onClick={()=> setOpen(!open)} className={open? 'fas fa-times burger':'fas fa-bars burger'}></i>
                <div className="themeSwitcherWrap">
                <div className={`themeSwitcherLabel ${isDark?'active':''} `} onClick={()=>{
                    console.log("onclick done");
                    if(isDark){
                        localStorage.setItem('theme-color', 'theme-light')
                        setIsDark(false)
                    }
                    else{
                        localStorage.setItem('theme-color','theme-dark')
                      setIsDark(true);
                    }
                }}
                

                
                >
                     <div className="switchPath">
                         <div className="switchHandle">

                         </div>
                     </div>
                </div>
                </div>
                
           
            </nav>

 

        {/* <div className="loginButton">
            GET IN
        </div> */}

        </div>
         
    )
}

export default Header
