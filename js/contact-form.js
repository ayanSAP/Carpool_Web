// validateForm() for click event
document.getElementById("submit").addEventListener("click", validateForm);
function validateForm() {
  // get full name
  let fullName = document.getElementById("f_name").value;

  //get email address
  let email = document.getElementById("email").value;

  //get text message
  let textMessage = document.getElementById("freeform").value;

  //checking if all fields have been filled before sending
  if (fullName.trim() == "" || email.trim() == "" || textMessage.trim() == "") {
    alert("All fields must be filled");
  } else {
    sendMessage(fullName, email, textMessage);
  }
}
