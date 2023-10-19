import React from 'react'
import VdoCall from '../img/vdocall.png'
import Req from '../img/req.png'
import Ben from '../img/ben.jpeg'
import Messages from './Messages'
import  '../style.css'
import Input from './Input'

const Chat = () => {
  return (
   <div className="chat-container">
   <div className="chat-navbar">
    <img src={Ben} alt="" srcset="" />
    <span className='current-texter'>Ben</span>
    <div className="chaticons">
    <img src= {VdoCall} alt="" srcset="" />
    <img src={Req} alt="" srcset="" />
    </div>
   </div>
   <Messages/>
   <Input/>
   </div>
  )
}

export default Chat