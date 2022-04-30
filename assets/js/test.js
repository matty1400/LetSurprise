console.log("linked")
var userNameElement = document.getElementById("userName");
var userFirstname = sessionStorage.getItem('firstname');

var userLastname = sessionStorage.getItem('lastname');
console.log(userFirstname+userLastname);
userNameElement.innerHTML = userFirstname + " " + userLastname;