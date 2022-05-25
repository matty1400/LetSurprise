var listOfUsers = document.getElementById('listOfUsers');
var userID = document.getElementById('inputID');
var buttonRemove = document.getElementById('buttonRemove');

function getUsers(){
    fetch("assets/API/selectallusers.php")
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        for (let i = 0; i < data.length; i++)
        {
            listOfUsers.innerHTML += data[i].personId + " // ";
            listOfUsers.innerHTML += data[i].firstName + " ";
            listOfUsers.innerHTML += data[i].lastName + " - ";
            listOfUsers.innerHTML += data[i].email + '<br>' + '<br>';
        }
    });
};

getUsers();

function removeUsers(){
    fetch("assets/API/removeUser.php?userID=" + userID.value)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
    });
};

buttonRemove.addEventListener('click', function(){
    removeUsers();
});