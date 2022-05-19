var userNameElement = document.getElementById("userName");
var userFirstname = sessionStorage.getItem('firstname');

var userLastname = sessionStorage.getItem('lastname');

if (userLastname != null)
{
    userNameElement.innerHTML = userFirstname + " " + userLastname;
}