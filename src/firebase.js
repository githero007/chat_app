// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBipVjyW70O6OEF3wgx_Y866hh5XiFPrFI",
  authDomain: "chatapp-71670.firebaseapp.com",
  projectId: "chatapp-71670",
  storageBucket: "chatapp-71670.appspot.com",
  messagingSenderId: "906340069821",
  appId: "1:906340069821:web:c99bacdb24edacbb5c22d4",
  measurementId: "G-XKS6P3YN68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth ();
export const storage = getStorage();
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
