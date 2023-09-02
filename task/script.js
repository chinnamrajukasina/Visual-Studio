//Rules button
function Show(id)
{
  if (document.getElementById(id).style.display == 'none') {
       document.getElementById(id).style.display = 'block';
  }
  else {
       document.getElementById(id).style.display = 'none';
  }
};

//Submit Button
function Verify() {
  var userRef = "TechieBytes";
  var passRef = "India123";
  
  var user =  document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef) {
    alert("Successfully LoggedIn")
    window.location.href = "https://www.amzon.com";

  } else {
  alert("It's seem you make a mistake...")
  }
};