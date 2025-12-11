import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  return (

    <div className='header'>
      <div className='headercontent'>
        
        <h2>Order your favorite food here</h2>
        <p>choose from diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your craving and elevate your dining experience, one delicious meal at a time. </p>
         <a href='#explore-menu' className='view'>View Menu</a>
      </div>
    </div>
  )
}

export default Header
