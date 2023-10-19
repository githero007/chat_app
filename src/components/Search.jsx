import React from 'react'
import '../style.css'
import  Ben from '../img/ben.jpeg'

const Search = () => {
  return (
 <div className="search-container">
   <input type="text" placeholder='enter your name'/>
   
   <div className="user-chat">
     <img src= {Ben  } alt="" srcset="" />
     <span className="user-name"> Ben</span>
    </div>
   
 
 </div>
  )
}

export default Search