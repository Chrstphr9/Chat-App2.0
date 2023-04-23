// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZMNRAdAbb3mJHNnG4WxeKbbtTeR5vMmE",
  authDomain: "chatapp2-c7fde.firebaseapp.com",
  projectId: "chatapp2-c7fde",
  storageBucket: "chatapp2-c7fde.appspot.com",
  messagingSenderId: "981860721392",
  appId: "1:981860721392:web:5f45dc3b7bc292b9961835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);