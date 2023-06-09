// // Function to check the name, email and password
// function validateForm() {
//   var fullName = document.myForm.fullName.value;
//   var password1 = document.myForm.password1.value;
//   var password2 = document.myForm.password2.value;

//   // Checking the validation
//   if (fullName == null || fullName == "") {
//     alert("Name can't be blank");
//     return false;
//   }
//   if (password1.length < 8) {
//     alert("Password must be at least 8 characters long");
//     return false;
//   }
//   if (password1.length < 8) {
//     alert("Password must be at least 8 characters long");
//     return false;
//   }
//   if (password1 == password2) {
//     return true;
//   } else {
//     alert("Password must be same!");
//     return false;
//   }
// }

//Using Google Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYjwcBt3q7lEiMXNeRTho247jhbDetLjY",
  authDomain: "carpool-web-app-cloud.firebaseapp.com",
  projectId: "carpool-web-app-cloud",
  storageBucket: "carpool-web-app-cloud.appspot.com",
  messagingSenderId: "686804398668",
  appId: "1:686804398668:web:db5151f6c73db6e6c7fae9",
  measurementId: "G-8JZG1G7LH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var firestore = firebase.firestore();

//Variable to access the database connection
const db = firestore.collection("formData");

//Get submit form data
let submitButton = document.getElementById("submit");

//Create Event Listener for form submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form submission Behavior
  e.preventDefault();

  //Get Form Values
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password1").value;

  //Save the Form Data to Firebase
  db.doc()
    .set({
      fullName: fullName,
      email: email,
      password: password1,
    })
    .then(() => {
      console.log("Data saved to Firebase");
    })
    .catch((error) => {
      console.log(error);
    });
});
