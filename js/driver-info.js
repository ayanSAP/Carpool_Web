// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
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

// function SelectAllData() {
//   get(child(dbRef, "drivers"))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         //   console.log(snapshot.val());
//         var drivers = [];

//         snapshot.forEach(function (childSnapshot) {
//           drivers.push(childSnapshot.val());

//           AddAllItemsToTable(drivers);

//           //   var fullName = currentRecord.val().Full_Name;
//           //   var email = currentRecord.val().Email;
//           //   var contact = currentRecord.val().Contact_no;
//           //   var details = currentRecord.val().Car_Details;
//           //   AddItemsToTable(fullName, email, contact, details);
//           //   console.log(currentRecord.val());
//         });
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

//creating asysnc function
async function fetchDataFromFirebase() {
  try {
    const dbRef = ref(getDatabase(), "drivers");
    var drivers = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        drivers.push(childSnapshot.val());
        console.log(childSnapshot.val());

        AddAllItemsToTable(drivers);
      });
    });
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error; // Rethrow the error to be handled later if needed
  }
}

function GetAllRealtime() {
  try {
    fetchDataFromFirebase();
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error; // Rethrow the error to be handled later if needed
  }
}

window.onload = GetAllRealtime;

// Filling The Table
var tbody = document.getElementById("tbody1");

function AddItemsToTable(fullName, email, contact, details) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerHTML = fullName;
  td2.innerHTML = email;
  td3.innerHTML = contact;
  td4.innerHTML = details;

  //   console.log(td1, td2, td3, td4);

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(TheDrivers) {
  tbody.innerHTML = "";
  TheDrivers.forEach((e) => {
    AddItemsToTable(e.Full_Name, e.Email, e.Contact_no, e.Car_Details);
  });
}
