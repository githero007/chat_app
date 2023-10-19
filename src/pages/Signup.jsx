import React, { useState } from 'react';
import AddAvatar from '../img/AddAvatar.png';
import {  createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {db} from "../firebase"
import {auth} from "../firebase";
import {storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"; 
import  {useNavigate} from "react-router-dom";
import { useSnapshot } from 'valtio';
import  state from '../store.js';
import { onAuthStateChanged } from "firebase/auth";


const Signup = () => {
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  const[err,setErr] = useState(false);
  const handleSubmit = async (e)=>
  {
    e.preventDefault();//prevent the default form of submission
    const displayName  = e.target[0].value;//targeting elements of the form
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
  try {
    const res = await  createUserWithEmailAndPassword(auth, email, password)//creating a user is handled by firebase

   

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
  (error) => {
    setErr(true);
    // 
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        email,
        photoURL : downloadURL
      })
      await setDoc(doc(db, "users", res.user.uid), {
       uid :  res.user.uid,
       displayName,
       email,
       photoURL : downloadURL
      });
      await setDoc(doc(db, "users", res.user.uid), {
       },
       navigate("/home"));
    });
  
  }
);
  } catch (error) {
    setErr(true);
  }
   
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
    <div className="forms">
    <span><strong>Chat app</strong></span>
    <input className ="loginput" type = "text" placeholder='Enter your name' />
   <input className ="loginput" type = "text" placeholder='Enter your email' />
   <input className ="loginput" type = "password" placeholder='Enter your password'/>
   <span><img src={AddAvatar} className= "addavatar"alt="" srcSet="" />
   <input  style = { {display: "none"}} type = "file" id = "file" />
   <label htmlFor="file">enter your avatar</label></span>
  <button className= "lsbutton">Sign Up</button>
    {err && <><span>Something went wrong please try again</span></>}
      <span className="bottomtext">Already have an account Login.</span>  
   </div>
   </form>
   </div>

  )
}
export default Signup;