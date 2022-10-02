import React from 'react'
import logo from "./logo.png"
function Header() {
  return (
    <div className='navbar sticky-top navbar-dark bg-dark'>
     <a className="navbar-brand" href="https://www.google.co.in/">
    <img src={logo} width="30" height="30" alt=""/>
   <span>  Secret Notes</span>
  </a>
  </div>
  )
}

export default Header