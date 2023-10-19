import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useSnapshot } from 'valtio';
import  state from './store';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {auth} from "./firebase";
function App() {
  const snap = useSnapshot(state);
  useEffect(() => {
    // Move the onAuthStateChanged logic inside useEffect
    onAuthStateChanged(auth, (user) => {
      state.user = user;
      console.log(user);
    });
  }, []);
  const ProtectedRoute = ({children})=>{
    if (snap.user == null)
    {
     return <Navigate to = "/login"/>
    }
    return children;
  } 
  return (
   <Router>
    <Routes>
      <Route path = "/"/>
     
      <Route path = "login" element = {<Login/>}/>
      <Route path = "signup" element = {<Signup/>}/>
      <Route path = "home" element = { <ProtectedRoute><Home/></ProtectedRoute>}/>
     </Routes> 
    </Router>
  );
}

export default App;
