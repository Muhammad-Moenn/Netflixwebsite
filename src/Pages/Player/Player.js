import React, { useEffect, useState } from 'react'
import './Player.css'
import backicon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';
function Player() {
  const {id} = useParams();
  const navigate=useNavigate();
const [apidata,setApidata]=useState({

  name:"",
  key:"",
  published_at:"",
  typeof:""
})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJiYWQ3NTY2OTE3OTA0NDQzNjY4MjQyYjA0ZDAyOSIsIm5iZiI6MTcyMTk2ODAzNC4wOTY4NjEsInN1YiI6IjY2YTMyMGFlYmQ3ZWY5MTExZjQ2OTY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Pz0OJClGrIoocvnJORrl9qzu9vBnxHaFbziBLvaUm8'
    }
  };

  useEffect(()=>{
   
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApidata(response.results[0]))
      .catch(err => console.error(err));
      
  },[])
  
  return (
    <div className='player'>
      <img src={backicon} alt='' onClick={()=>navigate(-2)}></img>
      {/* <ifram width='90%' height='90%' src='https://www.youtube.com/embed/hkHHwA-vEyQ' title='trailer'framBorder allowFullScreen></ifram> */}
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apidata.key}`} title="Official Trailer " frameborder="0"  ></iframe>
      
      <div className='player-info'>
        <p>{apidata.published_at.slice(0,10)}</p>  
        <p>{apidata.name}</p>  
        <p>{apidata.typeof}</p>  
      </div>
    </div>
  )
}

export default Player

