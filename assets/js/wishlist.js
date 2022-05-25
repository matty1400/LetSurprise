var inputWish = document.querySelector('#inputInterest');
var submitButton = document.querySelector('#submitButton');
var listWishes = document.querySelector('#wishlistList');
var listOfWishes = []


submitButton.addEventListener('click', function() {
    
    if (inputWish.value != "")
    {
        wishInput = inputWish.value;
        userID = sessionStorage.getItem("userID");
        listOfWishes.push(wishInput);
        
        fetch("assets/API/insert_wish.php?wish=" + wishInput + "&&userID=" + userID)
        .then(function (response){
            return response.json();
        })
        .then(function  (data){
        });
    }
    else
    {
        alert("Invalid input")
    }

});

submitButton.addEventListener('click', function() {
    listWishes.innerHTML = ""
    for (const element of listOfWishes) {
        if (element != "")
        {
            listWishes.innerHTML += element + " - "
            window.location.reload(true);
        }
    }
});

function OnLoad()
{
    userID = sessionStorage.getItem("userID");
    fetch("assets/API/pull_wishlist.php?userID=" + userID)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        for (let x = 0; x <= data.length; x++) {
            listWishes.innerHTML += data[x].productName + " - ";
          }
    });
}

OnLoad();