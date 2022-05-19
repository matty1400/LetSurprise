var logoutButton = document.querySelector('#logoutButton')

logoutButton.addEventListener('click', function(){
    sessionStorage.clear()
});