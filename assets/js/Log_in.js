
var emailElement = document.getElementById("Email").value;
var loginSuccessElement = document.getElementById("loginSuccess");




var loginButtonElement = document.getElementById("Log-in_button");





function getUser(){
    var email = document.getElementById("Email").value;
    fetch("/LetSurprise/assets/API/get_credentials.php?email="+email)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        var passwordElement = document.getElementById("Password").value;
        if(passwordElement == data[0].password){
            sessionStorage.setItem("userID",data[0].personId.toString());
            sessionStorage.setItem("firstname",data[0].firstName);
            sessionStorage.setItem("lastname",data[0].lastName);
            alert("success");
            
            window.location.href = "http://localhost/LetSurprise/index.html";
        }
       
        
        
        
        
    });
};

loginButtonElement.addEventListener("click",function(){
    var emailElement = document.getElementById("Email").value;
    var passwordElement = document.getElementById("Password").value;

    getUser();
})

