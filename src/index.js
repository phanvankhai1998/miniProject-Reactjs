import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceworker';
import firebase from "firebase/app"
import 'firebase/firestore';

<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

var firebaseConfig = {
  apiKey: "AIzaSyCmr4GnEhEQLqusonqQJ-UxLG4nJX3iqZE",
  authDomain: "cart-bcb63.firebaseapp.com",
  projectId: "cart-bcb63",
  storageBucket: "cart-bcb63.appspot.com",
  messagingSenderId: "719222918211",
  appId: "1:719222918211:web:5ba0bc1ede9949bdae98f6"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();