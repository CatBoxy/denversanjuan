import React from 'react';
import { useAuthState } from '../context/authProvider';
import mainLogo from '../assets/img/logoSolo.svg'
import textLogo from '../assets/img/logoTexto.svg'

function GlobalHeader(props) {
    const { logOut } = useAuthState();
  return (
    <>
      <nav className='navbar'>
        <div className='navItems'>
        <div className='logoContainer' id='mainLogo'>
          <img className='mainLogo' src={mainLogo} alt="logo denver" />
        </div>
        <div className='logoContainer' id='textLogo'>
          <img className='textLogo' src={textLogo} alt="logo denver" />
        </div>
        {/* <h1 className='mainTitle'>DenverSanJuan</h1> */}
        {/* <button onClick={logOut}>Logout</button> */}
        </div>
      </nav>
    </>
  );
}

export default GlobalHeader;