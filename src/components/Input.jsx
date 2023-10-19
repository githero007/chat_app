import React from 'react'
import Clip from '../img/Clip.jpg'
import Send from '../img/send.png'
const Input = () => {
  return (
   <div className="input-container">
     <div className="input-icons">
      <input type="text" placeholder= "Enter your messages"/>
      <div className="icons">
        <input style = { {display: "none"}} type="file" id = "file"/>
        <label htmlFor="file"> <img src={Clip} alt="" />  </label>
       
          <img src={Send} alt="" />
      </div>
       
     </div>
   </div>
  )
}

export default Input