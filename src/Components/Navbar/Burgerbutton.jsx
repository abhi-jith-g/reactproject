import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'


const Burgerbutton = () => {
   return (

    <div className='burgerbutton'>

       <div className='burgernav'><NavLink to='/Homepage' className='burgernav'>Home</NavLink></div>
       <div className='burgernav'><NavLink to='/Roompage' className='burgernav'>Room</NavLink></div>
       <div className='burgernav'><NavLink to='/Booking' className='burgernav'>Booking</NavLink></div>
       <div className='burgernav'>Administrator</div>

    </div>
    
    
  )
}

export default Burgerbutton