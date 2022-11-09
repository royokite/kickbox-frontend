import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='ClassCollection text-center text-xl text-white italic font-sans'>KICKBOX</h1>
        <ul>
            <li>
                <a href='/project'>
                    Home 
                </a>
            </li>

            <li>
                <a href='/products'>
                    Products 
                </a>
            </li>

            <li>
                <a href='/reviews'>
                    Reviews 
                </a>
            </li>
        </ul>

        
    </nav>
  )
}

export default NavBar;