// Firebase Config

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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
const db = getDatabase(app)

var tbody = document.getElementById("tbody1");
function AddItemToTable(name, email, phone, detail) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerHTML = name;
  td2.innerHTML = email;
  td3.innerHTML = phone;
  td4.innerHTML = detail;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(TheDriver) {
  tbody.innerHTML = "";
  TheDriver.forEAch((element) => {
    AddItemToTable(
      element.Full_name,
      element.Email,
      element.Contact_no,
      element.Car_Details
    );
  });
}

// GET ALL DATA FROM FIREBASE
function GetAllDataOnce() {
  const dbRef = ref(db);

  get(child(dbRef, "Rider")).then((snapshot) => {
    var drivers = [];

    snapshot.forEach((childSnapshot) => {
      students.push(childSnapshot.val());
    });

    AddAllItemsToTable(drivers);
  });
}

window.onload = GetAllDataOnce;
