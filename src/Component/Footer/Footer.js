import React from 'react'
import './Footer.css'
import youtube from "../../assets/youtube_icon.png"
import facebook from "../../assets/facebook_icon.png"
import intagram from "../../assets/instagram_icon.png"
import twitter from "../../assets/twitter_icon.png"
 function Footer() {
  return (
    <div className='footer'> 
      <div className='footer-icons'>
        <img src={facebook}alt=''></img>
        <img src={intagram}alt=''></img>
        <img src={twitter}alt=''></img>
        <img src={youtube}alt=''></img>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invester Relations</li>
        <li>Jops</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Perfomance</li>
        <li>Corporate Information </li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2024  Netflix, Inc</p>
    </div>
  )
}

export default Footer
