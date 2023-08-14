const alert = document.querySelector(".alert");

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
var confirmPassword = document.getElementById("password2");

var form = document.getElementById("form_id");

//create function
window.signup = function (e) {
  var isVerified = true;
  e.preventDefault();
  var obj = {
    fullName: fullName.value,
    email: email.value,
    password1: password.value,
    password2: confirmPassword.value,
  };

  if (obj.password1 != obj.password2) {
    window.alert("Password fields do not match. Try again!!");
    isVerified = false;
    form.reset();
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, obj.email, obj.password1)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert("Sign up successfully");
        alert.style.display = "block";

        setTimeout(() => {
          alert.style.display = "none";
        }, 2000);

        form.reset();
        setTimeout(() => {
          window.location.href = "../login.html";
        }, 2000);
      })
      .catch((err) => {
        window.alert("Sign up error" + err);
      });
  }

  //   console.log(obj);
};
