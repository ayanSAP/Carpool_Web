var attempt = 3; //variable to count numbetr of attempts
//Below function execuets on click of login button
function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "admin.coe@sap.com" && password == "admin") {
    alert("Login Succeded!");
    window.location = "login.html"; //Redirecting to self page
    return false;
  } else {
    attempt--; //Decrementing by one
    alert("Wrong Credentials!. You have left " + attempt);

    //Disabling fields after 3 attempts.

    if ((attempt = 0)) {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;

      return false;
    }
  }
}
