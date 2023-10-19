  import React from 'react'
  import Naruto from '../img/naruto.png';
  import { signOut } from 'firebase/auth';
  import '../style.css'
  import {auth} from "../firebase"

  const Navbar = () => {
    return (
   <div className="navbar-container">
     <span>Chat App</span>
      <img src={Naruto} class = "user" alt="" srcset="" />
      Naruto Uzumaki
      <button  onClick={()=>{signOut(auth )}}>Logout</button>
   </div>
    )
  }

  export default Navbar