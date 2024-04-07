import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import store from './store'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/auth";
import "firebase/storage";
import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged} from "firebase/auth";

import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDFBjZCvcuiBkfq-3w0DCYWmmEvuMHTY2E",
  authDomain: "resource-7ca6a.firebaseapp.com",
  projectId: "resource-7ca6a",
  storageBucket: "resource-7ca6a.appspot.com",
  messagingSenderId: "246187811246",
  appId: "1:246187811246:web:dd8e1807081765ca30a83f",
  measurementId: "G-LMK2SFDEP6"
};

// Initialize Firebase
await firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebase);

export const db = firebase.firestore();

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const user = auth.currentUser;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
