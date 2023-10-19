import React ,{useState} from 'react'
import Ben from '../img/ben.jpeg'

const Message = () => {
   const [isOwner, setisOwner] = useState(true)
  return (
    <div className="owner">
   <div className="message-container">
    <div className="message-info">
      <img src = {Ben} alt="" />
    <span>Just now</span>
    </div>
   
    <div className="message-content">
      <p>hello this is</p>
      <img src={Ben} alt="" srcset="" />
    </div>
   </div>
   </div>
  )
}

export default Message