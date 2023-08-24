// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCLA-ciguc1vsuKb_ds86qKcddrtkhpp4",
  authDomain: "gamermint-aee9e.firebaseapp.com",
  projectId: "gamermint-aee9e",
  storageBucket: "gamermint-aee9e.appspot.com",
  messagingSenderId: "1054943244507",
  appId: "1:1054943244507:web:350b900ea84c06416e1cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
