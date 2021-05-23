function LoginForm() {
  document.getElementById("loginpage").style.display = "block";
  document.getElementById("signuppage").style.display = "none";
   
}

function closeForm() {
  document.getElementById("loginpage").style.display = "none";
 
}


function SignupForm() {
  document.getElementById("signuppage").style.display = "block";
  document.getElementById("loginpage").style.display = "none";
}

function signupClose() {
  document.getElementById("signuppage").style.display = "none";
}