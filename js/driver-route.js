// code to make toggle menu visible when click on it
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

var searchButton = document.getElementById("search");
searchButton.addEventListener("click", displayDetails);

const form1 = document.getElementById("form_id");

var row = 1;

function displayDetails() {
  var leavingFromInput = document.getElementById("leaving-from").value;
  var goingToInput = document.getElementById("going-to").value;
  var datetimeInput = document.getElementById("datetime").value;
  var passengerCountInput = document.getElementById("passenger-count").value;

  var display = document.getElementById("show");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = leavingFromInput;
  cell2.innerHTML = goingToInput;
  cell3.innerHTML = datetimeInput;
  cell4.innerHTML = passengerCountInput;

  row++;

  // Clear the form inputs
  leavingFromInput.value = "";
  goingToInput.value = "";
  datetimeInput.value = "";
  passengerCountInput.value = 1;

  //reset the form
  form1.reset();
}
