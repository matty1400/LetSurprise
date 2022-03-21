// var loginElement = document.querySelector("#login");
// var arrow = document.querySelector(".arrow-up");
// var form = document.querySelector(".login-form");

$(document).ready(function() {
    var arrow = $(".arrow-up");
    var form = $(".login-form");
    var status = false;

    $("#login").click(function(event) {
        event.preventDefault();
        if(status == false){
            arrow.fadeIn();
            form.fadeIn();
            status = true;
        }
        else{
            arrow.fadeOut();
            form.fadeOut();
            status = false;
        }
    })
})

// loginElement.addEventListener("click", function() {
//     var status = false;
//     loginElement.click(function(event) {
//         event.preventDefault();
//         if(status == false){
//             arrow.fadeIn();
//             form.fadeIn();
//             status = true;
//         }
//         else{
//             arrow.fadeIn();
//             form.fadeIn();
//             status = false;
//         }
//     })
// });