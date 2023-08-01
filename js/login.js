const alert = document.querySelector(".alert");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

var email = document.getElementById("email");
var password = document.getElementById("password");

var form = document.getElementById("form_id");

//creating function for login existing users
window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert.style.display = "block";

      setTimeout(() => {
        alert.style.display = "none";
      }, 2000);

      form.reset();
    })
    .catch((err) => {
      window.alert("Login error" + err);

      form.reset();
    });
};
