const form = document.getElementById("form_id");
const alert = document.querySelector(".alert");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXP6EiawU5fZoEHS8fMDJQXPSBHt36b1Q",
  authDomain: "contactform-979c9.firebaseapp.com",
  databaseURL: "https://contactform-979c9-default-rtdb.firebaseio.com",
  projectId: "contactform-979c9",
  storageBucket: "contactform-979c9.appspot.com",
  messagingSenderId: "27939733023",
  appId: "1:27939733023:web:60006f9840add7a02cdf2a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

const ref = firebaseDB.ref("user");
// const ref = firebaseDB.ref(document.getElementById("f_name").value);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("f_name").value;
  const email = document.getElementById("email").value;
  const textMessage = document.getElementById("freeform").value;

  //   console.log(fullName, email, textMessage);

  ref.set({
    fullName: fullName,
    email: email,
    textMessage: textMessage,
  });
  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);

  form.reset();
});
