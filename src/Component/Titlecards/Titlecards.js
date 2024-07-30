import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom';
// import card_data from '../../assets/cards/Cards_data'
function Titlecards({title,category}) {
 const [apidata,setApidata]=useState([])
  const cardref=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJiYWQ3NTY2OTE3OTA0NDQzNjY4MjQyYjA0ZDAyOSIsIm5iZiI6MTcyMTk2ODAzNC4wOTY4NjEsInN1YiI6IjY2YTMyMGFlYmQ3ZWY5MTExZjQ2OTY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Pz0OJClGrIoocvnJORrl9qzu9vBnxHaFbziBLvaUm8'
    }
  };
  
  

  useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err)); 
    
    cardref.current.addEventListener("wheel",(e)=>{
      e.preventDefault();
      cardref.current.scrollLeft+=e.deltaY;
    
    })     
  },[])

  return (
    <div className='titlecards'>
      <p>{title?title:"Popular on Netflix"}</p>
      <div className='card-list' ref={cardref}>
        {apidata.map((card,i)=>{
          return(
            <Link to={`/player/${card.id}`} className='card' key={i}  >
              
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}alt=''></img>
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Titlecards
