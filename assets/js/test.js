var userNameElement = document.getElementById("userName");
var userFirstname = sessionStorage.getItem('firstname');

var userLastname = sessionStorage.getItem('lastname');
console.log(userFirstname)
console.log(userLastname)

if (userLastname != null)
{
    userNameElement.innerHTML = userFirstname + " " + userLastname;
}