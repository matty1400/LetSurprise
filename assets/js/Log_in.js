
var emailElement = document.getElementById("Email").value;
var loginButtonElement = document.getElementById("Log-in_button");

function getUser(){
    var email = document.getElementById("Email").value;
    fetch("assets/API/get_credentials.php?email=" + email)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        var passwordElement = document.getElementById("Password").value;
        if(passwordElement == data[0].password){
            sessionStorage.setItem("userID",data[0].personId.toString());
            sessionStorage.setItem("firstname",data[0].firstName);
            sessionStorage.setItem("lastname",data[0].lastName);
            
            window.location.href = "http://localhost/index.html"
        }    
    });
};

loginButtonElement.addEventListener("click",function(){
    var emailElement = document.getElementById("Email").value;
    var passwordElement = document.getElementById("Password").value;

    getUser();
});