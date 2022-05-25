var loginButtonElement = document.getElementById("Log-in_button");

sessionStorage.clear();

function getUser(){
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    fetch("assets/API/get_credentialsAdmin.php?email=" + email + "&&password=" + password)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){

        try{      
            sessionStorage.setItem("adminEmail",data[0].adminEmail);
            sessionStorage.setItem("adminPass",data[0].adminPass);
            
            window.location.href = "adminpanel.html";
        }
        catch(err){
            alert("Wrong email or password");
        };     
    });
};

loginButtonElement.addEventListener("click",function(){
    getUser();
});