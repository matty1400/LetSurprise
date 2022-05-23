var myWishlist = document.querySelector('#myWishlist');
var wishlistList = document.querySelector('#wishlistList');

var selectedUserData = sessionStorage.getItem("nameofuser");
myWishlist.innerHTML = "Wishlist of " + selectedUserData;

var selectedUserFirst = sessionStorage.getItem("selecteduserFirst");
var selectedUserLast = sessionStorage.getItem("selecteduserLast");

function GetID()
{
    fetch("assets/API/getID.php?firstName=" + selectedUserFirst + "&&lastName=" + selectedUserLast)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        sessionStorage.setItem("ID_of_SelectedUser", data[0].personId);
    });
}

GetID();

function OnLoad()
{
    userID = sessionStorage.getItem("ID_of_SelectedUser");
    fetch("assets/API/pull_wishlist.php?userID=" + userID)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        console.log(data);
        for (let x = 0; x <= data.length; x++) {
            wishlistList.innerHTML += data[x].productName + " - ";
        }
    });
}
setTimeout(function(){
    OnLoad();
}, 100);