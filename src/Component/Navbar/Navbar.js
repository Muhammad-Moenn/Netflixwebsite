// import React, { useEffect, useRef } from 'react'
// import './Navbar.css'
// import logo from "../../assets/logo.png";
// import searchicon from "../../assets/search_icon.svg";
// import bellicon from "../../assets/bell_icon.svg";
// import profileimg from "../../assets/profile_img.png";
// import caret from "../../assets/caret_icon.svg";
// import { logout } from '../../Firebase';
// function Navbar() {
//   const navref=useRef();
//  useEffect(()=>{
//   window.addEventListener("scroll",()=>{
//     if(window.scrollY>=80){
//       navref.current.classList.add('dark-nav');
//     }else{
//       navref.current.classList.remove('dark-nav');
//     }
//   })
//  },[])


//   return (
//     <div className='navbar' ref={navref}>
//       <div className='navbar-left'>
//         <img src={logo}alt=''></img>
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>New & Popular</li>
//           <li>My List</li>
//           <li>Browse by Language</li>
//         </ul>
//       </div>
//       <div className='navbar-right'>
//         <img src={searchicon}alt='' className='icon'></img>
//         <p>Children</p>
//         <img src={bellicon}alt='' className='icon'></img>
//         <div className='navbar-profile'>
//           <img src={profileimg}alt='' className='profile'></img>
//           <img src={caret}alt='' ></img>
//           <div className='dropdown'>
//             <p onClick={logout()}>Sign Out of Netflix</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
    //  }
// 
// export default Navbar







import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import searchicon from "../../assets/search_icon.svg";
import bellicon from "../../assets/bell_icon.svg";
import profileimg from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import menuicon from "../../assets/mobile-menu.png";
import { logout } from '../../Firebase';
import { TiThMenu } from "react-icons/ti";
function Navbar() {
  const navref = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => {
      if (navref.current) {
        if (window.scrollY >= 80) {
          navref.current.classList.add('dark-nav');
        } else {
          navref.current.classList.remove('dark-nav');
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menu,setMenu]=useState(true);
  const [searchinput,setsearchInput]=useState(true);
  return (
    <div className='navbar' ref={navref}>
      <div  className='menu-box'>
        <img onClick={()=>{setMenu(!menu)}} src={ menuicon} alt=''></img>
      </div>
      <div className='navbar-left'>
        <img src={logo} alt='Logo' />
        <div className={` ul-box${menu?" ":"visi "}`}>
        <ul className='ul' >
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
        </div>
      </div>
      <div className='navbar-right'>
        <input className={`searchinput ${searchinput?"hideinput":" "}`} placeholder='search here'></input>
        <img onClick={()=>setsearchInput(!searchinput)} src={searchicon} alt='Search Icon' className='icon' />
        <p className='rh'>Children</p>
        <img src={bellicon} alt='Bell Icon' className='icon rh' />
        <div className='navbar-profile rh'>
          <img src={profileimg} alt='Profile' className='profile' />
          <img src={caret} alt='Caret Icon' />
          <div className='dropdown rh'>
            <p onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
