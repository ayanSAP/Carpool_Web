// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzmB5cPsejDGpxgJsD-_ZfBs17uGoeiE",
  authDomain: "ridepublish.firebaseapp.com",
  databaseURL: "https://ridepublish-default-rtdb.firebaseio.com",
  projectId: "ridepublish",
  storageBucket: "ridepublish.appspot.com",
  messagingSenderId: "145760624915",
  appId: "1:145760624915:web:f75564f3f2d89b68d1bae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const DB = getDatabase(app);

// const ref = DB.ref("drivers");

const dbRef = ref(getDatabase());

function SelectAllData() {
  get(child(dbRef, `drivers/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        //   console.log(snapshot.val());
        snapshot.forEach(function (currentRecord) {
          var fullName = currentRecord.val().Full_Name;
          var email = currentRecord.val().Email;
          var contact = currentRecord.val().Email;
          var details = currentRecord.val().Car_Details;
          AddItemsToTable(fullName, email, contact, details);
          console.log(currentRecord.val());
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

window.onload = SelectAllData;

// Filling The Table
function AddItemsToTable(fullName, email, contact, details) {
  var tbody = document.getElementById("tbody1");
  var trow = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  td1.innerHTML = fullName;
  td2.innerHTML = email;
  td3.innerHTML = contact;
  td4.innerHTML = details;

  console.log(td1, td2, td3, td4);

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  tbody.appendChild(trow);
}

// //   GET ALL DATA
// function SelectAllData() {
//   ref.on("value", function (AllRecords) {
//     AllRecords.forEach(function (CurrentRecord) {
//       var fullName = CurrentRecord.val().Full_Name;
//       var email = CurrentRecord.val().Email;
//       var contact = CurrentRecord.val().Email;
//       var details = CurrentRecord.val().Car_Details;
//       AddItemsToTable(fullName, email, contact, details);
//     });
//   });
// }

// window.onload = SelectAllData;
