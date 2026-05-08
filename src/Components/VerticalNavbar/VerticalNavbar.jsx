import { Icon } from '@iconify/react'
import React from 'react'
import './VerticalNavbar.css'
import logo_img from '../../assets/imgi_2_logo-2.png'
import { Link } from 'react-router-dom'
import { NavLink_data } from '../../assets/NavLink_data'
import { useState } from 'react'


function VerticalNavbar({ isSidebarOpen, onClose }) {
    const NavItem = ({ item }) => {
        const [isOpen, setIsOpen] = useState(false);
        const hasChildern = item.childern && item.childern.length > 0;

        const handleToggle = (e) => {
            if(hasChildern) {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
            }
        }

        return (
                <li className={`nav-item ${isOpen ? 'active' : ''}`}>
                    <div className='nav-link-wrapper' onClick={handleToggle}>
                        <Link to={item.path || "#"} className='nav-link'>
                            {item.title}
                        </Link>
                        {hasChildern && (
                            <>
                            <Icon icon='mdi:chevron-down'
                                className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
                            </>
                        )}
                    </div>
                    {hasChildern && isOpen && (
                        <ul className="sub-menu">
                            {item.childern.map((child, index) => {
                             return   <NavItem key={index} item={child} />
                            })}
                        </ul>
                    )}
                </li>
        );
    };
  return (
    <div className={`vertical-navbar ${isSidebarOpen ? "open" : ""}`}>
        <div className="upper-box">
            <div className="nav-logo">
                <img src={logo_img} alt="" />
            </div>
            <div className="close-btn" onClick={onClose}>
                <Icon icon='mdi:close' />
            </div>
        </div>
        <hr className='nav-divider' />
        <nav className="vertical-sidebar">
            <ul className="navigation-container">
                 {NavLink_data.map((item, index) => {
                    return <NavItem key={index} item={item} />
                })}
            </ul>
        </nav>

        

        <div className="contact-info-section">
            <div className="contact-list">
                <div className="icon">
                    <Icon icon='lucide:mail' />
                </div>
                <div className="text">
                    <span>Send Email</span>
                    <b>yourmail@mail.com</b>
                </div>
            </div>
        </div>
        <div className="social-links">
            <span className="icon">
                <Icon icon='mdi:twitter' />
            </span>
            <span className="icon">
                <Icon icon='mdi:facebook' />
            </span>
            <span className="icon">
                <Icon icon='mdi:pinterest' />
            </span>
            <span className="icon">
                <Icon icon='mdi:linkedin' />
            </span>
        </div>

    </div>
  )
}

export default VerticalNavbar




{/* <ul className="navigation"> 
            <li><a href="#">Home</a> <hr /> <Icon icon='mdi:chevron-down' />
                <div className="drop-down">
                    <ul>
                        <li><a href="#">Home 01</a></li>
                        <li><a href="#">Home 02</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Pages</a> <hr /><Icon icon='mdi:chevron-down' />
            <div className="drop-down">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a>
                        <div className="drop-down">
                            <ul>
                                <li><a href="#">Team List</a></li>
                                <li><a href="#">Team Details</a></li>
                            </ul>
                        </div>
                        </li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Shop</a>
                        <div className="drop-down">
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Products With Sidebar</a></li>
                                <li><a href="#">Product Details</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Checkout</a></li>
                            </ul>
                        </div>
                        </li>
                        <li><a href="#">404</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Services</a> <hr /> <Icon icon='mdi:chevron-down' />
                <div className="drop-down">
                    <ul>
                        <li><a href="#">Service Drid</a></li>
                        <li><a href="#">Service Details</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Projects</a> <hr /> <Icon icon='mdi:chevron-down' />
                <div className="drop-down">
                    <ul>
                        <li><a href="#">Project Drid</a></li>
                        <li><a href="#">Project Details</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Blog</a> <hr /> <Icon icon='mdi:chevron-down' />
                <div className="drop-down">
                    <ul>
                        <li><a href="#">Blog Drid</a></li>
                        <li><a href="#">Blog Details</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#">Contact</a> <hr /> <Icon icon='mdi:chevron-down' /></li>
        </ul> */}