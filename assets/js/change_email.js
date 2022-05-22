var updateButtonElement = document.getElementById("updateButton");

updateButtonElement.addEventListener("click",function(){
    var newCredentialElement = document.getElementById("newCredential").value;

    updateUser(newCredentialElement);
});

function updateUser(newC){
    var userID = sessionStorage.getItem("userID");
   
    fetch("assets/API/change_email.php?userID="+ userID +"&&newCredential="+ newC)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
    });
};