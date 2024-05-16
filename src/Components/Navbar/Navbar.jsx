import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
   
  const [menu, setMenu] = useState('home');
 
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li className={menu === "home"? "active":"" }>
            <p onClick={()=>setMenu('home')} >Home</p>
          </li>
          <li className={menu === "menu"? "active":"" }>
            <p onClick={()=>setMenu('menu')} >Menu</p>
          </li>
          <li className={menu === "mobileapp"? "active":"" }>
            <p onClick={()=>setMenu('mobileapp')} >Mobile-app</p>
          </li>
          <li className={menu === "contact"? "active":"" }>
            <p onClick={()=>setMenu('contact')} >Contact Us</p>
          </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar