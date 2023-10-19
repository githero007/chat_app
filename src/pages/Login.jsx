import React, { useState } from 'react'
import  '../style.css'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e)=>
  {
    e.preventDefault();//prevent the default form of submission
    const email = e.target[1].value;
    const password = e.target[2].value;

    await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(error.code);
  });

  }
  return (
   <div className="login-container">
    <form onSubmit= {handleSubmit}>
    <div className="forms">
    <span><strong>Chat app</strong></span>
   <input className ="loginput" type = "text" placeholder='Enter your email' />
   <input className ="loginput" type = "password" placeholder='Enter your password'/>
   <button className= "lsbutton">login</button>
   {err && <><span>Something went wrong please try again</span></>}
      <span className="bottomtext">Dont have an account signup.</span>  
   </div>
   </form>

   </div>


  )
}

export default Login