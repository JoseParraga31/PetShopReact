import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_Pw7iqyFgp151bI2pJPHn-7OoFGcIOPo",
  authDomain: "petshopparragacoder.firebaseapp.com",
  projectId: "petshopparragacoder",
  storageBucket: "petshopparragacoder.appspot.com",
  messagingSenderId: "65231874787",
  appId: "1:65231874787:web:4ccd234bc79af57341b3d6"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
