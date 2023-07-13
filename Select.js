// code to make toggle menu visible when click on it
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");


navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
