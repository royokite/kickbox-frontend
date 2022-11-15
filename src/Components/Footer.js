import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-violet-500">
      <div className="policies">
        <a className="hover:opacity-75" href="/products"> Privacy Policy </a>
        <a className="hover:opacity-75" href="/products"> Terms & Conditions </a>
        <a className="hover:opacity-75" href="/products"> Returns Policy </a>
      </div>   
      <div className="items-center grid-flow-col mt-2">
          <p>Copyright © 2022 - All rights reserved</p>
      </div> 
    </footer>
  )
}

export default Footer