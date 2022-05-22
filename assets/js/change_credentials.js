console.log('linked');
var updateButtonElement = document.getElementById("updateButton");

updateButtonElement.addEventListener("click",function(){
    var oldCredentialElement = document.getElementById("oldCredential").value;
    var newCredentialElement = document.getElementById("newCredential").value;


    updateUser(oldCredentialElement,newCredentialElement);
});

function updateUser(oldC,newC){
    console.log(oldC);

    
   
    fetch("assets/API/change_credentials.php?oldCredential="+oldC+"&&newCredential="+newC)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        
         console.log(data[0]);
    });
};