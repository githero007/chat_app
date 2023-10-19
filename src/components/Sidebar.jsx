import React from 'react'
import Search from './Search'
import Chats from './Chats'
import  '../style.css'
import Navbar  from './Navbar'

const Sidebar = () => {
  return (
    <div className="sidebar-container">

          <Navbar/> 
          <Search/>
          <Chats/>
    </div>
  )
}

export default Sidebar