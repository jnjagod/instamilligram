import React from 'react'
import logo from '../assets/Instamilligram.svg'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="profile-pic"></div>
      <img className='logo' src={logo} alt=""/>
      <div className="logout"></div>
    </header>
  )
}

export default Header