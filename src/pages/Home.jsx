import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import  '../style.css'

const Home = () => {
  return (
   <div className="home-container">
    <div className="home">
      <Sidebar/>
      <Chat/> 
    </div>
   </div>
  )
}

export default Home
