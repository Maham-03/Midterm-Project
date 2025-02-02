import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
import './navbar.css';


function navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
            </Link>
         <div className='menu-icon' onClick={handleClick}>        
         <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div> 
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
            </li>
            

            <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
            </Link>
            </li>
            </ul>  
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default navbar
