// Function to check the name, email and password
function validateForm() {
    var fullName = document.myForm.fullName.value;
    var password1 = document.myForm.password1.value;
    var password2 = document.myForm.password2.value;

    // Checking the validation
    if(fullName == null || fullName == "") {
        alert("Name can't be blank");
        return false;
    } 
    if(password1.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    if(password1.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    if(password1 == password2) {
        return true;
    } else {
        alert("Password must be same!");
        return false;
    }
}