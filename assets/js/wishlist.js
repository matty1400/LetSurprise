var inputWish = document.querySelector('#inputInterest')
var submitButton = document.querySelector('#submitButton')
var listWishes = document.querySelector('#wishlistList')
var listOfWishes = []

submitButton.addEventListener('click', function() {
    listOfWishes.push(inputWish.value)
    console.log(listOfWishes)
});

submitButton.addEventListener('click', function() { // NOG NIET GEFIXT MOET IK MAANDAG VRAGEN
    listWishes.innerHTML = ""
    for (const element of listOfWishes) {
        if (element == '')
        {
            alert("Invalid input")
        }
        else
        {
            listWishes.innerHTML += element + " - "
        }
    }
});