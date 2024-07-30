import React from 'react'
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar';
import herobanner from '../../assets/background_banner.jpg';
import herotitler from '../../assets/hero_title.png';
import play from '../../assets/play_icon.png';
import info from '../../assets/info_icon.png';
import Titlecards from '../../Component/Titlecards/Titlecards';
import Footer from '../../Component/Footer/Footer';
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={herobanner } alt='' className='hero-banner-img'></img>
        <div className='hero-caption'>
          <img src={herotitler} alt=''  className='caption-img'></img>
          <p>Netflix is a pioneer in streaming, constantly introducing new features and content.Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
          <div className='hero-btns'>
            <button className='btn'><img src={play} alt=''/>Play</button>
            <button className='btn dark-btn'><img src={info} alt=''/>Info</button>
                       
          </div>
          <div className='title-cards'>
          <Titlecards />
          </div>
        </div>
      </div>
      <div className='more-cards'>
      <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only on Netfilex"} category={"popular"}/>
      <Titlecards title={"Upcoming"} category={"upcoming"}/>
      <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
