function validate() {
  var uname = document.userform.username.value;
  var pass = document.userform.password.value;
  var secpass = document.userform.confpass.value;
  var cnum = document.userform.cnum.value;

  if (uname == null || uname == "") {
    alert("Username should not be empty");
    return false;
  } else if (pass == null || pass == "" || pass.length < 6) {
    alert("Password should not be empty or less than 6 char long");
    return false;
  } else if (pass != secpass) {
    alert("Passwords do not match");
    return true;
  } else if (cnum < 999999999 || cnum > 9999999999) {
    alert("Enter a valid contact number");
    return false;
  } else {
    alert("Registration Successfull");
    return false;
  }
}
