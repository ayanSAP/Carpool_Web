// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC41XIHrgV0fc1fv9_lByyCyiKMMbZRqTk",
  authDomain: "carpool-auth-ee792.firebaseapp.com",
  projectId: "carpool-auth-ee792",
  storageBucket: "carpool-auth-ee792.appspot.com",
  messagingSenderId: "904760854292",
  appId: "1:904760854292:web:09a512ff2671d6a8932401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//Get all the objects from HTML
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password1");

//create function
window.signup = function (e) {
  e.preventDefault();
  var obj = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((success) => {
      alert("Sign up successfully");
    })
    .catch((err) => {
      alert("error" + err);
    });

  console.log(obj);
};
