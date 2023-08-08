// code to make toggle menu visible when click on it
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRow.insertRow(n);

  list1[x] = document.getElementById("leaving-from").value;
  list2[x] = document.getElementById("going-to").value;
  list3[x] = document.getElementById("datetime").value;
  list4[x] = document.getElementById("passenger-count").value;

  var cell1 = NewRow.insertCell(0);
  var cell2 = NewRow.insertCell(1);
  var cell3 = NewRow.insertCell(2);
  var cell4 = NewRow.insertCell(3);

  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];

  n++;
  x++;
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the form elements
//   var leavingFromInput = document.getElementById("leaving-from");
//   var goingToInput = document.getElementById("going-to");
//   var datetimeInput = document.getElementById("datetime");
//   var passengerCountInput = document.getElementById("passenger-count");
//   var searchButton = document.getElementById("search");

//   // Add event listener to the search button
//   searchButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the values entered by the user
//     var leavingFrom = leavingFromInput.value;
//     var goingTo = goingToInput.value;
//     var datetime = datetimeInput.value;
//     var passengerCount = passengerCountInput.value;

//     // Perform any desired actions with the captured values
//     console.log("Leaving from:", leavingFrom);
//     console.log("Going to:", goingTo);
//     console.log("Datetime:", datetime);
//     console.log("Passenger count:", passengerCount);

//     // Clear the form inputs
//     leavingFromInput.value = "";
//     goingToInput.value = "";
//     datetimeInput.value = "";
//     passengerCountInput.value = 1;
//   });
// });
