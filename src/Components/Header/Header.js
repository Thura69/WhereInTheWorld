import './header.css';
import { FaRegMoon } from 'react-icons/fa'

import React from 'react'



const handelClick = ()=>{
  document.body.classList.toggle('dark-theme');
}







function Header() {
  return (
    <div className='header'>
    <h1>Where in the world?</h1>
    <div className='darkMode' onClick={handelClick}>
    <FaRegMoon/><h1>Dark Mode</h1>
    </div>
    </div>
  )
}

export default Header