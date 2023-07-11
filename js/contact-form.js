// Firebase Connect
const firebaseConfig = {
  apiKey: "AIzaSyAYjwcBt3q7lEiMXNeRTho247jhbDetLjY",
  authDomain: "carpool-web-app-cloud.firebaseapp.com",
  databaseURL: "https://carpool-web-app-cloud-default-rtdb.firebaseio.com",
  projectId: "carpool-web-app-cloud",
  storageBucket: "carpool-web-app-cloud.appspot.com",
  messagingSenderId: "686804398668",
  appId: "1:686804398668:web:db5151f6c73db6e6c7fae9",
  measurementId: "G-8JZG1G7LH5",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference database
var contactFormDB = firebase.database().ref("carpool-web-app");

document.getElementById("form_id").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var fullName = getElementVal("f_name");
  var email = getElementVal("email");
  var textMessage = getElementVal("freeform");

  console.log(fullName, email, textMessage);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// // validateForm() for click event
// document.getElementById("submit").addEventListener("click", validateForm);
// function validateForm() {
//   // get full name
//   let fullName = document.getElementById("f_name").value;

//   //get email address
//   let email = document.getElementById("email").value;

//   //get text message
//   let textMessage = document.getElementById("freeform").value;

//   //checking if all fields have been filled before sending
//   if (fullName.trim() == "" || email.trim() == "" || textMessage.trim() == "") {
//     alert("All fields must be filled");
//   } else {
//     sendMessage(fullName, email, textMessage);
//   }
// }
