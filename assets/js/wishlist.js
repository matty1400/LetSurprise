var inputWish = document.querySelector('#inputInterest')
var submitButton = document.querySelector('#submitButton')
var listWishes = document.querySelector('#wishlistList')
var listOfWishes = []

submitButton.addEventListener('click', function() {
    listOfWishes.push(inputWish.value)
    console.log(listOfWishes)
});

submitButton.addEventListener('click', function() {
    listWishes.innerHTML = ""
    for (const element of listOfWishes) {
        listWishes.innerHTML += element + " - "
    }
});