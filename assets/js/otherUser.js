var myWishlist = document.querySelector('#myWishlist');
var wishlistList = document.querySelector('#wishlistList');
var testingElement = document.querySelector('#testing');
var wishesOther = [];
var pulledWishes = [];
var selectedIndexes = [];

var selectedUserData = sessionStorage.getItem("nameofuser");
myWishlist.innerHTML = "Wishlist of " + selectedUserData;

var selectedUserFirst = sessionStorage.getItem("selecteduserFirst");
var selectedUserLast = sessionStorage.getItem("selecteduserLast");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

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
       
        for (let x = 0; x <= data.length; x++) {
            wishesOther.push(data[x].productName);
            localStorage.setItem("wishesOther",wishesOther);
            
            wishlistList.innerHTML += data[x].productName + " - ";
        }
      
    });
   
}

setTimeout(function(){
    OnLoad();
    

}, 100);

setTimeout(function(){
    pulledWishes = localStorage.getItem("wishesOther").split(',');    
    localStorage.clear("wishesOther");
    
    if(pulledWishes.length>3){
        while(selectedIndexes.length<3){

        
    
            
    
    
            x = getRandomIntInclusive(0,pulledWishes.length-1);
            
    
            if (selectedIndexes.includes(x)){
                
    
            }
            else{
                selectedIndexes.push(x)
    
            }
        
            
    
    
        };
        console.log(selectedIndexes)
        for(var y in selectedIndexes){
    
            
    
            fetch("assets/API/pull_suggested.php?wish="+ pulledWishes[selectedIndexes[y]])
        .then(function (response){
            return response.json();
        })
        .then(function  (data){
            var product = document.createElement("div");
            product.id = "productName";
            product.innerHTML += data[0].nameItem+'<br>' + '<br>';
            var price = document.createElement("div");
            price.id = "productPrice";
            price.innerHTML += "€" + data[0].price + '<br>' + '<br>';
            var image = document.createElement("img");
            image.src = data[0].img_url;
            var link = document.createElement("a");
            link.id = "buttonToProduct";
            link.target = "_blank";
            link.href += "https://www.bol.com/be/nl/s/?searchtext="+ data[0].searchName;
            link.innerHTML += '<br>' + '<br>'+ "Buy it now" + '<br>' + '<br>' + '<br>';
    
            document.querySelector("#testing").appendChild(product);
            document.querySelector("#testing").appendChild(price);
            document.querySelector("#testing").appendChild(image);
            document.querySelector("#testing").appendChild(link);
            
        });
        };
    };
    if(pulledWishes.length<=3){
        for(var x in pulledWishes){
    
    
        
            
        
            fetch("assets/API/pull_suggested.php?wish="+ pulledWishes[x])
        .then(function (response){
            return response.json();
        })
        .then(function  (data){
            var product = document.createElement("div");
            product.id = "productName";
            product.innerHTML += data[0].nameItem+'<br>' + '<br>';
            var price = document.createElement("div");
            price.id = "productPrice";
            price.innerHTML += "€" + data[0].price + '<br>' + '<br>';
            var image = document.createElement("img");
            image.src = data[0].img_url;
            var link = document.createElement("a");
            link.id = "buttonToProduct";
            link.target = "_blank";
            link.href += "https://www.bol.com/be/nl/s/?searchtext="+ data[0].searchName;
            link.innerHTML += '<br>' + '<br>'+ "Buy it now" + '<br>' + '<br>' + '<br>';
    
            document.querySelector("#testing").appendChild(product);
            document.querySelector("#testing").appendChild(price);
            document.querySelector("#testing").appendChild(image);
            document.querySelector("#testing").appendChild(link);
            
        });
        };
    
    }  
},200);