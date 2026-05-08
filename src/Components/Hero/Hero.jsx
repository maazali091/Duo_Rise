import { Icon } from '@iconify/react'
import './Hero.css'
import React from 'react'
import hero_peoples from '../../assets/imgi_9_banner-h1-1.png'
import hero_right_main from '../../assets/imgi_10_banner-h1-2.png'
import cursor_image from '../../assets/imgi_6_banner-h1-3.png'
import star_image from '../../assets/imgi_8_banner-h1-5.png'
import bg_hero_img from '../../assets/imgi_5_banner-h1-1.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className="left-section">
          <h3>brand digital agency <Icon icon='mdi-arrow' /></h3>
          <h1><b>Make your Brand</b> Future- Proof.</h1>
          <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors</p>
          <div className="bottom">
            <a href='#'>Discover More <Icon icon='mdi-dash' /></a>
            <img src={hero_peoples} alt="trusted_users_image" />
            <span>Our 30k Satisfaction Clients</span>
          </div>
        </div>
        <div className="right-section">
          <img src={cursor_image} alt="cursor_image_towards_right" />
          <div className="main-img">
            <img src={hero_right_main} alt="hero_main_image" />
            <img src={star_image} alt="reviws_image" />
          </div>
        </div>
    </div>
  )
}

export default Hero