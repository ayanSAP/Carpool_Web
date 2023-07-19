// code to make toggle menu visible when click on it
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");


navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form elements
    var leavingFromInput = document.getElementById("leaving-from");
    var goingToInput = document.getElementById("going-to");
    var datetimeInput = document.getElementById("datetime");
    var passengerCountInput = document.getElementById("passenger-count");
    var searchButton = document.getElementById("search");
  
    // Add event listener to the search button
    searchButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the values entered by the user
      var leavingFrom = leavingFromInput.value;
      var goingTo = goingToInput.value;
      var datetime = datetimeInput.value;
      var passengerCount = passengerCountInput.value;
  
      // Perform any desired actions with the captured values
      console.log("Leaving from:", leavingFrom);
      console.log("Going to:", goingTo);
      console.log("Datetime:", datetime);
      console.log("Passenger count:", passengerCount);
  
      // Clear the form inputs
      leavingFromInput.value = "";
      goingToInput.value = "";
      datetimeInput.value = "";
      passengerCountInput.value = 1;
    });
  });