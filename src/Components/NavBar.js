import React from 'react';

const NavBar = () => {

    return (
        <nav className='nav '>
            <img id="logo" src="./images/kickbox-logo.png" alt="page logo" style={{width: '8rem', height: '8rem'}} />
            <ul>
                <li>
                    <a href='/'>
                        Home 
                    </a>
                </li>

                <li>
                    <a href='/products'>
                        Products 
                    </a>
                </li>
            </ul>

            
    </nav>
  )
}

export default NavBar;