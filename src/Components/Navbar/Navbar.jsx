import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
   
  const [menu, setMenu] = useState('home');
 
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <Link to='/' className={menu === "home"? "active":"" }>
            <p onClick={()=>setMenu('home')} >Home</p>
          </Link>
          <a href='#explore-menu' className={menu === "menu"? "active":"" }>
            <p onClick={()=>setMenu('menu')} >Menu</p>
          </a>
          <a href='#app-download' className={menu === "mobileapp"? "active":"" }>
            <p onClick={()=>setMenu('mobileapp')} >Mobile-app</p>
          </a>
          <a href='#' className={menu === "contact"? "active":"" }>
            <p onClick={()=>setMenu('contact')} >Contact Us</p>
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)} >Sign in</button>
        </div>
    </div>
  )
}

export default Navbar