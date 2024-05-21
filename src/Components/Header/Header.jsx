import React from 'react'
import headerImg from '../../assets/header_img.png';
import './Header.css'

export const Header = () => {
  return (
    <div className='header' style={{ '--header-img': `url(${headerImg})` }}>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted
                with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate
                your dining experience, and delicious meat at a time.
            </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}
