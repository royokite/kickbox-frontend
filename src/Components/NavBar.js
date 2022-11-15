import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  let activeStyle = {
    backgroundColor: "rgb(30 41 59)",
  };    
  
    return (
        <nav className="bg-violet-500  mt-0 mb-3 sticky w-full z-10 top-0 flex flex-wrap text-slate-200 h-auto">
            <article  className="flex-none">
                <NavLink to="/"><img id="logo" src="./images/kickbox-logo.png" alt="page logo" style={{width: '8rem', height: 'auto'}} /> </NavLink>  
            </article>
            <article className="mt-5 flex-auto">
                <h1 className="text-5xl text-center font-bold text-slate-200/100">KICKBOX</h1><br /> 
            </article>
            
            <article  className="mt-8 flex-none p-2">
                <NavLink to="/" exact="true" end className="bg-violet-500 m-2 p-2 rounded-md hover:bg-slate-800" style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink>
                <NavLink to="/products" exact="true" className="bg-violet-500 m-2 p-2 rounded-md hover:bg-slate-800" style={({ isActive }) => isActive ? activeStyle : undefined }>Products</NavLink>
            </article>
        </nav>
    );

}

export default NavBar;