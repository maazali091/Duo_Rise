import React from 'react'
import './Navbar.css'
import logo from '../../assets/imgi_1_logo-4.png'
import { Icon } from '@iconify/react'

function Navbar({setIsSidebarOpen}) {
  return (
    <div className='navbar'>
        <img src={logo} alt="brand_logo_image" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="btns" onClick={() => setIsSidebarOpen(true)}>
          <Icon icon='mdi:sort-variant' />
        </div>
    </div>
  )
}

export default Navbar