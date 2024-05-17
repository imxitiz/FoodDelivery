import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
   
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);
 
  return (
    <div className='navbar'>
      <Link to='/' >
        <img src={assets.logo} alt="" className="logo" />
      </Link>
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
            <Link to='/cart' >
            <img src={assets.basket_icon} alt="" />
            </Link>
            <div className= {getTotalCartAmount() === 0  ?"":"dot"} ></div>
          </div>
          <button onClick={()=>setShowLogin(true)} >Sign in</button>
        </div>
    </div>
  )
}

export default Navbar