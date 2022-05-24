var emailElement = document.getElementById("Email").value;
var loginButtonElement = document.getElementById("Log-in_button");

function getUser(){
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    console.log(password)
    fetch("assets/API/get_credentials.php?email=" + email+"&&password="+password)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){

        try{
            sessionStorage.setItem("userID",data[0].personId.toString());
            sessionStorage.setItem("firstname",data[0].firstName);
            sessionStorage.setItem("lastname",data[0].lastName);
            
            
            window.location.href = "http://localhost/indexloggedin.html"
        }
        catch(err){
            alert("Wrong email or password")
        };
        
       
        
            
            
    });
};

loginButtonElement.addEventListener("click",function(){
    getUser();
});