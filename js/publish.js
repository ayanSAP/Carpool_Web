const form = document.getElementById("form_id");
const alert = document.querySelector(".alert");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzmB5cPsejDGpxgJsD-_ZfBs17uGoeiE",
  authDomain: "ridepublish.firebaseapp.com",
  projectId: "ridepublish",
  storageBucket: "ridepublish.appspot.com",
  messagingSenderId: "145760624915",
  appId: "1:145760624915:web:f75564f3f2d89b68d1bae6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DB = firebase.database();

const ref = DB.ref("user");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("f_name").value;
  const email = document.getElementById("email").value;
  const contactNo = document.getElementById("contact_no").value;
  const carDetails = document.getElementById("car_details").value;

  //   console.log(fullName, email, textMessage);

  ref.push({
    fullName: fullName,
    email: email,
    contactNo: contactNo,
    carDetails: carDetails,
  });
  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);

  form.reset();
});
